import './App.css'
import { Contact } from './sections/Contact/Contact';
import Hero from './sections/Hero/Hero';
import ProjectCards from './sections/projects/ProjectCards';
import Skills from './sections/Skills/Skills';
import Footer from './sections/Footer/Footer';

function App() {

  return (
    <>
     <Hero/>
     <ProjectCards/>
     <Skills/>
     <Contact/>
     <Footer/>
    </>
    
  )
}

export default App
