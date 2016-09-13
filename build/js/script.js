$(document).ready(function(){
/**/
    $("#coder").on("click", function(){
        $(".home").switchClass("home","home_small",2000);
        $(".closed").switchClass("closed","open", 2000 );
        $(".home_small").switchClass("home_small","home", 2000 );
        $(".open").switchClass("open", "closed", 2000 );
    });
/**/
    $("designer").click(function(){
        $(".home").switchClass("home","home_small_left", 2000);
        $(".home_small_left").switchClass("home_small_left", "home",2000);
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
