$(document).ready(function(){
/*ouverture et fermeture de mes parties design et developpement*/
    $("#coder").on("click", function(){
        $(".home").css({float:'right'});
        $(".home").switchClass("home","home_small",1500);
        $(".closed_left").switchClass("closed_left","open", 1500 );
        $(".home_small").switchClass("home_small","home", 1500 );
        $(".open").switchClass("open", "closed_left", 1500 );
    });
/**/
    $("#designer").click(function(){
        $(".home").css({float:'left'});
        $(".home").switchClass("home","home_small_left", 1500);
        $(".closed_right").switchClass("closed_right","open", 1500 );
        $(".home_small_left").switchClass("home_small_left", "home",1500);
        $(".open").switchClass("open", "closed_right", 1500 );
    });



/*Effet sur la gallerie fading et hover*/

//    $(window).load(function(){
//        $('.box').fadeIn(3000);
//    });
    $('.box').mouseover(function(){
        $(this).find('.box_img').clearQueue().delay(50).animate({bottom: '17%'}, 1000);
    });
    $('.box').mouseout(function(){
        $(this).find('.box_img').clearQueue().delay(50).animate({bottom: '0px'}, 1000);
    });












//function(n) {
//  var i = $(e).find(".cb-contacts-request");
//  i.find(".cb-contacts-request-form").show(), i.find(".cb-contacts-request-message").hide();
//  var c = t.contacts.modal.open(i);
//  i.show(), c.play()
//}










/*Hover Effect*/
    $(".project").mouseover(function(){
        $(this).find(".pbox_title").clearQueue().delay(100).animate({bottom: '120px'});
    });
    $(".project").mouseleave(function(){
        $(this).find(".pbox_title").clearQueue().delay(50).animate({bottom: '-65px'});
    });
});
