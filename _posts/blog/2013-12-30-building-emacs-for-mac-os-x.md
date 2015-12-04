---
layout: post
title: Building Emacs for Mac OS X
date: 2013-12-30 15:23:23.000000000 +01:00
categories:
- Code
tags:
- emacs
status: publish
type: post
published: true
comments: true
meta:
  _edit_last: '1'
  _sidebar: '0'
  _wp_post_template: '0'
  _thumbnail_id: '680'
  _wpas_done_all: '1'
author:
  login: arjen
  email: arjen@wiersma.org
  display_name: Arjen Wiersma
  first_name: Arjen
  last_name: Wiersma
---
<p>On December 23rd Stefan Monnier <a href="http://lists.gnu.org/archive/html/emacs-devel/2013-12/msg00844.html" title="Announcement of freeze">announced</a> that the trunk, on which GNU Emacs is developed, has been frozen. This means that no new features will be added until work on version 24.4 has been completed.</p>
<p>This of course caused <a href="http://www.masteringemacs.org/articles/2013/12/29/whats-new-in-emacs-24-4/" title="What is new in Emacs 24.4">a post on what is new in GNU Emacs 24.4</a>. This is a very long list of changes that impact the user in some manner.</p>
<p>Personally I try to keep up with the development by building a version of GNU Emacs regularly. I thought I would share my proces with the world as other Mac OS X users might want to try this as well. If you would just like to try one of the newest versions without building it yourself, please take a look at <a href="http://emacsformacosx.com/builds" title="Emacs for Mac OS X">Emacs for Mac OS X</a> for prebuilt versions. If you would like to try and build it yourself, please continue on reading.</p>
<p>Firstly, you will need some build tools to do this. The easiest way to do this is to grab a copy of XCode from the Appstore. In previous versions XCode would also include the command line tools needed to build GNU Emacs. Sadly this is no longer the case, but luckily it is quite easy to get them. Open the <strong>Terminal</strong> application and issue the following command:</p>
<pre lang="bash">
$ xcode-select --install
</pre>
<p>This will generate a popup asking if you want to install the command line tools, of course you do....</p>
<p>Next thing to achieve is that you will want several other tools that used to be included in the command line tools, namely automake and autoconf. The easiest way to get them is to use a second tool called <a href="http://brew.sh" title="Homebrew">Homebrew</a>. Or you can just execute the following statement in the Terminal that you still have open:</p>
<pre lang="bash">
$ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
</pre>
<p>After installation is complete and you followed the instructions given by the installer we can go ahead and install the needed tools.</p>
<pre lang="bash">
$ # Previously part of the command line tools
$ brew install autoconf
$ brew install automake
$ brew install libtool
$ # Needed to build GNU Emacs
$ brew install bzr
$ brew install xz
</pre>
<p>Next we will get the build script I use for building GNU Emacs. This script was made by the wonderful <a href="http://emacsformacosx.com" title="David Caldwell">David Caldwell</a>.</p>
<pre lang="bash">
$ git clone https://github.com/caldwell/build-emacs.git
</pre>
<p>You can now execute the following commands to start the build process. The <strong>build-emacs</strong> script takes care of all the steps necessary to build GNU Emacs for Mac OS X. </p>
<pre lang="bash">
$ ./build-emacs bzr
</pre>
<p>In the end you will be left with a DMG file in the <strong>emacs-builds</strong> directory. </p>
