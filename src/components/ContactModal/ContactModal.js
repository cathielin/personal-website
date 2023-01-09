import React from 'react';
import Modal from '../Modal/Modal.js';
import ModalSection from '../ModalSection/ModalSection.js';
import {ReactComponent as Strawberry} from '../../images/icon-images/strawberryduo.svg';

const ContactModal = () => {
    const StrawberryImage = () => { 
        return <Strawberry width="150px" height="200px" />
    }

    return (
        <Modal title="Contact Me" iconImage={StrawberryImage()} iconLabel="contact me">
                <ModalSection title="fastest contact">
                <div>
                - <b>email: </b>cathielin@berkeley.edu
                </div>
                </ModalSection>
                <ModalSection title="social media">
                <div>
                - linkedin
                - github
                </div>
                </ModalSection>
                <ModalSection 
                    title="spotify"
                >
                <div className="double-list">
                    <div className="left-list">
                        - react<br/>
                        - javascript <br />
                        - html/css <br/>
                    </div>
                    <div className="right-list">
                        - java <br/>
                        - python <br />
                    </div>
                </div>
                </ModalSection>
            </Modal>
    )
}

export default ContactModal;