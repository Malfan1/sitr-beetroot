$(document).ready(function(){
    $(".advantages").slick({
      arrows: false,
      slidesToShow: 3,
      responsive:[
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: false,
            pauseOnFocus : false,
          }
        },
        {
          breakpoint: 992,
          settings:{
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: false,
            pauseOnFocus : false,
          }
        }
      ]
    });
  });