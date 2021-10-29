$(function(){
    var wd = $(window).width();
    var mnImg = 0;
    var cnt01ml = 0;    
    
    
    if(wd >= 780){
        mnImg = 690;
        cnt01ml = 25;
        
        
    }else if(wd <= 780 && wd >= 420){
        mnImg = 480; 
        cnt01ml = 50;
              
    }else{
        mnImg = 280; 
        cnt01ml = 100;  
       
    }

    // 메인
    $('.main li').click(function(){
        $('.main li').removeClass('sel');
        $(this).addClass('sel');
        
        var i = $(this).index();

        clearInterval(rolling);
        
        $('.imgGroup').css('margin-top',i*-mnImg+'px');
        $('.titleGroup').css('margin-top',i*-80+'px');
        $('.noteGroup').css('margin-top',i*-80+'px');
    });

    var k = 0;

    var rolling = setInterval(function(){
        k++;
        k = k%3;
        
        $('.main li').removeClass('sel');
        $('.main li').eq(k).addClass('sel');
      
        $('.imgGroup').css('margin-top',k*-mnImg+'px');
        $('.titleGroup').css('margin-top',k*-80+'px');
        $('.noteGroup').css('margin-top',k*-80+'px');
    },3000);
    
    // 컨텐츠 01
    $('.menu li').mouseenter(function(){
        var ind = $(this).index();
        $('.menu li:last').animate({
        left: ind * 25+'%'
        },500);
    });

    var btnLeft = $('.cnt01 .left');
    var btnRight = $('.cnt01 .right');
    var artG = $('.artGroup')
    
    artG.find('.article:last').prependTo(artG);
    artG.css('margin-left',-cnt01ml+'%');

    btnLeft.click(function(){
        artG.stop().animate({
            marginLeft: '%'
            },500,function(){
            artG.find('.article:last').prependTo(artG);
            artG.css('margin-left',-cnt01ml+'%');
        });
    });

    btnRight.click(function(){
        artG.stop().animate({
            marginLeft: cnt01ml * 2+'%'
            },500,function(){
            artG.find('.article:first').appendTo(artG);
            artG.css('margin-left',-cnt01ml+'%');
        });
    });

    // 컨텐츠 02
    $('.cnt02 .article>div').even().click(function(){
        $('.cnt02 .article>div').even().removeClass('checked');
        $(this).addClass('checked');
    });
    
    

});