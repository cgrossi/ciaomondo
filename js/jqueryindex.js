$(function(){
    $("#toggle").click(function() {
        $("#hidden").toggle();
    });

    $("#headerbutton").click(function() {
        $("#headeritalian").html("Hello, World!")
    });

    $("#httprequest").click(function() {
        makeRequest();
    });
});
