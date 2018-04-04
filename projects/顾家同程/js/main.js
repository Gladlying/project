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
	
	$(".p1_but").click(function(){
		$(".p1_div").fadeOut(1000);
		$(".p2_div").fadeIn(1000);
		$(".djs").fadeIn(1000);
		setTimeout(function(){
			$(".djs_txt").hide();
			setTimeout(function(){
				$("#CountDown_num").show();
				sta();
			},500)
		},3000)
	})
	//关闭卡券
	$(".popup2_icon").click(function(){	
		var butLength3 = $(".p2_pop_div_but button").length;
		//console.log(butLength3);
		if(butLength3 >=2 ){
			$(".popup2").css("opacity",0);
			$(".popup2").css("z-index","-10");
		}else{
			$(".succes").fadeIn();
		}
	})
	//关闭领取红包
	$(".p2_pop_icon").click(function(){
		$(".p2_pop").fadeOut();
	})
	//提交信息
	$(".pop1_but").click(function(){
		var txt_inp1 = $(".pop1_tj_txt_inp1").val();
		var txt_inp2 = $(".pop1_tj_txt_inp2").val();
		var txt_inp3 = $(".pop1_tj_txt_inp3").val();
		var pattern = /^[\u4e00-\u9fa5]*$/; //姓名正则
		var telephoneReg=/^1[34578]\d{9}$/;    //手机号
		if(txt_inp1 == "" || txt_inp2 == "" || txt_inp3 == ""){
			$MsgBox.Alert("请输入信息领取礼包哦！");
			setTimeout(function(){$(".register_mas").hide()},2000);
		}else if(!pattern.test(txt_inp1)){
			$MsgBox.Alert("请输入正确的姓名!");
			setTimeout(function(){$(".register_mas").hide()},2000);
		}else if(!telephoneReg.test(txt_inp2)){
			$MsgBox.Alert("请输入正确的手机号!");
			setTimeout(function(){$(".register_mas").hide()},2000);
		}else if(!pattern.test(txt_inp3)){
			$MsgBox.Alert("请输入正确的地址!");
			setTimeout(function(){$(".register_mas").hide()},2000);
		}else{
			$(".popup1").fadeOut();
			setTimeout(function(){
				$(".popup2").css("opacity",1);
				$(".popup2").css("z-index",9);
			},500)
			$(".popup2_icon2").fadeOut(3000);
		}
	})
	//点击拆红包
	$(".p2_hb_num_icon").click(function(){
		$(".p2_pop").fadeIn(1000);
	})
	//返回顾家
	$(".popup3_icon").click(function(){
		$(".popup3").fadeOut();
		$(".popup2").css("opacity",1);
		$(".popup2").css("z-index",10);
		$(".popup2_icon1").show();
	})
	//返回同城
	$(".popup2_icon1").click(function(){
		$(".popup3").fadeIn();
		$(".popup2").css("opacity",0);
		$(".popup2").css("z-index",-10);
	})
    //321倒计时
	function sta() {
	    var num=$('#CountDown_num').text()
	    num=3;
	    $('#CountDown_num').text(num);
		var seti=setInterval(function () {
	        num--;
	        $('#CountDown_num').text(num);
	    },1000)
	    setTimeout(function () {
	        clearInterval(seti);
	        $(".djs").fadeOut();
	        game()
	    },3000)
	};
	//game()
	function game(){
        var u = navigator.userAgent; 
  		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; 
        if(isAndroid){
        	var n=5;   
        }else{
        	var n=9;
        }
		var times = 11 * 100; // 45秒
		countTime = setInterval(function() {
			var p2_hb_num = $("#p2_hb_num").text();
			var butLength4 = $(".p2_pop_div_but button").length;
			//console.log(butLength4);
			times = --times < 0 ? 0 : times;
            //var ms = Math.floor(times / 100).toString();
			//if(ms.length <= 1) {
			//	ms = "0" + ms;
			//}
            if(times == 0) {
				if(p2_hb_num ==0){
					$MsgBox.Alert("抱歉，抢到0个红包，继续加油！");
					setTimeout(function(){$(".register_mas").hide()},3000);
					$(".share_fill").fadeIn(4000);//失败分享
				}else{
					if(butLength4 == 1){
						$(".popup2_icon1").hide();
					}
					$("#box").fadeOut();
					$(".register_mas2").fadeIn(1000);
					$(".register_mas_span").text(p2_hb_num);
					$(".register_mas2").fadeOut(3000);
					//console.log("你会成为王者的!!");
					setTimeout(function(){
						$(".p2_div_icon").fadeIn(1000);
					},3000)
				}
				clearInterval(countTime);	//停止计时
				rain.stop();	//停止游戏
			}
			// 获取分钟、毫秒数
			$("#djs").html(parseInt(times/100));
		}, n );
		//红包游戏
		var el = document.getElementById("box");
	    var rain = new redPack({
	        el: el, // 容器
	        chance: 0.5, // 几率,暂时不要
	        speed: 5, // 速度，越小越快
	        density:200, //  红包密度，越小越多
            isAndroid:isAndroid,//设备类型（true为安卓设备）
	        callback: function() {
	           //console.log("callback");
	        } // 点击红包的回调
	    });
		//停止
	    //rain.stop();
    
	}
})