---
layout: post
title: "Erlang OAuth2, an implementation"
modified:
categories: blog
excerpt:
tags: [Code, Erlang]
image:
  feature:
date: 2015-04-19T08:30:50+01:00
---

In the previous 2 articles ([here](/2015/04/14/Erlang-OAuth2/) and
[here](/2015/04/16/Erlang-OAuth2-Architecture/)) I wrote about the
implementation of JWT in the OAuth2 library. Today I want to talk
about the actual code needed to implement JWT in the library.

Last night I finished a first iteration of this work. The amount of
changes were not stellar, but the fact that I needed to change some
internals to pass along the **User** that is connected at the time
does not sit well at this time. I will revisit this code and make sure
that it is actually necessary.

The mandatory changes, as you might remember, were to retrieve the
claims the user has from the backend. This was easily accomplished by
adding another callback to the **backend** definition:

{% highlight erlang linenos %}
%% @doc Retrieve a list of claims for this user
-callback retrieve_user_claims(user(), appctx()) -> {ok, {appctx(), [claim()]}}
                                                  | {error, notfound}.
{% endhighlight %}

As you might remember from the
[Architecture](/2015/04/16/Erlang-OAuth2-Architecture/) article, the
generation of tokens is done by implementing a **Token Generation**
behaviour.

{% highlight erlang linenos %}
-spec generate(oauth2:user(), oauth2:context()) -> oauth2:token().
generate(User, Context) -> 
    Header = create_header(Context),
    Payload = create_payload(User, Context),
    Token = create_token(Context, Header, Payload),
    Token.

-spec create_header(oauth2:context()) -> binary().
create_header(_Context) ->
    base64url:encode(jiffy:encode({[{alg, <<"HS512">>},{typ, <<"JWT">>}]})).

-spec create_payload(oauth2:user(), oauth2:context()) -> binary().
create_payload(User, Context) ->
    Issued = oauth2:seconds_since_epoch(0),
    Expiry = case oauth2:get(Context, <<"expiry_time">>) of
		 {ok, Value} -> Value;
		 {error, notfound} -> oauth2:seconds_since_epoch(oauth2_config:expiry_time())
	     end,
    Claims = case ?BACKEND:retrieve_user_claims(User, Context) of
		 {ok, {_Ctx, Cls}} -> Cls;  
		 {error, notfound} -> []
	     end,
    Doc = {[{exp, Expiry}, {iat, Issued}] ++ Claims},
    Json = jiffy:encode(Doc),
    base64url:encode(Json).

-spec create_token(oauth2:context(), binary(), binary()) -> binary().
create_token(_Context, Header, Payload) ->
    Packet = <<Header/binary, ".", Payload/binary>>,
    Signature = base64url:encode(hmac:hmac512("secret", Packet)),
    <<Packet/binary, ".", Signature/binary>>.
{% endhighlight %}

There are still many things that need to be enhanced in this code,
such as the configurability of the algorithm used and the _standard_
claims that are passed to the client. But for now it is a decent
start.

Next up is to enhance the functionality and to utilize the library in
my project.
