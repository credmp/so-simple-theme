---
layout: post
title: Installing GNU Emacs
modified:
categories: blog
excerpt: Installing GNU Emacs on Mac OS X is a breeze
tags: [emacs]
image:
  feature:
date: 2016-03-05T15:43:45+01:00
---

On Mac OS X it is just a breeze to install GNU Emacs, either the
stable or the development version.

I am assuming you have the wonderful [HomeBrew](http://brew.sh)
installed. First, as always when installing anything, make sure you
are up to date:

{% highlight sh %}
$ brew update
{% endhighlight %}

The formula has a bunch of options that you can use to tweak your
version. Most of the time you will not want to change these.

{% highlight sh %}
$ brew info
emacs: stable 24.5 (bottled), devel 25.0.92, HEAD
GNU Emacs text editor
https://www.gnu.org/software/emacs/
/usr/local/Cellar/emacs/24.5 (3,923 files, 110.5M) *
  Built from source with: --with-cocoa --with-gnutls --with-imagemagick
From: https://github.com/Homebrew/homebrew/blob/master/Library/Formula/emacs.rb
==> Dependencies
Build: xz ✔, pkg-config ✔
Optional: d-bus ✘, gnutls ✔, librsvg ✘, imagemagick ✔, mailutils ✘, glib ✘
==> Options
--with-cocoa
	Build a Cocoa version of emacs
--with-ctags
	Don't remove the ctags executable that emacs provides
--with-d-bus
	Build with d-bus support
--with-glib
	Build with glib support
--with-gnutls
	Build with gnutls support
--with-imagemagick
	Build with imagemagick support
--with-librsvg
	Build with librsvg support
--with-mailutils
	Build with mailutils support
--with-x11
	Build with x11 support
--without-libxml2
	Don't build with libxml2 support
--devel
	Install development version 25.0.92
--HEAD
	Install HEAD version
{% endhighlight %}

I, however, want to enable the __Emacs.app__ (highly recommended!) you
need to add the cocoa build. While we are at it, we will also enable
gnutls and imagemagick for a better experience.

{% highlight sh %}
$ brew install emacs --with-cocoa --with-gnutls --with-imagemagick
{% endhighlight %}

On my machine it too 2 minutes 42 seconds to do the full
installation. Brew will take care of all the dependencies and the
compiling. 

Finally you will want to make the __Emacs.app__ available in the
Applications folder. Brew also facilitates this by providing the
__linkapps__ functionality.

{% highlight sh %}
$ brew linkapps emacs
Linking /usr/local/opt/emacs/Emacs.app to /Applications.
{% endhighlight %}

If you want to install into your ~/Applications folder instead, then
you need to create your own symbolic link.

{% highlight sh %}
$ ln -s /usr/local/Cellar/emacs/24.5/Emacs.app ~/Applications/
{% endhighlight %}

That is it. It is very easy and allows you to stay up-to-date using
Brew.

Alternative
===========

Alternatively you can download a prebuild package from
[EmacsForMacOSX](http://emacsformacosx.com). This package also
contains a lot of sane defaults.

A bonus for this method is the availability of __pretest__ and
__nightly__ builds (same as __devel__ with Brew).













