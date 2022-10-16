$(function () {


    var m = matchMedia("screen and (max-width: 767px)");
    //네비 슬라이드   
    function menuFn() {

        $('.main_menu li').mouseenter(function () {
            
            if( m.matches ) {
                $('ol',this).stop().slideDown("easeOutExpo");
            }else{
                $('.main_menu li ol').stop().slideDown("easeOutExpo");
            }
        });

        $('.main_menu li').mouseleave(function () {
                        
            if( m.matches ) {
                $('ol',this).stop().slideUp("easeOutExpo");
            }else{
                $('.main_menu li ol').stop().slideUp("easeOutExpo");
            }
        });

    }

menuFn();
    
 $(window).resize(function (){menuFn() });


});