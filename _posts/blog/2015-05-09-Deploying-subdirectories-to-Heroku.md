---
layout: post
title: "Deploying subdirectories to Heroku"
modified:
categories: blog
excerpt:
tags: [Code]
image:
  feature:
date: 2015-05-09T08:30:50+01:00
---

[Heroku](http://www.heroku.com) is a great way to deploy and test your application in a real-life scenario. The elegance of Heroku is that it fits into a development workflow by deploying an application when you push a branch to it from your git repository. But how do you deploy only part of your project?

Let's say you have your project, `cool web application`, and it consists out of several directories, one of which is your deployable application `application`. Other directories could be things like documentation, PSDs from designers, etc. If you would push the entire repository to heroku you will be greeted with the error message `Heroku push rejected, no Cedar-supported app detected`. This is due to the fact that your actual application is a subdirectory of the git repository. Heroku expects to find the project files at the top level.

Luckily, git can help us out in this situation by only pushing a [subtree](https://github.com/git/git/blob/master/contrib/subtree/git-subtree.txt) to heroku. In the top-level directory of your git repository, just tell git to push a subtree to heroku from the `DIRECTORY` which you pass along in the `--prefix` parameter.

{% highlight bash %}
git subtree push --prefix DIRECTORY heroku master
{% endhighlight %}

From there heroku will now only receive your `application` and not the other files from the git respository.

Problem solved!
