$(function(){
	//开始按钮
	$(".p1_but1").click(function(){
		$(".p1_div").fadeOut();
		$(".p2_div").fadeIn();
		$(".p2_djs").fadeIn();
		setTimeout(function(){
			$(".p2_djs").fadeOut();
			ganme();
		},2000)
	})
	//活动规则
	$(".p1_but2").click(function(){
		$(".r_div").addClass("fadeInDown");
		$(".r_div").css("z-index",99);
	})
	$(".r_div").click(function(){
		$(".r_div").addClass("fadeOutDown");
		$(".r_div").removeClass("fadeInDown");
	})
	//我的奖品按钮
	$(".p1_but3").click(function(){
		$(".my_jp").addClass("fadeInDown");
		$(".my_jp").css("z-index",99);	
		$(".my_jp_ul").append("<li><img src='img/lq_jp1.png'/></li>");
		//未领取按钮
		$(".my_jp_wlq_but").click(function(){
			$(".my_jp_db1").addClass("hide");
			$(".my_jp_db2").removeClass("hide");
		})
		//我知道了  按钮
		$(".my_jp_ylq_but").click(function(){
			$(".my_jp").addClass("fadeOutDown");
			$(".my_jp").removeClass("fadeInDown");
		})
		//奖品领取
		$(".my_jp_ul li").on("click",function(){
			$(this).css("opacity","0.65");d
		})
	})
	//点击抽奖
	$(".succes_but").click(function(){
		$(".succes").hide();
		$(".my_cj").fadeIn();
	})
	//中奖页面点击领取
	$(".my_jp_zj_but1").click(function(){
		
		$(".my_jp_zj_but1").addClass("hide");
		$(".my_jp_zj_but2").removeClass("hide");
	})
	//分享
	$(".my_jp_zj_but2").click(function(){
		$(".my_cj").hide();
		$(".share").removeClass("hide")
	})
//	setTimeout(function(){
//		$(".p2_djs").fadeOut();
//		ganme();
//	},2000)
	//开始游戏
	function ganme() {
	    var times = 10 * 100; // 45秒
		countTime = setInterval(function() {
			var gameNum = $("#Number").text();
			times = --times < 0 ? 0 : times;
			var ms = Math.floor(times / 100).toString();
			if(ms.length <= 1) {
				ms = "0" + ms;
			}if(times == 0) {
				if(gameNum <8 && gameNum >= 0){
					$(".fail").fadeIn();  //失败页面
				}else{
					$(".succes").fadeIn();
				}
				clearInterval(countTime);	//停止计时
				clearInterval(imgSRc);	//停止闪烁
			}
		}, 10);
	    //星星闪烁+点击
	    var imgarry = [];
   		imgarry[0] = "img/p2_x2.png";
   		imgarry[1] = "img/p2_x2.png";
   		imgarry[2] = "img/p2_x2.png";
   		imgarry[3] = "img/p2_x2.png";
   		imgarry[4] = "img/p2_x2.png";
   		imgarry[5] = "img/p2_x2.png";
   		imgarry[6] = "img/p2_x1.png";
   		imgarry[7] = "img/p2_x2.png";
   		imgarry[8] = "img/p2_x2.png";
   		imgarry[9] = "img/p2_x2.png";
   		imgarry[10] = "img/p2_x1.png";
   		imgarry[11] = "img/p2_x2.png";
   		imgarry[12] = "img/p2_x2.png";
   		imgarry[13] = "img/p2_x2.png";
   		var Number = 0;
		imgSRc = setInterval(function(){
			$(".star_icon li").each(function(index, el) {
				randomimg(imgarry,$(this).children("img"))
			});
		},600)
		function randomimg(imgunm,that){
		    that.attr("src",imgunm[Math.ceil(Math.random()*imgunm.length-1)])
		};
		$(".star_icon li").on("click",function(){
			var liImgsrc = $(this).find("img").attr("src");
			if(liImgsrc === "img/p2_x1.png"){
				Number++;
				addProduct(event);
				$(".p2_img_number").show();
				$(".p2_img_number").addClass("pulse");
				$("#Number").text(Number);
			}else{
				console.log(liImgsrc);
			}
			if(Number == 8){
				clearInterval(countTime);	//停止计时
				clearInterval(imgSRc);	//停止闪烁
				$(".succes").fadeIn();
			}
		})
		
//		function addProduct(event) {
//			var offset = $('#end').offset(), flyer = $('<img class="end_img" src="img/p2_x1.png"/>');
//			flyer.fly({
//			    start: {
//			        left: event.pageX,
//			        top: event.pageY
//			    },
//			    end: {
//			        left: offset.left,
//			        top: offset.top,
//			        width: 0,
//			        height: 0,
//			        opacity:0
//			    }
//			});
//		}
		
		function addProduct(event) {
			var offset = $('#end').offset(), flyer = $('<img class="end_img" src="img/p2_x1.png"/>');
			flyer.fly({
			    start: {
			        left: event.pageX,
			        top: event.pageY
			    },
			    end: {
			        left: offset.left,
			        top: offset.top,
			        width: 20,
			        height: 20
			    }
			
			});
		
		}
		
	}
	    
})
