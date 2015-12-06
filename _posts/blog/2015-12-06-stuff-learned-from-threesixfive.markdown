---
layout: post
title: Stuff Learned From Threesixfive
modified:
categories: blog
excerpt:
tags: [clojure, snippets]
image:
  feature:
date: 2015-12-06T22:38:52+01:00
---

I wrote a small application called
[threesixfive](https://github.com/credmp/threesixfive) which generates
my [365 gallery](/threesixfive) from my Instagram account. As with all
development activities I learned some new things.

The application itself is straightforward; read my recent posts and
take each one where the **caption** starts with **xxx/365** and take
that data to create a Jekyll post from it. Even though it is so
straightforward I still ran into some things that I can imagine will
be helpful for others as well.

## Getting a date from epoch

It turns out that [clj-time](https://github.com/clj-time/clj-time) is
an extremely easy and well done library, but somehow misses the
possibility to create a new **DateTime** from an epoch timestamp. So I
wrote a small helper that takes the epoch time and adds the epoch
timestamp to it.

{% highlight clojure %}
(defn epoch->datetime [secondsSinceEpoch]
  (t/plus (t/epoch) (t/seconds secondsSinceEpoch)))
{% endhighlight %}

## Writing an web image to a file

As I wanted to download items from my Instagram feed (images) to my
Jekyll blog I needed to download them. Just doing a **GET** does not
suffice of course. In clojure this problem can be solve quite
elegantly, returning either **nil** or throwing an **IOException**:

{% highlight clojure %}
(defn retrieve-image [url filename]
  (clojure.java.io/copy
   (:body (client/get url {:as :stream}))
   (java.io.File. filename)))
{% endhighlight %}

## Creating proper tests saves a lot of time

Taking the time to write some tests saves a lot of time finding
problems in the code. In **Cider** you can easily run the tests with
**C-,** and you will get direct feedback which is not intrusive at all. 

