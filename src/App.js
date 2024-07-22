import React from 'react';
import './assets/css/styles.css';
import Header from './components/Header';
import About from './components/About';
// import Experience from './components/Experience';
// import Education from './components/Education';
// import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Languages from './components/Languages';
// import Summary from './components/Summary';
// import Contact from './components/Contact';
import Timeline from './components/Timeline';
import Hobbies from './components/Hobbies';

function App() {
  return (
    <div className="App">
      <Header />
      <About/>
      <Timeline/>
      {/* <Education/> */}
      <Skills/>
      {/* <Experience/> */}
      {/* <Projects/> */}
      <Hobbies/>
      <Languages/>
      {/* <Summary/> */}
      {/* <Contact/> */}
      <Footer/>
    </div>
  );
}

export default App;
