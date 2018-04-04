
$(function(){
	$(function(){
		//console.log($(window).outerHeight());
		var winHeight;
		if($(window).outerHeight() <=833){
			winHeight = 833;
		}else{
			winHeight = $(window).outerHeight();
		}
		
		$('.main,.con').height(winHeight);
		var startY,moveY="",startX,moveX="",page = $('.page'),dom = $('.main'),nowNum = 0,deg = 0,con = $(".con"),arrowL = $(".arr")
			con_length = con.length,round_= $(".lx_round");
		function l_start(e2){
			startY = e2.originalEvent.touches[0].pageY || e2.originalEvent.changedTouches[0].pageY;
			page.on("touchmove",function(evt){
				moveY = evt.originalEvent.touches[0].pageY || evt.originalEvent.changedTouches[0].pageY;
				return false;
			});
		}
				
		var l_end =function(){
			page.off("touchmove");
			if(moveY - startY > 150&&""!==moveY&&""!==startY){
				slither_l();
			}else if(moveY - startY < -150&&""!==moveY&&""!==startY){
				slither_r();
			}
			moveY = startY = moveY = startY = "";
		}
		
		
		var zIndex = 10;
		function slither_r(){
			arrowL.addClass("paused")
			setTimeout(function(){arrowL.removeClass("paused");$(con[nowNum]).find("p").addClass("MoveInTop").css("z-index",zIndex);con.not(con[nowNum]).find("p").removeClass("MoveInTop")},1000)
			nowNum++;
			zIndex++;
			$(con[nowNum-1]).removeClass("InTop").removeClass("InBottom");
			if(nowNum>=con_length) nowNum = 0;
			$(con[nowNum]).addClass("InTop").css("z-index",zIndex)
			
		}
		
		function slither_l(){
			arrowL.addClass("paused");
			setTimeout(function(){arrowL.removeClass("paused");$(con[nowNum]).find("p").addClass("MoveInTop").css("z-index",zIndex);con.not(con[nowNum]).find("p").removeClass("MoveInTop")},1000)
			nowNum--;
			zIndex++;
			$(con[nowNum+1]).removeClass("InTop").removeClass("InBottom");
			if(nowNum<0) nowNum = con_length - 1;
			$(con[nowNum]).addClass("InBottom").css("z-index",zIndex);
		}
		$(".arrow").click(function(){
			slither_r();	
		})
		var audio = document.getElementById('audio');
		var nav = $(".skip_nav div"),ad_hidden_,
		ad_hidden = setTimeout(ad_hidden_ =  function(){
				clearTimeout(ad_hidden);
				$("section").removeClass("none");
				$(".G_ad").addClass("adHidden");
				$(".con").removeClass("none");
				nav.removeClass("paused");
				setTimeout(function(){
				$(con[nowNum]).find("p").addClass("MoveInTop")
				$(".G_ad").addClass("none");
				$(".arrow").addClass("block");
				page.on("touchstart",l_start).on("touchend",l_end);},1300)},3500) ;		
		
		$(".G_ad img").load(function(){
			ad_hidden;
		})	

	$(".on").click(function(){
		if($(this).hasClass("paused")){
			audio.play();
			$(this).removeClass("paused");	
		}else if(!$(this).hasClass("paused")){
			audio.pause();
			$(this).addClass("paused");	
		}
	})
	
	$(audio).bind("ended",function(){
		$(".on").removeClass("paused rotate")
	})
	$(audio).bind("playing",function(){
		audio.play();
		//alert("")
	})
	})
});

// 填写姓名确认提交
$(function(){
	
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

$("#d_sign_in").click(function(){
		var name2Val=$("#d_name").val();
		
		if(name2Val== ""){
			$MsgBox.Alert("请输入正确的姓名");
			setTimeout(function(){$(".register_mas").hide()},1000);
		}else if(!name2Val== ""){
			// Ta名字获取的值
			var name_title=$("#d_name").val();
        	window.location.href='time.html';  
		}
	})
	
});

