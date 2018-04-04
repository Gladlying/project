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
		$(".p1_div").fadeOut();
		$(".p2_div").fadeIn();
	})
	$(".p2_but").click(function(){
		//变量
		var sp_name1=$(".name").val();	//p2宣誓人姓名
		var so_name1=$(".duixiang").val();	//p2宣誓对象姓名
		var so_name2=$(".so_people").text();	//p4和p5宣誓对象姓名
		var sp_name2=$(".sp_people").text();	//p4和p5宣誓人姓名
		/*---*/
		var data_id=$(this).attr("data-id");
		if(data_id == 1){
			$(".p2_but1").css("background","url(img/p2_but_hover.png)");
		}else{
			$(".p2_but2").css("background","url(img/p2_but_hover.png)");
		}
		//判断名字是否为空
		if(sp_name1 != "" && so_name1 != ""){
			$(".p2_div").fadeOut();
			$(".p3_div").css("display","block");
		}else if(sp_name1 == ""){
			$MsgBox.Alert("请输入宣誓人姓名O！");
			setTimeout(function(){$(".register_mas").hide()},2000);
		}else if(so_name1 == ""){
			$MsgBox.Alert("请输入宣誓对象的姓名O！");
			setTimeout(function(){$(".register_mas").hide()},2000);
		}else{
			$MsgBox.Alert("请输入姓名O！");
			setTimeout(function(){$(".register_mas").hide()},2000);
		}
		/*自动跳转*/
		var p3_div_style=$(".p3_div").css("display");
		//alert(p3_div_style);
		if(p3_div_style != "none"){
			setTimeout(function(){
				$(".p3_div").fadeOut();
	  			$(".p4_div").fadeIn();
			},6000)
		}
		/*传值*/
		$(".so_people").text(so_name1);
		$(".sp_people").text(sp_name1);
	})
	
	/*获取日期*/
	var new_data=new Date();
	var new_month = new_data.getMonth()+1;
	$(".p4_data").html(new_data.getFullYear() + "."+ new_month + "." + new_data.getDate());
	
	/*接受者打开页面*/
	$(".p5_img1").click(function(){
		$(".p5_img1").fadeOut();
		$(".p5_img2").fadeIn();
		setTimeout(function(){
			$(".p5_img2").fadeOut();
			$(".p5_wenben").fadeIn();
		},500)
	})
	
	$(".p4_text").focus(function(){
		$(".p4_dianj").hide();
	})
	$(".p4_text").blur(function(){
		$(".p4_dianj").show();
	})
	
})