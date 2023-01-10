import React from 'react';
import CenterCard from "./components/CenterCard/CenterCard.js";
import Icon from "./components/Icon/Icon.js";
import MoodBar from "./components/MoodBar/MoodBar.js";
import ResumeModal from "./components/ResumeModal/ResumeModal.js";
import AboutMeModal from "./components/AboutMeModal/AboutMeModal.js";
import ProjectsModal from "./components/ProjectsModal/ProjectsModal.js";
import ContactModal from "./components/ContactModal/ContactModal.js";
import { ReactComponent as Star } from "./images/icon-images/star.svg";
import { ReactComponent as RotatedStar } from "./images/icon-images/rotatedstar.svg";

import "./App.scss";

function App() {
  const IconImage = () => {
    return <RotatedStar width="150px" height="150px" />;
  };

  return (
    <div className="main-app">
      <div className="star">
        <Icon
          className="star"
          handlerFunction={() => {}}
          iconImage={IconImage()}
        />
      </div>

      <div className="center-pic">
        <div className="center-card">
          <CenterCard />
        </div>

        <div className="icons">
          <div className="about-me-icon">
            <AboutMeModal />
          </div>
          <div className="resume-icon">
            <ResumeModal />
          </div>
          <div className="projects-icon">
            <ProjectsModal />
          </div>
          <div className="contact-me-icon">
            <ContactModal />
          </div>
        </div>
      </div>
      <div className="mood">
        <MoodBar />
      </div>
    </div>
  );
}

export default App;
