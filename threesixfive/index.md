---
layout: page
title: threesixfive
excerpt: "Overview of my 365 days project"
search_omit: true
---

<div>
<p>Code for this project can be found on <a href="https://github.com/credmp/threesixfive">Github</a>.
</div>

<ul id="grid">
{% for post in site.categories.threesixfive %}
<li><a href="{{ site.url }}{{post.url}}"><img src="/images/{{post.image.thumb}}"></a></li>
{% endfor %}
</ul>


