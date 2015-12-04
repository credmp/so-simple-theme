---
layout: post
title: Raspberry PI & Sitecom N150 wifi adapter
date: 2013-07-20 11:40:51.000000000 +02:00
categories:
- Gadgets
tags:
- linux
- raspberry pi
- sitecom
- wifi
status: publish
type: post
published: true
featured: true
comments: true
meta:
  _edit_last: '1'
  _wpas_done_all: '1'
  _sidebar: '0'
  _wp_post_template: '0'
  _thumbnail_id: '647'
author:
  login: arjen
  email: arjen@wiersma.org
  display_name: Arjen Wiersma
  first_name: Arjen
  last_name: Wiersma
---
<p>For my birthday I received a <a href="http://www.raspberrypi.org">Raspberry PI</a>. This is a low cost, small form computer that you can use for a lot of things. You can even <a href="http://www.raspberrypi.org/archives/4390">send it to space</a> if you want to. I wanted it to make a home entertainment center with <a href="http://xbmc.org">XBMC</a>. Many other people have had the same idea and there is a ready to use distribution for the PI that does just this. It is called <a href="http://www.raspbmc.com">RaspBMC</a>.</p>
<p>One of the requirements I had was that I want it to use a wireless connection, to keep the amount of wires in the house down to a minimum. To that end I purchased a <a href="http://www.sitecom.com/en/wi-fi-usb-adapter-n150/wla-1100/p/1561">Sitecom N150 Wifi USB Adapter</a> from my local store.</p>
<p><img src="/assets/wla-1100-wi-fi-usb-adapter-n150.jpg" alt="Sitecom N150" width="393" height="295" class="aligncenter size-full wp-image-648" /></p>
<p>After installing RaspBMC and configuring the basics it was time to add the Wifi dongle. To my surprise it didn't work out of the box, even though it has a fairly standard Realtek chipset, it should've been supported by the <strong>r8712u</strong> driver. After a lot of tinkering, destruction of the distribution and googling I found the steps necessary to make it work. Most of this information came from an <a href="http://forum.ubuntu-it.org/viewtopic.php?p=4333693">Italian Ubuntu forum</a>.</p>
<p>The first step is in the identification of the USB device. By running the lsusb command we can see the ID of the device. This is the ID that the drivers use to identify compatible devices.</p>
<pre>$ lsusb
Bus 001 Device 003: ID <strong>0df6:006b</strong> Sitecom Europe B.V.</pre>
<p>Next we will tell the module subsystem of the kernel that this ID is also to be used for the r8712u driver.</p>
<pre>$ echo 'install r8712u /sbin/modprobe --ignore-install r8712u; /bin/echo "0df6 006b" > /sys/bus/usb/drivers/r8712u/new_id' | sudo tee /etc/modprobe.d/r8712u.conf</pre>
<p>This command will set this setting for the current running system and also store it for future use in the modprobe.d directory. Next we load the module to confirm that the module loads correctly.</p>
<pre>$ sudo modprobe -v r8712u</pre>
<p>You should see the driver being loaded by looking at the output of the <strong>dmesg</strong> command.</p>
<pre>$ dmesg
[  104.386766] r8712u: module is from the staging directory, the quality is unknown, you have been warned.
[  104.393694] r8712u: DriverVersion: v7_0.20100831
[  104.393728] r8712u: register rtl8712_netdev_ops to netdev_ops
[  104.393735] r8712u: USB_SPEED_HIGH with 4 endpoints
[  104.394644] r8712u: Boot from EFUSE: Autoload OK</pre>
<p>It is important that the system loads the driver every time we boot the system, so we will tell the kernel to load this module whenever it starts up.</p>
<pre>$ nano /etc/modules
# /etc/modules: kernel modules to load at boot time.
#
# This file contains the names of kernel modules that should be loaded
# at boot time, one per line. Lines beginning with "#" are ignored.

r8712u
</pre>
<p>The last step is to configure wireless networking. This is done by editing the config file /etc/network/interfaces</p>
<pre>$ nano /etc/network/interfaces
allow-hotplug wlan0
auto wlan0
iface wlan0 inet dhcp
wireless-power off
wpa-ssid "myssid"
wpa-psk "this is a secret passphrase"</pre>
<p>After a reboot you should have a complete working wireless connection on your Raspberry PI with the Sitecom N150 USB Wifi Adapter.</p>
