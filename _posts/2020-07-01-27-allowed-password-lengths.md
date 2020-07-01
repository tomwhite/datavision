---
layout: post
title:  "27. Allowed password lengths"
tags: d3
---

Some websites have [very strict limitations](https://twitter.com/SwiftOnSecurity/status/1270082231877263360) on the passwords they allow, making it almost impossible for the user to choose a password that conforms to their rules.

Apple maintains an [open source database of password rules](https://github.com/apple/password-manager-resources) for various websites (currently over 100) so that password manager programs can generate valid passwords according to each site's rules. This week's visualization shows the allowed lengths for passwords for each site in the database. (Other rules such as allowed characters are not shown on the chart.)

<a href="{{ site.url }}{{ site.baseurl }}/27-allowed-password-lengths-interactive.html"><img src="{{ site.url }}{{ site.baseurl }}/assets/img/27-allowed-password-lengths.png" alt="Allowed password lengths"/></a>

[Click for a [larger version]({{ site.url }}{{ site.baseurl }}/27-allowed-password-lengths-interactive.html).]

It's surprising that so many sites enforce maximum lengths - 16 characters is a common choice - when there is no reason to do this (storing more characters takes a tiny amount of space). Not having a minimum length is a poor choice too, since it means people can choose very weak passwords.

**Visualization type**: isotype chart

**Data source**: [Apple Password Manager Resources - password rules](https://github.com/apple/password-manager-resources/blob/main/quirks/password-rules.json), JSON, 13 KB

**Technical notes**: generated using [d3](https://d3js.org/); [code](https://github.com/tomwhite/datavision-code/tree/master/27-allowed-password-lengths)
