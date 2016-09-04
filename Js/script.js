$(document).ready(function(){
    $("#click_left").click(function(){
        $("#left").removeClass("closed").addClass('col-md-9 opened');
        $("#center").removeClass("col-md-12").addClass("col-md-3");
        $(".info").removeClass("col-md-4 col-md-offset-4").addClass("col-md-12");
    });
});