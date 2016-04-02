---
layout: post
title: Emacs discoverability
modified:
categories: emacs
excerpt:
tags: [emacs]
image:
  feature:
date:
---

# test

Emacs is a wonderful piece of technology. It is extensible and after you use it for a while it becomes unique to you, the user. It basically becomes an extension of your workflow that is your own. Many new users are turned away due to the sheer learning curve of the keybindings. Making the keybindings easir to understand reduces this learning curve by increasing the discoverability

> Discoverability is the ability of something, especially a piece of content or information, to be found. [Link](https://en.m.wikipedia.org/wiki/Discoverability)

A really good package that I ran into recently while browsing [melpa](http://www.melpa.org) is `which-key`. The [documentation](https://github.com/justbur/emacs-which-key) for this package is quite extensive and there are a lot of customisations, but lets take a look at what it does out of the box.

When I start pressing a key combination I sometimes find that I have forgotten if it was something like `C-c RET as` or `C-c RET sa`. The package comes to your rescue by showing you all possible keybindings after you have waited a small amount of time. So lets say I already pressed `C-c RET`, it will then popup to show me all keybindings associated with that prefix. 
