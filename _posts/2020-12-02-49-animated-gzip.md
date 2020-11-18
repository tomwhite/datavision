---
layout: post
title:  "49. Animated gzip"
tags: [d3, defdb]
---

[Gzip](https://www.gnu.org/software/gzip/) is a program for compressing files. One of the techniques used for compression is to look for duplicate parts of the file: if a particular sequence of characters has been seen before, then it can be replaced with a reference pointing back to the previous occurrence so it doesn't have to be written in full again.

This technique (which is a part of the [DEFLATE](https://en.wikipedia.org/wiki/DEFLATE) algorithm) is very effective since many files have repetitive parts - text files have many repeated words for example.

The following visualization shows the gzip representation of a [Markdown file](https://raw.githubusercontent.com/tomwhite/datavision/gh-pages/_posts/2020-03-11-11-hamilton-songs.md) from this blog. (Markdown is a simple text-based format for writing structured text.)

<a href="{{ site.url }}{{ site.baseurl }}/49-animated-gzip-interactive.html"><img src="{{ site.url }}{{ site.baseurl }}/assets/img/49-animated-gzip.png" alt="Animated gzip"/></a>

[Interactive version.]({{ site.url }}{{ site.baseurl }}/49-animated-gzip-interactive.html)

Each character in the text file is coloured according to how well it is compressed in the gzip file. Blue indicates better compression (the darker the better), white means that there is no effective compression (i.e. each character takes 8 bits), and orange indicates worse compression (than no compression). (This compression is achieved by a [separate part of DEFLATE](https://en.wikipedia.org/wiki/DEFLATE#Bit_reduction) that does bit compression on individual characters, not the duplicate sequences mentioned above.)

So the `H` in the first line, for example, is coloured orange, and takes 9 bits to encode it (you can see this by hovering over the character in the [interactive version]({{ site.url }}{{ site.baseurl }}/49-animated-gzip-interactive.html)).

You may wonder why `H` hasn't been compressed well by the algorithm. It's simply because it doesn't appear very often in the document (just twice in this one, compared to dozens of occurrences of lowercase `h`, for example).

Some characters are in blocks of the same colour - this means that they have been recognized as duplicates as explained above. If you click
on them in the interactive version, the previous occurrence is highlighted. For example, the dark blue block containing the characters
`Hamilton` on the third line refers back to the same text at the end of the first line. This back reference means that the second occurrence can be encoded at just 1.8 bits per character.

Clicking on the "Compress" button has the effect of compressing each block visually so that it occupies the amount of space it actually takes up in the gzipped file.

<a href="{{ site.url }}{{ site.baseurl }}/49-animated-gzip-interactive.html"><img src="{{ site.url }}{{ site.baseurl }}/assets/img/49-animated-gzip-compressed.png" alt="Animated gzip (compressed)"/></a>

Notice how `Hamilton` on the third line is compressed a lot more than the one on the first line. 

This visualization was inspired by [gzthermal](https://encode.su/threads/1889-gzthermal-pseudo-thermal-view-of-Gzip-Deflate-compression-efficiency), a command line tool that produces a heatmap image for gzipped files.

**Visualization type**: animated heatmap

**Data source**: [Gzip compressed Markdown of the Hamilton songs blog post](https://github.com/tomwhite/datavision-code/tree/master/49-animated-gzip/data/2020-03-11-11-hamilton-songs.md.gz), gzip, 469 B.

**Technical notes**: generated using [d3](https://d3js.org/) and [defdb](https://encode.su/threads/1428-defdb-a-tool-to-dump-the-deflate-stream-from-gz-and-png-files); [code](https://github.com/tomwhite/datavision-code/tree/master/49-animated-gzip), including brief instructions on how to create an animation for any gzipped file

