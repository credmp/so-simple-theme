---
layout: post
title: Securing wordpress
date: 2014-06-14 15:04:23.000000000 +02:00
categories: []
comments: true
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '1'
  _publicize_twitter_user: "@credmp"
  _wpas_done_all: '1'
  _wpas_mess: "[blog] Securing wordpress http://wp.me/p3PyW1-fQ"
author:
  login: arjen
  email: arjen@wiersma.org
  display_name: Arjen Wiersma
  first_name: Arjen
  last_name: Wiersma
---
<p>Just a quick tip to anyone hosting their own wordpress installation. If you run wordpress on a linux installation the chances are you already have <a href="http://www.fail2ban.org/wiki/index.php/Main_Page" title="fail2ban" target="_blank">fail2ban</a> running. In case you do not have it, go ahead and install it right away to get a better secured environment!</p>
<p>For wordpress there is a plugin called <a href="https://wordpress.org/plugins/wp-fail2ban/" title="WP Fail2Ban" target="_blank">WP Fail2Ban</a>. This plugin writes all the login attempts to SYSLOG where fail2ban can act apon it. The plugin comes with a preconfigured filter that you can use in fail2ban.</p>
<p>From the installation on, anyone who tries to gain access to your installation will be banned after 3 attempts (default configuration). Yay for security!</p>
