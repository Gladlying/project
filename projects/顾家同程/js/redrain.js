function redPack(options) {
    this.el = options.el;
    this.rains = [];
    this.speed = options.speed; // 控制红包落下的速度
    this.density = options.density; // 红包密度
  	this.isAndroid=options.isAndroid;
    this.callback = options.callback; // 回调
    this.start();
};
//顾家
function gujai(){
	$(".popup1").fadeIn(1000);
	console.log("顾家");
}
//同城
function tc(){
	$(".popup3").fadeIn(1000);
	//$(".p2_pop").fadeOut(900);
	console.log("同城");
}
//错误
function cuowu(){
	console.log(404);
    $(".fail").fadeIn();
    
    $(".fail").fadeOut(1000);
}

redPack.prototype.create = function() {
    var el = this.el;
    var This = this;
    var nRed = document.createElement("div");
	var nImg = document.createElement("img");
	nImg.src = "";
    nRed.className = "redpack";
    nRed.style.left = Math.random() * (el.clientWidth - 30) + "px";
  	if(This.isAndroid){
          nRed.style.top = -el.clientHeight / 5 + "px";
    }else{
          nRed.style.top = -el.clientHeight / 10 + "px";
    }
    $('.box').unbind("click");
    var cliNum = 0;
    nRed.onclick = function() {
    	var butLength = $(".p2_pop_div_but button").length;
    	cliNum++;
    	if(cliNum == 1){
    		if(butLength < 5){
    			var p2_number = $("#p2_hb_num").text();
		    	p2_number++;
	          	if(p2_number>5){
	             	$('#redpack').unbind("click");
	            	return false;
	          	}else{
	            	nRed.className = "redpack redpacked";
	            	This.callback();
	            	$(".p2_hb_num_p").css("opacity",1);
	            	$("#p2_hb_num").text(p2_number);
	            	$(".p2_pop_div_but").append("<button><img src='img/p2_hb.png'/></button>");
	          	}
    		}else{
    			console.log("空的");
    		}
          
    	}else{
    		return false;
    	}
    	var cliNum2 = 0;	//点击次数
    	$(".p2_pop_div_but button").one("click",function(){
    		$(this).css("opacity","0.5");
    		$(this).addClass("shide");
    		cliNum2++;	
    		var butLength1 = $(".p2_pop_div_but button").length;
    		console.log(butLength1);
    		if(butLength1 == 1){
    			if(cliNum2 == 1){
					gujai();
				}
    		}
    		if(butLength1 == 2){
				if(cliNum2 == 1){
					gujai();
				}else{
					tc();
					$(".popup1").fadeOut();
					$(".fail").hide();
				}
			}
			if(butLength1 ==3){
				if(cliNum2 == 1){
					gujai();
				}else if(cliNum2 == 3){
					tc();
					$(".popup1").fadeOut();
					$(".fail").hide();
				}else{
					cuowu();
					$(".popup1").fadeOut();
					$(".popup3").fadeOut();
				}
			}
			if(butLength1 ==4){
				if(cliNum2 == 1){
					gujai();
				}else if(cliNum2 == 4){
					tc();
					$(".popup1").fadeOut();
					$(".fail").hide();
				}else{
					cuowu();
					$(".popup1").fadeOut();
					$(".popup3").fadeOut();
				}
			}
			if(butLength1 ==5){
				if(cliNum2 == 1){
					gujai();
				}else if(cliNum2 == 5){
					tc();
					$(".popup1").fadeOut();
					$(".fail").hide();
				}else{
					cuowu();
					$(".popup1").fadeOut();
					$(".popup3").fadeOut();
				}
			}
    	})
    }
    el.appendChild(nRed);
    //nRed.appendChild(nImg);
  	if(This.isAndroid){
        this.move_a(nRed);
    }else{
        this.move(nRed);
    }
    this.rains.push(nRed);
 
};

redPack.prototype.start = function() {
    var This = this;
    This.timer = setInterval(function() {
        This.create();
    }, This.density);
};
redPack.prototype.stop = function() { 
    var This = this;
    clearInterval(This.timer);
    for (var i = 0; i < This.rains.length; i++) {
        clearInterval(This.rains[i].timer);
    }
};
redPack.prototype.move_a = function(rains) { //安卓设备
    var el = this.el;
    var This = this;
    var diffY = Math.random() + 1.6; // 垂直上的轻微偏移
    var diffX = Math.random(); // 水平上的轻微偏移
    rains.timer = setInterval(function() {
        if (diffY >2) {
            rains.style.left = parseInt(rains.style.left) + parseInt(diffX * rains.clientHeight / 10) + "px";
        } else {
            rains.style.left = parseInt(rains.style.left) - parseInt(diffX * rains.clientHeight / 10) + "px";
        }
       rains.style.top = parseInt(rains.style.top) + parseInt(diffY * rains.clientHeight / 8) + "px";
  
        if (el.clientHeight < parseInt(rains.style.top)) {
            // 超出 区域过后，关闭定时器，删除红包
            clearInterval(rains.timer);
            el.removeChild(rains);
        }
    }, This.speed);
};
redPack.prototype.move = function(rains) {
    var el = this.el;
    var This = this;
    var diffY = Math.random() + 1.6; // 垂直上的轻微偏移
    var diffX = Math.random(); // 水平上的轻微偏移
    rains.timer = setInterval(function() {
        if (diffY > 2) {
            rains.style.left = parseInt(rains.style.left) + parseInt(diffX * rains.clientHeight / 10) + "px";
        } else {
            rains.style.left = parseInt(rains.style.left) - parseInt(diffX * rains.clientHeight / 10) + "px";
        }
        rains.style.top = parseInt(rains.style.top) + parseInt(diffY * rains.clientHeight / 8) + "px";

        if (el.clientHeight < parseInt(rains.style.top)) {
            // 超出 区域过后，关闭定时器，删除红包
            clearInterval(rains.timer);
            el.removeChild(rains);
        }
    }, This.speed);
};
