$(function() {
    
            
    //캔버스        
    var canv = $( '#canvas1' )[0].getContext("2d");
    
 /*   var ani = setInterval( canvasFn, 1000 / 60 );*/
    
    var skill1 = 0;
    var per1 = 0;
    var deg1 = 0;
    
    var skill2 = 0;
    var per2 = 0;
    var deg2 = 0;
    
    var skill3 = 0;
    var per3 = 0;
    var deg3 = 0;
    
    var skill4 = 0;
    var per4 = 0;
    var deg4 = 0; 
        
    function canvasFn() {
        
        //photoshop&illustrate        
        skill1 += 0.02 * ( 90 - skill1 );
        per1 = Math.round( skill1 );
        deg1 += 0.02 * ( ( 2 * 0.9 ) - deg1 );
        
        canv.clearRect( 0, 0, 1200, 290 );
        
        canv.lineWidth = "2";
        canv.strokeStyle = "#ffffff";
        
        //안쪽 원
        canv.lineWidth = "13";
        canv.strokeStyle = "#ffffff";
        canv.lineCap = "round" 
        
        canv.beginPath();
        canv.arc( 200, 150, 50, Math.PI * deg1 - 1.5, Math.PI * 1.5, true ); 
        canv.stroke();
        
        //퍼센트 텍스트
        canv.font = "30px Impact";
        canv.fillStyle = "#ffffff";
        canv.fillText( per1 + "%", 175, 165 );
        
        canv.font = "bold 25px NanumBarunGothic";
        canv.fillStyle = "#ffffff";
        canv.fillText( "photoshop", 130, 235 );
        canv.fillText( "illustrate", 140, 265);
        
       
        //html
        skill2 += 0.02 * ( 90 - skill2 );
        per2 = Math.round( skill2 );
        deg2 += 0.02 * ( ( 2 * 0.9 ) - deg2 );
        
        canv.lineWidth = "2";
        canv.strokeStyle = "#ffffff";
        canv.lineCap = "round" 
        
        //안쪽 원
        canv.lineWidth = "13";
        canv.strokeStyle = "#ffffff";
        
        canv.beginPath();
        canv.arc( 470, 150, 50, Math.PI * deg2 - 1.5, Math.PI * 1.5, true ); 
        canv.stroke();
        
        //퍼센트 텍스트
        canv.font = "30px Impact";
        canv.fillStyle = "#ffffff";
        canv.fillText( per2 + "%", 450, 165 );
        
        canv.font = "bold 25px NanumBarunGothic";
        canv.fillStyle = "#ffffff";
        canv.fillText( "HTML", 440, 250 );
        
        
        //css
        skill3 += 0.02 * ( 80 - skill3 );
        per3 = Math.round( skill3 );
        deg3 += 0.02 * ( ( 2 * 0.8 ) - deg3 );
        
        canv.lineWidth = "2";
        canv.strokeStyle = "#ffffff";
        canv.lineCap = "round" 
        
        //안쪽 원
        canv.lineWidth = "13";
        canv.strokeStyle = "#ffffff";
        
        canv.beginPath();
        canv.arc( 750, 150, 50, Math.PI * deg3 - 1.5, Math.PI * 1.5, true ); 
        canv.stroke();
        
        //퍼센트 텍스트
        canv.font = "30px Impact";
        canv.fillStyle = "#ffffff";
        canv.fillText( per3 + "%", 725, 165 );
        
        canv.font = "bold 25px NanumBarunGothic";
        canv.fillStyle = "#ffffff";
        canv.fillText( "CSS", 725, 250 );
        
        
        //jaba
        skill4 += 0.02 * ( 60 - skill4 );
        per4 = Math.round( skill4 );
        deg4 += 0.02 * ( ( 2 * 0.6 ) - deg4 );
        
        canv.lineWidth = "2";
        canv.strokeStyle = "#ffffff";
        canv.lineCap = "round" 
        
        //안쪽 원
        canv.lineWidth = "13";
        canv.strokeStyle = "#ffffff";
        
        canv.beginPath();
        canv.arc( 1000, 150, 50, Math.PI * deg4 - 1.5, Math.PI * 1.5, true ); 
        canv.stroke();
        
        //퍼센트 텍스트
        canv.font = "30px Impact";
        canv.fillStyle = "#ffffff";
        canv.fillText( per4 + "%", 975, 165 );
        
        canv.font = "bold 25px NanumBarunGothic";
        canv.fillStyle = "#ffffff";
        canv.fillText( "JQUERY", 950, 250 );
    }
    
    $(window).scroll( function() {
    
    var scrPos = $(this).scrollTop();
    console.log(
$('#introduce').position().top);
    if( scrPos >= $('#introduce').position().top - 300 && scrPos <= $('#introduce').position().top - 260) {
        var ani = setInterval( canvasFn, 1000 / 60 );
    }
});
         
    });




//마우스휠 이동
    $( window ).on('mousewheel.disableScroll' , function(e) {
        e.preventDefault();
    });
    
    $( window ).mousewheel( function(e,delta) {
        
        if( $( 'html, body' ).is(':animated') ) { return; }
        
        if( delta > 0 ) {
            $( 'html, body' ).animate( { 'scrollTop' : '-=' + $(this).height() }, 1000, "easeOutExpo" );         
        }else {
            $( 'html, body' ).animate( { 'scrollTop' : '+=' + $(this).height() }, 1000, "easeOutExpo" );
        }
    });
    
    
    //키보드 방향키 이동
    $( window ).on('keydow.disableScroll' , function(e) {
        e.preventDefault();
    });
    
    $( window ).keydown( function(e) {
        
        if( $('html, body' ).is(':animated') ) { return; }
        
        switch(e.keyCode) {
                
            case 38:
                $( 'html, body' ).animate( { 'scrollTop' : '-=' + $(this).height() }, 1000, "easeOutExpo" );
                break;
                
            case 40:
                $( 'html, body' ).animate( { 'scrollTop' : '+=' + $(this).height() }, 1000, "easeOutExpo" );
                break;
        }
    });