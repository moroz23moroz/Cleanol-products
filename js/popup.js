$(document).ready(function () {
    $('.popup__open').on('click', function () {
        $('#popup').addClass('open');
    });

    $('.popup__close').on('click', function () {
        $('#popup').removeClass('open');
    });
});