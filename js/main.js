$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        speed: 700,
        asNavFor: '.slider__row'
      });
      $('.slider__row').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true
      });
    $('.shop__slider').slick({
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 750,
            settings: {
              arrows: false,
              dots: true,
            }
          },
          {
            breakpoint: 540,
            settings: {
              arrows: false,
              dots: true,
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 410,
            settings: {
              arrows: false,
              dots: true,
              slidesToShow: 1,
            }
          }
        ]
    });
    $('.media__slider').slick({
      arrows: true,
      adaptiveHeight: true,
      slidesToShow: 4,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 410,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    })

    $('.scroll__link').click(function(e) {
      var target = $(this.hash);
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000)
    })

    $('.header__burger').click(function(e) {
      $('.header__burger, .header__mobile').toggleClass('active');
      $('body').toggleClass('lock')
 })

  $('.footer__nav--linkLang').click(function(e) {
    $('.footer__hover').toggleClass('active');
  })
});