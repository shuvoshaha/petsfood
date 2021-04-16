//Bars
const resbar = (x) => {
  x.classList.toggle('changed');
}

// Scroll Top
const scroll = document.querySelector('.scroll-top');
window.onscroll = (e) => {

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    e.preventDefault();
    scroll.style.display = "flex";
  } else {
    scroll.style.display = "none";
  }
}

// Plugins Init
// Product Slider
$(document).ready(function () {
  $('.product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    prevArrow: "<img src='./img/left-arrow.png' class='left-arrow' /> ",
    nextArrow: "<img src='./img/right-arrow.png' class='right-arrow' /> ",
    dots: true,
    dotsClass: "slick-dots",
    centerPadding: '50px',
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
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
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]

  });
});


// Testmonial carousel
$(document).ready(function () {
  $('.testmonial-carousel').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    prevArrow: "<img src='./img/left-arrow.png' class='left-arrow' /> ",
    nextArrow: "<img src='./img/right-arrow.png' class='right-arrow' /> ",
    dots: true,
    dotsClass: "slick-dots",

    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow: false
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrow: false
        }
      }
    ]

  });
});

// Shop Product Gallery
$(document).ready(function () {
  $('.shop-product-gallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    prevArrow: "<i class='fas fa-long-arrow-alt-left left-arrow shop-arrow'></i> ",
    nextArrow: "<i class='fas fa-long-arrow-alt-right right-arrow shop-arrow'></i> ",
    dots: true,
    dotsClass: "slick-dots",

    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow: false
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrow: false
        }
      }
    ]

  });
});


// Filter dropdown
var filter_title = document.getElementsByClassName("dropdown-filter-title");

var i = 0;
for (i = 0; i < filter_title.length; i++) {
  filter_title[i].addEventListener('click', function () {
    var dropdown_content = this.nextElementSibling;

    if (dropdown_content.style.maxHeight) {
      dropdown_content.style.maxHeight = null;

    } else {
      dropdown_content.style.maxHeight = dropdown_content.scrollHeight + 'px'
    }

  });
}


//accordion
var accordion = document.getElementsByClassName('accordion');
var i = 0;

for (i = 0; i <= accordion.length; i++) {
  accordion[i].addEventListener('click', function () {

    this.classList.toggle('acc-active')
    let panel = this.nextElementSibling;
    // let card = document.getElementsByClassName('card');

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.marginBottom = 0 + 'px';

    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      panel.style.marginBottom = 10 + 'px';

    }
  });
};
