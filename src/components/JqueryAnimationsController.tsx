
import {RENDER_PAGE_BODY_INFO} from './PageBodyData.js';

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

let PageSectionList = [];
//On page load, play animations
$(document).ready(function(){
    for(var i = 0; i < RENDER_PAGE_BODY_INFO.length; i++){
      PageSectionList.push(RENDER_PAGE_BODY_INFO[i].ID);
    }
    
    var scrollTop = $(window).scrollTop();
    var screenheighttop = $(".MainHeader").offset().top + ($(window).height() * 1);
    if(scrollTop < screenheighttop)
    {
        $("#Model3 > div > h2").hide();
        $("#Model3 > div > h2").animate({top: '+=25px'},1);
        $("#Model3 > div > h2").delay(1000).animate({top: '-=25px', opacity:'show'},400, 'linear');
        $("#Model3 > div > p").hide();
        $("#Model3 > div > p").animate({top: '+=25px'},1);
        $("#Model3 > div > p").delay(1500).animate({top: '-=25px', opacity:'show'},400, 'linear');
        $(".bounce").hide();
        $(".bounce").delay(2000).animate({top: '+=0px', opacity:'show'},'slow', 'linear');

        $(".NavBarHeader").hide();
        $(".NavBarHeader").delay(100).animate({opacity:'show'},'slow', 'linear');
        $("#Model3 > div > .BtnBlack").animate({opacity:'0%'},1);
        $("#Model3 > div > .BtnWhite").animate({opacity:'0%'},1);
        $("#Model3 > div > .BtnBlack").animate({left: '-=200px'}, 1);
        $("#Model3 > div > .BtnWhite").animate({left: '+=200px'}, 1);
        $("#Model3 > div > .BtnBlack").delay(1500).animate({left: '+=200px', opacity:'100%'},400, 'linear');
        $("#Model3 > div > .BtnWhite").delay(1500).animate({left: '-=200px', opacity:'100%'},400, 'linear')
    }
    else
    {
        $("#Model3 > div").hide();
    }

    $("#mainfooter").hide();
    $("#ModelY > div").hide();
    $("#ModelS > div").hide();
    $("#ModelX > div").hide();
    $("#SolarPanels > div").hide();
    $("#SolarRoof > div").hide();
    $("#Charger > div").hide();
    //PageFading();
  });
    function OpacityCheck(IncomingOpacity){
        if(IncomingOpacity < 0.2)
            return IncomingOpacity = 0;
        else if(IncomingOpacity > 0.98)
            return IncomingOpacity = 1;
        else
            return IncomingOpacity;
    }

    function PageFading(){
        for(var index = 0; index < PageSectionList.length; index++)
        {
            let Location = "#" + PageSectionList[index] + " > div";
            //Fade in & out when scrolling past the *top* of the page section
            var screenheighttop = $(".MainHeader").offset().top + ($(window).height() * index);       //Get the top scroll position of this section
            var screenbottom = $(".MainHeader").offset().top + ($(window).height() * (index + 1));          //Get the bottom scroll position of this section
            if($(window).scrollTop() - (screenheighttop - 400) > 0                                //If the scroll bar is in top of the fading zone
            && $(window).scrollTop() - (screenheighttop - 500) < 400){                            //If the scroll bar is in bottom  of the fading zone
                var myOpacity = ($(window).scrollTop() - (screenheighttop - 400)) / 300;          //Change opacity based on scroll position in the fade zone
                myOpacity = OpacityCheck(myOpacity);
                $(Location).css('display', 'block');
                $(Location).css('opacity', myOpacity);
            }
            //Bottom of page specific, prevents text fading at bottom of page 
            else if($(window).scrollTop() > ($(window).height() * (RENDER_PAGE_BODY_INFO.length -1))
            && index === RENDER_PAGE_BODY_INFO.length)
            {
                $(Location).css('display', 'block');
                $(Location).css('opacity', 1); 
            }
            //Fade in & out when scrolling past the *bottom* of the page section
            else if($(window).scrollTop() - (screenbottom - 200) > -400                                //If the scroll bar is in top of the fading zone
            && $(window).scrollTop() - (screenbottom - 300) < 0){                                 //If the scroll bar is in bottom  of the fading zone
                var myOpacity = Math.abs(($(window).scrollTop() - (screenbottom - 300))) / 300;   //Change opacity based on scroll position in the fade zone
                myOpacity = OpacityCheck(myOpacity);
                $(Location).css('display', 'block');
                $(Location).css('opacity', myOpacity);
                console.log("scroll enter bottom section");
            }
            //Makes sure opacity is solid while scrolling middle of a section beyond the fade regions.
            else if($(window).scrollTop() > screenheighttop - 400
            && $(window).scrollTop() < screenbottom - 300){
                $(Location).css('display', 'block');
                $(Location).css('opacity', 1);
            }
            
            
            //Hides the elements of a section completly even if the user scrolls too fast
            else{
                $(Location).hide();
            }
        }
    }

    let isFooterHidden = true;
    $(window).scroll(function() {
        PageFading();
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
        //Sticky footer for mobile
        var navbar = document.getElementById("Charger");
        var sticky = navbar.offsetTop;
        
        function FooterMediaQueryMobile(x) {
            if(x.matches)
            {
                if (window.pageYOffset >= sticky - 50) {
                    $('#Charger > .PageBodyText').css('position', 'relative');
                    $('#Charger > .PageBodyText').css('left', '0%');
                    $('#Charger > .PageBodyText').css('top', '-30%');
                    $('#Charger > .PageButtonsContainer').css('position', 'relative');
                    $('#Charger > .PageButtonsContainer > .PageButton').css('position', 'relative');
                    $('#Charger > .PageButtonsContainer').css('left', '0%');
                    $('#Charger > .PageButtonsContainer').css('top', '33%');
                } else {
                    $('#Charger > .PageBodyText').css('position', 'fixed');
                    $('#Charger > .PageBodyText').css('left', '50%');
                    $('#Charger > .PageBodyText').css('top', '23%');
                    $('#Charger > .PageButtonsContainer').css('position', 'fixed');
                    $('#Charger > .PageButtonsContainer > .PageButton').css('position', 'absolute');
                    $('#Charger > .PageButtonsContainer').css('left', '1%');
                    $('#Charger > .PageButtonsContainer').css('top', '87%');
                }                 
            }
          }
          
          var x = window.matchMedia("(max-width: 600px)")
          FooterMediaQueryMobile(x) // Call listener function at run time
          x.addListener(FooterMediaQueryMobile) // Attach listener function on state changes


        
    });

    //Timer if scrolling stoped. If stopped long enough, will scroll to nearest section
    var timer = null;
    window.addEventListener('scroll', function() {
        if(timer !== null) {
            clearTimeout(timer);        
        }
        timer = setTimeout(function() {
            var screenHeightIndex = 0;
            for(var i = 0; i < RENDER_PAGE_BODY_INFO.length; i++){
                var screenheighttop = $(".MainHeader").offset().top + ($(window).height() * screenHeightIndex); 
                var screenbottom = $(".MainHeader").offset().top + ($(window).height() * i); 
                var win = $(window).scrollTop();
                    screenHeightIndex = Math.abs(screenbottom - win) < Math.abs(screenheighttop - win) ? i : screenHeightIndex;
            }
            //Prevents scroll snapping at bottom of page
            if($(window).scrollTop() < ($(window).height() * (RENDER_PAGE_BODY_INFO.length -1)))
            {
                $('html,body').animate({
                    scrollTop: $(window).height() * screenHeightIndex
                }, 250, 'swing');
            }
            
        }, 500);
    }, false);

