---
layout: post
category: jekyll
title: Jekyll学習4
---
[翻訳サイト](http://jekyllrb-ja.github.io/)などを読みながらJekyllの学習を進めます。備忘のためメモします。

## データファイル
_dataディレクトリにYAMLファイルを格納する。ファイルからデータを読み込むことができるらしい。ファイル名が変数名となっている。

## Assets
Sass, CoffeeScriptをサポートしており、.sass, .scss, .coffeeといったファイルを使うことができる。

## テンプレート
■フィルタ  
日付（site.time）を様々な形式に変換できる。ほかに、page.contentやpage.excerptなどについてもいくつかのフィルタがある。  

■タグ  
includeにパラメータを渡すことができる。param="value"の形式で値を渡し、include内で利用できる。  

■コードのハイライト化  
highlightタグによってコードをハイライトできる。  

■PostのURL
post_urlタグを用いる。  

## パーマリンク
以下の変数を使用できる。year, month, i_month (0埋めしない月), day, i_day, short_year (年の下2桁), title, categories。組み込みパーマリンクスタイルの「date」は、/:categories/:year/:month/:day/:title.htmlという形式。  

次回は「ページネーション」以降を読みたいと思います。