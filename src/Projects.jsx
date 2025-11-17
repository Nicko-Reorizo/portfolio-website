import './css/Projects.css'
import './css/gradients.css'
import './css/fonts.css'
function  Projects(){
return(<section>

<div className="project-section">
<p className='inter-bold ts-header text-center mb-5'>Web <span className="text-[#6900ff]">Projects</span></p>
<p className='inter-bold text-center ts-subheader'>These are the Websites that I've created by applying the skills that I've learned.</p>

<div className="project-card-section">
<div className="project-card">
 <img src="/public/voltpic.webp" alt="" />
 <div className="project-card-info">
    <p className='inter-bold text-white'>VOLTINCONS</p>
    <p></p>
 </div>
</div>

<div className="project-card">
 <img src="/public/wompic.webp" alt="" />
  <div className="project-card-info">
    <p className='inter-bold text-white'>WOMBAGS</p>
    <p></p>
  </div>
</div>

<div className="project-card">
 <img src="/public/akapic.webp" alt="" />
  <div className="project-card-info">
    <p className='inter-bold text-white'>PC HAVEN</p>
    <p></p>
  </div>
</div>

<div className="project-card">
 <img src="/public/campic.webp" alt="" />
  <div className="project-card-info">
    <p className='inter-bold text-white'>CAMHIGH</p>
    <p></p>
  </div>
</div>

</div>


</div>
</section>);
}


export default Projects