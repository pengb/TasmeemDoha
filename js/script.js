// Title animation on loading
$(document).ready(function(){
	$("#titles span.englishTitle").removeClass("ePreloading");
	$("#titles span.arabicTitle").removeClass("aPreloading");
});


// Menu shows up on scrolling
$(document).ready(function(){   
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){   
        /* Check the location of each desired element */
        $('.englishHeader').each( function(i){           
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){               
                $(this).removeClass("ePreloading");                  
            }            
        });  
    });




    $(window).scroll( function(){   
        /* Check the location of each desired element */
        $('.english-comingsoon').each( function(i){           
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){               
                $(this).removeClass("ePreloading");                  
            }            
        });     
    });




    $(window).scroll( function(){   
        /* Check the location of each desired element */   
        $('.arabicHeader').each( function(i){           
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){               
                $(this).removeClass("aPreloading");                  
            }            
        });   
    });




    $(window).scroll( function(){   
        /* Check the location of each desired element */
        $('.arabic-comingsoon').each( function(i){           
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){               
                $(this).removeClass("aPreloading");                  
            }            
        });   
    });
});

// Out of focus effect on hover
$(document).ready(function(){
	if (Modernizr.touchevents) {
	}
	else 
	{
	    $('.englishHeader').mouseover(function(){
			$(this).parent().children('.arabicHeader').addClass('outOfFocus');
		});
		$('.englishHeader').mouseleave(function(){
			$(this).parent().children('.arabicHeader').removeClass('outOfFocus');
		});

		$('.arabicHeader').mouseover(function(){
			$(this).parent().children('.englishHeader').addClass('outOfFocus');
		});
		$('.arabicHeader').mouseleave(function(){
			$(this).parent().children('.englishHeader').removeClass('outOfFocus');
		});
	}
});






// // Infinite Scroll Loop
// $('document').ready(function() {
//   // We need to duplicate the whole body of the website so if you scroll down you can see both the bottom and the top at the same time. Before we do this we need to know the original height of the website.
//     // var origDocHeight = document.body.offsetHeight;

//     // now we know the height we can duplicate the body    
//     // $("body").contents().clone().appendTo("body");

//   $(document).scroll(function(){
//         if (document.documentElement.clientHeight + $(window).scrollTop() > $(document).height()) {
//           $(document).scrollTop(0);
//         } 
//         // else if ($(window).scrollTop()<1){
//         //  $(document).scrollTop($(document).height());
//         // }
//     });
// });