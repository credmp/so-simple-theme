---
layout: post
title: "A new theme for GNU Emacs"
modified:
categories: blog
excerpt:
tags: [Code, Emacs]
image:
  feature:
date: 2015-07-25T08:30:50+01:00
---

I have ported the
[space gray](https://github.com/zdne/spacegray-xcode) theme for XCode
to GNU Emacs. It provides a soothing grey theme that is soft on the
eyes and has great readability in light and dark environments.

Once the
[pull request](https://github.com/milkypostman/melpa/pull/2960) has
been merged it will be available on `Melpa`. You can then install it
using `M-x package-install RET arjen-grey-theme`. Until that time you
will need to download the code from
[github](https://github.com/credmp/arjen-grey-theme), clone it and
install it by running `M-x package-install-file RET
/path/to/arjen-grey-theme.el`.

Obviously I am open to pull requests to
add specific faces. Currently all the default font-lock faces are
covered and I added several **helm** specfic faces as well.

Curious as to what it looks like? Have a gander at the following
screenshot:

![Screenshot](https://raw.githubusercontent.com/credmp/arjen-grey-theme/master/screenshot.png)

If you use it and like, drop me a line on twitter (@credmp) or leave a
message on the disqus board below.
