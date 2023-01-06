import React from 'react';
import './CenterCard.scss';
import sushi from '../../images/icon-images/sushi.png';

function CenterCard() {
    return (
        // <div className="card-border">
        <div className="card">
           
                <div className="card-header">
                    cathie-lin.png
                </div>
                <div className="card-content">
                    <img className="sushi-image" src={sushi} />

                </div>

            
        </div>
        // </div>
    )
}

export default CenterCard;
