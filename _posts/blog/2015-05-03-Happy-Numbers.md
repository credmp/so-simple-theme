---
layout: post
title: "Happy Numbers"
modified:
categories: blog
excerpt:
tags: [Code, Clojure]
image:
  feature:
date: 2015-05-03T08:30:50+01:00
---

Over at [Hacker News](http://news.ycombinator.com) an article was posted called [Embarrassing code I wrote under stress at a job interview](http://www.smashcompany.com/technology/embarrassing-code-i-wrote-under-stress-at-a-job-interview). In it the author describes some code he wrote while doing a job interview. He was obviously not very happy with it, hence the **embarrassing** of the title. The problem which he was asked to solve was called **happy number**s.

[Wikipedia](http://en.wikipedia.org/wiki/Happy_number#cite_note-1) describes the a happy number as follows:

> A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)

So, as I am learning `clojure` I figured I would give it a go as well. Luckily for me nobody was looking of my shoulder and I have access to the internet, so I could go and find some information about things like `recur` and `filter`.

{% highlight clojure %}
(defn str->int [s]
  (- (int s) 48))

(defn pow [x]
  (* x x))

(defn make-happy [n]
  (reduce + (map #(pow (str->int %)) (seq (str n))))
  )

(defn is-happy-number?
  ([n] (is-happy-number? n nil))
  ([n acc]
   (let [happy (make-happy n)]
     (if (= happy 1)
       true
       (let [found (filter #(= happy %) acc)]
         (if (empty? found)
           (recur happy (cons happy acc))
           false)))))
  )
{% endhighlight %}

You can use this code in a variety of ways, which is always nice. Here are some examples:

{% highlight clojure %}
;; check if the power and addition work as expected
(make-happy 19) => 82
(make-happy 100) => 1

;; 19 goes to 82 to 68 to 100 to become 1
(is-happy-number? 19) => true
;; 73 is a sad number 
(is-happy-number? 73) => false

;; Lets check out all the numbers between 1 and 100
(map is-happy-number? (range 1 100)) => (true false false false false false true false false true false false true false false false false false true false false false true false false false false true false false true true false false false false false false false false false false false true false false false false true false false false false false false false false false false false false false false false false false false true false true false false false false false false false false true false false true false false false true false false false false true false false true false false true false false)
{% endhighlight %}

If you have any feedback on the code, please post a comment below! I would greatly appreciate the feedback.
