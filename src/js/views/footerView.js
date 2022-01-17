import View from "./View";

class FooterView extends View {
    _parent = document.querySelector('.footer');
    _selector = 'footer-nav-list-item-link';

    _addHandlerLoad(handler) {
        handler();
    }

    _setYear(year) {
        const copyright = this._parent.querySelector('.footer-copyright');
        copyright.innerHTML = `&copy;&nbsp;${year}&nbsp;sushitama`;
    }
}

export default new FooterView();