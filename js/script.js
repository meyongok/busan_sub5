$(function(){
	$(".notice> ul> li> div").click(function(){
		$(this).next().slideToggle();
	});
});
$(function(){
	$(".notice> ul> li> div").click(function(){
		$(this).children().children("img").toggleClass("turn");
	});
});





