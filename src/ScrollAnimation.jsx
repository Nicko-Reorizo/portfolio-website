function ScrollAnimation(container, className ="show"){
const card = document.querySelectorAll(container);
const observer = new IntersectionObserver(entries =>{
   if(entries[0].isIntersecting){
    entries[0].target.classList.add(className);
   }
   else{
    entries[0].target.classList.remove(className);
   }
}, {
   threshold: 0.2
});

card.forEach(card=>observer.observe(card));
}


export default ScrollAnimation