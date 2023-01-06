import classNames from 'classnames';
import React from 'react';
import './IconLabel.scss';

function IconLabel(props) {

    const { className } = props;
    return (
        <div  className={classNames(className, "label")}>
            <div className="label-text" >i'm a label</div>
        </div>
    )
}

export default IconLabel;
