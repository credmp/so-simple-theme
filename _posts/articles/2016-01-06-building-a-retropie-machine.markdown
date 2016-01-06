---
layout: post
title: Building a RetroPie Machine
modified:
categories: articles
excerpt: Building a retro arcade machine with RetroPie and an XBox 360 controller
tags: [pi, raspberry]
image:
  feature: jelle_console_web.jpg
date: 2016-01-06T20:30:27+01:00
---

# Intro

I love playing games. When I was a kid I played all the games I could
get my hands on and later I wrote my own games on my Laser 310 and
later my PCs. It was not until I was able to buy my own console's that
I actually played on them, so I skipped the entire Mario and Zelda
phase. This always sadenned me, because I think the games of the old
days can teach us quite a lot about playability.

So I am grown up (somewhat) and now have a son.... being a nerd-dad
the only logical thing to do is build my own retro arcade console! In
this day and age we can build pretty much anything, so why not that?

In this article I explain the steps I have taken to build my own
machine. As I am still building it, the instructions here might change
as I learn new things.

# Parts needed

I decided to start with the most simple thing possible, so we only
need a few parts:

  - Raspberry Pi
  - XBox 360 Controller for Windows (USB version)
  - SD Card (8GB as we want to store games as well)
  - Some form of networking; WiFi or Ethernet

The first thig is to get some emulator software for the Raspberry Pi.

# RetroPie

I decided I wanted to use
[Emulator Station](http://emulationstation.org) as the frontend for my
arcade machine; it has all the emulators readily available and a
pretty neat interface to boot.

For the Raspberry Pi a project called
[RetroPie](http://blog.petrockblock.com/retropie/) has some great
[prebuilt images](http://blog.petrockblock.com/retropie/retropie-downloads/retropie-image-for-raspberry-pi-1/)
available. I downloaded the **Wheezy - Standard** version.

There are many ways to burn this image to an SD card, luckily the
folks at Raspberry Pi have some [great instructions](https://www.raspberrypi.org/documentation/installation/installing-images/mac.md).

After burning the OS to the card and booting the Raspberry Pi with it
you are dropped into Emulator Station. This is great! Just follow the
instructions and all will be fine.

## XBox 360 Controller

I later decided to add an XBox 360 Controller. This should be quite
simple, but I did run into a few problems.... first of all, go into
the Retro Pie menu and select **Configure RetroPie**. You will be
dropped into a console application from which you can choose
**Configure XBox/XBox 360 Controller**. Activate the driver and you
should be all done after a reboot.

Sadly I found that my installation didn't work correctly; the
**xboxdrv** in the supplementary directory doesn't seem to work on ARM
devices. So I did the following:

{% highlight bash %}
$ sudo apt-get install xboxdrv
{% endhighlight %}

This will install a compatible version: **/usr/bin/xboxdrv**. Edit
**/etc/rc.local** in nano:

{% highlight bash %}
$ sudo nano /etc/rc.local
{% endhighlight %}

Replace the path to the **xboxdrv** application to the one in
**/usr/bin**. You can now use the controller in the various emulators.

# Known issues

Currently I still have an issue with this setup. The XBox 360
Controller gets all its buttons mapped during the setup, so there is
no way to exit an emulator once you choose a game to play. I found
[an article](https://www.raspberrypi.org/forums/viewtopic.php?p=250689#p250689)
which might be of help, but have not tried it yet.

# Outro

There you have it, a complete working arcade machine with minimum
effort. My son is quite excited about it and thinks I am the coolest
dad ever to build this thing. I myself am quite happy as well as it
allows me to play games like Mario with an console like feel to it.

There are many things that can be done to make it even cooler; think
about a nice case for the console. Perhaps it is also possible to
create a portable version of it, or in the opposite direction;
creating a full size arcade machine?
