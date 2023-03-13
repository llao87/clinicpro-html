jQuery(function () {
    const promo = new Swiper("#promo-slider", {
        loop: true,
        slidesPerView: 1,
        // allowTouchMove: false,

        // Navigation arrows
        navigation: {
            prevEl: ".js__promo .prev",
            nextEl: ".js__promo .next",
        },

        // And if we need scrollbar
        scrollbar: {
            el: ".js__promo .swiper-scrollbar",
            enabled: true,
        },
    });

    const reviews = new Swiper("#categories-slider", {
        loop: true,
        slidesPerView: 5,
        // allowTouchMove: false,

        // Navigation arrows
        navigation: {
            prevEl: ".js-categories .prev",
            nextEl: ".js-categories .next",
        },

        // And if we need scrollbar
        scrollbar: {
            el: ".js-categories .swiper-scrollbar",
            enabled: true,
        },
    });
});
