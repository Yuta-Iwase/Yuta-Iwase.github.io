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
