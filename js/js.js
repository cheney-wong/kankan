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
	$('.smal_pic li').mouseover(function(){
		clearInterval(timer);
		var backImg = $(this).find('img').attr('backImg');
		var backColor = $(this).find('img').attr('backColor');
		var background = 'url(' + backImg + ') ' + 'no-repeat center ' + backColor;
		$('#focus_background').css({background : background});
		$(this).addClass('hover').siblings().removeClass('hover');
		i = $(this).index();
	})

	//移出小图片开启定时器
	$('.smal_pic li').mouseout(function(){
		timer = setInterval(move,1000);
	})

	timer = setInterval(move,1000);

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

	// 图片hover公共效果
	$('a.pic').hover(function(){
		$(this).addClass('apic_hover');
	}, function(){
		$(this).removeClass('apic_hover');
	})

	// 今日热播左边的tab切换效果
	$('.hot_box .tabbox a').mouseover(function(){
		$(this).addClass('hot_style').siblings('a').removeClass('hot_style');
		var cur = $(this).index();
		$('.hot_box .hot_left ul').eq(cur).show().siblings('ul').hide();
	})






})

