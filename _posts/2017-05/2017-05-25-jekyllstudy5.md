---
layout: post
category: jekyll
title: Jekyll学習5
---
[翻訳サイト](http://jekyllrb-ja.github.io/)などを読みながらJekyllの学習を進めます。備忘のためメモします。

ページネーションはサンプルコードを参考に取り組んでみたけど、以下のエラー。とりあえず保留。

> Deprecation: You appear to have pagination turned on, but you haven't included the `jekyll-paginate` gem. Ensure you have `gems: [jekyll-paginate]` in your configuration file.

トラブルシューティングに「Base-URLの問題」が記載されていた。以前Not Foundになっていた以下のコードを再実行すると、なぜか見れるようになっていた。解決理由不明。  
`jekyll serve --host $IP --port $PORT --baseurl ''`

まだまだ分からない点も多いけど、とりあえずサイトが作成できるようになって良かったです。これからも時々改良を試みます。

* [Jekyll学習]({{ site.baseurl }}{% post_url /2017-04/2017-04-27-jekyllstudy %})
* [Jekyll学習2]({{ site.baseurl }}{% post_url /2017-05/2017-05-13-jekyllstudy2 %})
* [Jekyll学習3]({{ site.baseurl }}{% post_url /2017-05/2017-05-18-jekyllstudy3 %})
* [Jekyll学習4]({{ site.baseurl }}{% post_url /2017-05/2017-05-24-jekyllstudy4 %})