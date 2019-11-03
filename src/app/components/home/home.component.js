import template from './home.html';
import controller from './home.controller';
import './home.scss';

const homeComponent = () => {
    return {
        bindings: {},
        template,
        controller
    }
};

export default homeComponent;
