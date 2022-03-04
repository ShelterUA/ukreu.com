$(document).ready(function() {
    $(".mobile-menu-btn").click(function() {
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
});