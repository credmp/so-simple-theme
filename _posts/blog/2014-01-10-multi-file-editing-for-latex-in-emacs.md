---
layout: post
title: Multi-file Editing for LaTeX in Emacs
date: 2014-01-10 09:00:21.000000000 +01:00
comments: true
categories:
- Writing
tags:
- emacs
- latex
status: publish
type: post
published: true
meta:
  _edit_last: '1'
  _thumbnail_id: '700'
  _wpas_mess: Multi-file Editing for LaTeX in Emacs http://wp.me/p3PyW1-bd
  _wpas_done_all: '1'
author:
  login: arjen
  email: arjen@wiersma.org
  display_name: Arjen Wiersma
  first_name: Arjen
  last_name: Wiersma
---
<p>When I edit large research papers in LaTeX it tends to become a quite large file with lots of distractions. Things like package statements, settings and other document oriented stuff. When I start writing I like to be focussed on the text and not all the stuff that is around it. For this reason I split up my documents into multiple files. </p>
<p>I use a <strong>main.tex</strong> to tie everything together. Then I split up things like settings, packages and commands in their own files that I include in the main file by using the <strong>\input{filename}</strong> command.</p>
<p>One of the powers of Emacs' LaTeX (AUCTeX) editing facility is that I can build the document right from within Emacs, but when you split the text over multiple files this no longer works. Luckily there is an option called <strong>master file</strong> that can be used to tell the LaTeX that when I want to build the current file it should actually build it using the master file.</p>
<p>By adding a small section at the bottom of each file I can tell Emacs to use the file <strong>main.tex</strong> as the master file. The following snippit assumes that there is a file called <strong>main.tex</strong> one directory up from the current file. It also tells the TeX-engine to use the xetex compiler instead of the latex default compiler and to always generate a PDF file.</p>
<pre lang="latex">
%%% Local Variables: 
%%% mode: latex
%%% TeX-master: "../main"
%%% TeX-engine: xetex
%%% TeX-PDF-mode: t
%%% End: 
</pre>
