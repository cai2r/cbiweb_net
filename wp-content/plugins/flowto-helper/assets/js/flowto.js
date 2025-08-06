(function ($) {

  "use strict";

  /* ---------------------------------------------

  Navigation menu

  --------------------------------------------- */

  // dropdown for mobile
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  }


  $(window).load(function () {

  })



  /* ---------------------------------------------
  INFINITE SLIDER
  --------------------------------------------- */
  var FlowtoTextSlider = function ($scope, $) {
    var wrapper = $scope.find(".flowto-text-slider");

    if (wrapper.length === 0)
      return;
    var settings = wrapper.data('settings');

    wrapper.slick({

      rtl: settings['slider_rtl'],
      infinite: true,
      slidesToShow: settings['per_coulmn'],
      slidesToScroll: settings['slide_scroll'],
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 10000,
      cssEase: 'linear',
      pauseOnHover: true,
      adaptiveHeight: true,
      responsive: [{
        breakpoint: 1600,
        settings: {
          slidesToShow: settings['per_coulmn'],
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: settings['per_coulmn_tablet'],
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: settings['per_coulmn_mobile'],
          slidesToScroll: 1,
        },
      },
      ],
    });
  }



  // card slider
  // var FlowtoTestimonialInfiniteSlider = function ($scope, $) {
  //   var wrapper = $scope.find(".flowto-testimonial-infinite-slider");
  //   if (wrapper.length === 0)
  //     return;
  //     var settings = wrapper.data('settings');
  //     wrapper.slick({
  //     infinite: true,
  //     slidesToShow: settings['per_coulmn'],
  //     slidesToScroll: 1,
  //     arrows: false,
  //     adaptiveHeight: true,
  //     dots: settings['dots'],
  //     autoplay: settings['autoplay'],
  //     autoplaySpeed: 2000,
  //     responsive: [

  //       {
  //         breakpoint: 1199,
  //         settings: {
  //           slidesToShow: settings['per_coulmn_tablet'],
  //         }
  //       },
  //       {
  //         breakpoint: 767,
  //         settings: {
  //           slidesToShow: settings['per_coulmn_mobile'],
  //         }
  //       }
  //     ]
  //   });

  // }



  // start flowto slider one
  var FlowtoCardSlider = function ($scope, $) {
    var wrapper = $scope.find(".flowto-card-slider");
    if (wrapper.length === 0)
      return;
    var settings = wrapper.data('settings');
    wrapper.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: settings['arrows'],
      autoplay: settings['autoplay'],
      dots: false,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
    });

  }


  // start flowto hero 
  var FlowtoHeroSlider = function ($scope, $) {
    var wrapper = $scope.find(".flowto-hero-slider");
    if (wrapper.length === 0)
      return;
    var settings = wrapper.data('settings');
    wrapper.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: settings['arrows'],
      autoplay: settings['autoplay'],
      dots: false,
      prevArrow: $('.h-prev'),
      nextArrow: $('.h-next'),
    });

  }


  // start flowto hero 
  // var FlowtoTSlider = function ($scope, $) {
  //   var wrapper = $scope.find(".flowto-t-slider");
  //   if (wrapper.length === 0)
  //     return;
  //   var settings = wrapper.data('settings');
  //   wrapper.slick({
  //     infinite: true,
  //     slidesToShow: 2,
  //     slidesToScroll: 1,
  //     arrows: settings['arrows'],
  //     autoplay: settings['autoplay'],
  //     dots: false,
  //     prevArrow: $('.t-prev'),
  //     nextArrow: $('.t-next'),
  //     responsive: [

  //       // {
  //       //   breakpoint: 1199,
  //       //   settings: {
  //       //     slidesToShow: 2,
  //       //   }
  //       // },
  //       {
  //         breakpoint: 991,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         }
  //       }


  //     ]
  //   });

  // }


  // start flowto portfolio 
  var FlowtoPortfolioSlider = function ($scope, $) {
    var wrapper = $scope.find(".flowto-portfolio-slider");
    if (wrapper.length === 0)
      return;
    var settings = wrapper.data('settings');
    wrapper.slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: settings['arrows'],
      autoplay: settings['autoplay'],
      dots: false,
      prevArrow: $('.p-prev'),
      nextArrow: $('.p-next'),
      responsive: [

        // {
        //   breakpoint: 1199,
        //   settings: {
        //     slidesToShow: 2,
        //   }
        // },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }


      ]
    });

  }


    // start masco testimonial 2 column slider
  // var FlowtoTwoColumnSlider = function ($scope, $) {
  //   var wrapper = $scope.find(".flowto-t-2column-slider");
  //   if (wrapper.length === 0)
  //     return;
  //   var settings = wrapper.data('settings');
  //   wrapper.slick({
  //     infinite: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: settings['arrows'],
  //     dots: settings['dots'],
  //     autoplay: settings['autoplay'],
  //     prevArrow: $('.t-prev'),
  //     nextArrow: $('.t-next'),
  //   });

  // }


  /*--------------------------------------------------------------
COUNTER JS INIT
--------------------------------------------------------------*/

  var FlowtoCounter = function ($scope, $) {
    var wrapper = $scope.find(".flowto-counter");
    if (wrapper.length === 0)
      return;
      var a = 0;
      $(window).scroll(function() {

        var oTop = $(wrapper).offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.flowto-counter').each(function() {
            var $this = $(this),
              countTo = $this.attr('data-percentage');
            $({
              countNum: $this.text()
            }).animate({
                countNum: countTo
              },
              {
                duration: 4000,
                easing: 'swing',
                step: function() {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                  $this.text(this.countNum);
                }
              });
          });
          a = 1;
        }

      });
}



  // card slider
  var FlowtoTestimonialslider = function ($scope, $) {
    var wrapper = $scope.find(".flowto-testimonial-slider");
    if (wrapper.length === 0)
      return;
      var settings = wrapper.data('settings');
      wrapper.slick({
      infinite: true,
      slidesToShow: settings['per_coulmn'],
      slidesToScroll: 1,
      arrows: settings['arrows'],
      adaptiveHeight: true,
      dots: settings['dots'],
      autoplay: settings['autoplay'],
      prevArrow: $('.t-prev'),
      nextArrow: $('.t-next'),
      autoplaySpeed: 2000,
      responsive: [

        {
          breakpoint: 1349,
          settings: {
            slidesToShow: settings['per_coulmn'],
          }
        },

         {
          breakpoint: 1024,
          settings: {
            slidesToShow: settings['per_coulmn_tablet'],
          }
        },

        {
          breakpoint: 767,
          settings: {
            slidesToShow: settings['per_coulmn_mobile'],
          }
        }
      ]
    });

  }

  $(".menu-bar").on("click", function () {
    $(".flowto-sidemenu-column, .offcanvas-overlay").addClass("active");
  });
  $(".flowto-sidemenu-close, .offcanvas-overlay").on("click", function () {
      $(".flowto-sidemenu-column, .offcanvas-overlay").removeClass("active");
});






  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction("frontend/element_ready/Flowto_Text_Slider.default", FlowtoTextSlider);
    // elementorFrontend.hooks.addAction("frontend/element_ready/Flowto_Testimonial_Infinite_Slider.default", FlowtoTestimonialInfiniteSlider);
    elementorFrontend.hooks.addAction("frontend/element_ready/Flowto_Testimonial_Slider.default", FlowtoTestimonialslider);
    elementorFrontend.hooks.addAction("frontend/element_ready/Flowto_card_slider.default", FlowtoCardSlider);
    elementorFrontend.hooks.addAction("frontend/element_ready/Flowto_Hero_slider.default", FlowtoHeroSlider);
    // elementorFrontend.hooks.addAction("frontend/element_ready/Flowto_T_slider.default", FlowtoTSlider);
    elementorFrontend.hooks.addAction("frontend/element_ready/Flowto_Portfolio_Slider.default", FlowtoPortfolioSlider);
    // elementorFrontend.hooks.addAction("frontend/element_ready/Flowto_Two_Column_Slider.default", FlowtoTwoColumnSlider);
    elementorFrontend.hooks.addAction("frontend/element_ready/Flowto_Counter.default", FlowtoCounter);

  });

})(jQuery);