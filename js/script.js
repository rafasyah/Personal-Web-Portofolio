/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
    'use strict';



    // Sticky Menu
    $(window).scroll(function () {
        if ($('.navigation').offset().top > 100) {
            $('.navigation').addClass('nav-bg');
        } else {
            $('.navigation').removeClass('nav-bg');
        }
    });

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });

    // background color
    $('[data-color]').each(function () {
        $(this).css({
            'background-color': $(this).data('color')
        });
    });

    // progress bar
    $('[data-progress]').each(function () {
        $(this).css({
            'bottom': $(this).data('progress')
        });
    });


    /* ########################################### hero parallax ############################################## */
    window.onload = function () {

        var parallaxBox = document.getElementById('parallax') || document.getElementById('home');
        if (!parallaxBox) return;
        var l2 = document.getElementById('l2'),
            l3 = document.getElementById('l3'),
            l4 = document.getElementById('l4'),
            l5 = document.getElementById('l5'),
            l6 = document.getElementById('l6'),
            l7 = document.getElementById('l7'),
            l8 = document.getElementById('l8'),
            l9 = document.getElementById('l9');

        if (!l2 || !l3 || !l4 || !l5 || !l6 || !l7 || !l8 || !l9) return;

        var c2left = l2.offsetLeft, c2top = l2.offsetTop,
            c3left = l3.offsetLeft, c3top = l3.offsetTop,
            c4left = l4.offsetLeft, c4top = l4.offsetTop,
            c5left = l5.offsetLeft, c5top = l5.offsetTop,
            c6left = l6.offsetLeft, c6top = l6.offsetTop,
            c7left = l7.offsetLeft, c7top = l7.offsetTop,
            c8left = l8.offsetLeft, c8top = l8.offsetTop,
            c9left = l9.offsetLeft, c9top = l9.offsetTop;

        parallaxBox.onmousemove = function (event) {
            event = event || window.event;
            var x = event.clientX - parallaxBox.offsetLeft,
                y = event.clientY - parallaxBox.offsetTop;

            /*  mouseParallax('l1', c1left, c1top, x, y, 5); */
            mouseParallax('l2', c2left, c2top, x, y, 25);
            mouseParallax('l3', c3left, c3top, x, y, 20);
            mouseParallax('l4', c4left, c4top, x, y, 35);
            mouseParallax('l5', c5left, c5top, x, y, 30);
            mouseParallax('l6', c6left, c6top, x, y, 45);
            mouseParallax('l7', c7left, c7top, x, y, 30);
            mouseParallax('l8', c8left, c8top, x, y, 25);
            mouseParallax('l9', c9left, c9top, x, y, 40);
        };

    };

    function mouseParallax(id, left, top, mouseX, mouseY, speed) {
        var obj = document.getElementById(id);
        if (!obj || !obj.parentNode) return;
        var parentObj = obj.parentNode,
            containerWidth = parseInt(parentObj.offsetWidth),
            containerHeight = parseInt(parentObj.offsetHeight);
        obj.style.left = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
        obj.style.top = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
    }
    /* ########################################### /hero parallax ############################################## */

    // testimonial-slider
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true
    });


    // clients logo slider
    $('.client-logo-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Shuffle js filter and masonry
    var Shuffle = window.Shuffle;
    var jQuery = window.jQuery;

    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
        itemSelector: '.shuffle-item',
        buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
        var input = evt.currentTarget;
        if (input.checked) {
            myShuffle.filter(input.value);
        }
    });

    // Hotel Grand Nusantara Carousels
    $('#hotelCarousel').carousel({
        interval: 2500,
        pause: 'hover'
    });

    $('#hotelModal').on('shown.bs.modal', function () {
        $('#hotelModalCarousel').carousel(0);
        $('#hotelModalCarousel').carousel('cycle');
    });

    // Catering Nusantara Carousels
    $('#cateringCarousel').carousel({
        interval: 2500,
        pause: 'hover'
    });

    $('#cateringModal').on('shown.bs.modal', function () {
        $('#cateringModalCarousel').carousel(0);
        $('#cateringModalCarousel').carousel('cycle');
    });

})(jQuery);