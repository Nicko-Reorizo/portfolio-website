function ScrollAnimation(container, className ="show"){
const card = document.querySelectorAll(container);
const observer = new IntersectionObserver(entries =>{
   entries.forEach((entry)=> {
   if(entry.isIntersecting){
    entry.target.classList.add(className);
   }
   else{
    entry.target.classList.remove(className);
   }
   })
   
}, {
   threshold: 0.2
});

card.forEach(card=>observer.observe(card));
}


export default ScrollAnimation


