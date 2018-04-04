
// 选择点滴幸福下拉列表，移除前面已经选中的选项
//--------  注：本代码功能易于扩展，无论再增加任意多的select,只要设置父id (parentId) 即可 --------
//页面加载完毕
$(function () {
    //将div容器内的所有 select 设置 change 事件
    $("#divContainer select").change(function () {
        //设置下一级的变化情况
        recursionSetSubSelect(this.id)
    }).each(function () {
        //将每一个select 的原有html保存
        $(this).data("selfHtml", $(this).html());
    });
    //递归设置子一级select
    function recursionSetSubSelect(selectId) {
        //找到下一级的select (B)
        var $subSelect = $("select[parentId='" + selectId + "']");
        //如果无下一级，不作任何操作
        if ($subSelect.length == 0) {
            return;
        }
        //找到 B 对应所有父级选中项，放在数组
        var valArr = [];
        findAllParentValues($subSelect.attr("parentId"), valArr);
        //清空 B 的所有option
        $subSelect.empty();
        //在原数据(html)中遍历每一个option, 并与数组对比。
        var $selfHtml = $($subSelect.data("selfHtml"));
        $selfHtml.filter("option").each(function () {
            //如果父级没有用过的（不在数组中），则添加到 B
            var isUsed = $.inArray($(this).val(), valArr) != -1;
            if (!isUsed) {
                $subSelect.append($(this));
            }
        });
        //递归设置下一级的select 
        recursionSetSubSelect($subSelect.attr("id"));
    }
    //递归查找select所有父级选中项的数组
    function findAllParentValues(selectId, valArr) {
        //找到父级对象 A
        var $parentSelect = $("#" + selectId);
        //如无父级，不作任何操作, 返回数组即可
        if ($parentSelect.length == 0) {
            return valArr;
        }
        //将A的选中项放在数组中
        valArr.push($parentSelect.val());
        return findAllParentValues($parentSelect.attr("parentId"), valArr);
    }
});


// 选择下拉框提交
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

$("#sel_sign_in").click(function(){
        
        if($("#birth_year").val() == ''){
            $MsgBox.Alert("请选择年份");
            setTimeout(function(){$(".register_mas").hide()},1000);
        }else if($("#birth_month").val() == ''){
            $MsgBox.Alert("请选择月份");
            setTimeout(function(){$(".register_mas").hide()},1000);
        }else if($("#birth_day").val() == ''){
            $MsgBox.Alert("请选择日期");
            setTimeout(function(){$(".register_mas").hide()},1000);
        }else if($("#birth_year2").val() == ''){
            $MsgBox.Alert("请选择年份");
            setTimeout(function(){$(".register_mas").hide()},1000);
        }else if($("#birth_month2").val() == ''){
            $MsgBox.Alert("请选择月份");
            setTimeout(function(){$(".register_mas").hide()},1000);
        }else if($("#birth_day2").val() == ''){
            $MsgBox.Alert("请选择日期");
            setTimeout(function(){$(".register_mas").hide()},1000);
        }else if($("#birth_year3").val() == ''){
            $MsgBox.Alert("请选择年份");
            setTimeout(function(){$(".register_mas").hide()},1000);
        }else if($("#birth_month3").val() == ''){
            $MsgBox.Alert("请选择月份");
            setTimeout(function(){$(".register_mas").hide()},1000);
        }else if($("#birth_day3").val() == ''){
            $MsgBox.Alert("请选择日期");
            setTimeout(function(){$(".register_mas").hide()},1000);
        }else if(!$("#birth_day3").val() == ''){
            window.location.href='show.html';  
        }
    })
    
});