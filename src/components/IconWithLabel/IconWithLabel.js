import React from 'react';
import './IconWithLabel.scss';
import Icon from '../Icon/Icon.js';
import IconLabel from '../Icon/IconLabel.js';

function IconWithLabel(props) {

    const { iconImage, iconLabel, handlerFunction} = props;

    return (
        <div className="container">
            <Icon 
                className="test" 
                handlerFunction={handlerFunction} 
                iconImage={iconImage} 
                
            />
            <IconLabel 
                className="test-label"
                iconLabel={iconLabel}
            />
        </div>
    )
}

export default IconWithLabel;
