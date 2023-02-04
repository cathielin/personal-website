import React from 'react';
import Modal from '../Modal/Modal.js';
import ModalSection from '../ModalSection/ModalSection.js';

const ContactModal = () => {
    const IconImage = () => { 
        return <Flowers width="150px" height="200px" />
    }

    return (
        <Modal className="contact" title="contact" iconImage={IconImage()} iconLabel="contact me">
            <ModalSection title="primary contact">
            <div>
            ★ <b>email: </b>cathielin@berkeley.edu
            </div>
            </ModalSection>
            <ModalSection title="social media & misc">
            <div>
            ★ <a href="https://www.linkedin.com/in/cathie-lin/" target="_blank" rel="noreferrer">linkedin</a> <br/>
            ★ <a href="https://github.com/cathielin/" target="_blank" rel="noreferrer">github</a> <br/>
            ★ <a href="https://open.spotify.com/user/boxofnothing" target="_blank" rel="noreferrer">spotify</a> 

            </div>
            </ModalSection>
                
        </Modal>
    )
}

export default ContactModal;