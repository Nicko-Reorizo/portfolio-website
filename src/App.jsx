import { useEffect } from "react";
import Hero from "./Hero.jsx";
import TechStack from "./TechStack.jsx";
import VenomBeam from "./VenomBeam.jsx";
import AboutMe from "./AboutMe.jsx";
import Navbar from "./Navbar.jsx";
import Projects from "./Projects.jsx"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { initScrollAnimations } from "./ScrollTrigger.js";
import './css/main.css';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useEffect(() => {
    
    if (ScrollSmoother.get()) ScrollSmoother.get().kill();

    // Initialize ScrollSmoother
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      smoothTouch: 0.01,
      effects: true,
    });


    initScrollAnimations();
  }, []);

  return (
    <>
      <Navbar />
      <div id="smooth-wrapper" className="">
        <div id="smooth-content">
          <div className="absolute inset-0 -z-10">
            <VenomBeam />
          </div>
           <div id="Hero-Section">
          <Hero Logged={true} />
          </div>
           <section id="About-Section">
          <AboutMe />
          </section>
          <section id="TechStack-Section">
          <TechStack />
          </section>

         
          <section id="Projects-Section">
            <Projects/>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
