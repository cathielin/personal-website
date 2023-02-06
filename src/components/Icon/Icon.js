import React from 'react';
import classnames from 'classnames';
import './Icon.scss';

function Icon(props) {
    const {className, setState, iconImage, iconType } = props;

    const test = () => {
        setState(iconType);
    }
    return (
        <div onClick={test} className={classnames(className, "icon")}>
            {iconImage}
        </div>
    )
}

export default Icon;
