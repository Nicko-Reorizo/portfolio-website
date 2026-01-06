
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Pin, Target } from "lucide-react";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {



const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#AboutMe-Section",
    start: "top 80%",
    endTrigger: "#TechStack-Section",
    end: "top 30%",
    scrub: true,
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

gsap.from(".Home-nav", {
  scale: 1.2,
  x: -10,
  color:  "#ffffff",
  scrollTrigger: {
    trigger: "#About-Section",
    start: "top 50%",
    end: "+=100",
  }
});

ScrollTrigger.create({
  trigger: "#Hero-Section",
  start: "top center",
  end: "bottom center",
  onEnter: () => {
    gsap.to(".Home-nav", { scale: 1.2, x: -10, duration: 0.1, color: "#ffffff" });
    
  },
  onLeaveBack: () => {
     gsap.to(".Home-nav", { scale: 1.0, x: 0, duration: 0.1, color: "#ffffff34" });
  }
});

ScrollTrigger.create({
  trigger: "#About-Section",
  start: "top center",
  end: "bottom center",
  onEnter: () => {
 gsap.to(".About-nav", { scale: 1.2, x: -10, duration: 0.1, color: "#ffffff" });
 gsap.to(".Home-nav", { scale: 1, x: 0, duration: 0.1, color: "#ffffff34" });
  },
   
  onLeaveBack: () =>  {
  gsap.to(".About-nav", { scale: 1, x: 0, duration: 0.1, color: "#ffffff34" });
  gsap.to(".Home-nav", { scale: 1.2, x: -10, duration: 0.1, color: "#ffffff" });
  }
    
});

ScrollTrigger.create({
  trigger: "#TechStack-Section",
  start: "top center",
  end: "bottom center",
  onEnter: () => {
    gsap.to(".About-nav", { scale: 1, x: 0, duration: 0.1, color: "#ffffff34" });
    gsap.to(".Tech-nav", { scale: 1.2, x: -10, duration: 0.1, color: "#ffffff" });
  },
  onLeaveBack: () => {
     gsap.to(".About-nav", { scale: 1.2, x: -10, duration: 0.1, color: "#ffffff" });
     gsap.to(".Tech-nav", { scale: 1, x: 0, duration: 0.1, color: "#ffffff34" });
  }
   
});

ScrollTrigger.create({
  trigger: "#Projects-Section",
  start: "top center",
  end: "bottom center",
  onEnter: () => {
    gsap.to(".Projects-nav", { scale: 1.2, x: -10, duration: 0.1, color: "#ffffff" });
    gsap.to(".Tech-nav", { scale: 1, x: 0, duration: 0.1, color: "#ffffff34" });
  },
  onLeaveBack: () => {
     gsap.to(".Projects-nav", { scale: 1.0, x: 0, duration: 0.1, color: "#ffffff34" });
     gsap.to(".Tech-nav", { scale: 1.2, x: -10, duration: 0.1, color: "#ffffff" });
  }
   
});

ScrollTrigger.create({
  trigger: "#Contacts-Section",
  start: "top center",
  end: "bottom center",
  onEnter: () => {
    gsap.to(".Projects-nav", { scale: 1.0, x: 0, duration: 0.1, color: "#ffffff34" });
    gsap.to(".Contact-nav", { scale: 1.2, x: 0, duration: 0.1, color: "#ffffff" });
  },
  onLeaveBack: () => {
     gsap.to(".Contact-nav", { scale: 1.0, x: 0, duration: 0.1, color: "#ffffff34" });
     gsap.to(".Projects-nav", { scale: 1.2, x: -10, duration: 0.1, color: "#ffffff" });
  }
   
});
}



ScrollTrigger.create({
  trigger: ".about-text-section",
  pin: true,
  start: "center 65%",
  endTrigger: ".about-img-section img:last-child",
  end: "bottom top"

});

gsap.utils.toArray()

