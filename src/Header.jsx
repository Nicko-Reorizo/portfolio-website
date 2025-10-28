import { useEffect } from 'react';
import './css/Header.css'
import './css/gradients.css'
function Header() {
useEffect (()=> {
     let lastScrollY = window.scrollY;
    const navbar = document.getElementById("navbar");

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
   
    navbar.style.top = '-110px';
  } else {
 
    navbar.style.top = '0';
  }
  lastScrollY = window.scrollY;
});

});
    return (
    <div className="navbar" id='navbar'>
     <nav className=''>
       <ul class = "flex justify-center space-x-34 text-white inter-bold">
        <li className='nav-text'><a href="#">Home</a></li>
        <li className='nav-text' ><a href="#TechStack-Section">Skills</a></li>
        <li className='nav-text'><a href="">Projects</a></li>
        <li className='nav-text'><a href="">About me</a></li>
        <li><a class="btn" href="">Contact</a></li>
       </ul>

     </nav>
    </div>
    );

}


export default Header;