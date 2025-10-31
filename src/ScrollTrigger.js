
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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







gsap.to('#AboutMe-Section', { 
  backgroundColor: '#6900FF', 
  scrollTrigger: {
    trigger: '#AboutMe-Section', 
    start: 'top 80%',            
    end: 'bottom 20%',          
    scrub: true,                
  }
});

}
