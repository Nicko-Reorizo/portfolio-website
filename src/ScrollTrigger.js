
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {

 

 

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#AboutMe-Section",
    start: "top 80%",
    endTrigger: "#TechStack-Section",
    end: "top 50%",
    scrub: true,
  }
});

tl.to(["body",'.TechStack-Section'], { backgroundColor: "#6900FF", duration: 1 })
  .to(["body",'.TechStack-Section'], { backgroundColor: "#0d0e0d", duration: 1 });


  gsap.to(".nav-text", {

  })


let MySplitText = new SplitText('.about-p', {type: 'words'});
let words = MySplitText.words;

gsap.from(words, {
  yPercent: 100,
  stagger: 0.05,
  duration: .5,
  opacity: 0,
  scrollTrigger: {
    trigger: "#AboutMe-Section",
    start: "top 70%",
    end: "bottom center",
    toggleActions: "play reverse play reverse", 
    
  }
});
}
