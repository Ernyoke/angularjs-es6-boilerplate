import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import navbarComponent from './navbar.component';

const navbarModule = angular
    .module('appNavbar', [
        uiRouter
    ])
    .component('appNavbar', navbarComponent())
    .name;

export default navbarModule;
