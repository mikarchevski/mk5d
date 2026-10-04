export function initSlider() {
    const sliderElement = document.querySelector('.reviews__slider');
    
    // Инициализируем только если слайдер есть на текущей странице
    if (sliderElement && typeof Swiper !== 'undefined') {
        // Если слайдер уже был инициализирован, уничтожаем старую версию, чтобы не было дубликатов
        if (sliderElement.swiper) {
            sliderElement.swiper.destroy(true, true);
        }

        new Swiper(sliderElement, {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: '.reviews__arrow.swiper-button-next',
                prevEl: '.reviews__arrow.swiper-button-prev',
            },
            pagination: {
                el: '.reviews__pagination',
                clickable: true,
            },
            // Адаптивность (опционально, можно настроить под ваш дизайн)
            breakpoints: {
                768: {
                    slidesPerView: 2,
                }
            }
        });
    }
}
