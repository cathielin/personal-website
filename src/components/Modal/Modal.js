import React, {useState} from 'react';

import './Modal.scss';
import Button from '../Button/Button.js';
import {ReactComponent as Strawberry} from '../../images/icon-images/strawberryduo.svg';

function Modal() {
    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => {
        setOpenModal(true);
        console.log("open the modal")
    }

    const handleClose = () => {
        setOpenModal(false);
        console.log("close modal");
    }

    return (
        <React.Fragment>
            {/* <button onClick={handleOpen} >open modal</button> */}
            <Button handlerFunction={handleOpen} buttonText="button"/>
            {openModal && 
                <div className="modal">
                    <div className="modal-header">
                        Resume
                    </div>
                    <div className="modal-content">
                        <div className="modal-image">
                            <Strawberry  height="200" width="200" />
                        </div>
                        <Button handlerFunction={handleClose} buttonText="exit"/>

                    </div>
                    
                </div> 
            }
        </React.Fragment>
        
    )
}

export default Modal;
