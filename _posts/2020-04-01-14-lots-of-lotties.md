---
layout: post
title:  "14. Lots of Lotties: 5K runs in 2019"
tags: d3
---

My younger daughter Lottie got into running last year, so I wanted to do a visualization of her running data. Neither of us wanted it to be about speed or just the numbers, so I came up with the idea of showing her doing all her 5K runs *at once*. The result is an animation of lots of Lotties running roughly the same 5K stretch at the same time.

<a href="{{ site.url }}{{ site.baseurl }}/14-lots-of-lotties-interactive.html"><img src="{{ site.url }}{{ site.baseurl }}/assets/img/14-lots-of-lotties.svg" alt="Lots of Lotties: 5K runs in 2019"/></a>

[Click on the image for the [animated version]({{ site.url }}{{ site.baseurl }}/14-lots-of-lotties-interactive.html).]

In the animated version, if you hover your mouse on one of the coloured circles in the legend it dims all of the other runners so you can watch the one you are interested in.

The animation is speeded up by a factor of 60, so one minute in real life takes one second in the animation. You can also see some dodgy GPS readings, a few runs are on a different track, which is not possible since the route is along a canal towpath, and in fact Lottie was complaining about the GPS being out at the time. I could have filtered out these "bad" tracks, but I decided to leave them in since they are interesting. You can also see that sometimes she started and ended her runs from a different place.

Technically this was quite a challenge for me, since this is the first animated visualization I have done. The library I used, d3, provides a lot of help for doing transitions, which helped me produce something I'm pleased with. I'm indebted to [this example](http://bl.ocks.org/explunit/6082362), which I used as the basis of my animation. d3 is turning out to be a very powerful visualization tool.

**Visualization type**: animated geolocation tracks

**Data source**: [Strava](http://strava.com/) export, CSV, 79 KB

**Technical notes**: generated using [d3](https://d3js.org/); [code](https://github.com/tomwhite/datavision-code/tree/master/14-lots-of-lotties)

**See also**: [Chained transitions between points on a path/line](http://bl.ocks.org/explunit/6082362)
