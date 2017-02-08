$(function(){
    //联系我们的js代码：
    //点击切换地图
    $("#js_hidden").click(function(){
        var text=$(this).text();
        if(text=="点击查看地图"){
            $(this).html("点击关闭地图");
            $(".map").show();
        }else{
            $(this).html("点击查看地图");
            $(".map").hide();
        }
    });
    //隐藏地图点击图片
    $(".contactFormDiv").mouseover(function(){
        $(".isMap").show();
    }).mouseout(function(){
        $(".isMap").hide();
    });
    $(".isMap").mouseover(function(){
        $(this).show();
    });

})/**
 * Created by Administrator on 2017/1/9.
 */
