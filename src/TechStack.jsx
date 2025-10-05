import './css/TeckStack.css';
import ScrollAnimation from './ScrollAnimation';
import { useEffect } from 'react';
function TechStack(){

 useEffect(()=>{
        ScrollAnimation(".card-section", "show");
        ScrollAnimation(".p-animation", "show");
    }
    ,[]);


    
    const TechStackSection =
    (<section className="TechStack-Section">
<p className='inter-bold p-animation'>Tech <span className="text-gradient">Stack</span></p>
<p className='inter-thin p-animation'>These are the languages, frameworks and libraries that I've learned and utilized by making personal projects</p>

<div className="card-section">
<div class="card">
    <div className='absolute bg-[#5023bd] h-[60px] w-1 mt-5'></div>
    <div className="card-container-img">
         <img src="./public/csscard-picture.PNG" alt="" className="card-pic" />
    </div>
    <div className="card-container-text">
     <h1 className='text-[#38bdf8] inter-bold'>CSS<span>2 Years Experience</span></h1>
    </div>
</div>

<div class="card">
    <div className='absolute bg-[#5023bd] h-[60px] w-1 mt-5'></div>
    <div className="card-container-img">
        <img src="./public/htmlcard-picture.PNG" alt="" className="card-pic" />
    </div>
    <div className="card-container-text">
         <h1 className='text-[#ff4e1d] inter-bold'> HTML <span>2 Years Experience</span></h1>
         
    </div>
</div>

<div class="card">
    <div className='absolute bg-[#5023bd] h-[60px] w-1 mt-5'></div>
     <div className="card-container-img"> 
        <img src="./public/javascriptcard-picture.PNG" alt="" className="card-pic" />
     </div>
     <div className="card-container-text">
        <h1 className='text-[#ffdd25] inter-bold'>JAVASCRIPT <span>2 Years Experience</span></h1>
    </div>
</div>

<div class="card">
    <div className='absolute bg-[#5023bd] h-[60px] w-1 mt-5'></div>
    <div className="card-container-img "> 
        <img src="./public/tailwindcard-picture.PNG" alt="" className="card-pic" />
    </div>
    <div className="card-container-text">
         <h1 className='text-[#38bdf8] inter-bold'>TAILWINDCSS <span>1 Year Experience</span></h1>
    </div>
</div>

<div class="card">
    <div className='absolute bg-[#5023bd] h-[60px] w-1 mt-5'></div>
    <div className="card-container-img "> 
        <img src="./public/reactcard-picture.PNG" alt="" className="card-pic"/>
    </div>
    <div className="card-container-text">
         <h1 className='text-[#38bdf8] inter-bold'>REACT <span>1 Year Experience</span></h1>
    </div>
</div>

<div class="card">
    <div className='absolute bg-[#5023bd] h-[60px] w-1 mt-5'></div>
    <div className="card-container-img "> 
        <img src="./public/cppcard-picture.PNG" alt="" className="card-pic"/>
    </div>
    <div className="card-container-text">
         <h1 className='text-[#38bdf8] inter-bold'>C++ <span>1 Year Experience</span></h1>
    </div>
</div>

<div class="card">
    <div className='absolute bg-[#5023bd] h-[60px] w-1 mt-5'></div>
    <div className="card-container-img "> 
        <img src="./public/javacard-picture.PNG" alt="" className="card-pic"/>
    </div>
    <div className="card-container-text">
         <h1 className='text-[#ff0707] inter-bold'>JAVA <span>2 Years Experience</span></h1>
    </div>
</div>

<div class="card">
    <div className='absolute bg-[#5023bd] h-[60px] w-1 mt-5'></div>
    <div className="card-container-img "> 
        <img src="./public/nodejscard-picture.PNG" alt="" className="card-pic"/>
    </div>
    <div className="card-container-text">
         <h1 className='text-[#08b13d] inter-bold'>NODE.JS <span>1 Year Experience</span></h1>
    </div>
</div>
</div>



</section>);




    return(
     TechStackSection
    );
}



export default TechStack