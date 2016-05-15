---
layout: post
title: Lein Instant Cheatsheet
modified:
categories: blog
excerpt: A leiningen plugin to generate searchable documentation
tags: [clojure]
image:
  feature:
date: 2016-04-15T15:48:09+02:00
---

I found the most amazing leiningen plugin today; [lein-instant-cheatsheet](https://github.com/camsaul/lein-instant-cheatsheet). When you run `lein instant-cheatsheet` it scans your project file and creates the documentation, ready for you to browse on `http://localhost:13370`.

An example from a project I am working on, filtering a single function:

![cheatsheet](/images/lein-instant-cheatsheet.png)

It also has all the **core functions** ready for you to browse, such as `cond->`.
