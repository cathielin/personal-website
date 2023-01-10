import React from 'react';
import './CenterCard.scss';
import me from '../../images/icon-images/me.jpg';
function CenterCard() {
    return (
        <div className="card">
                <div className="card-header">
                    cathie lin
                </div>
                <div className="card-content">
                    <img className="me-image" src={me} alt="me"/>
                </div>
        </div>
    )
}

export default CenterCard;
