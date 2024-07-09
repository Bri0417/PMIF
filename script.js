$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 15000,
        arrows: true,
        prevArrow:'.prev',
        nextArrow:'.next',
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            },
            breakpoint: 480, settings: {slidesToShow: 1}
        }]
    });
});
