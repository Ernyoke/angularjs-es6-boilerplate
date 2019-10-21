import NavbarModule from './navbar'
import NavbarController from './navbar.controller';
import NavbarComponent from './navbar.component';
import NavbarTemplate from './navbar.html';

describe('Navbar', () => {
    let $rootScope, makeController;

    beforeEach(window.module(NavbarModule));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => {
            return new NavbarController();
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
        let component = NavbarComponent;

        it('includes the intended template',() => {
            expect(component.template).to.equal(NavbarTemplate);
        });

        it('invokes the right controller', () => {
            expect(component.controller).to.equal(NavbarController);
        });
    });
});
