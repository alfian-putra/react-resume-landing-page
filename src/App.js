import logo from './logo.svg';
import Biodata from './section-biodata';
import AboutMe from './section-aboutme';
import Portfolio from './section-portfolio';
import EducationExperience from './section-education';
import Skillset from './section-skillset';
import Certificate from './section-certificate';
import Contact from './section-contact';

function App() {
  return (
    <div className="App" style={{fontFamily: "Roboto"}}>  
      <Biodata />
      <AboutMe />
      <Portfolio />
      <EducationExperience />
      <Skillset />
      <Certificate />
      <Contact />
    </div>
  );
}

export default App;
