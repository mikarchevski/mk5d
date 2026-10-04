export function initSlider() {
    console.log("🔍 1. initSlider запущен");
    
    const sliderElement = document.querySelector('.reviews__slider');
    
    if (!sliderElement) {
        console.log("⚠️ 2. Слайдер не найден на этой странице. Пропускаем инициализацию.");
        return;
    }
    console.log("✅ 2. Слайдер найден в DOM:", sliderElement);

    if (typeof window.Swiper === 'undefined') {
        console.error("❌ 3. ОШИБКА: Объект Swiper не найден в window! Проверьте CDN в index.html");
        return;
    }
    console.log("✅ 3. Объект Swiper доступен");

    if (sliderElement.swiper) {
        console.log("🔄 4. Уничтожаем старый экземпляр Swiper");
        sliderElement.swiper.destroy(true, true);
    }

    console.log("🚀 5. Создаем новый экземпляр Swiper");
    new window.Swiper(sliderElement, {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    console.log("🎉 6. Swiper успешно инициализирован!");
}