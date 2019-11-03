import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import aboutComponent from './about.component';

const aboutModule = angular
    .module('appAbout', [
        uiRouter
    ])
    .config(($stateProvider) => {
        $stateProvider.state('about', {
            url: '/about',
            component: 'appAbout'
        })
    })
    .component('appAbout', aboutComponent())
    .name;

export default aboutModule;
