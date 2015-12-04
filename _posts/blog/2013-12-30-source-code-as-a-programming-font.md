---
layout: post
title: Source  code as a programming font
date: 2013-12-30 12:46:16.000000000 +01:00
comments: true
categories:
- Code
tags:
- emacs
- fonts
- macosx
status: publish
type: post
published: true
meta:
  _edit_last: '1'
  _sidebar: '0'
  _wp_post_template: '0'
  _thumbnail_id: '673'
  _wpas_done_all: '1'
author:
  login: arjen
  email: arjen@wiersma.org
  display_name: Arjen Wiersma
  first_name: Arjen
  last_name: Wiersma
---
<p>Adobe released their <a href="http://blogs.adobe.com/typblography/2012/09/source-code-pro.html" title="Source Code Pro">Source Code Pro</a> font to the public back in 2012. This font is very kind to the eyes of a programmer and might be something you would like to try.</p>
<p>First up is the <a href="https://github.com/adobe/Source-Code-Pro" title="GitHub Repository">GitHub repository</a> where you can find all sorts of information and installation instructions for different platforms. I will be focussing on Mac OS X as that is what I use on a daily basis.</p>
<p>The actual font files are distributed via sourceforge.net. At the time of this <a href="http://sourceforge.net/projects/sourcecodepro.adobe/files/SourceCodePro_FontsOnly-1.017.zip/download" title="SourceCodePro_FontsOnly-1.017.zip">version 1.017</a> is the latest you can download. After you extract the archive you will see several different directories and files.</p>
<p><img src="assets/SourceCodePro-1.017-Archive.png" alt="SourceCodePro-1.017-Archive" width="577" height="377" class="aligncenter size-full wp-image-668" /></p>
<p>The TTF directory is our target. It contains all the various True Type Font files that we will need. Next step is to open up the <strong>Font Book</strong> application. This is the place on Mac OS X that you can see all the installed fonts and even install new ones. Open up Spotlight and type in Font Book to quickly find the application. You can also navigate to the Applications folder via Finder.</p>
<p>It should look like the below image when you start it.</p>
<p><img src="assets/FontBookOpen.png" alt="FontBookOpen" width="1001" height="577" class="aligncenter size-full wp-image-671" /></p>
<p>Now, select all the TTF files and drop them on the Font Book application. You should be greeted by a pop-up screen that asks you if you wish to install the font.  </p>
<p><img src="assets/FontBookInstall.png" alt="FontBookInstall" width="514" height="469" class="aligncenter size-full wp-image-669" /></p>
<p>Click on <strong>Install Font</strong> and you should be all set. You can check your work by looking up the font in the Font Book application as is shown below.</p>
<p><img src="assets/FontBookInstalled.png" alt="FontBookInstalled" width="1001" height="577" class="aligncenter size-full wp-image-670" /></p>
<p>So, thats all set up. Now for the most important step, activating it in Emacs. The code for this is simple, just add the following line to your <strong>init.el</strong> file and you are all set:</p>
<pre lang="lisp">(set-default-font "Source Code Pro")</pre>
