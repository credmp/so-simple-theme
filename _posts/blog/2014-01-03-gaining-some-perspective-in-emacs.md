---
layout: post
title: Gaining some perspective in Emacs
date: 2014-01-03 09:00:18.000000000 +01:00
comments: true
categories:
- Code
tags:
- emacs
status: publish
type: post
published: true
meta:
  _wpas_done_all: '1'
  _thumbnail_id: '683'
  _edit_last: '1'
  _sidebar: '0'
  _wp_post_template: '0'
author:
  login: arjen
  email: arjen@wiersma.org
  display_name: Arjen Wiersma
  first_name: Arjen
  last_name: Wiersma
---
<p>A clean desk is a clean mind. If you are like me and do a lot of work inside of Emacs you will have a buffer list that is quite large. Pressing <strong>C-x b</strong> will show you a long list of buffers you can switch to. It would be really nice if we could limit the buffers to just those that you are using for your current project, right?</p>
<p>As always, there is a package to do just that!</p>
<p>Install the perspective package via <strong>M-x list-packages</strong> and then select <strong>perspective</strong> and press <strong>i x</strong> to install it. Emacs will go ahead and download the file, extract it, compile it and place it somewhere where Emacs can find it each time you start it up.</p>
<p>The basic addition to your <strong>init.el</strong> file will be to load up the perspective code.</p>
<pre lang="lisp">
;;; Setup perspectives, or workspaces, to switch between
(require 'perspective)

;; Enable perspective mode
(persp-mode t)
</pre>
<p>As always there is a small modification to how it all works. What we want is to define workspaces with a starter file, this could be a build script or a project todo list or even a lisp file that is the central place for your project. In order to do this we will first define a macro to deal with our special use-case.</p>
<pre lang="lisp">
;; loading code for our custom perspectives
;; taken from Magnar Sveen
(defmacro custom-persp (name &rest body)
  `(let ((initialize (not (gethash ,name perspectives-hash)))
         (current-perspective persp-curr))
     (persp-switch ,name)
     (when initialize ,@body)
     (setq persp-last current-perspective)))

;; Jump to last perspective
;; taken from Magnar Sveen
(defun custom-persp-last ()
  (interactive)
  (persp-switch (persp-name persp-last)))

;; Easily switch to your last perspective
(define-key persp-mode-map (kbd "C-x p -") 'custom-persp-last)
</pre>
<p>Lets go ahead and define a perspective for editing your emacs init.el file. We do this by defining a defun that can be called interactively. In this defun we use the <strong>custom-persp</strong> macro in which we give the perspective a name, "emacs" in this case, and we specify the action to take when switching to this perspective. In my case that would be to open (find-file) my Emacs <strong>init.el</strong> file.</p>
<pre lang="lisp">
(defun custom-persp/emacs ()
  (interactive)
  (custom-persp "emacs"
                (find-file "~/.emacs.d/init.el")))

(define-key persp-mode-map (kbd "C-x p e") 'custom-persp/emacs)
</pre>
<p>Now, when you press <strong>C-x p e</strong> you will be greeted by your init.el file and the rest of your buffer list will be empty. If you open other files as part of your Emacs configuration, they will be added to the buffer list of this perspective, but not any other. How cool is that?</p>
<p>By invoking <strong>M-x persp-switch</strong>, or <strong>C-x p -</strong> if you want to switch to your last perspective, you can switch back to the <strong>main</strong> perspective where all your other files were.</p>
<p>In the emacs mode line (for which I use powerline) you will see the different perspectives that you have open in your session.</p>
<p><img src="/wp-content/uploads/2014/01/modeline.png" alt="modeline" width="628" height="18" class="aligncenter size-full wp-image-692" /></p>
<p>In my case you see [emacs|main|pao] with emacs being highlighted to indicate that it is the active perspective.</p>
