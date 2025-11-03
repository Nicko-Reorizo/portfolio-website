import { useEffect } from 'react';
import './css/Navbar.css'
import './css/gradients.css'
import { initScrollAnimations } from "./ScrollTrigger";
function Navbar() {

    return (
    <div className="navbar hidden md:flex" id='navbar'>
     <nav className=''>
       <ul className='inter-bold'>
        <li className='nav-text Home-nav '><a href="#">Home</a></li>
        <li className='nav-text About-nav' ><a href="">What I do</a></li>
        <li className='nav-text Tech-nav'><a href="">Tech Stack</a></li>
        <li className='nav-text Projects-nav'><a href="">Projects</a></li>
        <li className='nav-text Contact-nav'><a  href="">Contact</a></li>
       </ul>
     </nav>
    </div>
    );

}


export default Navbar;