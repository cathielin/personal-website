import CenterCard from './components/CenterCard/CenterCard.js';
import IconWithLabel from './components/IconWithLabel/IconWithLabel.js';
import MoodBar from './components/MoodBar/MoodBar.js';
import Modal from './components/Modal/Modal.js';
import ModalSection from './components/ModalSection/ModalSection.js';
import {ReactComponent as Strawberry} from './images/icon-images/strawberryduo.svg';
import ResumeModal from './components/ResumeModal/ResumeModal.js';
import AboutMeModal from './components/AboutMeModal/AboutMeModal.js';
import ProjectsModal from './components/ProjectsModal/ProjectsModal.js';
import ContactModal from './components/ContactModal/ContactModal.js';


import './App.scss';

function App() {
  

  return (
    <div className="main-app">
      {/* <div className="test-modal">
        <Modal />
      </div> */}
      <div className="center-pic">
        <CenterCard />
        
      </div>
      <div className="resume-icon">
          {/* <Modal title="Resume" iconImage={StrawberryImage()} iconLabel="resume">
            <ModalSection title="education">
              <div>
              - <b>university of california, berkeley </b><br/>
              - <b>electrical engineering and computer science</b> <br/>
              - expected grad june 2023 <br />
              - 3.6/4.0 gpa
              </div>
            </ModalSection>
            <ModalSection title="work experience">
              <div>
              - <b>verkada</b>, <i>frontend engineering intern,</i> 2022 <br />
              - <b>articence</b>, <i>fullstack engineering intern,</i> 2022 <br />
              - <b>chevron</b>, <i>software engineering intern,</i> 2021 <br/>
              - <b>pair anything</b>, <i>software engineering intern,</i> 2020 <br/>
              </div>
            </ModalSection>
            <ModalSection 
              title="programming languages"
              doubleList={true}
            >
              <div className="double-list">
                  <div className="left-list">
                    - react <br/>
                    - javascript <br />
                    - html/css <br/>
                  </div>
                  <div className="right-list">
                    - java <br/>
                    - python <br />
                  </div>
              </div>
            </ModalSection>
          </Modal> */}
          <ResumeModal />
          <AboutMeModal />
         
        {/* <IconWithLabel /> */}
      </div>
      <ProjectsModal />
          <ContactModal />
      
      <div className="mood">
        <MoodBar />
      </div>
      
      
      {/* <div className="resume-icon">
        <IconWithLabel />
      </div> */}
      
      {/* <MoodBar /> */}
    </div>
  );
}

export default App;
