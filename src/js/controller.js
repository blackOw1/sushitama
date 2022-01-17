import * as model from './model';
import headerView from './views/headerView';
import sectionView from './views/sectionView';
import footerView from './views/footerView';
import heroView from './views/heroView';
import drawerView from './views/drawerView';
import backdropView from './views/backdropView';

// Parcel reload on save
if (module.hot) module.hot.accept(() => { location.reload(); });

const controlScrollTo = function(id) {
    model.state.header.height = headerView.headerHeight;
    sectionView._scrollToSection(id, model.state.header.height);
};

const controlDrawer = function() {
    drawerView._toggleDrawer();
    backdropView._toggleBackdrop();
    model.state.drawer.isOpen = model.state.drawer.isOpen ? false : true;
};

const controlDate = function() {
    footerView._setYear(model.state.currYear);
};

const init = function() {
    footerView._addHandlerLoad(controlDate);
    heroView._addHandlerClick(controlScrollTo);
    headerView._addHandlerClick(controlScrollTo);
    headerView._addHandlerBtnMenu(controlDrawer);
    headerView._addHandlerObserver(heroView._parent);
    footerView._addHandlerClick(controlScrollTo);
    backdropView._addHandlerClick(controlDrawer);
    drawerView._addHandlerClick(controlScrollTo);
    drawerView._addHandlerMenu(controlDrawer);
};

init();