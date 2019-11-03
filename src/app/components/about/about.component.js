import template from './about.html';
import controller from './about.controller';
import './about.scss';

const aboutComponent = () => {
    return {
        bindings: {},
        template,
        controller
    }
};

export default aboutComponent;
