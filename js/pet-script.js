// 
const popUp =()=>{
    this.addClassList('.active')
}



// Plugins Init

// Swiper 
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,

    
    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 30,
            
          },
        640: {
          slidesPerView: 1,
          spaceBetween: 30,
          
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
  

    
    autoplay: {
        delay: 3000,
      },
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});


 // Owl Slider Init
 $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
