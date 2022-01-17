class BackdropView {
    _parent = document.querySelector('.backdrop');

    _addHandlerClick(handler) {
        this._parent.addEventListener('click', handler);
    }

    _toggleBackdrop() {
        this._parent.classList.toggle('backdrop-visible');
    }
}

export default new BackdropView();