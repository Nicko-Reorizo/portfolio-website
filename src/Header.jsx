import { useEffect } from 'react';
import './css/Header.css'
import './css/gradients.css'
function Header() {
useEffect (()=> {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll",()=> {
        if(window.scrollY > 0){
        navbar.classList.add("scrolled");
        }
        else{
            navbar.classList.remove("scrolled");
        }
    })
});
    return (
    <div className="navbar">
     <nav>
        <h1 class = "col-span-1  text-purple-700 font-black text-2xl">N.R <span class="text-white">Tech</span></h1>
       <ul class = "flex justify-evenly text-white">
        <li className='nav-text'><a href="#">Home</a></li>
        <li className='nav-text' ><a href="#TechStack-Section">Skills</a></li>
        <li className='nav-text'><a href="">Projects</a></li>
        <li className='nav-text'><a href="">About me</a></li>
        <li><a class="btn p-3 pl-10 pr-10 rounded-md font-bold background-color" href="">Contact</a></li>
       </ul>

     </nav>
    </div>
    );

}


export default Header;