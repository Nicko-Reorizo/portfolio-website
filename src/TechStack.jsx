import './css/TeckStack.css';
import ScrollAnimation from './ScrollAnimation';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
function TechStack(){

 useEffect(()=>{
        ScrollAnimation(".skills-card", "show");
        ScrollAnimation(".p-animation", "show");
        ScrollAnimation(".p2-animation", "show");
        ScrollAnimation(".card", "show");
    }
    ,[]);


    
    const TechStackSection =
    (<section id='TechStack-Section' className="TechStack-Section">
       
            <div className="purple-shadow bg-purple-700 absolute w-1/3 h-1/3 blur-3xl opacity-15 lg:opacity-10 rounded-full mt-16"></div>
            <div className="purple-shadow bg-purple-700 absolute w-1/3 h-1/3 blur-3xl opacity-15 lg:opacity-10 rounded-full ml-[90vw] mt-[50vh]"></div>
            <div className="purple-shadow bg-purple-700 absolute w-1/3 h-1/3 blur-3xl opacity-15 lg:opacity-10 rounded-full ml-[30vw] mt-[120vh]"></div>

            <div className="purple-shadow bg-purple-700 lg:hidden absolute w-1/3 h-1/3 blur-3xl opacity-15 lg:opacity-10 rounded-full ml-[40vw] mt-[200vh]"></div>
            <div className="purple-shadow bg-purple-700 lg:hidden absolute w-1/3 h-1/3 blur-3xl opacity-15 lg:opacity-10 rounded-full ml-[10vw] mt-[100vh]"></div>
            <div className="purple-shadow bg-purple-700 lg:hidden absolute w-1/3 h-1/3 blur-3xl opacity-15 lg:opacity-10 rounded-full ml-[90vw] mt-[150vh]"></div>
       
<p className='inter-bold p-animation ts-header'>Tech <span className="text-gradient">Stack</span></p>
<p className='inter-thin p-animation ts-subheader'>These are the languages, frameworks and libraries that I've learned and utilized by making personal projects</p>

<div className="card-section">

<div class="card">
    <div className='absolute bg-[#5023bd] h-[60px] w-1 mt-5 custom-glow'></div>
    <div className="card-container-img">
         <img src="./public/csscard-picture.PNG" alt="" className="card-pic" />
    </div>
    <div className="card-container-text">
     <h1 className='text-[#38bdf8] inter-bold'>CSS<span>2 Years Experience</span></h1>
    </div>
</div>

<div class="card">
    <div className='absolute bg-[#5023bd] h-[60px] w-1 mt-5  custom-glow'></div>
    <div className="card-container-img">
        <img src="./public/htmlcard-picture.PNG" alt="" className="card-pic" />
    </div>
    <div className="card-container-text">
         <h1 className='text-[#ff4e1d] inter-bold'> HTML <span>2 Years Experience</span></h1>
         
    </div>
</div>

<div class="card">
    <div className='absolute bg-[#5023bd] h-[60px] w-1 mt-5 custom-glow'></div>
     <div className="card-container-img"> 
        <img src="./public/javascriptcard-picture.PNG" alt="" className="card-pic" />
     </div>
     <div className="card-container-text">
        <h1 className='text-[#ffdd25] inter-bold'>Javascript <span>2 Years Experience</span></h1>
    </div>
</div>

<div class="card">
    <div className='absolute bg-[#5023bd] h-[60px] w-1 mt-5 custom-glow'></div>
    <div className="card-container-img "> 
        <img src="./public/tailwindcard-picture.PNG" alt="" className="card-pic" />
    </div>
    <div className="card-container-text">
         <h1 className='text-[#38bdf8] inter-bold'>TailwindCSS <span>1 Year Experience</span></h1>
    </div>
</div>

<div class="card">
    <div className='absolute bg-[#5023bd] h-[60px] w-1 mt-5 custom-glow'></div>
    <div className="card-container-img "> 
        <img src="./public/reactcard-picture.PNG" alt="" className="card-pic"/>
    </div>
    <div className="card-container-text">
         <h1 className='text-[#38bdf8] inter-bold'>React <span>1 Year Experience</span></h1>
    </div>
</div>

<div class="card">
    <div className='absolute bg-[#5023bd] h-[60px] w-1 mt-5 custom-glow'></div>
    <div className="card-container-img "> 
        <img src="./public/cppcard-picture.PNG" alt="" className="card-pic"/>
    </div>
    <div className="card-container-text">
         <h1 className='text-[#38bdf8] inter-bold'>C++ <span>1 Year Experience</span></h1>
    </div>
</div>

<div class="card">
    <div className='absolute bg-[#5023bd] h-[60px] w-1 mt-5 custom-glow'></div>
    <div className="card-container-img "> 
        <img src="./public/javacard-picture.PNG" alt="" className="card-pic"/>
    </div>
    <div className="card-container-text">
         <h1 className='text-[#ff0707] inter-bold'>Java <span>2 Years Experience</span></h1>
    </div>
</div>

<div class="card">
    <div className='absolute bg-[#5023bd] h-[60px] w-1 mt-5 custom-glow'></div>
    <div className="card-container-img "> 
        <img src="./public/nodejscard-picture.PNG" alt="" className="card-pic"/>
    </div>
    <div className="card-container-text">
         <h1 className='text-[#08b13d] inter-bold'>Node.js <span>1 Year Experience</span></h1>
    </div>
</div>

<div class="card">
    <div className='absolute bg-[#5023bd] h-[60px] w-1 mt-5 custom-glow'></div>
    <div className="card-container-img "> 
        <img src="./public/mysqlcard-picture.PNG" alt="" className="card-pic"/>
    </div>
    <div className="card-container-text">
         <h1 className='text-[#6b7795] inter-bold'>MySql <span>1 Year Experience</span></h1>
    </div>
</div>

<div class="card">
    <div className='absolute bg-[#5023bd] h-[60px] w-1 mt-5 custom-glow'></div>
    <div className="card-container-img "> 
        <img src="./public/phpcard-picture.PNG" alt="" className="card-pic"/>
    </div>
    <div className="card-container-text">
         <h1 className='text-[#6e81b4] inter-bold'>PHP <span>1 Year Experience</span></h1>
    </div>
</div>
</div>

<p className='inter-bold p2-animation ts-header'><span className="text-gradient">Skills</span></p>
<p className='inter-thin p2-animation ts-subheader'>These are the core areas I specialize in, where I apply my knowledge, creativity, and technical expertise to build meaningful and efficient digital solutions.</p>

<div className="skills-card-section">
    <div className="skills-card">
        <div className='absolute bg-[#5023bd] h-[200px] w-1 mt-5 custom-glow'></div>
        <div className="skills-card-content">
            <i class="fa-solid fa-globe text-gradient"></i>
            <p className='inter-bold text-white text-2xl mt-3'>WEB DEVELOPMENT</p>
            <p className='text-white'>I build responsive and user-friendly
websites using HTML, CSS, JavaScript, and
frameworks like Tailwind CSS. I focus on
creating clean designs and ensuring good
performance across devices.</p>
        </div>
    </div>
    <div className="skills-card">
         <div className='absolute bg-[#5023bd] h-[200px] w-1 mt-5 custom-glow'></div>
         <div className="skills-card-content">
            <i class="fa-solid fa-object-ungroup text-gradient"></i>
            <p className='inter-bold text-white text-2xl mt-3'>UI/UX</p>
            <p className='text-white '>I create intuitive and visually appealing
interfaces with a focus on user experience.
My goal is to design layouts that are both
functional and enjoyable for users.</p>
        </div>
        </div>
    <div className="skills-card">
         <div className='absolute bg-[#5023bd] h-[200px] w-1 mt-5 custom-glow'></div>
         <div className="skills-card-content">
            <i class="fa-solid fa-computer text-gradient"></i>
            <p className='inter-bold text-white text-2xl mt-3'>Software Development</p>
            <p className='text-white'>I develop software solutions by applying
programming fundamentals, problem-
solving skills, and efficient code practices. I
enjoy turning ideas into working
applications that solve real-world problems.</p>
        </div>
        </div>
</div>

</section>);




    return(
     TechStackSection
    );
}



export default TechStack