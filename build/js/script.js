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
        $(this).find('.box_img').clearQueue().delay(50).animate({bottom: '17%'}, 1000);
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
});

