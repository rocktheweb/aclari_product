class Thumbs {

    constructor(selector) {
        this.selector = document.querySelector(selector);
        this.indicators = [...this.selector.querySelectorAll('[data-slide-to]')];
    }
    
    onClick(fn) {
        this.selector.addEventListener('click', fn);
    }

    update(index) {

        this.indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });
    
        let [ current ] = this.indicators.filter(indicator => {
            return Number(indicator.dataset.slideTo) === index;
        });
    
        current.classList.add('active');
    }
}

export default Thumbs;