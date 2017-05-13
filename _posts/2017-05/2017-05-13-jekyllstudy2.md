---
layout: post
category: jekyll
title: Jekyll学習2
---
[翻訳サイト](http://jekyllrb-ja.github.io/)などを読みながらJekyllの学習を進めます。備忘のためメモします。

## 設定項目
設定ファイルにタブを使わない。スペースを使用する。  
[デフォルト設定値](http://jekyllrb-ja.github.io/docs/configuration/)はリンク先を参照。  
Redcarpetについての説明もあるがまだ理解できないので保留。  

## Front-matter
■ グローバル変数  
layout：_layoutsディレクトリに配置したレイアウトファイル名を、拡張子なしで指定する。  
category, categories, tags：YAML listまたは、スペースで分けられた文字列を指定する。  
■ カスタム変数  
タイトルなどに利用  

## Post
■ Postファイル  
ファイル名は YEAT-MONTH-DAY-title.拡張子  
post_urlタグ：別ポストへのリンク。パーマリンク変更時に良さそう。  
使ってみる　前回記事は[こちら]({% post_url /2017-04/2017-04-27-jekyllstudy %})  
※Postのサブディレクトリ名があれば指定する。拡張子は不要。  
■ 画像やリソース
※Cloud9への画像アップロード方法：PCからドラッグ＆ドロップで良いらしい。  
1：画像を表示
![テスト画像]({{ site.url }}/assets/2017-05/20170513 test.png)  
2：リンク
[画像をダウンロード]({{ site.url }}/assets/2017-05/20170513 test.png)   
3：site.url変数を除去した場合  
![テスト画像](/assets/2017-05/20170513 test.png)  
[画像をダウンロード](/assets/2017-05/20170513 test.png)  
4：site.baseurlでも動作確認  
![テスト画像]({{ site.baseurl }}/assets/2017-05/20170513 test.png)  
[画像をダウンロード]({{ site.baseurl }}/assets/2017-05/20170513 test.png)  
