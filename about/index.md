---
layout: page
title: About me
excerpt: "A little background on me as a human being"
modified: 2015-12-06T19:44:38.564948-04:00
image:
  feature:
  credit:
  creditlink:
---

{% assign total_words = 0 %}
{% assign total_readtime = 0 %}
{% assign featuredcount = 0 %}
{% assign statuscount = 0 %}

{% for post in site.posts %}
    {% assign post_words = post.content | strip_html | number_of_words %}
    {% assign readtime = post_words | append: '.0' | divided_by:200 %}
    {% assign total_words = total_words | plus: post_words %}
    {% assign total_readtime = total_readtime | plus: readtime %}
    {% if post.featured %}
    {% assign featuredcount = featuredcount | plus: 1 %}
    {% endif %}
{% endfor %}

Software Architect, Software Engineer, Emacs user, Runner, Dad to Jelle, Husband to Rebecca, Metal head, Programming language junky.


My name is **Arjen Wiersma**, and this is my personal blog. It currently has {{ site.posts | size }} posts in {{ site.categories | size }} categories which combinedly have {{ total_words }} words, which will take an average reader ({{ site.wpm }} WPM) approximately <span class="time">{{ total_readtime }}</span> minutes to read. The most recent post is {% for post in site.posts limit:1 %}{% if post.description %}<a href="{{ site.url }}{{ post.url }}" title="{{ post.description }}">"{{ post.title }}"</a>{% else %}<a href="{{ site.url }}{{ post.url }}" title="{{ post.description }}" title="Read more about {{ post.title }}">"{{ post.title }}"</a>{% endif %}{% endfor %} which was published on {% for post in site.posts limit:1 %}{% assign modifiedtime = post.modified | date: "%Y%m%d" %}{% assign posttime = post.date | date: "%Y%m%d" %}<time datetime="{{ post.date | date_to_xmlschema }}" class="post-time">{{ post.date | date: "%d %b %Y" }}</time>{% if post.modified %}{% if modifiedtime != posttime %} and last modified on <time datetime="{{ post.modified | date: "%Y-%m-%d" }}" itemprop="dateModified">{{ post.modified | date: "%d %b %Y" }}</time>{% endif %}{% endif %}{% endfor %}. The last commit was on {{ site.time | date: "%A, %d %b %Y" }} at {{ site.time | date: "%I:%M %p" }} UTC.

I run my website on a virtual server, called a droplet, at [Digital Ocean](https://www.digitalocean.com/?refcode=b1a59936f097). They run a referral program which means that when you click the [Digital Ocean link](https://www.digitalocean.com/?refcode=b1a59936f097) and sign up you get a $10 credit, which will let you run a machine for 2 months and I will get $25 credit once you've spent $25 on their service. If you are looking for a deal on hosting, please consider using my [referral link](https://www.digitalocean.com/?refcode=b1a59936f097). It will not only help you but it will also support this blog!

From 2012 to 2015 I attended evening colleges to receive a Bachelor degree in ICT. I am an external expert for the [HvA](http://www.hva.nl) ICT department, judging end papers and participating at paper defences. I am currently considering a Master's Degree in Computer Science.

