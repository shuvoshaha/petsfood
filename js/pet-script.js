//Bars
const resbar = (x) => {
  x.classList.toggle('changed');
}


// Scroll Top
const scroll = document.querySelector('.scroll-top');
const header = document.querySelector('.header');
const logo = document.querySelector('.brand-logo')

window.onscroll = (e) => {

  if (document.body.scrollTop >= 20 || document.documentElement.scrollTop > 20) {

    scroll.style.display = "flex";
    header.style.boxShadow = "0 2px 2px rgba(0,0,0,0.2)"
    header.style.paddingBottom = "10px"
  }

  else {
    scroll.style.display = "none";
    header.style.boxShadow = '';
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
    centerPadding: '5px',
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


// Checkout page diff address 
var invoice = document.getElementById("invoice-address");
var diff_address = document.getElementById('diff-address');
var address = document.querySelector('.diff-address-info');

invoice.addEventListener('click', function () {
  address.style.maxHeight = 0;
});

diff_address.addEventListener('click', function () {
  address.style.maxHeight = address.scrollHeight + 'px';
});



// checkout page multi step
var step_1 = document.querySelector('.form-step-1');
var step_2 = document.querySelector('.form-step-2');
var next_btn = document.getElementById('form-next-1');

next_btn.addEventListener('click', function (e) {
  e.preventDefault()
  step_1.style.marginLeft = "-100%"
});



// account page panel
// var myacc_btn = document.querySelectorAll('.m-myacc-btn');

// for (let myacc_i = 0; myacc_i <= myacc_btn.length; myacc_i++) {
//   myacc_btn[myacc_i].addEventListener('click', function () {

//     var myacc_panel = this.nextElementSibling;

//     if (myacc_panel.style.maxHeight) {
//       myacc_panel.style.maxHeight = '';

//     } else {

//       myacc_panel.style.maxHeight = myacc_panel.scrollHeight + 'px';

//     }
//   });
// };



// single product page gallery










