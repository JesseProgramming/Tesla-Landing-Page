$(function(){  // $(document).ready shorthand
    $('.monster').fadeIn('slow');
  });
  
  $(document).ready(function() {
      
      /* Every time the window is scrolled ... */
      $(window).scroll( function(){
      console.log("teest");
          /* Check the location of each desired element */
          $('#SolarRoof').each( function(i){
              
              var bottom_of_object = $('.footermain').position().top + $('.footermain').outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              
              /* If the object is completely visible in the window, fade it it */
              if( bottom_of_window > bottom_of_object ){
                  
                  $('.footermain').animate({'opacity':'1'},1500);
                      
              }
              
          }); 
      
      });
      
  });