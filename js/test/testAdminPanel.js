const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 2,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // 1200:{
        //     slidesPerView: 2,
        //     spaceBetween: 5,
        // }
        //
        // 1024: {
        //     slidesPerView: 2,
        //     spaceBetween: 5,
        // },
        // 640: {
        //     slidesPerView: 1,
        //     spaceBetween: 2,
        // },

    },
});