import angular from 'angular';
import studentDirective from './student.directive';

const studentModule = angular
    .module('appStudent', [])
    .directive('appStudent', studentDirective)
    .name;

export default studentModule;
