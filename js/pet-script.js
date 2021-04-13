
//Bars
const resbar =(x)=>{
  x.classList.toggle('changed')
}


// Scroll Top
const scroll = document.querySelector('.scroll-top');
window.onscroll =(e)=>{
  if( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ){
    e.preventDefault();
    scroll.style.display = "flex";
  } else{
    scroll.style.display = "none";
  }
}


// Plugins Init
// Product Slider
$(document).ready(function(){
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
  responsive: [
    {
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
$(document).ready(function(){
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
  
  responsive: [
    {
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




