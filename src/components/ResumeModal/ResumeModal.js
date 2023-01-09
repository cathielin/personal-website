import React from 'react';
import Modal from '../Modal/Modal.js';
import ModalSection from '../ModalSection/ModalSection.js';
import {ReactComponent as Strawberry} from '../../images/icon-images/strawberryduo.svg';

const ResumeModal = () => {
    const StrawberryImage = () => { 
        return <Strawberry width="150px" height="200px" />
    }

    return (
        <Modal title="Resume" iconImage={StrawberryImage()} iconLabel="resume">
                <ModalSection title="education">
                <div>
                - <b>University of California, Berkeley </b><br/>
                - <b>Electrical Engineering and Computer Science</b> <br/>
                - expected grad: June 2023 <br />
                - 3.6/4.0 gpa
                </div>
                </ModalSection>
                <ModalSection title="work experience">
                <div>
                - <b>Verkada</b>, <i>frontend engineering intern,</i> 2022 <br />
                - <b>Articence</b>, <i>fullstack engineering intern,</i> 2022 <br />
                - <b>Chevron</b>, <i>software engineering intern,</i> 2021 <br/>
                - <b>Pair Anything</b>, <i>software engineering intern,</i> 2020 <br/>
                </div>
                </ModalSection>
                <ModalSection 
                    title="programming languages"
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

export default ResumeModal;