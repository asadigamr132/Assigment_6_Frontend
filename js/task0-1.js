$(document).ready(function() {
    console.log("jQuery is ready!");

    $("#readyMessage").text("jQuery is ready!");

    $("#changeText").click(function() {
        $("#byId").text("The text was changed with .text().");
    });

    $("#changeHtml").click(function() {
        $(".byClass").html("<strong>HTML content was changed.</strong>");
    });

    $("#changeStyle").click(function() {
        $("p").css({
            "color": "#315d8a",
            "font-size": "18px"
        });
    });
});