---
layout: post
title: Clojure tricks; in? Collection and Threadpools
modified:
categories: blog
excerpt: A simple trick with collections and how to use a custom threadpool
tags: [Clojure]
image:
  feature:
date: 2016-03-29T20:35:03+02:00
---

Today I was working on a small project and I ran into a couple of
brain teasers. Lets take a look at what they were and what I learned.

# A needle in a haystack #

The first one was a needle in a haystack problem. I needed to check if
a collection, a list in this case, contained a certain value. My first
idea, without any knowledge, was to try `contains?`. **Cider**
indicated that it is an existing function, so I gave it a try. Sadly,
it failed miserably. Since Clojure 1.1 the `contains?` function is
meant to find a **key** in a **collection**. I found this to be quite
odd, as the same semantics could easily be applied to a list.

Luckily the problem is easily solved by using a little
recursion. First, ensure we have a sequence to work with using
`seq`. Using the first element of the **haystack** we check to see if
it matches our **needle**, if not we `recur` with the rest of the
**haystack**.

{% highlight clojure %}
(defn in?
  "Find the needle in the haystack. The haystack can be anything 
accepted by `seq`"
  [needle haystack]
  (when (seq haystack)
    (or (= needle (first haystack))
        (recur needle (next haystack)))))
{% endhighlight %}

Now, lets test this on some various situations. How about a **list**
or a **vector**? Or perhaps we should find a character in a string?

{% highlight clojure %}
(in? "needle" '("haystack" "with" "a" "needle")) ;; => true
(in? "needle" ["haystack" "with" "a" "needle"]) ;; => true
(in? "needle" '("only" "a" "haystack")) ;; => nil
(in? "needle" "needle") ;; => nil
(in? \e "needle") ;; => true
{% endhighlight %}

As you might know, the `nil` value will be treated as `false` by
**truth** operators like `if` or `when`. So you can use it for
conditional blocks. 

## How about `some`? ##

While preparing this article I thought; could I have not used `some`
to have the same effect? I guess I could have. Lets try the previous
examples again, but this time with the `some` function.

{% highlight clojure %}
(some #{"needle"} '("haystack" "with" "a" "needle")) ;; => "needle"
(some #{"needle"} ["haystack" "with" "a" "needle"]) ;; => "needle"
(some #{"needle"} '("only" "a" "haystack")) ;; => nil
(some #{"needle"} "needle") ;; => nil
(some #{\e} "needle") ;; => \e
{% endhighlight %}

if we take a look at the
[documentation](http://clojuredocs.org/clojure.core/some) we see that
the use of the predicate in `some` lends itself for far more powerful
evaluations.

{% highlight clojure %}
(some #(= 5 %) [1 2 3 4 5])
;;=> true

(some #(= 5 %) [6 7 8 9 10])
;;=> nil
{% endhighlight %}

So, the time spent on the `in?` function seems kind of futile in
hindsight.  At the time I did not think of it, which seems kind of
silly. I am still glad I took the time to write it up though as it
teaches me how it would work.

# Threadpools #

The second thing I learned today was the use of threadpools. This
sounds kind of silly of course; I have been using `Java` for a very,
very, very long time. If I remember correctly I started as a `Java`
geek around **1997**, version **1.1**, so I have had my time with
`Thread`s, `ThreadPool`s and the `Executor` service.

The neat thing about Clojure is that it abstracts those concepts away
from you using the `core.async` package. This means that generally you
do not need to worry yourself with the details of the almighty
`Thread`.

Today I had the need to dig under the hood though. I wrote a batch
processing functionality that worked so well that it swamped my
machine, stalled the status reporting to the web interface and made
life quite interesting for a little while until I realised that I had
a threading issue.

The
[documentation](http://clojure-doc.org/articles/language/concurrency_and_parallelism.html)
on concurrency and parallelism is quite a good read and it explains in
quite some detail how the default thread pooling works. In my case I
needed to use a threadpool that would now swamp the other parts of my
system. So I chose to create a small pool of 4 threads.

The first step is to add an `import` statement to the **namespace**
declaration to introduce the Executors package.

{% highlight clojure %}
(import java.util.concurrent.Executors)
{% endhighlight %}

With the executor package we can define a new threadpool of 4 threads,
which is conservative as you would normally use *number of CPU cores +
2*, but it keeps my machine from being swamped while running, so that
is good enough for me.

{% highlight clojure %}
(def pool (Executors/newFixedThreadPool 4))
{% endhighlight %}

Lets create a small test function that will return the curren threads **Id**.

{% highlight clojure %}
(defn get-thread-id []
  (.getId (Thread/currentThread)))
{% endhighlight %}

Running it in the repl returns an **Id** of 50, while running it on
the pool returns another number.

{% highlight clojure %}
(get-thread-id) ;; => 50
(.execute pool #(prn (get-thread-id))) ;; prints => 54
{% endhighlight %}

You can also try to run many instances of the function on the
threadpool to make sure it will only use 4 threads. I can assure you
it works, but go ahead... try it.

{% highlight clojure %}
(for [x (range 0 10)]
  (.execute pool #(println (get-thread-id)))
  )
{% endhighlight %}

So today was a very nice day of learning new things. It showed the
great flexibility and ease of the Clojure language and its ability to
interoperate with **Java**.
