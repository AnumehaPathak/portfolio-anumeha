$(document).ready(function () {
    $(".slidesec").click(function (e) {
        var newLink = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(newLink).offset().top - 10
        }, 1500);
        e.preventDefault();
    });


    var arr = ["college", "10th", "12th"];
    jQuery.each(arr, function (i, val) {
        $("#card-" + val).on("mouseover", function () {
            $("#DIV3").css("background - attachment", "fixed");
            $("#DIV3").css("background", "url(" + val + ".jpg)");
            // $("#DIV3").addClass("div3");
            $("#card-" + val).removeClass("card");
            $("#card-" + val).addClass("card-transparent");
        });
        $("#card-" + val).on("mouseout", function () {
            $("#card-" + val).removeClass("card-transparent");
            $("#card-" + val).addClass("card");
            //$("#DIV3").removeClass("div3");
        });
    });


    $("#message").focus(function () {
        $("#letter").css("visibility", 'visible');
        $("#letter").animate({
            height: '400px',
            width: '250px'
        });
    });
    $("#btn").click(function () {
        var div = $("#letter");
        div.animate({ width: '100px' }, "slow");
        div.animate({ height: '100px' }, "slow");
        div.animate({ height:'0px' }, "slow");
        div.animate({ width: '0px' }, "slow", function () {
            $("#letter").css("visibility", 'hidden');
        });
    });

    var arr1 = ["1", "2", "3", "4", "5", "6", "7"];
    $.each(arr1, function (j, i) {
        $(document).on("scroll", function () {
            if ($(document).scrollTop() > $("#skill").offset().top / 2) {
                $("#arrow-status" + i).addClass("arrow-status");
                $("#arrow-text" + i).addClass("arrow-text");
            }
        });
    });
  
});