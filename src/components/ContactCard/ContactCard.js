import React from "react";
import CenterCard from "../CenterCard/CenterCard.js";
import ModalSection from "../ModalSection/ModalSection.js";
import Button from "../Button/Button.js";
import {ReactComponent as Fish} from '../../images/icon-images/fish.svg';

const ContactCard = () => {

  return (
    <CenterCard title="contact me">
         <ModalSection title="primary contact">
            <div>
                ★ <b>email: </b>cathielin@berkeley.edu
            </div>
        </ModalSection>
        <ModalSection title="social media & misc">
            <div>
                
                ★ <a href="https://www.linkedin.com/in/cathie-lin/" target="_blank" rel="noreferrer">LinkedIn</a> <br/>
                ★ <a href="https://github.com/cathielin/" target="_blank" rel="noreferrer">GitHub</a> <br/>
                ★ <a href="https://open.spotify.com/user/boxofnothing" target="_blank" rel="noreferrer">Spotify</a> 

            </div>
        </ModalSection>
    </CenterCard>
  );
};

export default ContactCard;
