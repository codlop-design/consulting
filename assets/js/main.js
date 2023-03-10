jQuery(function ($) {

    'use strict';

    function navResponsive() {

        let navbar = $('.navbar .items');
        let menu = $('#menu .items');

        menu.html('');
        navbar.clone().appendTo(menu);

        $('.menu .icon-arrow-right').removeClass('icon-arrow-right').addClass('icon-arrow-down');
    }

    navResponsive();

    $(document).on('click', '#menu .nav-item .nav-link', function (e) {
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 50}, 500);
        $('#menu').modal('hide');
    })
})



jQuery(function ($) {

    'use strict';

    var position = $(window).scrollTop();
    var navbar = $('.navbar.sub');
    var toTop = $('#scroll-to-top');

    $(document).ready(function () {
        if (position > 0) {
            navbar.addClass('navbar-sticky');
        }
        toTop.hide();
    })

    $(window).scroll(function () {

        navbar.removeAttr('data-aos');
        navbar.removeAttr('data-aos-delay');

        var scroll = $(window).scrollTop();

        if (!navbar.hasClass('relative')) {

            // Down
            if (scroll > position && position > 0) {

                navbar.addClass('navbar-sticky');

                if (navbar.hasClass('navbar-fixed') || window.innerWidth <= 767) {
                    navbar.removeClass('hidden').addClass('visible');

                } else {

                    if ($(window).scrollTop() >= window.innerHeight) {
                        navbar.removeClass('visible').addClass('hidden');
                    }
                }

                toTop.fadeOut('fast');

                // Up
            } else {

                navbar.removeClass('hidden').addClass('visible');

                // Top
                if ($(window).scrollTop() <= 100) {
                    navbar.removeClass('navbar-sticky');

                } else {

                    if (!navbar.hasClass('navbar-no-fixed')) {
                        navbar.addClass('visible');
                    }
                }

                if (position >= window.innerHeight && window.innerWidth >= 767) {
                    toTop.fadeIn('fast');

                } else {
                    toTop.fadeOut('fast');
                }
            }
            position = scroll;
        }
    });

})

var swiper = new Swiper(".clients-slide", {
    slidesPerView: 3,
    loop: true,
    speed: 5000,
    autoplay: {
        enabled: true,
        delay: 1,
    }
});

$(".clients-slide").hover(function () {
    (this).swiper.autoplay.stop();
}, function () {
    (this).swiper.autoplay.start();
});