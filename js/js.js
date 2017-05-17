$(function(){
	// input表单获得焦点
	$('.search_text').focus(function(){
		$(this).attr('value','');
		$(this).removeClass().addClass('blue');
	})
	//iput表单失去焦点
	$('.search_text').blur(function(){
		$(this).removeClass('blue').addClass('search_text');
	})

})