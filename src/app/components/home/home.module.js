import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import homeComponent from './home.component';

let homeModule = angular.module('appHome', [
    uiRouter
])
    .config(($stateProvider, $urlRouterProvider) => {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                component: 'appHome'
            });
    })
    .component('appHome', homeComponent())
    .name;

export default homeModule;
