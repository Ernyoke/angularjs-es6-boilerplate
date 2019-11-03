import template from './student.html';
import controller from './student.controller';
import './student.scss';

const studentDirective = function () {
    return {
        restrict: 'EA',
        scope: {
            data: '=data'
        },
        link: function (scope, elem, attr) {
        },
        template,
        controller,
        controllerAs: 'ctrl'
    }
};

export default studentDirective;
