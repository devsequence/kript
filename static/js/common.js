// AOS.init({disable: 'mobile'});
$(window).on('scroll', function() {
    var $this = $(this),
        $header = $('.header');
    if ($this.scrollTop() > 1) {
        $header.addClass('scroll-nav');
    }
    else{
        $header.removeClass('scroll-nav');
    }
});

$('.reviews-slider').slick({
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                adaptiveHeight: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.hero-form__item select').select2({
    minimumResultsForSearch: Infinity
});
$('.question-item__title').on('click', function (e) {
    var $this = $(this);
    $this.next().slideToggle();
    $this.parent().toggleClass('active');
});
$(document).mouseup(function (e){
    var div = $('.header-phone, .header-nav, .header-btn');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $('body').removeClass('scroll');
        $('.header, .header-btn').removeClass('active');
    }
});
$('.header-btn').on('click', function (e) {
    e.preventDefault();
    var $ths = $(this);
    $ths.toggleClass('active');
    $('.header').toggleClass('active');
    $('body').toggleClass('scroll');
});
