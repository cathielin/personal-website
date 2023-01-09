import React, {useState, useEffect} from 'react';

import './ModalSection.scss';


function ModalSection(props) {

    const { title } = props;
    useEffect(() => {
        console.log("this is props.children", props);
    }, [props]);

    return (
        
        <div className="section">
            <div className="section-header">
                    {title}
            </div>
            <div className="section-text">
                
                {props.children}
            </div>
        </div>
                            
        
    )
}

export default ModalSection;
