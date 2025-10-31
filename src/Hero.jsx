
import './css/Hero.css'
import './css/gradients.css'
function Hero(props) {
 
const cvlink = 'https://drive.usercontent.google.com/u/0/uc?id=1GUDvbXIonYQ1fJQKnNYWS1-GrztEBQRy&export=download';
    const Hero = 
    
        <section className='Hero-Section'>
            
            
             <div className="col-span-1  lg:hidden flex justify-center ">
       </div>
       <div className='absolute pill p1 flex items-center gap-2 slide-in-bottom'>
  <i class="fa-solid fa-code text-[#6900ff] text-sm lg:text-xl"></i>
  <p className='inter-bold '>Front-End Developer</p>
</div>

<div className='absolute pill p2 flex items-center gap-2 slide-in-bottom'>
  <i class="fa-solid fa-palette text-[#6900ff] text-sm lg:text-xl"></i>
  <p className='inter-bold'>UI/UX Web Designer</p>
</div>
        <div className="hero-info">

        <p className='inter-bold '>Hello, my name is <span className='text-[#6900ff] '><br />Nicko Reorizo.</span></p>
      
        <p className='inter-bold'>Building seamless digital experiences with purpose and detail, creating designs that inspire and engage.</p>
        
        
        <p></p>
 

       

        <button className="cv-button inter-bold text-white cursor-pointer mr-5 lg:mr-10" onClick={()=> window.location.href=cvlink}>Download CV
        
        </button>
         <button className="cv-button2  inter-bold text-white cursor-pointer">LEARN MORE
        
        </button>
        
        <p></p>

       
       </div>

      
       <div className=" top-0 w-50 hidden lg:fixed h-100 blur-3xl -z-0 opacity-30 rounded-full  bg-purple-700"></div>
        <div className="top-50 right-0 w-50  hidden lg:fixed h-100 blur-3xl -z-0 opacity-30 rounded-full  bg-purple-700"></div>
        <div className="bottom-50 left-[50vw]  hidden lg:fixed w-50 h-100 blur-3xl -z-0 opacity-30 rounded-full  bg-purple-700"></div>
       





       
       </section>
       
       return(Hero);
}


export default Hero