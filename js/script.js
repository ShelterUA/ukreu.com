$(document).ready(function() {

    let mobile_menu = $(".mobile-menu-btn");

    mobile_menu.click(function() {
        $(".mobile-menu").animate({"left" : "0px"}, 1000, function() {
            $(".mobile-menu-close").css({"display" : "inline-block"}).animate({"opacity" : "1"}, 500);
        });
    });
    $(".mobile-menu-close").click(function() {
        $(".mobile-menu").animate({"left" : "-320px"}, 1000);
        $(".mobile-menu-close").animate({"opacity" : "0"}, 500, function() {
            $(this).css({"display" : "none"});
        })
    });

    $(window).scroll(function() {
        if($(window).scrollTop() >= 120) {
            if(!mobile_menu.hasClass("fixed")) {
                mobile_menu.addClass("fixed");
            }
        } else {
            if(mobile_menu.hasClass("fixed")) {
                mobile_menu.removeClass("fixed");
            }
        }
    })
});