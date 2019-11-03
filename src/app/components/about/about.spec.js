import AboutModule from './about.module';
import AboutController from './about.controller';
import AboutTemplate from './about.html';
import aboutComponent from './about.component';

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
        let component = aboutComponent();

        it('includes the intended template',() => {
            expect(component.template).to.equal(AboutTemplate);
        });

        it('invokes the right controller', () => {
            expect(component.controller).to.equal(AboutController);
        });
    });
});
