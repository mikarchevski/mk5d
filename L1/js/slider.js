document.addEventListener('DOMContentLoaded', () => {
    const reviewsSlider = new Swiper('.reviews__slider', {
        // Основные параметры
        loop: true,             // Бесконечная прокрутка
        speed: 600,             // Скорость анимации (мс)
        spaceBetween: 30,       // Отступ между слайдами (если их будет несколько на экране)
        slidesPerView: 1,       // Показывать по 1 слайду
        
        // Автопрокрутка (опционально, можно убрать, если не нужна)
        autoplay: {
            delay: 5000,        // 5 секунд
            disableOnInteraction: false, // Не отключать после ручного свайпа
        },

        // Навигация (стрелки)
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Пагинация (точки)
        pagination: {
            el: '.swiper-pagination',
            clickable: true,    // Клик по точке переключает слайд
        },

        // Доступность (a11y)
        a11y: {
            prevSlideMessage: 'Предыдущий отзыв',
            nextSlideMessage: 'Следующий отзыв',
            paginationBulletMessage: 'Перейти к слайду {{index}}',
        },
    });
});