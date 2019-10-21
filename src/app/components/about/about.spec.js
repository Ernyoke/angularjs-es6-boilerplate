import AboutModule from './about'
import AboutController from './about.controller';
import AboutComponent from './about.component';
import AboutTemplate from './about.html';

describe('About', () => {
    let $rootScope, makeController;

    beforeEach(window.module(AboutModule));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => {
            return new AboutController();
        }
    }));

    describe('Controller', () => {
        // controller specs
        it('has a name property [REMOVE]', () => {
            let controller = makeController();
            expect(controller).to.have.property('name');
        });
    });

    describe('Component', () => {
        // component/directive specs
        let component = AboutComponent;

        it('includes the intended template',() => {
            expect(component.template).to.equal(AboutTemplate);
        });

        it('invokes the right controller', () => {
            expect(component.controller).to.equal(AboutController);
        });
    });
});
