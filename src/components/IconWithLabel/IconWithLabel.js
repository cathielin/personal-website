import React from 'react';
import './IconWithLabel.scss';
import Icon from '../Icon/Icon.js';
import IconLabel from '../Icon/IconLabel.js';

function IconWithLabel() {
    return (
        <div className="container">
            <Icon className="test" />
            <IconLabel className="test-label" />
        </div>
    )
}

export default IconWithLabel;
