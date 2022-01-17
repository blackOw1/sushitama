export default class View {
    _addHandlerClick(handler) {
        const selector = this._selector;

        this._parent.addEventListener('click', function(e) {
            if (e.target.closest('.logo')) return;

            e.preventDefault();

            let link;

            if (e.target.closest('.aside')) {
                if (e.target.closest('.aside-header')) return;
                if (e.target.classList.contains('aside')) return;
                link = e.target.firstElementChild ? e.target.firstElementChild : e.target;
            } else {
                link = e.target.closest(`.${selector}`);
            }
            
            if (!link) return;
            
            handler(link.hash);
        });
    }
}