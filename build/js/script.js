$(document).ready(function(){
/*ouverture et fermeture de mes parties design et developpement*/
    $("#coder").on("click", function(){
        $(".home").css({float:'right'});
        $(".bt").hide();
        $(".home").switchClass("home","home_small",1500);
        $(".closed_left").switchClass("closed_left","open", 1500 ),
        $(".coder_gallery").delay( 1500 ).fadeIn(900);
    });
    $(".close_gallery").click(function(){
        $(".coder_gallery").fadeOut(1000);
        $(".home_small").delay( 1000 ).switchClass("home_small","home", 1500 );
        $(".open").delay( 1000 ).switchClass("open", "closed_left", 1500 );
         $(".bt").delay( 1500 ).show();
    });
/**/
    $("#designer").click(function(){
        $(".home").css({float:'left'});
        $(".bt").hide();
        $(".home").switchClass("home","home_small_left", 1500);
        $(".closed_right").switchClass("closed_right","open", 1500 );
        $(".designer_gallery").delay( 1500 ).fadeIn(900);
    });

    $(".close_gallery").click(function(){
        $(".designer_gallery").fadeOut(1000);
        $(".home_small_left").delay( 1000 ).switchClass("home_small_left", "home",1500);
        $(".open").delay( 1000 ).switchClass("open", "closed_right", 1500 );
        $(".bt").delay( 1500 ).show();
    });



/*Effet sur la gallerie fading et hover*/
    $('.box').mouseover(function(){
        $(this).find('.box_img').clearQueue().delay(50).animate({bottom: '130px'}, 1000);
    });
    $('.box').mouseout(function(){
        $(this).find('.box_img').clearQueue().delay(50).animate({bottom: '0px'}, 1000);
    });

    $(".project").mouseover(function(){
        $(this).find(".pbox_title").clearQueue().delay(100).animate({bottom: '120px'});
    });
    $(".project").mouseleave(function(){
        $(this).find(".pbox_title").clearQueue().delay(50).animate({bottom: '-65px'});
    });

/*ProgressBar*/
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});

/*Bouton Codepen*/

    $('.close').click (function(){
      $(this).toggleClass('open');
    });
/*Navbar*/
$(window).load(scroll,function(){
  var distanceY =window.pageYOffset || document.documentElement.scrollTop,
  limite = 300,
  header = document.querySelector("header");
    if(distanceY > limite){
      $('.navbar').show();
    }
    else{
      $('.navbar').hide();
    }
});
// function init() {
//     window.addEventListener('scroll', function(e){
//         var distanceY = window.pageYOffset || document.documentElement.scrollTop,
//             shrinkOn = 300,
//             header = document.querySelector("header");
//         if (distanceY > shrinkOn) {
//             classie.add(header,"smaller");
//         } else {
//             if (classie.has(header,"smaller")) {
//                 classie.remove(header,"smaller");
//             }
//         }
//     });
// }
// window.onload = init();
//
//
// /*Onepage Scroll */
//     $(".main").onepage_scroll({
//        sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
//        easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
//                                         // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
//        animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
//        pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
//        updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
//        beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
//        afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
//        loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
//        keyboard: true,                  // You can activate the keyboard controls
//        responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
//                                         // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
//                                         // the browser's width is less than 600, the fallback will kick in.
//        direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
//     });
});






/*scrollTop*/
// function() {
//   if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
//     var a = $(this.hash);
//     if (a = a.length ? a : $("[name=" + this.hash.slice(1) + "]"), a.length) return $("html,body").animate({
//       scrollTop: a.offset().top
//     }, 1e3), !1
//   }
// }
