import angular from 'angular';
import Home from './home/home.module';
import About from './about/about.module';
import NavBar from './navbar/navbar.module';
import Student from './student/student.module';
import StudentList from './studentlist/studentlist.module';

const componentsModule = angular.module('components', [
    Home,
    About,
    NavBar,
    Student,
    StudentList
]).name;

export default componentsModule;
