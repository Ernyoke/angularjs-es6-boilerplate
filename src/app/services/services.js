import angular from "angular";
import StudentApiService from "./student/student.api.module";

const servicesModule = angular.module('services', [
    StudentApiService
]).name;

export default servicesModule;
