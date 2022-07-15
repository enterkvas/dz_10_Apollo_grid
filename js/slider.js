// Swiper initialization:
const swiper = new Swiper('.slider-swiper', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   // Pagination:
   pagination: {
      el: '.swiper-pagination',
      //Bullets:	
      clickable: true,
   },
   slidesPerView: 1,
});