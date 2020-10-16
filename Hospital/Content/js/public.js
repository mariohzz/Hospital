$(function () {
    "use strict";

    // open the aside menu & append public layer 
    var toggle = true;
    $("#toggle-menu").click(function () {
        if(toggle) {
            $("body").append("<div class='public-layer'></div>");
            $("#aside").addClass("open");
            toggle = false;
        } else {
            $(".public-layer'").remove();
            $("#aside").removeClass("open");
            toggle = true;
        }
    });
    // close the aside menu 
    $(document).on("click", ".public-layer, .close-aside", function () {
        $(".public-layer").remove();
        $("#aside").removeClass("open");
        toggle=true;
    });

    // upload 

    $(document).on("click", ".uploading label", function () {
        $(this).next().click();
    });
});