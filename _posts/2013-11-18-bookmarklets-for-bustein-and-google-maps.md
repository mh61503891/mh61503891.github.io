---
layout: post
title: "バス停検索とGoogleマップを行ったり来たりするブックマークレットを作りました。"
description: "Googleマップからバス停検索へジャンプして周辺検索したり、バス停検索からGoogleマップへジャンプしてピンを立てるブックマークレットを作りました。"
category:
image: "/images/icon-180x180.jpg"
tags: [Google,Googleマップ,バス停,バス,Bookmarklet,JavaScript]
---
{% include JB/setup %}

出張や旅行へ行く際に、Googleマップのマイマップに一通りピンを立てる人は居ませんか？自分がそうです。旅程を一通り把握しておかないと不安です。旅程を提案する立場であれば、不安でなくても把握しておく必要がありますし、旅程を共有する方法としてマイマップは便利です。

Googleマップの乗換案内は、[一部のバス会社に対応](http://googlejapan.blogspot.jp/2012/09/google.html)していますが、検索結果に出てこない未対応のバス停が沢山あるように思います。また、[Foursquare](https://ja.foursquare.com/)などでも主要なバス停しかスポットとして登録されておらず、各地に点在しているバス停はランドマークとして認識されていないのが現状です。

一方で[バス停検索](http://buste.in/search/bus/)は、[「国土数値情報(バス停留所データ)国土交通省(平成22年度(2010年)作成)」](http://nlftp.mlit.go.jp/ksj/)のバス停留所データを検索できるサービスで、現状ではGoogleマップやFoursquareよりも多くのバス停を検索できると思われます。しかし、Googleマップのマイマップへピンを立てようとすると、手作業ではかなり手間がかかります。

そこで、バス停検索とGoogleマップを相互に移動するためのブックマークレットを作成しました。（たいしたものではありませんが^^）

以下はGoogleマップからバス停検索スマホ版へ新しいウィンドウを開いてジャンプするブックマークレットです。Googleマップで目的地周辺からバス停を検索する時に役立ちます。
{% gist 7525634 google_maps_to_buste_in.js %}

以下はバス停検索の詳細情報のページからGoogleマップへ新しいウィンドウを開いてジャンプするブックマークレットです。ジャンプ後はバス停名の付いた吹き出しが開くので、そこからマイマップへ簡単に追加できます。
{% gist 7525646 buste_in_to_google_maps.js %}

簡単ながら、わりと実用的なので使ってもらえれば幸いです。

## 2013-11-18 追記

ブックマークレットの使い方に関して追記します。

ブックマークレットとはWebブラウザのブックマークなどから起動できる簡易的なプログラムです（[Wikipedia](http://ja.wikipedia.org/wiki/%E3%83%96%E3%83%83%E3%82%AF%E3%83%9E%E3%83%BC%E3%82%AF%E3%83%AC%E3%83%83%E3%83%88)）。

### ブックマークレットのインストール

Webブラウザにブックマークレットをインストールする方法は以下のとおりです。

- **Internet Explorerの場合:** ブックマークレットのリンクを右クリックして「お気に入りに追加」してください。
- **Firefoxの場合:** ブックマークレットのリンクを右クリックして「このリンクをブックマーク」してください。
- **Google Chromeの場合:** ブックマークレットのリンクをブックマークバーにドラッグアンドドロップしてください。

### ブックマークレットのリンク

- <a href="javascript:(function(){javascript: (function() {var lat = gApplication.getMap().getCenter().lat();var lng = gApplication.getMap().getCenter().lng();var url = 'http://buste.in/search/bus/sp/?p1=map1&lat1=' + lat + '&lng1=' + lng;window.open(url);})();})();">Googleマップからバス停検索へジャンプ</a>
- <a href="javascript:(function(){javascript: (function() {if (document.location.href.indexOf('http://buste.in/') >= 0 && location.href.indexOf('id') >= 0) {var center = map.center.toUrlValue();var name = document.getElementsByName('keywords')[0].content.split(',').shift();var url = 'http://maps.google.com/maps?q=' + center + encodeURI('(' + name + ')') + '&iwloc=A';window.open(url);} else {alert('%E3%83%90%E3%82%B9%E5%81%9C%E7%95%99%E6%89%80%E3%81%AE%E8%A9%B3%E7%B4%B0%E6%83%85%E5%A0%B1%E3%81%AE%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%A7%E5%AE%9F%E8%A1%8C%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82');};})();})();">バス停検索からGoogleマップへジャンプ</a>

### ブックマークレットの呼び出し

- **Googleマップからバス停検索へジャンプ:** Googleマップでバス停を調べたい場所にズームして、ブックマークに登録した「Googleマップからバス停検索へジャンプ」をクリックしてください。
- **バス停検索からGoogleマップへジャンプ:** バス停留所の詳細情報のページ（例えば[このようなページ](http://buste.in/search/bus/?id1=n414&id2=31)です。）でブックマークに登録した「バス停検索からGoogleマップへジャンプ」をクリックしてください。

