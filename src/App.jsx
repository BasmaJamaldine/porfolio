import { Routes } from "react-router-dom";
import "./index.css"
import './app.css'
import Navbar from "./pages/navbar/components/Navbar";
import AnimCursor from "./components/AnimCursor";
import bgImage from './assets/bg.jpg';
import Hero from "./pages/hero/components/Hero";
import About from "./pages/about/components/About";
import Skils from "./pages/skils/components/skils";
import Project from "./pages/projects/components/project";
import Contact from "./pages/contact/components/contact";





function App() {
  const backgroundStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',

  };
  return (
    <>
      <div style={backgroundStyle}>
        <AnimCursor />
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <About></About>
      <Skils></Skils>
      <Project></Project>
      <Contact></Contact>
    </>
  );

}


export default App;




