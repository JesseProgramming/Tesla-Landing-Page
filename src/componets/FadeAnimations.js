


  



  $(document).ready(function(){

        $(".NavBarHeader").hide();
        $(".NavBarHeader").delay(100).animate({opacity:'show'},'slow', 'linear');
        $("#mainfooter").hide();
    });

    let isFooterHidden = true;
    let isM3Hidden = false;

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

        if ( scrollTop > $(".MainHeader").offset().top + $(window).height() * 1 - windowChangePadding && !isM3Hidden) { 
            $("#Model3 > div").delay(100).animate({opacity:'hide'}, 400, 'linear');
            $("#Model3 > .PageButtonsContainer").delay(100).animate({opacity:'hide'}, 400, 'linear');
            $("#Model3 > a").delay(100).animate({opacity:'hide'}, 100, 'linear');
            isM3Hidden = true;
          }
        if ( scrollTop < $(".MainHeader").offset().top + $(window).height() * 1 - windowChangePadding && isM3Hidden) { 
            $("#Model3 > div").delay(100).animate({opacity:'show'}, 400, 'linear');
            $("#Model3 > .PageButtonsContainer").delay(100).animate({opacity:'show'}, 400, 'linear');
            $("#Model3 > a").delay(100).animate({opacity:'show'}, 100, 'linear');
            isM3Hidden = false;
        }


    });