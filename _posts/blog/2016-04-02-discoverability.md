---
layout: post
title: Emacs discoverability
modified:
categories: emacs
excerpt: Easily find keybindings with enhanced discoverability
tags: [emacs]
image:
  feature:
date: 2016-04-02 08:10 CEST

---

Emacs is a wonderful piece of technology. It is extensible and after you use it for a while it becomes unique to you, the user. It basically becomes an extension of your workflow that is your own. Many new users are turned away due to the sheer learning curve of the keybindings. Making the keybindings easir to understand reduces this learning curve by increasing the discoverability

> Discoverability is the ability of something, especially a piece of content or information, to be found. [Link](https://en.m.wikipedia.org/wiki/Discoverability)

A really good package that I ran into recently while browsing [melpa](http://www.melpa.org) is `which-key`. The [documentation](https://github.com/justbur/emacs-which-key) for this package is quite extensive and there are a lot of customisations, but lets take a look at what it does out of the box.

When I start pressing a key combination I sometimes find that I have forgotten if it was something like `C-c RET ai` or `C-c RET au`. The package comes to your rescue by showing you all possible keybindings after you have waited a small amount of time. So lets say I already pressed `C-c RET a`, it will then popup to show me all keybindings associated with that prefix. 

Making it available in Emacs is very simple.

~~~ emacs-lisp
(use-package which-key
  :ensure t
  :config
  (which-key-mode))
~~~

An example with the `C-c RET a` prefix is shown below.

![Emacs discoverability](/images/emacs-discoverability.png)

You can even change how keys show up when called for a major mode, to enhance the discoverability. An example of this from the documentation.

~~~ emacs-lisp
(which-key-add-major-mode-key-based-replacements 'org-mode
  "C-c C-c" "Org C-c C-c"
  "C-c C-a" "Org Attach")
~~~

With this you can give more descriptive names to keybindings.
