// 轮播图JS
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    loop: true,
    autoplay: 3000,

    
    speed: 1000,
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
    effect: 'fade',//  effect: 'flip',effect: 'coverflow',slide', 'fade',cube
    grabCursor: true,
    cube: {
        shadow: false,
        slideShadows: false,
        shadowOffset: 20,
        shadowScale: 0.94
    }
});


 $(window).scroll(function(){
    var scroll= document.documentElement.scrollTop || document.body.scrollTop;
     // onsole.log(scrollT);
     var backTop = $("#accessory").offset().top - $(window).height()/2;
     //console.log(ScrollT);
    if(scroll > backTop){
        $(".C1").addClass("animated bounceInRight show").removeClass("fade");
        $(".C2").addClass("animated bounceInDown show").removeClass("fade");
        $(".C3").addClass("animated bounceInUp show").removeClass("fade");
        $(".C4").addClass("animated bounceInLeft show").removeClass("fade");
        $(".b1").addClass("animated bounceInRight show").removeClass("fade");
        $(".b2").addClass("animated bounceInDown show").removeClass("fade");
        $(".b3").addClass("animated bounceInUp show").removeClass("fade");
        $(".b4").addClass("animated bounceInLeft show").removeClass("fade");
  }
 }); 
 $(window).scroll(function(){
     var scroll= document.documentElement.scrollTop || document.body.scrollTop;
       // onsole.log(scrollT);
    var backTop = $("#world").offset().top - $(window).height()/2;
         //console.log(ScrollT);
     if(scroll > backTop){
         $(".a1").addClass("animated bounceInRight show").removeClass("fade");
         $(".a2").addClass("animated bounceInDown show").removeClass("fade");
         $(".a3").addClass("animated bounceInUp show").removeClass("fade");
         $(".a4").addClass("animated bounceInLeft show").removeClass("fade");
   }
  });
//   $(window).scroll(function(){
//     var scrollQ= document.documentElement.scrollTop || document.body.scrollTop;
//       // onsole.log(scrollT);
//    var backTop2 = $("#accessory").offset().top - $(window).height()/2;
//         //console.log(ScrollT);
//     if(scrollQ > backTop2){
//         document.getElementById("totop").style.display = "block";
//   }else{
//         document.getElementById("totop").style.display = "none";
//   }
//  });

// 返回顶部
window.onload = function(){
    var totop = document.getElementById("btn");
    
    totop.style.display = "none";

    var timer = null;

    totop.onclick = function(){
    
        timer = setInterval(function(){
        var backTop= document.documentElement.scrollTop || document.body.scrollTop;
        var speedTop = backTop/5;
        document.documentElement.scrollTop = backTop - speedTop;
            if(backTop == 0){
            
                clearInterval(timer);
        }
    },30);
}


var pageHeight = 700;
window.onscroll = function(){
    var backTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(backTop>pageHeight){
        totop.style.display = "block";
    }else{
        totop.style.display = "none";
     }
  }
}