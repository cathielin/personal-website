import React, {useState} from 'react';
import CenterCard from "./components/CenterCard/CenterCard.js";
import AboutMeCard from "./components/AboutMeCard/AboutMeCard.js";
import ProjectsCard from "./components/ProjectsCard/ProjectsCard.js";
import ResumeCard from "./components/ResumeCard/ResumeCard.js";
import ContactCard from "./components/ContactCard/ContactCard.js";
import MoodBar from "./components/MoodBar/MoodBar.js";
import IconWithLabel from "./components/IconWithLabel/IconWithLabel";
import {ReactComponent as Fish} from './images/icon-images/fish.svg';
import {ReactComponent as RightArrowHeart }  from "./images/icon-images/rightarrowheart.svg";
import {ReactComponent as Flowers } from './images/icon-images/flowers.svg';
import {ReactComponent as Strawberry} from './images/icon-images/strawberryduo.svg';
import "./App.scss";

function App() {
  
  const AboutMeIcon = () => {
    return <RightArrowHeart width="170px" height="200px" />;
  };

  const ProjectsIcon = () => { 
    return <Fish width="150px" height="150px" />
  }

  const ResumeIcon = () => {
    return <Strawberry width="150px" height="150px" />
  }

  const ContactIcon = () => {
    return <Flowers width="150px" height="150px" />
  }



  const [currentCard, setCurrentCard] = useState("about");

  const returnCard = () => {
    console.log("this is the currentCard", currentCard)
    if (currentCard == "center") {
      return <CenterCard />
    }
    else if (currentCard == "about") {
      return <AboutMeCard />
    }
    else if (currentCard == "projects") {
      return <ProjectsCard />
    }
    else if (currentCard == "resume") {
      return <ResumeCard />
    }
    else if (currentCard == "contact") {
      return <ContactCard />
    }
  }
  return (
    <div className="main-app">
     

      <div className="center-pic">
        <div className="center-card">
          {/* <CenterCard /> */}
          {returnCard()}
        </div>
        <div className="icons">
          <div className="about-me-icon">
            <IconWithLabel className="about" iconImage={AboutMeIcon()} iconLabel="about me" setState={setCurrentCard} />
          </div>
          <div className="resume-icon">
            <IconWithLabel className="resume" iconImage={ResumeIcon()} iconLabel="resume" setState={setCurrentCard} />
          </div>
          <div className="projects-icon">
            <IconWithLabel className="projects" iconImage={ProjectsIcon()} iconLabel="projects" setState={setCurrentCard} />

            {/* <ProjectsModal /> */}
          </div>
          <div className="contact-me-icon">
            <IconWithLabel className="contact" iconImage={ContactIcon()} iconLabel="contact me" setState={setCurrentCard} />
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

