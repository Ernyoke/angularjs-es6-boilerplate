import StudentListModule from './studentlist.module'
import StudentListController from './studentlist.controller';
import StudentListComponent from './studentlist.component';
import StudentListTemplate from './studentlist.html';

describe('StudentList', () => {
    let $rootScope, makeController;

    beforeEach(window.module(StudentListModule));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        let studentApiService = {};
        makeController = () => {
            return new StudentListController(studentApiService);
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
        let directive = StudentListComponent;

        it('includes the intended template',() => {
            expect(directive.template).to.equal(StudentListTemplate);
        });

        it('invokes the right controller', () => {
            expect(directive.controller).to.equal(StudentListController);
        });
    });
});
