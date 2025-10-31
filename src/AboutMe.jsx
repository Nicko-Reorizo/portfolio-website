
import React from "react";
import './css/AboutMe.css'
import MotionCards, { MotionCardContent } from "./MotionCards";
import { Lightbulb, Layers, Palette, Rocket, Hammer } from "lucide-react";


function AboutMe(){
    const mcards = 
      <MotionCards interval={2500}>
        <MotionCardContent>
          <div className="flex items-center gap-3">
            <Lightbulb className="w-5 h-5 shrink-0" />
            <span>Curious about how things work.</span>
          </div>
        </MotionCardContent>

        <MotionCardContent>
          <div className="flex items-center gap-3">
            <Layers className="w-5 h-5 shrink-0" />
            <span>Always exploring new frameworks.</span>
          </div>
        </MotionCardContent>

        <MotionCardContent>
          <div className="flex items-center gap-3">
            <Palette className="w-5 h-5 shrink-0" />
            <span>Focused on clean, meaningful design.</span>
          </div>
        </MotionCardContent>

        <MotionCardContent>
          <div className="flex items-center gap-3">
            <Rocket className="w-5 h-5 shrink-0" />
            <span>Driven by learning and building useful stuff.</span>
          </div>
        </MotionCardContent>

        <MotionCardContent>
          <div className="flex items-center gap-3">
            <Hammer className="w-5 h-5 shrink-0" />
            <span>Turning small ideas into working projects.</span>
          </div>
        </MotionCardContent>
      </MotionCards>


    return (
        <section id="AboutMe-Section">{mcards}</section>);
}



export default AboutMe