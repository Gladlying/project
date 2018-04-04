// JavaScript Document
var tip = 1;//tip第几个答案框的标记
var tt = 0; //tt 题目数
var di = 2;
var yes = 0;//正确的个数
var fh = 1;//返回值
	
var textList_1 = new Array("烟","猿","猩","鸡","跳","毛","狗","花","蹦","长","大","逗","嘴");
var answer_1 = new Array("烟","花");
var textList_2 = new Array("墩","竹","除","林","世","翠","榴","博","弹","骨","土","墓","夕");
var answer_2 = new Array("除","夕");
var textList_3 = new Array("汤","饨","雪","出","甜","糖","梨","圆","粉","炖","水","面","土");
var answer_3 = new Array("出");
var textList_4 = new Array("干","孜","水","玛","送","鞭","夫","迎","山","提","竹","蜜","炮");
var answer_4 = new Array("鞭","炮");
var textList_5 = new Array("郭","周","年","富","世","龙","画","博","伦","王","苏","朋","琳");
var answer_5 = new Array("年","画");
var textList_6 = new Array("老","饨","猫","负","田","糖","瞄","鼹","咪","数","鱼","鼠","兔");
var answer_6 = new Array("负","鼠");
var textList_7 = new Array("地","袋","河","玛","送","网","电","子","听","歌","竹","蜜","吧");
var answer_7 = new Array("网","吧");
var textList_8 = new Array("岁","周","忘","平","顶","子","年","欢","之","梦","苏","交","柯");
var answer_8 = new Array("忘","年","之","交");
var textList_9 = new Array("老","度","猫","日","甜","天","岁","叫","和","数","水","如","年");
var answer_9 = new Array("度","日","如","年");
var textList_10 = new Array("伦","惹","佛","玛","送","还","仙","山","顶","年","否","水","赞");
var answer_10 = new Array("还");
var textList_11 = new Array("苏","周","春","吃","油","龙","卷","炸","豆","甜","糖","心","脆");
var answer_11 = new Array("春","卷");
var textList_12 = new Array("滴","饨","包","水","落","糖","乱","穿","石","对","水","出","头");
var answer_12 = new Array("水","落","石","出");
var textList_13 = new Array("干","口","水","咬","吃","毒","扣","超","吵","口","竹","乱","舌");
var answer_13 = new Array("吵");
var textList_14 = new Array("雾","周","白","象","世","龙","天","晴","乌","闪","多","雨","云");
var answer_14 = new Array("白","天","多","云");
var textList_15 = new Array("昌","南","沙","湖","西","岁","苏","周","咪","洲","水","北","土");
var answer_15 = new Array("湖","北");
var textList_16 = new Array("飞","走","水","一","石","二","沙","沿","壁","走","竹","石","鸟");
var answer_16 = new Array("一","石","二","鸟");
var textList_17 = new Array("雨","芒","小","水","世","龙","寒","博","伦","霜","种","降","大");
var answer_17 = new Array("小","寒");
var textList_18 = new Array("四","广","长","重","沙","洛","洲","阳","河","联","庆","河","土");
var answer_18 = new Array("重","庆");
var textList_19 = new Array("花","果","水","杏","送","石","蜜","桔","山","提","竹","桃","榴");
var answer_19 = new Array("石","榴");
var textList_20 = new Array("山","河","云","北","世","甘","南","博","莱","王","淄","蓬","东");
var answer_20 = new Array("云","南");

var tArray = [textList_1,textList_2,textList_3,textList_4,textList_5,textList_6,textList_7,textList_8,textList_9,textList_10,textList_11,textList_12,textList_13,textList_14,
textList_15,textList_16,textList_17,textList_18,textList_19,textList_20];//题目数组
var ans_Array = [answer_1,answer_2,answer_3,answer_4,answer_5,answer_6,answer_7,answer_8,answer_9,answer_10,answer_11,answer_12,answer_13,answer_14,
answer_15,answer_16,answer_17,answer_18,answer_19,answer_20];//答案数组

var tt_list = createRandom2();//20个不重复的随机数


$(function(){
    weixin();
	timeline[1].restart();
	var s = tt_list[tt];
	jiaz();
	$(".text_box span").on('touchend',function(){//click
		var val = $(this).html();
		//console.log(val);
		var answer_boxes=$(".answer_box span");
		//console.log(answer_boxes.length);
		for(var i=0;i<answer_boxes.length;i++){
			var box=$(answer_boxes[i]);
			if(box.html()==""){
				box.html(val);
				return;
				}
			}
		})	
	$(".sure").on('touchend',function(){//确定按钮
		pd();
		remo();		
		jiaz();//重新加载
	})
	$(".btn_submit").on('touchend',function(){//提交表单
		var partten = /^1[3,5,8,7]\d{9}$/;
		var tel=$("#tel").val();
		var name=$("#name").val()
		if(!name){
			alert("忘记填写姓名！");
			return;
		}
		if(!tel){
			alert("忘记填写电话！");
			return;
		}
		if(!partten.test(tel)){
            alert('请填写正确的电话');
            return;
        }
		$(".page_03").hide();
		$("#zj").show();//门票
       // alert(ajaxAddUserUrl);
        $.post(ajaxAddUserUrl,{username:name,mobile:tel},function(data){
           // alert(data.msg);
            //alert(data.status)
            if(data.status == 200)
            {
                if(data.award == 1)
                {
                    $(".zj_01").show().addClass("zone");//门票
                }else if(data.award == 2)
                {
                    $(".zj_02").show().addClass("zone");//Q币
                }
            }else
            {
               // alert('aaa');
                $(".zj_03").show().addClass("zone");//没中奖
            }
        },'json');
		/*switch(fh){
			case 1:
				$(".zj_01").show().addClass("zone");//门票
				break;
			case 2:
				$(".zj_02").show().addClass("zone");//Q币
				break;
			case 3:
				$(".zj_03").show().addClass("zone");//没中奖
			}*/
		setTimeout("zj_hide()",3000);
	})
	$(".gb").on('touchend',function(){//弹出层关闭
		$("#share").show().addClass("bounceInDown");
		$(this).parents(".fix").hide();
		})
	$(".btn_share").on('touchend',function(){//填写信息
		$(".page03 .true").hide();
		$(".submit").show();
		})
	$(".btn_again").on('touchend',function(){//再来一遍
		$(".page03").hide();
		$(".page02").show();
		remo();
		jiaz();
		})
	var fq=0;	
	$(".fq").on('touchend',function(){//放弃
		if(fq<1){
			remo();
			jiaz();
			fq++;
			}else{
				alert("每个人只有1次放弃的机会哦~");
				return; 
				}
		})
	$(".btn_02").on('touchend',function(){//游戏规则页面
		$("#gz").show().addClass("bounceInDown");
		})
	$(".close").on('touchend',function(){//关闭游戏规则
		$("#gz").removeClass("bounceInDown").hide();
		})			
	$(".btn_01").on('touchend',function(){//开始游戏
		$(".page01").hide();
		$(".page02").show();
		})			
})
var s;
function jiaz(){
	s = tt_list[tt];
	$(".ban").append('<img src="http://apps.hylinkxa.com/Public/Home/Hylink/caidengmi/img/t'+s+'.png">');//添加图片
	$(".text_box span").each(function(){
		var t_index = $(this).index();
		$(this).html(tArray[s-1][t_index])
	})
	switch (s)
	{
		case 1:case 2:case 4:case 5:case 6:case 7:case 11:case 15:case 17:case 18:case 19:case 20://两个
			$(".answer_box").append('<span></span><span></span>').css("padding-left","130px");
			$(".answer_box span").css("margin","0 40px");
			break;
		case 3:case 10:case 13://一个
			$(".answer_box").append('<span></span>').css("padding-left","0");
			$(".answer_box span").css("margin-left","260px");
			break;
		case 8:case 9:case 12:case 14:case 16://四个
			$(".answer_box").append('<span></span><span></span><span></span><span></span>').css("padding-left","83px");
			$(".answer_box span").css("margin","0 2px");
			break;
		}
	$(".answer_box span").on('touchend',function(){//cancel
		//alert("11");
		$(this).html("");
	})	

	tt++;
	//console.log(tt,s);
	}
function remo(){
	$(".answer_box span").remove();
	$(".ban img").remove();
	} 
function pd(){
	var zheng = 0;
	for(i=0; i<ans_Array[s-1].length;i++){
				if($(".answer_box span").eq(i).html() == ans_Array[s-1][i]){
					zheng++
					//console.log("第"+zheng+"正确");
					}
				}
			if(zheng == ans_Array[s-1].length){//答案正确
				yes++;
                $(".dui").show().addClass("slideOutUp");
                setTimeout("d_hide()",1000);
				}else{
                    $(".cuo").show().addClass("slideOutUp");
                    setTimeout("c_hide()",1000);
					}
			if(di<6){
				$("#di").html("0"+di++);
				}else{
					$(".page02").hide();
					$(".page03").show();
					if(yes==5){
						$(".true").show();
						}else{
							tt_list = createRandom2();
							zheng = 0;
							tt=0;
							di = 2;
							$("#di").html("01");
							yes = 0;//正确的个数
							$(".false").show();
							}
				}
			
}
function d_hide(){
    $(".dui").hide();
}
function c_hide(){
    $(".cuo").hide();
}
function zj_hide(){//中奖弹出层隐藏
	$("#share").show().addClass("bounceInDown");
	$("#zj").hide();
	}
 
function createRandom2()//产生随机数
{
    var arr=[];
    var json={};
    while(arr.length<20)
    {
        //产生单个随机数
        var ranNum=Math.ceil(Math.random()*(20-0))+0;
        //通过判断json对象的索引值是否存在 来标记 是否重复
        if(!json[ranNum])
        {
            json[ranNum]=1;
            arr.push(ranNum);
        }
         
    }
    return arr;
}

var timeline = [
	null,		
	new TimelineMax({paused:true})
		.from('.page01 .logo01', 0.8, {y:-300})
		.from('.page01 .logo02',0.8,{y:-300},"-=0.5")
		.from('.page01 .lang',2,{opacity:0})
		.from('.page01 .main',1,{y:-1000},"-=1")
		.from('.page01 .time',1,{scale:1.3,"display":"none"}),
	/*new TimelineMax({paused:true})
		.from('.page02 .title,.page02 .ban',1,{y:-1000})
		.from('.page02 .answer_box,.page02 .text_box',1,{y:1000},"-=0.5")
		.from('.page02 .sheng,.page02 .deng',1,{y:-1000},"-=0.5")
		.to('.page02 .deng',0,{className:"+=yoyo"})*/
		
	]

function weixin(){
	//BuildShareData();
	$.post(wxUrl,function(data,status){
		json = eval("(" + data + ")");
		wx.config(json);
		wx.error(function (res) {
		});
	});
};

var shareObject = {};// Object
shareObject.title = '小灯谜，大智慧';
shareObject.link = linkJs;
shareObject.imgUrl = imgUrlJs;
shareObject.desc = '2016城墙新春灯会，小灯谜难不倒你，大智慧猜谜赢奖品';
function setShare(){
    wx.onMenuShareTimeline({
        title: shareObject.desc,
        
        link: shareObject.link,
        imgUrl: shareObject.imgUrl,
        success: function () {
		  $(".share").hide()
            location.reload();
        },
        cancel: function () {
		   $(".share").hide() 
        }
    });
    wx.onMenuShareAppMessage({
        title: shareObject.title,
        desc: shareObject.desc,
        link: shareObject.link,
        imgUrl: shareObject.imgUrl,
        type: 'link',
        success: function () {
			 $(".share").hide()
            location.reload();
        },
        cancel: function () {
			 $(".share").hide()
        }
    });

};
wx.ready(function () {
	
    setShare();
});

