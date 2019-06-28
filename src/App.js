import React, { Component } from "react";
import Header from './components/Header/Header';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import resumeData from './resumeData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData = {resumeData}/>
        <Portfolio resumeData = {resumeData}/>
        <Resume resumeData = {resumeData}/>
        <About resumeData = {resumeData}/>
        <Contact resumeData = {resumeData}/>
        <Footer resumeData = {resumeData}/>
      </div>
    );
  }
}
export default App;
