import React from 'react';
import classnames from 'classnames';
import './Icon.scss';
import { ReactComponent as Strawberry } from '../../images/icon-images/strawberryduo.svg';

function Icon(props) {
    const { className } = props;

    return (
        <div className={classnames(className, "icon")}>
            <Strawberry width="150px" height="150px" />
        </div>
    )
}

export default Icon;
