import React from "react";
import CenterCard from "../CenterCard/CenterCard.js";
import ModalSection from "../ModalSection/ModalSection.js";

const ProjectsCard = () => {
  return (
    <CenterCard title="projects">
      <ModalSection title="personal website">
        <div className="split">
          <div className="text">
            <div>
              ★ <b>react, html/css </b>
              <br />
              ★ responsive design with reusable components <br />
              ★ personally designed icons <br />
            </div>
          </div>
          <div className="image"></div>
        </div>
      </ModalSection>
    </CenterCard>
  );
};

export default ProjectsCard;
