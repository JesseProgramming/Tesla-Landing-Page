//On page load, play animations
$(document).ready(function(){
  /*
  $("#Model3 > div > h2").hide();
  $("#Model3 > div > h2").delay(1000).animate({top: '+=50px', opacity:'show'},'slow', 'linear');
  $("#Model3 > div > p").hide();
  $("#Model3 > div > p").delay(1500).animate({top: '+=50px', opacity:'show'},'slow', 'linear');
  */


  //$("#div2").delay(500).animate({left: '-=50px', opacity:'show'},'slow', 'linear');
  //$("#div3").delay(500).animate({left: '+=50px', opacity:'show'},'slow', 'linear');
  $(".NavBarHeader").hide();
  $(".NavBarHeader").delay(100).animate({opacity:'show'},'slow', 'linear');
  //$( ".MainHeader" ).delay(300).scroll( "300px" );
  
  //$(".BtnBlack").hide();
  //$(".BtnWhite").hide();

  /*
  $(".BtnBlack").animate({left: '-=10%'}, 5);
  $(".BtnWhite").animate({left: '+=10%'}, 5);
  $(".BtnBlack").delay(500).animate({left: '+=50px', opacity:'80%'},'slow', 'linear');
  $(".BtnWhite").delay(500).animate({left: '-=50px', opacity:'80%'},'slow', 'linear');
  */

  //$("#d1").delay(500).animate({left: '+=50px', opacity:'show'},'slow', 'linear');
  $("#mainfooter").hide();
  $("#ModelY > div").hide();
  $("#ModelS > div").hide();
});




  let isFooterHidden = true;
  let isM3Hidden = false;
  let isMYHidden = true;
  let isMSHidden = true;


  $(window).scroll(function(){
    var scrollPos = $(document).scrollTop();
    var scrollTop = $(window).scrollTop();
    var windowChangePadding = 500;
    //console.log(scrollTop < $(".MainHeader").offset().top + $(window).height() * 2 - windowChangePadding);
    //console.log(scrollPos);
    //console.log(scrollTop > $(".MainHeader").offset().top + ($(window).height() * 2) - windowChangePadding);
});

  $(window).scroll(function() {
      var scrollTop = $(window).scrollTop();
      let windowChangePadding = 500;
      if ( scrollTop < $(".MainHeader").offset().top + $(window).height() * 6 - windowChangePadding && !isFooterHidden) { 
        $("#mainfooter").delay(100).animate({opacity:'hide'}, 200);
        isFooterHidden = true;
      }
      if ( scrollTop > $(".MainHeader").offset().top + $(window).height() * 6 - windowChangePadding && isFooterHidden) { 
          $("#mainfooter").delay(100).animate({opacity:'show'}, 200);
          isFooterHidden = false;
      }
      windowChangePadding = 500;
      
      if ( scrollTop > $(".MainHeader").offset().top + $(window).height() * 1 - windowChangePadding && !isM3Hidden) { 
        $("#Model3 > div").delay(100).animate({opacity:'hide'}, 400, 'linear');
        $("#Model3 > .PageButtonsContainer").delay(100).animate({opacity:'hide'}, 400, 'linear');
        $("#Model3 > a").delay(100).animate({opacity:'hide'}, 400, 'linear');
        isM3Hidden = true;
      }
      if ( scrollTop < $(".MainHeader").offset().top + $(window).height() * 1 - windowChangePadding && isM3Hidden) { 
        $("#Model3 > div").delay(100).animate({opacity:'show'}, 400, 'linear');
        $("#Model3 > .PageButtonsContainer").delay(100).animate({opacity:'show'}, 400, 'linear');
        $("#Model3 > a").delay(100).animate({opacity:'show'}, 400, 'linear');
        isM3Hidden = false;
      }


      ////////////////////////////////////////////////////////////////////////////////////////////////
      //Makes opacity a solid if the decimal place is close to 1 or 0
      function OpacityCheck(IncomingOpacity){
        if(IncomingOpacity < 0.1)
          return IncomingOpacity = 0;
        else if(IncomingOpacity > 0.98)
          return IncomingOpacity = 1;
        else
          return IncomingOpacity;
      }

        //Fade in & out when scrolling past the *top* of the page section
        var screenheighttop = $(".MainHeader").offset().top + ($(window).height() * 1);       //Get the top scroll position of this section
        if($(window).scrollTop() - (screenheighttop - 400) > 0                                //If the scroll bar is in top of the fading zone
        && $(window).scrollTop() - (screenheighttop - 500) < 400){                            //If the scroll bar is in bottom  of the fading zone
            var myOpacity = ($(window).scrollTop() - (screenheighttop - 400)) / 300;          //Change opacity based on scroll position in the fade zone
            myOpacity = OpacityCheck(myOpacity);
            $("#ModelY > div").css('display', 'block');
            $("#ModelY > div").css('opacity', myOpacity);
        }
        //Fade in & out when scrolling past the *bottom* of the page section
        var screenbottom = $(".MainHeader").offset().top + ($(window).height() * 2);          //Get the bottom scroll position of this section
        if($(window).scrollTop() - (screenbottom - 200) > -400                                //If the scroll bar is in top of the fading zone
        && $(window).scrollTop() - (screenbottom - 300) < 0){                                 //If the scroll bar is in bottom  of the fading zone
            var myOpacity = Math.abs(($(window).scrollTop() - (screenbottom - 300))) / 300;   //Change opacity based on scroll position in the fade zone
            myOpacity = OpacityCheck(myOpacity);
            $("#ModelY > div").css('display', 'block');
            $("#ModelY > div").css('opacity', myOpacity);
        }

        

        ///////////////////////////////////////////////////////////////////////////////////////////

      if (( scrollTop > $(".MainHeader").offset().top + $(window).height() * 3 - windowChangePadding && !isMSHidden)
      ||  ( scrollTop < $(".MainHeader").offset().top + $(window).height() * 2 - windowChangePadding + 200 && !isMSHidden)) { 
        $("#ModelS > div").delay(2).animate({opacity:'hide'}, 400, 'linear');
        $("#ModelS > .PageButtonsContainer").delay(2).animate({opacity:'hide'}, 400, 'linear');
        $("#ModelS > a").delay(2).animate({opacity:'hide'}, 400, 'linear');
        isMSHidden = true;
      }
      else if ( scrollTop > $(".MainHeader").offset().top + $(window).height() * 2 - windowChangePadding + 300) { 
        $("#ModelS > div").delay(2).animate({opacity:'show'}, 400, 'linear');
        $("#ModelS > .PageButtonsContainer").delay(2).animate({opacity:'show'}, 400, 'linear');
        $("#ModelS > a").delay(2).animate({opacity:'show'}, 400, 'linear');
        isMSHidden = false;
      }
      



    });

    