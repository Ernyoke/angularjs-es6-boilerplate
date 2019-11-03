import StudentModule from './student.module'
import StudentController from './student.controller';
import studentDirective from './student.directive';
import StudentTemplate from './student.html';

describe('Student', () => {
    let $rootScope, makeController;

    beforeEach(window.module(StudentModule));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        debugger;
        let scope = $rootScope.$new();
        scope.data = {
            name: 'name',
            university: 'university',
            year: 1
        };
        makeController = () => {
            return new StudentController(scope);
        }
    }));

    describe('Controller', () => {
        // controller specs
        it('has a name property [REMOVE]', () => {
            let controller = makeController();
            debugger;
            expect(controller).to.have.property('name');
        });
    });

    describe('Component', () => {
        // component/directive specs
        let directive = studentDirective();

        it('includes the intended template',() => {
            expect(directive.template).to.equal(StudentTemplate);
        });

        it('invokes the right controller', () => {
            expect(directive.controller).to.equal(StudentController);
        });
    });
});
