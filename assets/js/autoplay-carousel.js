


$('.doctor-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    // nav:true,

    // autoplay code start 
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    // autoplay code end 

    responsive: {
        0: {
            items: 1.2
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
})

var owl = $('.doctor-carousel');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function () {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
})


$('.review-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

let owl2 = $('.review-carousel');
owl2.owlCarousel();
// Go to the next item
$('.customNextBtn2').click(function () {
    owl2.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn2').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl2.trigger('prev.owl.carousel');
})
