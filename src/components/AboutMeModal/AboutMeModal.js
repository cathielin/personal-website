import React from "react";
import Modal from "../Modal/Modal.js";
import ModalSection from "../ModalSection/ModalSection.js";
import { ReactComponent as Flowers } from "../../images/icon-images/flowers.svg";

const AboutMeModal = () => {
  const FlowerImage = () => {
    return <Flowers width="150px" height="200px" />;
  };

  return (
    <Modal title="about me" iconImage={FlowerImage()} iconLabel="about me">
      <ModalSection title="about me">
        <div>
          Hi, my name is cathie! I'm currently a 4th year at UC Berkeley
          studying Electrical Engineering and Computer Science and also an aspiring
          frontend web developer.
        </div>
      </ModalSection>
      <ModalSection title="a quick history">
        <div>
            The first time I ever touched code, I was in 4th grade modifying
            HTML/CSS templates to customize my petpages on neopets.com. I later
            learned how to code seriously in high school and self-taught myself
            React in college. I attended UC Davis for my first two years of
            college where I also studied computer science, before transferring to
            UC Berkeley in the fall of 2021.
        </div>
      </ModalSection>
      <ModalSection title="stats">
        <div className="double-list">
            <div className="left-list">
                - level: 21 <br />
                - hp: 155 <br />
                - star sign: taurus <br />
            </div>
            <div className="right-list">
                - typing speed: 150 wpm <br />
                - favorite color: green <br />
                - mbti: enfp
            </div>
        </div>
      </ModalSection>
      <ModalSection title="hobbies & interests">
        <div className="double-list">
            <div className="left-list">
                - coding <br />
                - drawing <br />
                - taylor swift's discography <br />
            </div>
            <div className="right-list">
                - journaling <br />
                - thrifting <br />
                - sending cat videos to my boyfriend <br />
            </div>
        </div>
      </ModalSection>
    </Modal>
  );
};

export default AboutMeModal;