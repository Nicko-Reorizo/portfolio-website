import './css/Projects.css'
import './css/gradients.css'
import './css/fonts.css'
function  Projects(){
return(<section>

<div className="project-section">

<p className='inter-bold ts-header text-center mb-5'>Web <span className="text-[#6900ff]">Projects</span></p>
<p className='inter-reg text-center ts-subheader'>These are the Websites that I've created by applying the skills that I've learned.</p>

<div className="project-card-section">

<div className="project-card">
  <div className='absolute bg-[#5023bd] h-[200px] w-1 mt-5 custom-glow'></div>
 <img src="/public/voltpic.webp" alt="" />
  <div className="project-card-info-container">
 <div className="project-card-info">
    <p className='inter-bold text-white'>VOLTINCONS</p>
    <p className='inter-reg'>A clothing brand built on energy, passion, and consistency. Designed for creators, athletes, and dreamers who stay powered through every challenge.</p>
    <div className="project-pill"> 
      <div>HTML</div>
      <div>CSS</div>
      <div>JavaScript</div>
      <div>Tailwind</div>
    </div>

<div className="project-bottom">
      <div className="project-status">
      <div className="green-dot w-[10px] h-[10px] bg-green-500 inline-block rounded-full mb-2 mr-5"></div>
      <p className='inline-block'>Live Website</p>
      </div>
      <a className="project-btn bg-[#6900ff]">View Site</a>
    </div>
 </div>
 </div>
</div>

<div className="project-card">
  <div className='absolute bg-[#5023bd] h-[200px] w-1 mt-5 custom-glow'></div>
 <img src="/public/wompic.webp" alt="" />
  <div className="project-card-info-container">
  <div className="project-card-info">
    <p className='inter-bold text-white'>WOMBAGS</p>
    <p className='inter-reg'>Wombags is a skip bag waste-collection company, and I developed a modern website for them with a responsive layout, optimized UI flow, and clear service presentation.</p>
    <div className="project-pill"> 
      <div>HTML</div>
      <div>CSS</div>
      <div>FIGMA</div>
      <div>GSAP</div>
      <div>JavaScript</div>
      <div>Tailwind</div>
    </div>

<div className="project-bottom">
      <div className="project-status">
      <div className="green-dot w-[10px] h-[10px] bg-green-500 inline-block rounded-full mb-2 mr-5"></div>
      <p className='inline-block'>Live Website</p>
      </div>
      <a className="project-btn bg-[#6900ff]">View Site</a>
    </div>
  </div>
  </div>
</div>

<div className="project-card">
  <div className='absolute bg-[#5023bd] h-[200px] w-1 mt-5 custom-glow'></div>
 <img src="/public/akapic.webp" alt="" />
 <div className="project-card-info-container">
  <div className="project-card-info">
    <p className='inter-bold text-white'>PC HAVEN</p>
    <p className='inter-reg'>A showcase website featuring the latest and high-performance PC parts for gamers and tech enthusiasts.</p>
    <div className="project-pill"> 
      <div>HTML</div>
      <div>CSS</div>
      <div>JavaScript</div>
    </div>

    <div className="project-bottom">
      <div className="project-status">
      <div className="green-dot1 w-[10px] h-[10px] bg-red-500 inline-block rounded-full mb-2 mr-5"></div>
      <p className='inline-block'>Video Walktrough</p>
      </div>
      <a className="project-btn bg-[#6900ff]">View Site</a>
    </div>
  </div>
  </div>
</div>

<div className="project-card">
  <div className='absolute bg-[#5023bd] h-[200px] w-1 mt-5 custom-glow'></div>
 <img src="/public/campic.webp" alt="" />
 <div className="project-card-info-container">
  <div className="project-card-info">
    <p className='inter-bold text-white'>CAMHIGH</p>
    <p className='inter-reg'>Created a full landing page and engaging website design in just 2 hours for a competition (DigiSkills), representing our school, and clinched <span className='text-amber-400'>1st place</span> amongst 10 teams.</p>
    <div className="project-pill"> 
      <div>Figma</div>
      <div>Canva</div>
    </div>

     <div className="project-bottom">
      <div className="project-status">
      <div className="green-dot w-[10px] h-[10px] bg-green-500 inline-block rounded-full mb-2 mr-5"></div>
      <p className='inline-block'>Live Website</p>
      </div>
      
    
      <a className="project-btn bg-[#6900ff]">View Site</a>
    </div>
  </div>
  </div>
</div>

</div>


</div>
</section>);
}


export default Projects