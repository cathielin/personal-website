import CenterCard from './components/CenterCard/CenterCard.js';
import IconWithLabel from './components/IconWithLabel/IconWithLabel.js';
import MoodBar from './components/MoodBar/MoodBar.js';
import Modal from './components/Modal/Modal.js';

import './App.scss';

function App() {
  return (
    <div className="main-app">
      <div className="test-modal">
        <Modal />
      </div>
      <div className="center-pic">
        <CenterCard />
        <div className="resume-icon">
        <IconWithLabel />
      </div>
      </div>
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
