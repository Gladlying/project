// JavaScript Document
var tip = 1;//tip第几个答案框的标记
var tt = 0; //tt 题目数
var di = 2;
var yes = 0;//正确的个数
var fh = 1;//返回值
	
var textList_1 = new Array("羁","自","意","勇","涯","恣","闯","纵","放","天","不","由","浪");
var answer_1 = new Array("勇","闯","天","涯");
var textList_2 = new Array("旦","梦","角","谱","戏","脸","色","花","妆","曲","化","剧","唱");
var answer_2 = new Array("脸","谱");
var textList_3 = new Array("鸡","喜","宾","庆","头","啤","元","石","除","宵","蛋","客","酒");
var answer_3 = new Array("啤","酒");
var textList_4 = new Array("梨","梅","百","礼","雪","合","花","玫","荷","丹","牧","玫","烟");
var answer_4 = new Array("雪","花");
var textList_5 = new Array("蛋","鸡","冠","猴","线","熟","子","红","鸡","生","公","田","母");
var answer_5 = new Array("线");
var textList_6 = new Array("竹","烟","闪","节","燃","春","花","鞭","电","爆","火","炮","烧");
var answer_6 = new Array("烟","花");
var textList_7 = new Array("过","宵","月","除","日","岁","夕","度","更","如","年","果","元");
var answer_7 = new Array("度","日","如","年");
var textList_8 = new Array("大","元","春","除","宵","夕","年","，明","食","立","小","清","寒");
var answer_8 = new Array("除","夕");
var textList_9 = new Array("影","路","象","线","竹","阳","灯","长","太","电","竿","土","子");
var answer_9 = new Array("影","子");
var textList_10 = new Array("光","路","阳","线","笼","灯","灯","长","火","电","亮","土","明");
var answer_10 = new Array("灯","笼");

var tArray = [textList_1,textList_2,textList_3,textList_4,textList_5,textList_6,textList_7,textList_8,textList_9,textList_10];//题目数组
var ans_Array = [answer_1,answer_2,answer_3,answer_4,answer_5,answer_6,answer_7,answer_8,answer_9,answer_10];//答案数组

var tt_list = createRandom2();//10个不重复的随机数


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
	$(".btn_share").on('touchend',function(){//中奖
		$(".x_page .x_page1").show();
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
	$(".ban").append('<img src="images/t'+s+'.png">');//添加图片
	$(".text_box span").each(function(){
		var t_index = $(this).index();
		$(this).html(tArray[s-1][t_index])
	})
	switch (s)
	{
		case 2:case 3:case 4:case 6:case 8:case 9:case 10://两个
			$(".answer_box").append('<span></span><span></span>').css("padding-left","196px");
			$(".answer_box span").css("margin","0 2px");
			break;
		case 5://一个
			$(".answer_box").append('<span></span>').css("padding-left","0");
			$(".answer_box span").css("margin-left","260px");
			break;
		case 1:case 7://四个
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
    while(arr.length<10)
    {
        //产生单个随机数
        var ranNum=Math.ceil(Math.random()*(10-0))+0;
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
//领取奖品弹窗
$(function(){
	$(".x_sure").click(function(){
		$('.x_lq').hide()
	}) /*格瓦拉30或60元领取确定按钮*/
	$(".x_receive3").click(function(){
		$('.x_page_one').hide();
		$('.x_lq').show();
	})/*30元领取*/
	$(".x_receive6").click(function(){
		$('.x_page_one').hide();
		$('.x_lq').show();
	})/*60元领取*/
})