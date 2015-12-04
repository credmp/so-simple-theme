---
layout: post
title: JSONP with Jersey 2.0
date: 2013-07-28 11:01:23.000000000 +02:00
categories:
- Code
- Java
tags:
- java
- jersey
- jquery
- jsonp
status: publish
type: post
published: true
comments: true
meta:
  _wpas_done_all: '1'
  _edit_last: '1'
  _sidebar: '0'
  _wp_post_template: '0'
  _thumbnail_id: '603'
author:
  login: arjen
  email: arjen@wiersma.org
  display_name: Arjen Wiersma
  first_name: Arjen
  last_name: Wiersma
---
<p>As you build an API that is to be used by many parties you cannot escape the need for JSONP. JSONP is necessary when you need to provide cross domain support. In this article we will go through the steps necessary to support JSONP with Jersey 2.0.</p>
<p>The main difference between JSON and JSONP is that JSONP returns its datastructure wrapped in a piece of javascript which will be evaluated by the browser. The entire process is explained very well by a stack overflow user in <a href="http://stackoverflow.com/questions/2067472/what-is-jsonp-all-about/2067584#2067584">this answer</a>.</p>
<p>I just implemented an API which supports the JSONP protocol with the help of the Jersey 2.0 library, which is part of Glassfish 4. The internet is full of articles which implement JSONP using Jersey 1.x, which required you to wrap your object in another object, making it very hard to understand what is going on. Jersey 2.0 solves this by providing a new annotation, @JSONP.</p>
<pre lang="java" line="1">@GET
@Path("/get")
@JSONP(queryParam="callback")
@Produces({"application/x-javascript"})
public TestResult getAllTestData(@QueryParam("callback") String callback) {
        TestResult result = new TestResult();

        // do many things here

        return result;
    }
}</pre>
<p>To get the results you want you need to add both the JSONP annotation as well as adding the application/x-javascript type to the Produces annotation.</p>
<p>You can now call the remote service with the following jQuery javascript:</p>
<pre lang="javascript" line="1">function getFeedList() {
    $.getJSON(serviceURL + 'get?callback=?', function(data) {
      // process the data
    });
}</pre>
<p>The added callback parameter to the URL matches that of the QueryParam within the method in your Java class.</p>
<p>Image credit <a href="http://www.flickr.com/photos/artlung/" title="Joe Crawford (artlung)" target="_blank">Joe Crawford (artlung)</a></p>
