import About from "./components/About";
import Hero from "./components/Hero";
import MyProjects from "./components/MyProjects";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MyProjects />
      <Skills />
      <ContactMe/> 
      </>
  );
}

export default App;
