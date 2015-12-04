---
layout: post
title: Adding the MySQL driver to JBoss AS 7
date: 2013-08-18 12:58:30.000000000 +02:00
categories:
- Java
tags:
- java
- jboss
- mysql
status: publish
type: post
published: true
comments: true
meta:
  _wp_post_template: '0'
  _sidebar: '0'
  _edit_last: '1'
  _thumbnail_id: '624'
author:
  login: arjen
  email: arjen@wiersma.org
  display_name: Arjen Wiersma
  first_name: Arjen
  last_name: Wiersma
---
<p>One problem we face when developing applications, especially web applications, is the separation of application and configuration. Application servers help us deal with the problem by exposing JNDI resources that you define in your application server and use in your application. This allows you to have completely different settings from development, testing and production.</p>
<p><span style="font-size: 1.5em;">Problem</span></p>
<p>By default JBoss AS comes with a database driver for the h2 in-memory database. When you create a new datasource configuration you can only select this driver and it is not apparent where you can add any others, like MySQL.</p>
<p><img class="aligncenter size-full wp-image-628" alt="JBoss AS JDBC Drivers before" src="assets/jboss-jdbc-drivers-before.png" width="482" height="278" /></p>
<p><span style="font-size: 1.5em;">Solution</span></p>
<p>The solution is as elegant as it is obscure for the novice user. Lets assume you are running JBoss in the Standalone option (standalone.sh or standalone.bat). In the directory structure you will find a folder called <strong>deployments</strong>. JBoss looks to this folder to find artifacts that it needs to deploy as soon as it starts or if it is already running it will deploy it immediately.</p>
<p>When you drop in the MySQL driver jar into this folder JBoss will activate the driver immediately for you, assuming it is running.</p>
<p><img class="aligncenter size-full wp-image-630" alt="jboss-mysql-deployment" src="assets/jboss-mysql-deployment.png" width="599" height="222" /></p>
<p>You can verify this by creating a new datasource. You will find the MySQL driver in the list of available drivers.</p>
<p><img class="aligncenter size-full wp-image-629" alt="jboss-jdbc-drivers-after" src="assets/jboss-jdbc-drivers-after.png" width="481" height="292" /></p>
<p><span style="font-size: 1.5em;">Conclusion</span><br />
Although it is not a very obvious place to look to for the installation of drivers, the deployments folder is rather elegant. It allows you to finely tune which drivers are available to your application and allows you to remove unnecessary drivers on each instance.</p>
<p>I did not take a look at how to achieve this in a domain setting. If you have any thoughts on the matter, please leave a comment below.</p>
<p><small>Image credit: <a title="jepoirrier" href="http://www.flickr.com/photos/jepoirrier/" target="_blank">jepoirrier</a></small></p>
