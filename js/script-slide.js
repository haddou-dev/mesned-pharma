/** @format */

// home page
$(document).ready(function () {
  fillSliderHomePage();
  fillPartnersSlider();
  fillClientSlider();
  fillHeroSectionSlider();
});

function fillHeroSectionSlider() {
  $(document).ready(function () {
    $(".Hero_slider").owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      autoplayTimeout: 3000,
      smartSpeed: 1000,
      // autoplayHoverPause: true,
    });
  });
}
function fillHeroSectionSlider() {
  $(document).ready(function () {
    $(".capsule_slider").owlCarousel({
      items: 1,
      loop: true,
      nav: false,
      // dots: false,
      autoplay: true,
      autoplaySpeed: 3000,
      autoplayTimeout: 3000,
      smartSpeed: 1000,
      // autoplayHoverPause: true,
    });
  });
}

function fillSliderHomePage() {
  var owl = $(".owl-home-page");
  owl.owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 1500,
    dots: true,
    responsive: {
      0: {
        items: 2,
        margin: 10,
      },
      300: {
        items: 1.5,
        margin: 0,
      },
      400: {
        items: 2,
        margin: 0,
      },
      500: {
        items: 2,
        margin: 0,
      },
      600: {
        items: 2.5,
        margin: 20,
      },
      900: {
        items: 3,
        margin: 20,
      },
      1000: {
        items: 4,
        margin: 50,
      },
    },
  });

  // Go to the next item
  $(".customNextBtn").click(function () {
    owl.trigger("next.owl.carousel");
  });
  // Go to the previous item
  $(".customPrevBtn").click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger("prev.owl.carousel", [300]);
  });
}

function fillClientSlider() {
  var owl1 = $(".owl-carousel-client");
  owl1.owlCarousel({
    items: 4,
    // nav: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout:2000,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2,
        margin: 10,
      },
      500: {
        items: 3,
        margin: 0,
      },
      600: {
        items: 3,
        margin: 50,
      },
      1000: {
        items: 4,
        margin: 50,
      },
    },
  });
}



function fillPartnersSlider() {
  var owl1 = $(".owl-carousel-partners");
  owl1.owlCarousel({
    items: 5,
    // nav: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout:2000,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
        margin: 10,
      },
      300: {
        items: 2.5,
        margin: 0,
      },
      480: {
        items: 2.5,
        margin: 0,
      },
      500: {
        items: 3,
        margin: 0,
      },
      600: {
        items: 3,
        margin: 0,
      },
      1000: {
        items: 5,
        margin: 50,
      },
    },
  });
}
