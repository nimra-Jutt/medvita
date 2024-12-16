let deviceWidth = window.innerWidth;
console.log(deviceWidth);


if(deviceWidth > 1024){

$('.commitment-carousel').owlCarousel({
    loop:true,
    margin:30,
    dots:false,
    // nav:true,

    // autoplay code start 
    autoplay:true,
autoplayTimeout:2000,
autoplayHoverPause:true,
    // autoplay code end 

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1.3
        },
        1000:{
            items:2.1
        },
        1500:{
            items:2.2
        }
    }
})

}