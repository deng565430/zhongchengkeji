$(function() {
    $(window).scroll(function () {
        var url = location.href;
        var url1=url.split("#")[0];
        var url2=url.split("#")[1];
        if(url2=="top"){
            location.href=url1+"#"+"top1"  ;
        }
    })
});