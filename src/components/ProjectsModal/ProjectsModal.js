import React from 'react';
import Modal from '../Modal/Modal.js';
import ModalSection from '../ModalSection/ModalSection.js';
import {ReactComponent as Fish} from '../../images/icon-images/fish.svg';

const ProjectsModal = () => {
    const IconImage = () => { 
        return <Fish width="150px" height="150px" />
    }

    return (
        <Modal className="projects" title="Projects" iconImage={IconImage()} iconLabel="projects">
                <ModalSection title="personal website">
                <div>
                    ★ <b>react, html/css </b><br/>
                    ★ responsive design with reusable components <br/>
                    ★ personally designed icons <br />
                    
                </div>
                </ModalSection>
            </Modal>
    )
}

export default ProjectsModal;