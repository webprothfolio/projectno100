(function ($) {
    "use strict";
    $(document).ready(function () {
        ma5menu({
            menu: '.site-menu',
            activeClass: 'active',
            footer: '#ma5menu-tools',
            position: 'left',
            closeOnBodyClick: true,
        });
    });
    // $(window).on('scroll', function () {
    //     var scroll = $(window).scrollTop();
    //     if (scroll < 245) {
    //         $(".header-sticky").removeClass("sticky");
    //     } else {
    //         $(".header-sticky").addClass("sticky");
    //     }
    // });

    // // slider - active
    // function mainSlider() {
    //     var BasicSlider = $('.slider-active');

    //     BasicSlider.on('init', function (e, slick) {
    //         // ei-jayay-singel-slide-name ta chane korte hobe 
    //         var $firstAnimatingElements = $('.singel-slider:first-child').find('[data-animation]');
    //         doAnimations($firstAnimatingElements);
    //     });

    //     BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
    //         var $animatingElements = $('.singel-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
    //         doAnimations($animatingElements);
    //     });

    //     BasicSlider.slick({
    //         autoplay: false,
    //         autoplaySpeed: 10000,
    //         dots: false,
    //         fade: true,
    //         arrows: false,
    //         responsive: [{
    //             breakpoint: 767,
    //             settings: {
    //                 dots: false,
    //                 arrows: false
    //             }
    //         }]
    //     });

    //     function doAnimations(elements) {
    //         var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    //         elements.each(function () {
    //             var $this = $(this);
    //             var $animationDelay = $this.data('delay');
    //             var $animationType = 'animated ' + $this.data('animation');
    //             $this.css({
    //                 'animation-delay': $animationDelay,
    //                 '-webkit-animation-delay': $animationDelay
    //             });
    //             $this.addClass($animationType).one(animationEndEvents, function () {
    //                 $this.removeClass($animationType);
    //             });
    //         });
    //     }
    // }
    // mainSlider();

})(jQuery);