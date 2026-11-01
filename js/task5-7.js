$(document).ready(function() {
    let itemNumber = 2;

    $("#appendItem").click(function() {
        itemNumber++;
        $("#itemList").append("<li>Item " + itemNumber + "</li>");
    });

    $("#prependItem").click(function() {
        itemNumber++;
        $("#itemList").prepend("<li>Item " + itemNumber + "</li>");
    });

    $("#removeItem").click(function() {
        $("#itemList li:last").remove();
    });

    $("#changeSrc").click(function() {
        $("#changeImage").attr("src", "https://picsum.photos/id/1062/520/300");
        $("#changeImage").attr("alt", "New picture");
    });

    $("#changeHref").click(function() {
        $("#changeLink").attr("href", "https://www.w3schools.com/jquery/");
        $("#changeLink").text("Open W3Schools jQuery tutorial");
    });

    $("#userName").on("input", function() {
        let name = $(this).val();
        $("#nameOutput").text(name);
    });

    $("#userEmail").on("input", function() {
        let email = $(this).val();
        $("#emailOutput").text(email);
    });
});