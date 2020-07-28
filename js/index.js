/*global $, alert , console*/   /* this make the $ and others don't make warnning */  /* $ --> is the selector */


$(function () {
    'use strict';
    //Adjust Header Height
	
	var myHeader = $('.header'),
        mySlider = $('.bxslider');
    
    
	myHeader.height($(window).height());  /* this make the height of header as the height of window */ 
	
    $(window).resize(function () {

        myHeader.height($(window).height()); /* we used this event to resize the height with new window*/
    });
	
	//Links Add Active Class
	
	$('.links li a').click(function(){
        
		$(this).parent().addClass('active').siblings().removeClass('active'); /* siblings()--> is the other item of the list*/
        
        
    // Adjust Bxslider list item Center
       mySlider.each(function(){  // each() is used to apply this function to all items have class bxslider
           
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height())/2);
    });
	});
	
    
    // Adjust Bxslider list item Center
    
    mySlider.each(function(){  // each() is used to apply this function to all items have class bxslider
        
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height())/2);
        // this make the list item in the center of the window height exactly
        // also we can copy this into the resize 
    });
    
    
	// Trigger The Bx Slider:
    mySlider .bxSlider({
        
        pager: false
        
    });
    
    
    // Smooth Scroll to Div without using plugns 
    $('.links li a').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1000);

    });
    
    //Out Auto Slider Code
    //Self Invoke Function
    
    (function autoSlider(){
        
        $('.slider .active').each(function () {
           
            if (!$(this).is(':last-child')) {
                
                $(this).delay(3000).fadeOut(1000, function () {
                   
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    
                    autoSlider();
                    
                });
                
            }else{
                 $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('active');
                    
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    
                    autoSlider(); 

                })
            }
        });
    }());
    
    // Aplly Trigger Mixitup
    
    $('#Container').mixItUp();
    
    //Adjust Shufle 
    
    $('.shuffle li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    });
});

