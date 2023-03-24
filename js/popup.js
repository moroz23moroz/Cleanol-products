$(document).ready(function () {
    $('.popup__open').on('click', function () {
        $('#popup').addClass('open');
    });

    $('.popup__close').on('click', function () {
        $('#popup').removeClass('open');
    });

    $('.icon-menu').on('click', function () {
        $('.adaptive-menu').addClass('action');
    });
    $('.adaptive-menu__close').on('click', function () {
        $('.adaptive-menu').removeClass('action');
    });

});