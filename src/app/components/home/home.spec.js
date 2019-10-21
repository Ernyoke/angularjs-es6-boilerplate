import HomeModule from './home'
import HomeController from './home.controller';
import HomeComponent from './home.component';
import HomeTemplate from './home.html';

describe('Home', () => {
    let $rootScope, makeController;

    beforeEach(window.module(HomeModule));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => {
            return new HomeController();
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
        let component = HomeComponent;

        it('includes the intended template',() => {
            expect(component.template).to.equal(HomeTemplate);
        });

        it('invokes the right controller', () => {
            expect(component.controller).to.equal(HomeController);
        });
    });
});
