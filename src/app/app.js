import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import angularLoadingBar from 'angular-loading-bar';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import Components from './components/components';
import AppComponent from './app.component';

import 'angular-material/angular-material.css';

angular
    .module('app', [
        uiRouter,
        angularLoadingBar,
        ngMaterial,
        ngAnimate,
        ngAria,
        Components
    ])
    .value('EventEmitter', payload => ({$event: payload}))
    .config(($locationProvider, $urlRouterProvider) => {
        'ngInject';

        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/app');
    })
    .config(($mdThemingProvider) => {
        $mdThemingProvider.theme("blue")
            .primaryPalette("blue")
            .accentPalette("red");

        $mdThemingProvider.theme("green")
            .primaryPalette("teal")
            .accentPalette("red");

        $mdThemingProvider.alwaysWatchTheme(true);
    })
    .run(($transitions, cfpLoadingBar) => {
        'ngInject';

        $transitions.onStart({}, cfpLoadingBar.start);
        $transitions.onSuccess({}, cfpLoadingBar.complete);
    })
    .component('app', AppComponent)
    .name;
