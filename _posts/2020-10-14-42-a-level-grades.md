---
layout: post
title:  "42. A Level grades"
tags: d3
---

A Levels have been in the news this year, due to how the government mismanaged the process after
the exams were cancelled as a result of Covid-19.

At first, the grades were assigned by an algorithm, until the government backed down after a huge outcry
over unfairness, and allowed the teacher predicted grades to stand. (A lot has been written about this;
Hannah Fry has some good links [here](https://twitter.com/FryRsquared/status/1295307556332634112).)

This week's visualization shows the grade proportions over the years:

<a href="{{ site.url }}{{ site.baseurl }}/42-a-level-grades-interactive.html"><img src="{{ site.url }}{{ site.baseurl }}/assets/img/42-a-level-grades.svg" alt="A Level grades"/></a>

(The [interactive version]({{ site.url }}{{ site.baseurl }}/42-a-level-grades-interactive.html) allows you to hover to see the percentage for a grade in a given year.)

Up until 1986 grades were [norm-referenced](https://en.wikipedia.org/wiki/Norm-referenced_test), so the top 10% were awarded an A, the next 15% a B, etc. Then from 1987 grades were awarded according to specific criteria, so the proportion of students being awarded a grade could change from year to year.

In 2002 the N grade ("nearly passed") was retired, and in 2010 the A* grade was introduced.

The chart has two entries for 2020: one for the algorithm and one for teacher grades. This shows that
while the algorithmically assigned grades may have been consistent with previous years in a statistical
sense, it disguises the unfairness at an individual level.

**Visualization type**: stacked bar chart

**Data source**: [Student Performance Analysis](http://www.bstubbs.co.uk/a-level/analysis2.htm) by Brian Stubbs (fixed width format, 2.2 KB)

**Technical notes**: generated using [d3](https://d3js.org/); [code](https://github.com/tomwhite/datavision-code/tree/master/42-a-level-grades)

**See also**: [GCE Advanced Level (United Kingdom)](https://en.wikipedia.org/wiki/GCE_Advanced_Level_(United_Kingdom)), Wikipedia
