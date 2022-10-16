$( function() {

    //bx-slider 영역       
    var slider = $( '#intro' ).bxSlider({
                
                moveSlides: 1 ,
                pagerCustom: '#bx-pager' ,
                auto: true ,
                speed: 2000 ,
                prevSelector: '.left' ,
                nextSelector: '.right' ,
                prevText: '<' ,
                nextText: '>'               
            });
    
    // popup 영역
    $( '#submit div .click a' ).click( function(e) {
        e.preventDefault();
        $( '#popup' ).fadeIn();
        $( '#popup' ).animate( { 'opacity' : 1 }, 1000, "easeOutExpo" );
        $( '.bgArea' ).show();
        $( '.bgArea' ).animate( { 'opacity' : 1 }, 1000, "easeOutExpo" );
    });
    
    $( '.fa-window-close' ).click( function(e) {
        e.preventDefault();
        $( '#popup' ).fadeOut();
        $( '#popup' ).animate( { 'opacity' : 0 }, 1000, "easeOutExpo" );
        $( '.bgArea' ).animate(
            { 'opacity' : 0}, 1000, "easeOutExpo",
            function() { $( '.bgArea' ).hide(); }
        );      
        
    });
    
    //모바일 헤더
    var upDown = false;
    
    $('#main .mui').click( function() {
        
        upDown = !upDown;
        
        /*console.log(upDown);*/
        
        if( upDown ) {
            
            $( '#main header ul' ).stop().slideDown( 1000, "easeOutExpo" );
            
            $( '.t_stick , .b_stick' ).animate( { 'top' : 9 }, 500, "easeOutExpo")
                .animate( { 'rotate' : '-35deg' }, 500, "easeOutExpo" );
            
            $( '.m_stick' ).delay(500).animate( { 'rotate' : '35deg' }, 500, "easeOutExpo" );
            
        } else {
            
            $( '#main header ul' ).stop().slideUp( 1000, "easeOutExpo" );
            
            $( '.t_stick , .b_stick , .m_stick' ).animate( { 'rotate' : '0' }, 500, "easeOutExpo" );
            
            $( '.t_stick' ).animate( { 'top' : 3 }, 500, "easeOutExpo" );
            
            $( '.b_stick' ).animate( { 'top' : 15 }, 500, "easeOutExpo" );
        }
        
        });
    
    //숫자입력만
    $( '#popup #D_text').keyup( function(e) {
        
        this.value = this.value.replace(/[^0-9]/g,'');
        
    });
    
    //헤더고정    
    $( window ).scroll( function() {
        
        //console.log( $( this ).scrollTop() );
        
        if( $(this).scrollTop() >= 200 ) {
            
            $( '#main header' ).addClass( 'fix');
            $( '#main header ul li:last-child' ).removeClass('fixs');
            
        } else {
            $('#main header').removeClass('fix');
            $( '#main header ul li:last-child' ).addClass('fixs');
        }
    });
    
    //헤더클릭 시 이동
    $( '#main header a' ).click( function(e) {
        
        e.preventDefault();
        
        var posY = $(this.hash).position().top;
        
        $('html, body').stop().animate( { 'scrollTop' : posY - 120 }, 1000, "easeOutExpo" );
        
    });
    
    //스크롤 애니메이션
    $( window ).scroll( function() {
              
                var scrPos = $(this).scrollTop();
                
                if( scrPos >= $( '#about' ).position().top ) {
                    
                    $( '#about ul li').each( function(i) { $(this).delay(300 * i ).animate(
                        { 'opacity' : 1 }, 1000, "easeOutQuart") });
                }
        
                if( scrPos >= $( '#what' ).position().top - 120 ) {
                    
                    $( '#what div' ).animate( { 'margin' : 0 }, 2000, "easeOutExpo" );
                }
                
                if( scrPos >= $( '#donation' ).position().top - 120 ) {
                    
                    $( '#donation ul li').each( function(i) { $(this).delay(300 * i ).animate(
                        { 'bottom' : 0 , 'opacity' : 1 }, null, "easeOutQuart") });
                }
        
                if( scrPos >= $( '#news' ).position().top ) { 
                    
                    $( '#news figure').each( function(i) { $(this).delay(300 * i ).animate(
                        { 'opacity' : 1 , 'bottom' :0 }, 1000, "easeOutQuart") });
                }
                
            });
                
});