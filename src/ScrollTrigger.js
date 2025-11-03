
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {

     gsap.to('.Home-nav', {
  color: '#ffffff', 
  scrollTrigger: {
    trigger: '#TechStack-Section', 
    start: 'top 50%',
    toggleActions: 'play reverse play reverse'
    
  },
});

 gsap.to('.Tech-nav', {
  color: '#6900FF', 
  scrollTrigger: {
    trigger: '#TechStack-Section', 
    start: 'top 50%',
    end: 'bottom 50%',
    toggleActions: 'play reverse play reverse'
  },
});

gsap.to('.About-nav', {
  color: '#6900FF', 
  scrollTrigger: {
    trigger: '#About-Section', 
    start: 'top 50%',
    end: 'bottom 20%',
    toggleActions: 'play reverse play reverse',

    
  },
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#AboutMe-Section",
    start: "top 80%",
    endTrigger: "#TechStack-Section",
    end: "top 50%",
    scrub: true,
    markers: true
  }
});

tl.to(["body",'.TechStack-Section'], { backgroundColor: "#6900FF", duration: 1 })
  .to(["body",'.TechStack-Section'], { backgroundColor: "#0d0e0d", duration: 1 });




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
