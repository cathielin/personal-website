import classNames from 'classnames';
import React from 'react';
import './IconLabel.scss';

function IconLabel(props) {

    const { className, iconLabel } = props;
    return (
        <div  className={classNames(className, "label")}>
            <div className="label-text" >{iconLabel}</div>
        </div>
    )
}

export default IconLabel;
