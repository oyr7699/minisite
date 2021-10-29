$(function(){
    // $('.thumbs .thImg').click(function(){
    //      var img = $(this).css('background-image');
         
    //      var txt = $(this).text();
    //      $('div.thumbImg h3').text(txt);
    
    // $('div.thumbImg').css('background-image', img);
    // });

    var mnTxt = $('.thumbs .thImg:first').text();    
    $('div.thumbImg h3').text(mnTxt)

    var noteh3 = $('.thumbs .thImg:first').attr('data-h5')
    $('div.thumbImg h5').text(noteh3);

    $('.cnt02 .thImg').click(function(){ 
         var bg = $(this).css('background-image');
         $('.cnt02 .thumbImg').css('background-image',bg);
        
         var txt = $(this).text();   
         $('div.thumbImg h3').text(txt);
         
         var note = $(this).attr('data-h5')   
         $('div.thumbImg h5').text(note);         

         $('.cnt02 .thImg').css('border','0');
         $(this).css('border','5px solid deeppink');
    });
     
});        