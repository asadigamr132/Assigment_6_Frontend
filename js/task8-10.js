$(document).ready(function() {
    $("#basicAnimation").click(function() {
        $("#basicBox").animate({
            width: "120px",
            height: "120px",
            left: "100px"
        }, 1000);
    });

    $("#resetBasic").click(function() {
        $("#basicBox").stop(true).css({
            width: "70px",
            height: "70px",
            left: "0px"
        });
    });

    $("#sequenceAnimation").click(function() {
        $("#sequenceBox").stop(true).css({
            left: "0px",
            top: "0px",
            width: "70px",
            height: "70px"
        });

        $("#sequenceBox").animate({ left: "150px" }, 700);
        $("#sequenceBox").animate({ top: "70px" }, 700);
        $("#sequenceBox").animate({
            width: "35px",
            height: "35px"
        }, 700);
        $("#sequenceBox").animate({
            left: "0px",
            top: "0px",
            width: "70px",
            height: "70px"
        }, 700);
    });

    $("#resetSequence").click(function() {
        $("#sequenceBox").stop(true).css({
            left: "0px",
            top: "0px",
            width: "70px",
            height: "70px"
        });
    });

    $("#combinedAnimation").click(function() {
        $("#combinedBox").animate({
            left: "130px",
            width: "110px",
            height: "110px",
            opacity: 0.4
        }, 1000);
    });

    $("#resetCombined").click(function() {
        $("#combinedBox").stop(true).css({
            left: "0px",
            width: "70px",
            height: "70px",
            opacity: 1
        });
    });
});