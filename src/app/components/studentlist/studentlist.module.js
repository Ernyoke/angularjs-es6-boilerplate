import angular from 'angular';
import studentListComponent from './studentlist.component';
import StudentApiService from '../../services/student/student.api.module';

const studentListModule = angular
    .module('studentList', [StudentApiService])
    .component('studentList', studentListComponent)
    .name;

export default studentListModule;
