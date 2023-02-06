import React from 'react';
import './CenterCard.scss';
import me from '../../images/icon-images/me.jpg';
function CenterCard(props) {

    const {title} = props;
   

    return (
        <div className="card">
            <div className="card-header">
                {title}
            </div>
            <div className="modal-content">
                
                <div className="modal-text">
                    {props.children}
                </div>
                
            </div>
        </div>
        
    )
}

export default CenterCard;
