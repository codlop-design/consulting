


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

    $(window).on('resize', function () {
        navResponsive();
    })

    $('.menu .dropdown-menu').each(function() {
        var children = $(this).children('.dropdown').length;
        $(this).addClass('children-'+children);
    })

    
    $('.menu .nav-item.dropdown').each(function() {
        var children = $(this).children('.nav-link');
        children.addClass('prevent');
    })

    $(document).on('click', '#menu .nav-item .nav-link', function (e) {

        if($(this).hasClass('prevent')) {
            e.preventDefault();
        }

        var nav_link = $(this);

        nav_link.next().toggleClass('show');

        if(nav_link.hasClass('smooth-anchor')) {
            $('#menu').modal('hide');
        }
    })
})



jQuery(function ($) {

    'use strict';

    var position = $(window).scrollTop();
    var navbar   = $('.navbar.sub');
    var toTop    = $('#scroll-to-top');

    $(document).ready(function() {
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

                if(navbar.hasClass('navbar-fixed') || window.innerWidth <= 767) {
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

                    if(!navbar.hasClass('navbar-no-fixed')) {
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

    $('.dropdown-menu').each(function () {

        let dropdown = $(this);

        dropdown.hover(function () {
            dropdown.parent().find('.nav-link').first().addClass('active');

        }, function () {
            dropdown.parent().find('.nav-link').first().removeClass('active');
        })
    })

    let navbar_holder = $('.navbar-holder');
    let navbar_height = $('.navbar-expand.sub').outerHeight();

    if(navbar_holder.length > 0) {
        $('.navbar-holder').css('min-height', navbar_height);
    }
})

