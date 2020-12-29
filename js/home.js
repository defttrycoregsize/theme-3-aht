    $('.feature__item--slider-1').slick({
        dots: false,
        arrows: true,
        prevArrow: '.feature__arrow-prev1',
        nextArrow: '.feature__arrow-next1',
    })
    $('.feature__item--slider-2').slick({
        dots: false,
        arrows: true,
        prevArrow: '.feature__arrow-prev2',
        nextArrow: '.feature__arrow-next2',
    })
    $('.feature__item--slider-3').slick({
        dots: false,
        arrows: true,
        prevArrow: '.feature__arrow-prev3',
        nextArrow: '.feature__arrow-next3',
    })
    $('.feature__item--slider-4').slick({
        dots: false,
        arrows: true,
        prevArrow: '.feature__arrow-prev4',
        nextArrow: '.feature__arrow-next4',
    })
    $('.feature__item--slider-5').slick({
        dots: false,
        arrows: true,
        prevArrow: '.feature__arrow-prev5',
        nextArrow: '.feature__arrow-next5',
    })
    $('.feature__item--slider-6').slick({
        dots: false,
        arrows: true,
        prevArrow: '.feature__arrow-prev6',
        nextArrow: '.feature__arrow-next6',
    })
    $('.feature__item--slider-7').slick({
        dots: false,
        arrows: true,
        prevArrow: '.feature__arrow-prev7',
        nextArrow: '.feature__arrow-next7',
    })
    $('.feature__item--slider-8').slick({
        dots: false,
        arrows: true,
        prevArrow: '.feature__arrow-prev8',
        nextArrow: '.feature__arrow-next8',
    })

    $('.support__slider').slick({
        dots:false,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 1000,
    });


    if ($(window).width() <= 1280){ 
        $(".wow").removeClass("wow");
        }
        
    $('.feature__row--top').slick({
        dots:false,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 1000,
        
    });
    $('.blog__row').slick({
        dots:false,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 1000,
    });
    $('.sponsor__logo').slick({
        dots:false,
        arrows:false,
         autoplay: true,
        autoplaySpeed: 1000,
    });

    if($(window).width()>= 1280) {
        $('.support__slider').slick('unslick');
        $('.feature__row--top').slick('unslick');
        $('.blog__row').slick('unslick');
        $('.sponsor__logo').slick('unslick');    
    }

    
    
    