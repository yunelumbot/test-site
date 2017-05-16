---
layout: post
category: info
title: flexslider
---
[GMOクリック証券](https://www.click-sec.com/corp/company/commercial/special/)さんの、新垣結衣さんCMスペシャルサイトがとても素敵なので、真似してflexsliderを使おうとしたところ、つまづいた。以下、手順の記録。

htmlのタグにクラス名を書くので、マークダウンではなく直書きした。jQueryのソースコードはCloud9上では警告マークが出るようだったが、pushしてブラウザ上で見ると問題なく動く。

[stackoverflow](http://stackoverflow.com/questions/38650315/why-window-load-is-not-working-in-jquery)によると

> You're using jQuery version 3.1.0 and the load event is deprecated for use since jQuery version 1.8. The load event is removed from jQuery 3.0. Instead you can use on method and bind the JavaScript load event:

ということなので、参考にしたサイトのload処理がまずかったらしく、最初は警告が出ていた。

また、もう一つ警告が出ていて、[stackoverflow](http://stackoverflow.com/questions/38647190/jquery-animate-is-not-a-function)によるとjQueryのfull versionを取得すると解決することがありそうだった。実際、ファイルサイズが小さいのかな？と思ってよく分からずにslim versionを取っていたため、full versionを取得し直すことでflexsliderが機能するようになった。