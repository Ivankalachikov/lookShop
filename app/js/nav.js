
var ww = document.body.clientWidth;

$(document).ready(function() {
    $(".nav__item-link").each(function() {
        if ($(this).next().length > 0) {
            $(this).addClass("nav__item-link--parent");
        };
    });
    
    $(".nav__icon").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".nav__list--lv1").toggle();
    });

    $(".btm-line__menu-icon").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".footer-nav__list--lv1").toggle();
    });
    adjustMenu();
})

$(window).bind('resize orientationchange', function() {
    ww = document.body.clientWidth;
    adjustMenu();
});

var adjustMenu = function() {
    if (ww < 1200) {
        $(".nav__icon").css("display", "inline-block");
        if (!$(".nav__icon").hasClass("active")) {
            $(".nav__list--lv1").hide();
        } else {
            $(".nav__list--lv1").show();
        }
        
    
        $(".nav__item").unbind('mouseenter mouseleave');
        $(".nav__item-link--parent").unbind('click').bind('click', function(e) {
            // Необходимоо привязать к элементу ссылки для предотвращения "всплывания"
            e.preventDefault();
            $(this).parent(".nav__item").toggleClass("nav__item--hover");
        });
    } 
    //
    if (ww < 768) {
        $(".btm-line__menu-icon").css("display", "inline-block");
        
        if (!$(".btm-line__menu-icon").hasClass("active")) {
            $(".footer-nav__list--lv1").hide();
        } else {
            $(".footer-nav__list--lv1").show();
        }
    
    } 
    if (ww >=1200) {
        $(".nav__icon").css("display", "none");
        $(".nav__list--lv1").show();
        $(".nav__item").removeClass("nav__item--hover");
        $(".nav__item-link").unbind('click');
        $(".nav__item").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
            // Необходимо привязать к элементу li для предотвращения запуска события mouseleave при перемещении курсора мыши над подменю
            $(this).toggleClass('nav__item--hover');
        });
    } 
    if (ww >= 768) {
        $(".btm-line__menu-icon").css("display", "none");
        $(".footer-nav__list--lv1").show();
    }
}
