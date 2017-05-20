---
layout: post
category: jekyll
title: Jekyll学習3
---
[翻訳サイト](http://jekyllrb-ja.github.io/)などを読みながらJekyllの学習を進めます。備忘のためメモします。

## ドラフト
_draftsフォルダにマークダウンファイルを格納する

## ページ作成
* ルートフォルダ内にHTMLファイルを配置する
* Page用フォルダを作成し、index.htmlファイルを配置する

ワークスペース直下にフォルダ構成を作って.mdファイルを配置すると、ビルド後にフォルダ構成が維持されて_site内にhtmlファイルが格納されているかも？パーマリンクとどちらが適用されているのか未確認。ページが増えてきたら確認予定。

## 変数
気になったもののみ記載  
■グローバル変数  
content：レイアウトファイルで、PostまたはPageのコンテンツをラップ  
paginator：オプション設定時に使用可能らしい。後で出てくるようだ  

■site変数  
site.pages：すべてのPageのリスト  
site.posts：すべてのPostのリスト  
site.categories.CATEGORY：カテゴリがCATEGORYのPostのリスト  
site.tags.TAG：タグがTAGのPostのリスト  

■Page変数  
title, url, date, categories, tags, next, previousなど  

■Paginator変数  
略  