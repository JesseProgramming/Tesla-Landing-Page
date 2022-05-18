
/*
$(document).ready(function(){
    $("#div1").delay(500).animate({top: '+=50px', opacity:'show'},'slow', 'linear');
    $("#div2").delay(500).animate({left: '-=50px', opacity:'show'},'slow', 'linear');
    $("#div3").delay(500).animate({left: '+=50px', opacity:'show'},'slow', 'linear');
    $("#div4").delay(100).animate({opacity:'show'},'slow', 'linear');
    $("#d1").delay(500).animate({left: '+=50px', opacity:'show'},'slow', 'linear');
});

let isFooterHidden = false;
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

  */



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
    });


    $(window).scroll(function(){
        var scrollPos = $(document).scrollTop();
        //console.log(scrollPos);
    });

  let isFooterHidden = true;
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

    });