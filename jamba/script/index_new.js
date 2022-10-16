$(function() {
    
    //intro
    
    
    function intro() {
        
    }
    
    $( '#intro' ).click( function() {
        
        $( '#intro > img' ).animate( { 'opacity' : 0 }, 1000, "easeOutExpo");
        $( 'body' ).css( { 'overflow' : 'visible' } );
        $( '#intro > .straw' ).animate( { 'top' : '-500px'}, 1500, "easeOutExpo" );
        $( '#intro > .lemon' ).animate( { 'top' : '500px'}, 1500, "easeOutExpo" );
        $( '#intro' ).animate( { 'z-index' : '0'}, 1500);
        
    });
    
    //bxSlider
    var slider = $( '#visual' ).bxSlider( {
                
                auto: true ,
                speed: 3000 ,
                pagerCustom: '#bx-pager'
                
            });
    
    var slider = $( '#box' ).bxSlider( {
                
                mode: 'fade' ,
                auto: true ,
                speed: 3000 ,
                slideWidth: 400 ,
                pagerCustom: '#bx-pager'
                
            });
    
    $( document ).on( 'click' , '.bx-prev , .bx-next , #bx-pager a' , function() {             
                slider.stopAuto();
                slider.startAuto();                
            });
    
    //햄버거
    var upDown = false;
    
    $( '#main header .stick' ).click( function() {
        
        upDown = !upDown;
        
        if(upDown) {
            
            $('#main header .main_menu').animate( { 'right' : 0 }, 1500, "easeOutExpo");
            
            $( '.t_stick , .b_stick' ).animate( { 'top' : 9 }, 500, "easeOutExpo")
                .animate( { 'rotate' : '-40deg' }, 500, "easeOutExpo" );
            
            $( '.m_stick' ).delay(500).animate( { 'rotate' : '40deg' }, 500, "easeOutExpo" );
            
        }else {
            
            $('#main header .main_menu').animate( { 'right' : -768 }, 1500, "easeOutExpo");
            
            $( '.t_stick , .b_stick , .m_stick' ).animate( { 'rotate' : 0 }, 500, "easeOutExpo" );
            
            $( '.t_stick' ).animate( { 'top' : 3 }, 500, "easeOutExpo" );
            
            $( '.b_stick' ).animate( { 'top' : 15 }, 500, "easeOutExpo" );
                        
        }
    });
    
    //footer brandsiter toggle
    
    var onOff = false;
    
    $( 'footer .footer_M .brnadsite .boxSlide > div').click( function() {
        
        onOff = !onOff;
        
        if(onOff) {
            
            $( 'footer .footer_M .brnadsite .boxSlide ul').stop().slideDown( "easeOutExpo");
            
        } else {
            
            $( 'footer .footer_M .brnadsite .boxSlide ul').stop().slideUp( "easeOutExpo");            
        }
        
        
    });
    
    
    //스크롤 애니메이션
    $( window ).scroll( function() {
              
                var scrPos = $(this).scrollTop();
        
                if( scrPos >= $( '#brandstory' ).position().top ) {
                    
                    $( '#brandstory img , #brandstory p').each( function(i) { $(this).delay(300 * i ).animate(
                        { 'opacity' : 1 }, 500, "easeOutQuart") });
                }
        
                if( scrPos >= $( '#social_hub' ).position().top ) {
                    
                    $( '#social_hub .picture .left_P , #social_hub .picture .center_P , #social_hub .picture .right_P').each( function(i) { $(this).delay(300 * i ).animate(
                        { 'margin-top' : 0 , 'top' : 0 }, 500, "easeOutQuart") });
                }
                
    });
    
});