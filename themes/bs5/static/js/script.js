$(document).ready(function() {

    let mobile_menu = $(".mobile-menu");
    let mobile_menu_btn = $(".mobile-menu-btn");

    $(".mobile-menu a").click(function() {
        if(mobile_menu.hasClass("open")) {
            mobile_menu.animate({"left": "-320px"}, 1000, function () {
                $(this).removeClass("open");
            });
        }
    });

    mobile_menu_btn.click(function() {
        if(!mobile_menu.hasClass("open")) {
            mobile_menu.animate({"left" : "0px"}, 1000, function() {
                $(this).addClass("open");
            });
        }
    });
    mobile_menu_btn.click(function() {
        if(mobile_menu.hasClass("open")) {
            mobile_menu.animate({"left": "-320px"}, 1000, function () {
                $(this).removeClass("open");
            });
        }
    });

    $(window).scroll(function() {
        if($(window).scrollTop() >= 120) {
            if(!mobile_menu_btn.hasClass("fixed")) {
                mobile_menu_btn.addClass("fixed");
            }
        } else {
            if(mobile_menu_btn.hasClass("fixed")) {
                mobile_menu_btn.removeClass("fixed");
            }
        }
    });
});