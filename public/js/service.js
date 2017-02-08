var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
});


wow.init();

$('#j_project li').hover(function(){
	$('.blur_shade').addClass('animated shake');
},function(){
	$('.blur_shade').removeClass('animated shake');
});

//服务范围轮播
$(document).ready(function(){
	var flag = false;
	$('#j_carousel').everyTime('2s', 'scope', function(){
		$("#j_carousel").animate({left: -1200*flag + 'px'}, "slow");
		flag = !flag;
	});
	$('#j_carousel,.hd').hover(function(){
		$('#j_carousel').stopTime('scope');
	},function(){
		$('#j_carousel').everyTime('2s', 'scope', function(){
			$("#j_carousel").animate({left: -1200*flag + 'px'}, "slow");
			flag = !flag;
		});
	});
	$('#j_prev,#j_next').click(function(){
		$('#j_carousel').stopTime('scope');
		$("#j_carousel").animate({left: -1200*flag + 'px'}, "slow");
		flag = !flag;
	});
	//遮罩效果
	$('#j_carousel .picBox li').each(function(i){
		$(this).mousemove(function(){
			var $this=$(this).find("img");
			var oPosition=$(this).position();
			if(i>5){
				oPosition.left = (i%3) * $this.width();
			}
			var _w=$this.width();
			var _h=$this.height();
			$(".mask").stop().animate({
				opacity:1,
				left:oPosition.left,
				top:oPosition.top,
				width:_w,
				height:_h,
				lineHeight:_h+"px",
			},200);
		});
	});

	document.addEventListener('scroll', function () {
        var ser_process = document.querySelector(".ser-process .wrap");
        if(ser_process){
            var rectTop = ser_process.getBoundingClientRect().top;
            if (rectTop - window.innerHeight <= 50) {
                var dataSrc = ser_process.getAttribute('data-src');
                ser_process.setAttribute('style', 'background:url("' + dataSrc + '") no-repeat');
            }
		}
    });
});

/*属性/方法	     类型	 默认值	        说明
boxClass	    字符串	 ‘wow’	 		需要执行动画的元素的 class
animateClass	字符串	 ‘animated’		animation.css 动画的 class
offset	        整数	  0				距离可视区域多少开始执行动画
mobile	        布尔值	  true			是否在移动设备上执行动画
live	        布尔值	  true			异步加载的内容是否有效*/