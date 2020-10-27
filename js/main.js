new WOW().init();

$('.header_slider_text').slick({
    // arrows: false,
    // adaptiveHeight: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: '.prev_right',
    prevArrow: '.prev_left',

});

$(".header_slider_text").on('afterChange', function (event, slick, currentSlide) {
    $("#cp").text(currentSlide + 1);
});

// $('.header_slider_text').on('beforeChange', function(event, slick, currentSlide, nextSlide){
//     console.log(currentSlide); // индекс текущего слайда
//   });


// 

$('.services_slider').slick({
    arrows: false,
    dots: false,
    dotsClass: 'services_indicator',
    // adaptiveHeight: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    // nextArrow: '.prev_right',
    // prevArrow: '.prev_left',

});

// 
$('.partners_slider').slick({
    // arrows: false,
    // dots: true,
    // dotsClass: 'services_indicator',
    // adaptiveHeight: true,
    autoplaySpeed: 3500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: '.partner_right',
    prevArrow: '.partner_left',
    responsive: [{
            breakpoint: 961,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]

});


$('.count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 8000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
$('.count_about').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 8000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


// $('[data-fancybox="images"]').fancybox({
//     buttons: [
//         "slideShow",
//         "tube",
//         "thumbs",
//         "close"
//     ],
//     thumbs: {
//         autoStart: false
//     }
// });