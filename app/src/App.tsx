import './App.css'
import FirstSection from './First-Section'
import FirthSection from './FirthSection';
import FourthSection from './FourthSection';
import SecondSection from './Second-Section'
import ThirdSection from './Third-section';

function App() {

  return (
    <>
  <div className="container-fluid">
    <div className="background">
       <div className="cube"></div>
       <div className="cube"></div>
       <div className="cube"></div>
       <div className="cube"></div>
      <div className="cube"></div>
    </div>
    </div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FirthSection />
    </>
  );
}

export default App
