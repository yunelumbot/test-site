---
layout: post
category: jekyll
title: Jekyll学習
---
[翻訳サイト](http://jekyllrb-ja.github.io/)などを読みながらJekyllの学習を進めます。備忘のためメモします。

## ディレクトリ構成
_drafts：postsに出力しない。  
_site：生成されたサイトはデフォルトでここに置かれる。.gitignoreファイルに追加した。  
cssやimageフォルダ：そのまま生成したサイトにコピーされる。  

## ビルドコマンドオプション
LSI：関連postsの索引を作成する。ビルドに時間がかかるらしい。  
　最近の投稿で構わないので表示を試みているが、post.urlではプロジェクト名が抜けているようで、うまくいっていない。→ site.baseurlを指定することでリンクが生成できた。

## 未解決
以下の処理でCloud9上でJekyllを動かせるらしいが、Not Foundとなってしまう。  
`jekyll serve --host $IP --port $PORT --baseurl ''`