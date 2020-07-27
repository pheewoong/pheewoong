$(document).ready(function(){
	$('div.box_tab a.tab_item').hover(function(){
		$(this).siblings().removeClass('on');
		$(this).addClass('on');
	})
});
