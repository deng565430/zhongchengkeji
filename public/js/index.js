$(function(){
    //定位/返回顶部
    var disc=$('.positionDisc').find('a');
    disc.eq(0).css("background-color","orange");
    $(window).scroll(function(){
        var f1=$("[name='1F']").offset();
        var f2=$("[name='2F']").offset();
        var f3=$("[name='3F']").offset();
        var f4=$("[name='4F']").offset();
        var f5=$("[name='5F']").offset();
        var f6=$("[name='6F']").offset();
        var sTop=$(window).scrollTop();
        //回到顶部
        if(sTop>150){
            $('.returnTop').show();
        }else{
            $('.returnTop').hide();
        }
        if(f1&&f1.top<=100&&f1.top>=-100){
            for(var i=0;i<disc.length;i++){
                disc.eq(i).css("background-color","#fff");
            }
            disc.eq(0).css("background-color","orange");
        }
        if(f2&&f2.top<=507&&f2.top>=-390){
            for(var i=0;i<disc.length;i++){
                disc.eq(i).css("background-color","#fff");
            }
            disc.eq(1).css("background-color","orange");
        }
        if(f3&&f3.top<=473&&f3.top>=-473){
            for(var i=0;i<disc.length;i++){
                disc.eq(i).css("background-color","#fff");
            }
            disc.eq(2).css("background-color","orange");
        }
        if(f4&&f4.top<=480&&f4.top>=-220){
            for(var i=0;i<disc.length;i++){
                disc.eq(i).css("background-color","#fff");
            }
            disc.eq(3).css("background-color","orange");
        }
        if(f5&&f5.top<=518&&f5.top>=-137){
            for(var i=0;i<disc.length;i++){
                disc.eq(i).css("background-color","#fff");
            }
            disc.eq(4).css("background-color","orange");
        }
        if(f6&&f6.top<=485&&f6.top>=-457){
            for(var i=0;i<disc.length;i++){
                disc.eq(i).css("background-color","#fff");
            }
            disc.eq(5).css("background-color","orange");
        }
    });


});
(function (){
     // 轮播图
     var index = 0;
     var boxDiv=$('.homeCarousel');
     var imgDiv=$('.homeCarouselImg');
     var imgLis=imgDiv.find('li');
     var spanDiv=$('.homeCarouselSpan');
     var spanLis=spanDiv.find('li');
     for (var i = 0; i < spanLis.length; i++) {
         spanLis[i].index = i;
         spanLis[i].onmouseover = function () {
             index = this.index;
             change(this.index);
         }
     }
     var ID = setInterval(timer, 2000);
     function timer() {
         index ++;
         if (3 == index) {
             index = 0;
         }
         change(index);
     }
     function change(currentIndex) {
         for (var i = 0; i < imgLis.length; i++) {
             imgLis.eq(i).css("opacity","0");
             spanLis.eq(i).css("background",'#fff');
         }
         imgLis.eq(currentIndex).css("opacity","1");
         spanLis.eq(currentIndex).css("background",'orange');
     }
     boxDiv.mouseover(function(){
         clearInterval(ID);
     });
     boxDiv.mouseout(function(){
         ID = setInterval(timer, 2000);
     })
 })();




