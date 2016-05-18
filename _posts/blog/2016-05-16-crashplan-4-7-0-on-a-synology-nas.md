---
layout: post
title: CrashPlan 4.7.0 on a Synology NAS
modified:
categories: blog
excerpt:
tags: [synology, crashplan]
image:
  feature: 
date: 2016-05-16T09:19:53+02:00
---

![virus](/images/2016/05/16/virus.png)

I use the CrashPlan service to backup all my systems (and those of family) to the cloud. Backups are **important**, you do not wish to lose any of your personal data when a computer fails, because they will fail!

The CrashPlan service is quite good, except for their support for Synology NAS devices. They do not officially support it, so every single update is a moment that can go right, but more often it will go wrong.

There is a great community for this package:

- [Unofficial Synology Package](https://pcloadletter.co.uk)
- [Unofficial Forum](https://crashplan.setepontos.com)

With the latest release, 4.7.0, many things changed in the way the package upgrades itself. Luckily it has been described in detail on the forum pages once again:

- [Getting 4.7.0 to work on Synology](https://crashplan.setepontos.com/crashplan-4-7-0-installation/)

# How to fix upgrade issues

In order to preserve the steps here they are:

- Make cpio accessible (or symlink it instead of copying):

~~~
  sudo cp /var/packages/CrashPlan/target/bin/cpio /bin/cpio
~~~

- Reinstall the latest [Unofficial Synology Package](https://pcloadletter.co.uk)

- Wait for a moment so that 4.7.0 downloads (you can check if the jar file is there via terminal)

~~~
ls -al /var/packages/CrashPlan/target/upgrade
~~~

- Edit the file /var/packages/CrashPlan/target/install.vars, redirecting to a correct Java Package (use Java8!):

~~~
JAVACOMMON=/volume1/@appstore/Java8/j2sdk-image/jre/bin/java
~~~

- Start the package, it will throw out an error but you should see it’s running 4.7.0 in the log (/var/packages/CrashPlan/target/log/history.log.0). Give it another moment and start one more time and it should be good to go.
