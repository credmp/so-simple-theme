---
layout: post
title: "Erlang OAuth2, Implementing JWT"
modified:
categories: blog
excerpt:
tags: [Code, Erlang]
image:
  feature:
date: 2015-04-14T08:30:50+01:00
---
  
The Erlang eco system is slowly becoming more mature. For a project I
am working on I require something that does not exist yet, an OAuth2
server which has support for JSON Web Tokens, also known as JWT.

I settled on using the OAuth2 server from
[oauth2](https://github.com/kivra/oauth2) to start with. We had a
discussion in an issue concerning JWT Support,
[issue #53](https://github.com/kivra/oauth2/issues/53), and from there
it seems like a reasonable idea to implement the support within the
oauth2 codebase and present it as a pull request once it is
finished. As a result of the discussion I created a
[fork](https://github.com/credmp/oauth2) to start the work in.

Luckily for me there is an specification for this featureset over at
the
[IETF](http://tools.ietf.org/html/draft-ietf-oauth-json-web-token),
and there even is a nice [debugger](http://jwt.io/) to see if you did
a proper job. This will be very helpful during the development proces.

The specification itself is relatively small, but shows the great
detail that can be conveyed with a JWT. Basically a JWT consists out
of 3 parts; first there is an header which tells the client what
cryptographic schemes are utilized. Secondly there is a claim set in
which zero or more claims are described. Claims are key/value pairs
which describe something about the subject for which the claim was
created. An example of a claim can be **is-admin** with the value **true**
or **false**. Depending on the value the application may show different
functionality. Lastly there is the signature, which makes certain that
nobody messed with the contents of the first 2 parts.

There are several predefined claims that should be implemented:

  | Claim Name | Description from the spec |
  |------------|-------------|
  | iss | The "iss" (issuer) claim identifies the principal that issued the JWT.  The processing of this claim is generally application specific. The "iss" value is a case-sensitive string containing a StringOrURI value.  Use of this claim is OPTIONAL. |
  | sub | The "sub" (subject) claim identifies the principal that is the subject of the JWT.  The Claims in a JWT are normally statements about the subject.  The subject value MUST either be scoped to be locally unique in the context of the issuer or be globally unique. The processing of this claim is generally application specific.  The "sub" value is a case-sensitive string containing a StringOrURI value.  Use of this claim is OPTIONAL. |
  | aud | The "aud" (audience) claim identifies the recipients that the JWT is intended for.  Each principal intended to process the JWT MUST identify itself with a value in the audience claim.  If the principal processing the claim does not identify itself with a value in the "aud" claim when this claim is present, then the JWT MUST be rejected.  In the general case, the "aud" value is an array of case-sensitive strings, each containing a StringOrURI value.  In the special case when the JWT has one audience, the "aud" value MAY be a single case-sensitive string containing a StringOrURI value.  The interpretation of audience values is generally application specific. Use of this claim is OPTIONAL. |
  | exp | The "exp" (expiration time) claim identifies the expiration time on or after which the JWT MUST NOT be accepted for processing.  The processing of the "exp" claim requires that the current date/time MUST be before the expiration date/time listed in the "exp" claim. Implementers MAY provide for some small leeway, usually no more than a few minutes, to account for clock skew.  Its value MUST be a number containing a NumericDate value.  Use of this claim is OPTIONAL. |
  | nbf | The "nbf" (not before) claim identifies the time before which the JWT MUST NOT be accepted for processing.  The processing of the "nbf" claim requires that the current date/time MUST be after or equal to the not-before date/time listed in the "nbf" claim.  Implementers MAY provide for some small leeway, usually no more than a few minutes, to account for clock skew.  Its value MUST be a number containing a NumericDate value.  Use of this claim is OPTIONAL. |
  | iat | The "iat" (issued at) claim identifies the time at which the JWT was issued.  This claim can be used to determine the age of the JWT.  Its value MUST be a number containing a NumericDate value.  Use of this claim is OPTIONAL. |
  | jti | The "jti" (JWT ID) claim provides a unique identifier for the JWT. The identifier value MUST be assigned in a manner that ensures that there is a negligible probability that the same value will be accidentally assigned to a different data object; if the application uses multiple issuers, collisions MUST be prevented among values produced by different issuers as well.  The "jti" claim can be used to prevent the JWT from being replayed.  The "jti" value is a case-sensitive string.  Use of this claim is OPTIONAL. |

Given all that, lets take a look at an example and the basic Erlang
code needed to implement it. First lets start with the header part of the JWT:

{% highlight json linenos %}
{
  "alg": "HS256",
  "typ": "JWT"
}
{% endhighlight %}

On line 2 the algorithm is indicated, in this case **HS256** or more
formally **HMAC SHA-256**. The "typ" claim _is used by JWT applications
to declare the MIME Media Type_. In the case of a JWT it should be set
to "JWT". The entire header then needs to be BASE64 encoded. This can
be done with the **base64** library in Erlang.

{% highlight erlang linenos %}
base64:encode("{\"alg\":\"HS256\",\"typ\":\"JWT\"}").
<<"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9">>
{% endhighlight %}

The claimset follows the same pattern:

{% highlight json linenos %}
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
{% endhighlight %}

On line 2 the predefined claim "sub" is used. In this case its value
is 1 through 0. There are also 2 other claims, the "name" and
"admin". One describes something about the user, the other probably
yields more access within an application. Again this should be encoded
in Base64.

{% highlight erlang linenos %}
base64:encode("{\"sub\":\"1234567890\",\"name\":\"John Doe\",\"admin\":true}").
<<"eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9">>
{% endhighlight %}

Finally it is time to create the signature. This is done with the
algorithm indicated in the header of the JWT. With the **HMAC SHA256**
algorithm the 2 other components and an additional secret will create
an unique signature. This signature is built using the excellent
[erlsha2](https://github.com/vinoski/erlsha2) library.

{% highlight erlang linenos %}
Header = http_uri:encode(binary_to_list(base64:encode("{\"alg\":\"HS256\",\"typ\":\"JWT\"}"))).
Claims = http_uri:encode(binary_to_list(base64:encode("{\"sub\":\"1234567890\",\"name\":\"Arjen\",\"admin\":true}"))).

Packet = Header ++ "." ++ Claims.
Signature = binary_to_list(base64:encode(hmac:hmac256("secret", Packet))).

Result = Packet ++ "." ++ Signature.
io:fwrite("~p~n", [Result]).

"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFyamVuIiwiYWRtaW4iOnRydWV9.jcvvD+eEogd/eNwjOs7x9y1pfyVu89IfOK11pPH+56U="
{% endhighlight %}

The value of the printed string can be taken and passed to the
debugger at [jwt.io](http://jwt.io) to prove the approach is correct.

Using the erlsha2 library we will have support for **HMAC SHA-256**
and **HMAC SHA-512**, the **HMAC SHA-384** did not yield the results I
expected, perhaps this will change lateron. I currently have no idea
as to why it is not working.

So, now we know what to build and how to build it in Erlang. Next time
I will take a look at the architecture of the **oauth2** library to
figure out how to add this functionality to it.
