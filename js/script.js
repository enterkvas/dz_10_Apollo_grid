"use strict";
// Меню бургер
const nav = document.querySelector('.navigation'),
      iconBurger = document.querySelector('.navigation__toggle-button'),
      navList = document.querySelector('.menu__list');          
iconBurger.addEventListener("click", function(e){
   iconBurger.classList.toggle('_active');
   navList.classList.toggle('_active');
   nav.classList.toggle('navigation--navy-blue');
   window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Пункты-ссылки меню бургера /Плавная прокрутка
const menuLinks = document.querySelectorAll('.menu__link');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target;
		const w = document.body.clientWidth;
		if (w < 992) {
			navList.classList.toggle('_active');
			nav.classList.toggle('navigation--navy-blue');	iconBurger.classList.toggle('_active');	
			if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
				const menuBlock = document.querySelector(menuLink.dataset.goto);
				const menuBlockValue = menuBlock.getBoundingClientRect().top - document.querySelector('.navigation').offsetHeight;
				
				window.scrollTo ({top: menuBlockValue,	behavior: "smooth"});
			}			
		} else if (w > 991) {			
			if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {				
				const menuBlock = document.querySelector(menuLink.dataset.goto);
				if (window.pageYOffset === 0) {
					const menuBlockValue = menuBlock.getBoundingClientRect().top;					

					window.scrollTo ({top: menuBlockValue,	behavior: "smooth"});				
				} else if (window.pageYOffset > 0) {
					const menuBlockValue = menuBlock.getBoundingClientRect().top + window.pageYOffset;	

					window.scrollTo ({top: menuBlockValue,	behavior: "smooth"});				
				}				
			}			
		}		
		e.preventDefault();
	}	
}
//==================================
// Инициализация Swiper:
const swiper = new Swiper('.slider-swiper', {
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev'
	// },
	// Пагинация:
	pagination: {el: '.swiper-pagination',
	//Буллеты:	
	clickable: true,
	},
	slidesPerView: 1,
});