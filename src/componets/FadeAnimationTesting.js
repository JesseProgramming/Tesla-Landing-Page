
$(document).ready(function(){
    $("#div1").delay(500).animate({top: '+=50px', opacity:'show'},'slow', 'linear');
    $("#div2").delay(500).animate({left: '-=50px', opacity:'show'},'slow', 'linear');
    $("#div3").delay(500).animate({left: '+=50px', opacity:'show'},'slow', 'linear');
    $("#div4").delay(100).animate({opacity:'show'},'slow', 'linear');
    $("#d1").delay(500).animate({left: '+=50px', opacity:'show'},'slow', 'linear');
});

//let isFooterHidden = false;
$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    let windowChangePadding = 150;
    
    if ( scrollTop > $("#s1").offset().top + $(window).height() - windowChangePadding && !isFooterHidden) { 
      // display add
      $("#d1").delay(100).animate({left: '-=50px', opacity:'hide'},'slow', 'linear');
      isFooterHidden = true;
    }
    if ( scrollTop < $("#s1").offset().top + $(window).height() - windowChangePadding -5 && isFooterHidden) { 
        // display add
        $("#d1").delay(100).animate({left: '+=50px', opacity:'show'},'slow', 'linear');
        isFooterHidden = false;
    }

  });

  



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
  let scrollTestArray = [0,0];


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

      
      /*
      //console.log(scrollTop < $(".MainHeader").offset().top + ($(window).height() * 2));
      scrollTestArray[0] = $(".MainHeader").offset().top + ($(window).height() * 1) -100;
      scrollTestArray[1] = $(".MainHeader").offset().top + ($(window).height() * 2) +100;
      console.log(scrollTestArray[0] + ", " +scrollTestArray[1]);
      //console.log($(window).scrollTop());
      if ( scrollTop > $(".MainHeader").offset().top + ($(window).height() * 1) - 300
        && scrollTop < $(".MainHeader").offset().top + ($(window).height() * 2) -300
        && isMYHidden) { 
        $("#ModelY > div").delay(2).animate({opacity:'show'}, 100, 'linear');
        $("#ModelY > .PageButtonsContainer").delay(2).animate({opacity:'show'}, 100, 'linear');
        $("#ModelY > a").delay(2).animate({opacity:'show'}, 100, 'linear');
        isMYHidden = false;
      }
      else if(!isMYHidden){ 
        $("#ModelY > div").delay(2).animate({opacity:'hide'}, 100, 'linear');
        $("#ModelY > .PageButtonsContainer").delay(2).animate({opacity:'hide'}, 100, 'linear');
        $("#ModelY > a").delay(2).animate({opacity:'hide'}, 100, 'linear');
        isMYHidden = true;
      }
      */
        var screenheighttop = $(".MainHeader").offset().top + ($(window).height() * 1);
        if($(window).scrollTop() - (screenheighttop - 300) > 0
        && $(window).scrollTop() - (screenheighttop - 400) < 400){
            var myOpacity = ($(window).scrollTop() - (screenheighttop - 300)) / 300;
            //console.log(myOpacity);
            if(myOpacity < 0.1)
                myOpacity = 0;
            if(myOpacity > 0.98)
                myOpacity = 1;
            $("#ModelY > div").css('display', 'block');
            $("#ModelY > div").css('opacity', myOpacity);
            $("#ModelY > .PageButtonsContainer").css('opacity', myOpacity);
            $("#ModelY > a").css('opacity', myOpacity);
        }
        screenheighttop = $(".MainHeader").offset().top + ($(window).height() * 2);
        if($(window).scrollTop() - (screenheighttop - 500) > 0
        && $(window).scrollTop() - (screenheighttop - 600) < 400){
            var myOpacity = ($(window).scrollTop() - (screenheighttop - 500)) / 300;
            console.log(myOpacity);
            if(myOpacity < 0.1)
                myOpacity = 0;
            if(myOpacity > 0.98)
                myOpacity = 1;
            $("#ModelY > div").css('display', 'block');
            $("#ModelY > div").css('opacity', myOpacity);
            $("#ModelY > .PageButtonsContainer").css('opacity', myOpacity);
            $("#ModelY > a").css('opacity', myOpacity);
        }



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

    