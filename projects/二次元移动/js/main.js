//swiper动画
scaleW=window.innerWidth/320;
scaleH=window.innerHeight/480;
var resizes = document.querySelectorAll('.resize');
for (var j=0; j<resizes.length; j++) {
	resizes[j].style.width=parseInt(resizes[j].style.width)*scaleW+'px';
   	resizes[j].style.height=parseInt(resizes[j].style.height)*scaleH+'px';
   	resizes[j].style.top=parseInt(resizes[j].style.top)*scaleH+'px';
   	resizes[j].style.left=parseInt(resizes[j].style.left)*scaleW+'px'; 
}
var mySwiper = new Swiper ('.swiper-container', {
	direction : 'vertical',
	pagination: '.swiper-pagination',
	//virtualTranslate : true,
   mousewheelControl : true,
   onInit: function(swiper){
   swiperAnimateCache(swiper);
   swiperAnimate(swiper);
	  },
   onSlideChangeEnd: function(swiper){
	swiperAnimate(swiper);
    },
	onTransitionEnd: function(swiper){
	swiperAnimate(swiper);
   },
	watchSlidesProgress: true,

	onProgress: function(swiper){
		for (var i = 0; i < swiper.slides.length; i++){
  			var slide = swiper.slides[i];
 			var progress = slide.progress;
  			var translate = progress*swiper.height/4;  
  			scale = 1 - Math.min(Math.abs(progress * 0.5), 1);
  			var opacity = 1 - Math.min(Math.abs(progress/2),0.5);
  			slide.style.opacity = opacity;
  			es = slide.style;
  			es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0,'+translate+'px,-'+translate+'px) scaleY(' + scale + ')';
		}
	},
   	onSetTransition: function(swiper, speed) {
    	for (var i = 0; i < swiper.slides.length; i++){
      		es = swiper.slides[i].style;
	  		es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
    	}
 	},
})
//swiper动画  end
/*弹窗*/
$MsgBox={
	Alert:function(msg){
		MsgHtml("alert",msg);
	}
}
var MsgHtml=function(type,msg){
	var _html="";
	_html += '<div class="register_mas">'+msg+'</div>';
	if(type == "alert"){
		_html += '';
	}
	$("body").append(_html); //将_html添加到body里面
}
$(function(){
	$(".p1_but").click(function(){
		$(".p1_rules").css("opacity",1);
		$(".p1_rules").css("z-index",10);
	})
	$(".rules_icon").click(function(){
		$(".p1_rules").css("opacity",0);
		$(".p1_rules").css("z-index",0);
	})
	//点赞
	var zan_ind=1;
	var popup1_number=$("#popup1_number").text();	//获取弹窗1数字
	var popup1_txt=$("#popup1_txt").html();   //获取弹窗1职位
	$(".zan").click(function(){
		$(this).children(".zan_hover").fadeIn();	//点赞后的效果
		if(zan_ind==1){	//点击第1次的时候
			if($(this).attr("id") == "zan1"){
				popup1_number++;
				$("#popup1_number").text(popup1_number);
				$("#popup1_txt").html("数据架构狮");
			}else if($(this).attr("id") == "zan2"){
				popup1_number++;
				$("#popup1_number").text(popup1_number);
				$("#popup1_txt").html("数据建模狮");
			}else if($(this).attr("id") == "zan3"){
				popup1_number++;
				$("#popup1_number").text(popup1_number);
				$("#popup1_txt").html("UI射击狮");
			}else{
				popup1_number++;
				$("#popup1_number").text(popup1_number);
				$("#popup1_txt").html("产品锦鲤");
			}
			setTimeout(function(){
				$(".popup1").fadeIn();
			},500)
			
			zan_ind++;
		}else if(zan_ind==2){	//点击第2次的时候
			//alert("2");
			setTimeout(function(){
				$(".popup2").fadeIn();
			},500)
			//zan_ind++;
			return false;
		}else{	//点击第3次的时候
			//alert("3");
		}
		//
	})
	//提交
	$(".zj_but").click(function(){
		var phone=$(".zj_inp").val();
		var phoneReg=/^1[34578]\d{9}$/;
		if(!phoneReg.test(phone)){
			$MsgBox.Alert("请输入正确的手机号哦！亲");
			setTimeout(function(){$(".register_mas").hide()},20000);
		}else{
			$MsgBox.Alert("恭喜亲，提交成功了耶！");
			setTimeout(function(){$(".register_mas").hide()},2000);
		}
	})
})

/*信息条*/
function b(){	
	t = parseInt(x.css('top'));
	y.css('top','60px');	
	x.animate({top: t - 34 + 'px'},'slow');	//19为每个li的高度
	if(Math.abs(t) == h-34){ //19为每个li的高度
		y.animate({top:'0px'},'slow');
		z=x;
		x=y;
		y=z;
	}
	setTimeout(b,3000);//滚动间隔时间 现在是3秒
}
$(document).ready(function(){
	$('.swap').html($('.news_li').html());
	x = $('.news_li');
	y = $('.swap');
	h = $('.news_li li').length * 34; //19为每个li的高度
	setTimeout(b,2000);//滚动间隔时间 现在是3秒
})