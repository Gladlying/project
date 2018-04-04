var i=0;
/*add——创建tbx下的div加文字和变宽度的方法*/
function add(i){
    var tbox =$(".tbox");
    var tiao =$(".tiao");
	tiao.css("width",i+"%");
}
/*创建方法（i++循环起来）*/
function xh(){
	if(i>100){
		$(".p2_div").fadeOut();
		$(".p3_div").fadeIn();
		return;
	}
	if(i<=100){
		setTimeout("xh()",100)
		add(i);
	    i++;
	}
}
$(function(){
	//开始游戏
	$(".p1_but").click(function(){
		$(".p1_div").fadeOut();
		$(".p2_div").fadeIn();
	})
	//0-10岁
	var ten = ["你一定是吃可爱长大的！","该浇点水了，因为你是祖国未来的花朵。"];
	var ten_number = ten[Math.floor(Math.random()*ten.length)];
	//11-17岁
	var sq = ["一看就是未成年别玩手机了，快去写作业。","可爱就是正义，你赢了。","女大十八变，但你怎么还没十八?"];
	var sq_number = sq[Math.floor(Math.random()*sq.length)];
	//18-26岁
	var el = ["时间在流逝，你的脸却停驻在最好的年华。","你美好的青春，犹如明媚的阳光。","气质与优雅并存，美貌与才华兼修。","时间如风，你大概生活在避风港。","没什么好夸的，你只是一个普普通通的年轻貌美女子。"];
	var el_number = el[Math.floor(Math.random()*el.length)];
	//27-33岁
	var ss = ["怪你过分美丽，怪我过分着迷。","时间不是你的敌人，美丽却是你的代言人。"];
	var ss_number = ss[Math.floor(Math.random()*ss.length)];
	//34-40岁
	var sss = ["美丽的女人经得起时间的推敲。","岁月是把杀猪刀，你却刀枪不入。"];
	var sss_number = sss[Math.floor(Math.random()*sss.length)];
	//41-51岁
	var wy = ["你的美，带着你的故事。","时间沉淀了你，岁月善待了你。"];
	var wy_number = wy[Math.floor(Math.random()*wy.length)];
	//52-100岁
	var yb = ["这一生的故事很长，却始终被“美”这个字贯穿。","这位奶奶...给您拜年啦!"];
	var yb_number = yb[Math.floor(Math.random()*yb.length)];
	
	// 上传相册图片
	$("#file").change(function(){
		var src = this.files[0];
    	var self = $(this);
	    var read = new FileReader();
	    read.onload = function(e) {
			$(".p3_img_div_img img").attr("src", this.result) ;
	    }
	   	read.readAsDataURL(src)
		//console.log($(".p3_img_div_img img").attr("src"));
		$(".p3_img_div").css("background","rgba(255,255,255,0.4)");
		$(".p2_but").hide();
		$(".p2_jdt").show();
		xh();
		
		//匹配年龄语句
		var peo_age =  $("#age").text();
		
		if(peo_age >=0 && peo_age <= 10){
			$(".age_txt").html(ten_number);
		}else if(peo_age >=11 && peo_age <= 17){
			$(".age_txt").html(sq_number);
		}else if(peo_age >=18 && peo_age <= 26){
			$(".age_txt").html(el_number);
		}else if(peo_age >=27 && peo_age <= 33){
			$(".age_txt").html(ss_number);
		}else if(peo_age >=34 && peo_age <= 40){
			$(".age_txt").html(sss_number);
		}else if(peo_age >=41 && peo_age <= 51){
			$(".age_txt").html(wy_number);
		}else if(peo_age >=52 && peo_age <= 100){
			$(".age_txt").html(yb_number);
		}
	});
	//建立一個可存取到該file的url
	function getObjectURL(file) {
		var url = null ; 
		if (window.createObjectURL!=undefined) { // basic
			url = window.createObjectURL(file) ;
		} else if (window.URL!=undefined) { // mozilla(firefox)
			url = window.URL.createObjectURL(file) ;
		} else if (window.webkitURL!=undefined) { // webkit or chrome
			url = window.webkitURL.createObjectURL(file) ;
		}
		return url ;
	}
	
	//领取压岁钱
	$(".p3_but2").click(function(){
		$(".receive").show();
		setTimeout(function(){
			$(".p3_div").fadeOut();
			$(".receive").fadeOut();
			setTimeout(function(){
				$(".p4_div").fadeIn();
			},100)
		},3200)
	})
})
