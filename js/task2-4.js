$(document).ready(function() {
    $("#hideText").click(function() {
        $("#visibilityText").hide();
    });

    $("#showText").click(function() {
        $("#visibilityText").show();
    });

    $("#toggleText").click(function() {
        $("#visibilityText").toggle();
    });

    $("#fadeIn").click(function() {
        $("#fadeImage").fadeIn();
    });

    $("#fadeOut").click(function() {
        $("#fadeImage").fadeOut();
    });

    $("#fadeToggle").click(function() {
        $("#fadeImage").fadeToggle();
    });

    $("#slideUp").click(function() {
        $("#slidePanel").slideUp();
    });

    $("#slideDown").click(function() {
        $("#slidePanel").slideDown();
    });

    $("#slideToggle").click(function() {
        $("#slidePanel").slideToggle();
    });
});