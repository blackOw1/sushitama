class SectionView {
    _parent = null;

    _scrollToSection(id, headerHeight) {
        const sectionY = document.querySelector(id).getBoundingClientRect().top;
        const value = sectionY + window.scrollY - headerHeight;
        window.scrollTo({ top: value, behavior: 'smooth' });
    }
}

export default new SectionView();