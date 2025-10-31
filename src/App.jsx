import { useEffect } from "react";
import Hero from "./Hero.jsx";
import TechStack from "./TechStack.jsx";
import VenomBeam from "./VenomBeam.jsx";
import AboutMe from "./AboutMe.jsx";
import Navbar from "./Navbar.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { initScrollAnimations } from "./ScrollTrigger.js";
import './css/main.css';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useEffect(() => {
    // Clean up any existing smoother instance
    if (ScrollSmoother.get()) ScrollSmoother.get().kill();

    // Initialize ScrollSmoother
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      smoothTouch: 0,
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

          <Hero Logged={true} />
           <section id="About-Section">
          <AboutMe />
          </section>
          <section id="TechStack-Section">
          <TechStack />
          </section>

         
          
        </div>
      </div>
    </>
  );
}

export default App;
