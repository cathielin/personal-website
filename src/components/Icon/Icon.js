import React from 'react';
import classnames from 'classnames';
import './Icon.scss';

function Icon(props) {
    const {className, handlerFunction, iconImage } = props;

    const test = () => {
        handlerFunction();
    }
    return (
        <div onClick={test} className={classnames(className, "icon")}>
            {iconImage}
        </div>
    )
}

export default Icon;
