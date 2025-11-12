
import React from "react";
import { useEffect } from "react";
import './css/AboutMe.css'
import MotionCards, { MotionCardContent } from "./MotionCards";
import { Lightbulb, Layers, Palette, Rocket, Hammer } from "lucide-react";
import { initScrollAnimations } from "./ScrollTrigger.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Pin, Target } from "lucide-react";

function AboutMe(){



    return (
        <section id="AboutMe-Section">
          <div className="about-text-section">
            <p className="Inter-ExtraLight about-p">What I Do</p>
            <p className="Inter-ExtraBold about-p">I craft visually stunning and high-performing websites designed to impress and stand out from the competition.</p>
          </div>


          <div className="about-img-section ">
            <img src="/public/1stwork.webp" alt=""/>
            <img src="/public/2ndwork.webp" alt="" />
            <img src="/public/3rdwork.webp" alt="" />
          </div>

          </section>);
}



export default AboutMe