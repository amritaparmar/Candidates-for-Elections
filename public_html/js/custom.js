//height js//
jQuery(document).ready(function () {
    $('.home_page').css('height', $(window).height());
});

//dropdown_js//
$('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');


    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
        $('.dropdown-submenu .show').removeClass("show");
    });


    return false;
});

// slidewr_js//
$(document).ready(function () {
    $('.flexslider').flexslider({
        controlNav: false,
        animation: "slide"
    });
});