---
layout: post
title: "Erlang OAuth2, Architecture"
modified:
categories: blog
excerpt:
tags: [Code, Erlang]
image:
  feature:
date: 2015-04-16T08:30:50+01:00
---
  
In my [previous post](/2015/04/14/Erlang-OAuth2/) I explained the
steps I am taking to bring JWT to the
[OAuth2](http://www.github.com/credmp/oauth2) library that I have
forked for this development. In this post I will take a look at the
architecture of the library and we will figure out the proper place to
make the necessary adjustments to support JWT.

The library itself is deceptively simple when it comes to the moving
parts. I personally find it to be quite elegant in several ways. First
lets take a look at an overly simple decomposition of the library. The
library itself does not provide any means of transport for the tokens,
such as an HTTP server, it simply provides the functionality to create
and use tokens conforming to the
[OAuth2 standard](https://tools.ietf.org/html/rfc6749). An example
HTTP server using the library is part of the
[oauth2_example](https://github.com/kivra/oauth2_example) repository.

<figure>
<img src="{{ site.url }}/assets/posts/erlang/Erlang-Oauth2-Analysis.jpg" alt="OAuth2 Analysis"/>
</figure>

The main point of entry is the OAuth2 module, which essentially
defines the API for the utilizing application. As an application
builder you have a clear interface with which you can implement
various authorisation schemes. There is a great, simplified,
explanation of these flows
[over here](https://aaronparecki.com/articles/2012/07/29/1/oauth2-simplified).

The OAuth2 module utilizes the OAuth2 Config module. This module in
turn reads the app.config which is passed to the Erlang shell to
figure out which backend and which token generator to utilize. The
library has **behaviours** defined for them both.

A behaviour is basically an interface (if you are from the object
oriented world) which other modules can implement. Each behaviour
defines one or more callbacks that the implementing module needs to
expose for the client to be able to use the module. The callback for
the *token_generation* looks like this:

{% highlight erlang linenos %}
-callback generate(oauth2:context()) -> oauth2:token().
{% endhighlight %}

As you can see the callback **generate** takes an **oauth2:context()**
and returns an **oauth2:token** as a result. The **context**, which is
defined in the module **oauth2** is a type. The definition of it is a
proplist. A proplist is basically a key/value pair list, so lets take
a look at how it is constructed.

{% highlight erlang linenos %}
-type context()  :: proplists:proplist().

-spec build_context(term(), non_neg_integer(), term(), scope()) -> context().
build_context(Client, ExpiryTime, ResOwner, Scope) ->
    [ {<<"client">>,         Client}
    , {<<"resource_owner">>, ResOwner}
    , {<<"expiry_time">>,    ExpiryTime}
    , {<<"scope">>,          Scope} ].
{% endhighlight %}

So the **context** consists of 4 elements: _client_,
_resource\_owner_, _expiry\_time_ and _scope_.

The first step for the implementation of JWT seems to be to define a
*token generation* implementation that will create the most
minimalistic JWT set. Remember,
[from the previous post](/2015/04/14/Erlang-OAuth2/), that the set of
claims is generally optional and thus we can implement it with the
information we have at this time: Expiry Time (exp) and Issued At Time
(iat).

From the requirements of JWT it is clear that there is a need to store
a list of claims and their values in the backend. This changes the API
of the behaviour and thus any implementing clients would need to
change as a result. At this point it seems most reasonable, from a
problem domain, to enrich the backend behaviour.

A very interesting and neat aspect of the library is that it is
tested using [PropEr](http://proper.softlab.ntua.gr/) which is an
property based testing tool similar to
[QuickCheck](http://en.wikipedia.org/wiki/QuickCheck). Implementations
for about any programming language exist. Instead of executing known
testcases with known results the tool will take the defined properties
of a method and will try to break the execution by executing the code
with many variations of the property types. When it finds an usecase
that fails, it will reduce the set that creates the errors to the bare
minimum.

A nice introduction talk on testing and the use of PropEr can be seen
in the video below. In a following post I will try to dig into the
subject some more, when I have implemented it for my newly created
code, for now enjoy the talk!

<iframe width="560" height="315" src="https://www.youtube.com/embed/4ySw3IRzlWY" frameborder="0" allowfullscreen></iframe>
