import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import NavBar from './navbar/navbar'

const componentsModule = angular.module('components', [
    Home,
    About,
    NavBar
]).name;

export default componentsModule;
