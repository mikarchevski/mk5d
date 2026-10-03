/**
 * FAQ Accordion
 * Управление открытием/закрытием вопросов
 */
class FAQAccordion {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) return;

        this.items = this.container.querySelectorAll('.faq-item');
        this._init();
    }

    _init() {
        this.items.forEach((item) => {
            const button = item.querySelector('.faq-item__button');
            if (button) {
                button.addEventListener('click', () => this._toggleItem(item, button));
            }
        });
    }

    _toggleItem(item, button) {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        
        // Если хотите, чтобы одновременно был открыт только один элемент,
        // раскомментируйте следующую строку:
        // this._closeAll();

        // Переключаем текущий элемент
        button.setAttribute('aria-expanded', !isExpanded);
    }

    _closeAll() {
        this.items.forEach((item) => {
            const button = item.querySelector('.faq-item__button');
            if (button) {
                button.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Открыть конкретный элемент по индексу
    open(index) {
        if (index >= 0 && index < this.items.length) {
            const button = this.items[index].querySelector('.faq-item__button');
            if (button) {
                button.setAttribute('aria-expanded', 'true');
            }
        }
    }

    // Закрыть все элементы
    closeAll() {
        this._closeAll();
    }
}

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    const faq = new FAQAccordion('.faq__list');
});