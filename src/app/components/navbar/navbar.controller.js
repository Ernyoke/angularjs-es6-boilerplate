class NavbarController {
    constructor($state) {
        'ngInject';

        this.$state = $state;
        this.name = 'navbar';
        this.currentNavItem = 'home';
        this.disableInkBar = false;
    }

    goto(page) {
        this.$state.go(page);
    }
}

export default NavbarController;
