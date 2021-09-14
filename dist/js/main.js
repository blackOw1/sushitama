////////////////////////////////
// VARIABLES

const body = document.querySelector('.body');
const header = body.querySelector('.header');
const headerNavList = header.querySelector('.nav-list');
const sideDrawer = body.querySelector('.aside');
const backdrop = body.querySelector('.backdrop');
const heroSection = body.querySelector('.hero');
const menuBtn = 'nav-menu-btn';

////////////////////////////////
// FUNCTIONS

const toggleDrawer = function() {
    const backdrop = document.querySelector('.backdrop');
    sideDrawer.classList.toggle('drawer-open');
    backdrop.classList.toggle('backdrop-visible');
};

const isDrawerOpen = function() {
    return sideDrawer.classList.contains('drawer-open');
};

const scrollToSection = function(selector) {
    const selectorY = document.querySelector(selector).getBoundingClientRect().top;
    const value = selectorY + window.scrollY - headerHeight;
    window.scrollTo({ top: value, behavior: 'smooth' });
    // document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
};

const toggleStickyHeader = function(isHeaderNotSticky) {
    if (isHeaderNotSticky) {
        heroSection.classList.add('h-100vh');
        header.classList.add('sticky');
    } else {
        heroSection.classList.remove('h-100vh');
        header.classList.remove('sticky');
    }
};

////////////////////////////////
// EVENT LISTENERS

body.addEventListener('click', function(e) {
    const isHeaderLink = e.target.classList.contains('nav-list-item-link');
    const isDrawerLink = e.target.parentElement.classList.contains('nav-list');
    const isFooterLink = e.target.classList.contains('footer-nav-list-item-link');
    const isHeroBtn = e.target.classList.contains('hero-btn');
    let id = null;

    if (e.target.classList.contains(menuBtn) || e.target.closest(`.${menuBtn}`)?.classList.contains(menuBtn) || e.target === backdrop) {
        toggleDrawer();
        return;
    }

    if (isHeaderLink || isFooterLink || isHeroBtn || isDrawerLink) {
        e.preventDefault();
        if (isDrawerLink) id = e.target.firstElementChild.getAttribute('href');
        else id = e.target.getAttribute('href');
        if (isDrawerOpen()) toggleDrawer();
        scrollToSection(id);
        return;
    }
});


// STICKY HEADER //

const headerHeight = header.getBoundingClientRect().height;
const stickyNav = function(entries) {
    const [entry] = entries;
    const isIntersecting = entry.isIntersecting;
    if (!isIntersecting) toggleStickyHeader(true);
    else toggleStickyHeader(false);
};
const headerObserver = new IntersectionObserver(stickyNav, { root: null, threshold: 0, rootMargin: `-${headerHeight}px` });
headerObserver.observe(heroSection);

