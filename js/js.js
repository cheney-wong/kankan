$(function(){
	var timer = '';//定时器
	var i = 0;
	// input表单获得焦点
	$('.search_text').focus(function(){
		$(this).attr('value','');
		$(this).removeClass().addClass('blue');
	})
	//iput表单失去焦点
	$('.search_text').blur(function(){
		$(this).removeClass('blue').addClass('search_text');
	})

	//轮换版
	function move(){
		if(i>11) {
			i = 0;
		}
		var backImg = $('.smal_pic li').eq(i).find('img').attr('backImg');
		var backColor = $('.smal_pic li').eq(i).find('img').attr('backColor');
		var background = 'url(' + backImg + ') ' + 'no-repeat center ' + backColor;
		$('#focus_background').css({background : background});
		$('.smal_pic li').eq(i).addClass('hover').siblings().removeClass('hover');
		i++;
	}

})