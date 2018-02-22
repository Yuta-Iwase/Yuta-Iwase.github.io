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
var ma = String.fromCharCode(49,55,110,109,49,48,49,2**6,118,99,46,105,98,97,114,97,107,105,46,97,99,46,106,112);
var mt = String.fromCharCode(100+9,100-3,100+5,100+8,100+4**2,100+121/11,58);
document.getElementById("ys6u2p7k").innerHTML= '<a href="'+ mt + ma + '">' + ma + '</a>';
