import template from './navbar.html';
import controller from './navbar.controller';
import './navbar.scss';

const navbarComponent = () => {
    return {
        bindings: {},
        template,
        controller
    }
};

export default navbarComponent;
