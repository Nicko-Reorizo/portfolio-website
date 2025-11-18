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
 <img src="/public/voltpic.webp" alt="" />
 <div className="project-card-info">
    <p className='inter-bold text-white'>VOLTINCONS</p>
    <p className='inter-reg'>A clothing brand built on energy, passion, and consistency. Designed for creators, athletes, and dreamers who stay powered through every challenge.</p>
    <div className="project-pill"> 
      <div></div>
      <div></div>
    </div>
 </div>
</div>

<div className="project-card">
 <img src="/public/wompic.webp" alt="" />
  <div className="project-card-info">
    <p className='inter-bold text-white'>WOMBAGS</p>
    <p className='inter-reg'></p>
    <div className="project-pill"> 
      <div></div>
      <div></div>
    </div>
  </div>
</div>

<div className="project-card">
 <img src="/public/akapic.webp" alt="" />
  <div className="project-card-info">
    <p className='inter-bold text-white'>PC HAVEN</p>
    <p className='inter-reg'>A showcase website featuring the latest and high-performance PC parts for gamers and tech enthusiasts.</p>
    <div className="project-pill"> 
      <div></div>
      <div></div>
    </div>
  </div>
</div>

<div className="project-card">
 <img src="/public/campic.webp" alt="" />
  <div className="project-card-info">
    <p className='inter-bold text-white'>CAMHIGH</p>
    <p className='inter-reg'>Created a full landing page and engaging website design for a competition (DigiSkills), representing our school, and clinched 1st place amongst 10 teams.</p>
    <div className="project-pill"> 
      <div>Figma</div>
      <div>Canva</div>
    </div>
  </div>
</div>

</div>


</div>
</section>);
}


export default Projects