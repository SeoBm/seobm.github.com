$(document).ready(function(){
	var profileCss = $('.profile').css("backgroundColor");
	var profileImgCss = $('.profileImg').css("marginLeft");
	var imgCircleCss = $('.img-circle').css("width");
	var profileTextCss = $('.profileText').css("marginLeft");
	var profileTextCss2 = $('.profileText').css("opacity");
	var infoMeCss = $('.infoMe').css("opacity");
	var infoMeCss2 = $('.infoMe').css("height");
	
	function hoverFunc() {
		$('.profile').css("backgroundColor","rgba(150,150,150,0)")
		$('.profile').css("cursor","default")
		$('.profileImg').css("marginLeft","0%")
		$('.img-circle').css("width","50%")
		$('.profileText').css("marginLeft","450px")
		$('.profileText').css("opacity","1")
		$('.infoMe').css("opacity","1")
		$('.infoMe').css("height","1000px")
		$('.fold').css({
			"opacity" : "1",
			"height" : "auto"
		})
	}
	$('.profile').hover(
		function(){
			{
				hoverFunc();
			}
		})
	$('.fold').click(
		function(){
			$('.profile').css("backgroundColor",profileCss)
			$('.profile').css("cursor","pointer")
			$('.profileImg').css("marginLeft",profileImgCss)
			$('.img-circle').css("width",imgCircleCss)
			$('.profileText').css("marginLeft",profileTextCss)
			$('.profileText').css("opacity",profileTextCss2)
			$('.infoMe').css("opacity",infoMeCss)
			$('.infoMe').css("height",infoMeCss2)
			$(this).css({
				"opacity" : "0",
				"height" : "0"
			})
		})
	$('#myTab a').click(function(e){
		e.preventDefault();
		$(this).tab('show');
	})
	$(".fold").mouseover(function(){
		$(".fold").attr("src","img/topBtn_2.png");
	}).mouseout(function(){
		$(".fold").attr("src","img/topBtn_1.png");
	});
});