$(document).ready(function() {
    $(".thumbnail").hide().fadeIn(700);

    $(".thumbnail").click(function() {
        let imageSource = $(this).attr("src");
        let largeSource = imageSource.replace("/300/200", "/900/600");

        $("#largeImage").attr("src", largeSource);
        $("#largeImage").attr("alt", $(this).attr("alt"));
        $("#largeImage").stop(true).fadeIn(500);
    });

    $(".thumbnail").mouseenter(function() {
        $(this).fadeTo(200, 0.5);
    });

    $(".thumbnail").mouseleave(function() {
        $(this).fadeTo(200, 1);
    });

    $("#hideGalleryImage").click(function() {
        $("#largeImage").fadeOut(500);
    });
});