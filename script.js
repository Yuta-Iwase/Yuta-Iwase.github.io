// スクロールの設定
// 参考: http://klutche.org/archives/536/
$(function(){
	$('a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});

// 年が変わったときに自動的に年を更新させる
var currentYear = new Date().getFullYear()
if(currentYear > 2018){
	document.getElementById("footer2_toYear").innerHTML= "-" + currentYear;
}

// メアド収集に対する対策スクリプト
// javascriptでアドレスを打ち込む
// このとき文字はASCIIコードで表現される
// 参考: https://allabout.co.jp/gm/gc/23933/6/
var ma = String.fromCharCode(70 - 21, 39 + 12, 126 - 11, 38 + 11, 71 - 23, 17 + 31, 61 - 9, 108 + 2, 69 - 5, 91 + 12, 124 - 15, 77 + 20, 130 - 25, 81 + 27, 66 - 20, 86 + 13, 113 - 2, 96 + 13);
var mt = String.fromCharCode(142 - 33, 55 + 42, 107 - 2, 81 + 27, 151 - 35, 105 + 6, 107 - 49);
document.getElementById("ys6u2p7k").innerHTML= '<a href="'+ mt + ma + '">' + ma + '</a>';
