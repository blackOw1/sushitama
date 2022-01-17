import View from "./View";

class HeroView extends View {
    _parent = document.querySelector('.hero');
    _selector = 'hero-btn';
}

export default new HeroView();