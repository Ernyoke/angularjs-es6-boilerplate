import angular from 'angular';
import restangular from 'restangular';
import StudentApiService from './student.api.service';

const studentApiService = angular
    .module('studentApiService', [restangular])
    .service('studentApiService', StudentApiService)
    .name;

export default studentApiService;
