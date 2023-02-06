import React from 'react';
import { ReactComponent as SmilingStar } from "../../images/icon-images/smilingstar.svg";
import './MoodBar.scss';


function MoodBar() {
    return (
        <div className="mood-container">
            <div className="smiley-face">
                <SmilingStar  height="100px" width="100px"/>
            </div>
            <div className="mood-bar">
                <div className="mood-fill">
            
                </div>
            </div>
        </div>
    )
}

export default MoodBar;
