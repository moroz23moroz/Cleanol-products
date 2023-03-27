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

$(document).ready(function () {
    if ($('.checkb').prop('checked') == true) {
        $('.content-row_personal').addClass('active');
    }

    $(document).on('click', '.content-row_personal', function (e) {
        if ($(this).hasClass('active')) {
            $('.checkb').prop('checked', false);
        } else {
            $('.checkb').prop('checked', true);
        }
        $(this).toggleClass('active');
        return false;
    })
})