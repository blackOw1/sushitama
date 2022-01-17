import View from "./View";

class DrawerView extends View {
    _parent = document.querySelector('.aside');
    _selector = 'nav-list-item';

    _addHandlerMenu(handler) {
        const menuBtn = this._parent.querySelector('.nav-menu-btn');
        menuBtn.addEventListener('click', handler);
    }

    _toggleDrawer() {
        this._parent.classList.toggle('drawer-open');
    }
}

export default new DrawerView();