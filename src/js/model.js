export const state = {
    header: {
        height: null
    },
    drawer: {
        isOpen: false
    },
    get currYear() { return new Date().getFullYear() }
};