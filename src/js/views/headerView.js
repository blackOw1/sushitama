import View from './View';

class HeaderView extends View {
    _parent = document.querySelector('.header');
    _selector = 'nav-list-item-link';

    _addHandlerBtnMenu(handler) {
        const btn = this._parent.querySelector('.nav-menu-btn');
        btn.addEventListener('click', handler);
    }

    _addHandlerObserver(el) {
        const toggleStickyHeader = this._toggleStickyHeader;
        const parent = this._parent;
        const stickyNav = function(entries) {
            const [entry] = entries;
            const isIntersecting = entry.isIntersecting;

            toggleStickyHeader(!isIntersecting ? true : false, el, parent);
        };

        const headerObserver = new IntersectionObserver(stickyNav, { root: null, threshold: 0, rootMargin: `-${this.headerHeight}px` });

        headerObserver.observe(el);
    }

    _toggleStickyHeader(isNotSticky, el, parent) {
        if (isNotSticky) {
            el.classList.add('h-100vh');
            parent.classList.add('sticky');
        } else {
            el.classList.remove('h-100vh');
            parent.classList.remove('sticky');
        }
    }

    get headerHeight() {
        return this._parent.getBoundingClientRect().height;
    }
}

export default new HeaderView();