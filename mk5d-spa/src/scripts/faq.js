export function initFaq() {
    const faqButtons = document.querySelectorAll('.faq-item__button');
    
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            const answerId = button.getAttribute('aria-controls');
            const answer = document.getElementById(answerId);

            // Переключаем текущий элемент
            button.setAttribute('aria-expanded', !isExpanded);
            if (answer) {
                answer.classList.toggle('faq-item__answer--active');
            }

            // (Опционально) Закрываем все остальные элементы (режим аккордеона)
            faqButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.setAttribute('aria-expanded', 'false');
                    const otherAnswer = document.getElementById(otherButton.getAttribute('aria-controls'));
                    if (otherAnswer) {
                        otherAnswer.classList.remove('faq-item__answer--active');
                    }
                }
            });
        });
    });
}
