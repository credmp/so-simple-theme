---
layout: post
title: "ClojureScript and Figwheel"
modified:
categories: blog
excerpt:
tags: [Code, Clojure]
image:
  feature:
date: 2015-05-03T08:30:50+01:00
---

[Last week](/2015/04/29/Clojure/) I wrote about Clojure and I posted a video about [fighweel](https://github.com/bhauman/lein-figwheel). After the post a talk by the original author was posted from the [Clojure/West Conference](http://clojurewest.org/). In it he goes through [fighweel](https://github.com/bhauman/lein-figwheel) and the rationel behind it. He shows off many cool features, so it is well worth watching it fully!

<iframe width="560" height="315" src="https://www.youtube.com/embed/j-kj2qwJa_E" frameborder="0" allowfullscreen></iframe>

# Pomegrante #

He also notes that he uses [pomegrante](https://github.com/cemerick/pomegranate) for dependency loading. This library is also usable from the normal lein repl to load dependencies while you are hacking away. This means that it is not necessary to reload the repl when you need another dependency! This is awesome!
