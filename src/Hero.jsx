
import './css/Hero.css'
import './css/gradients.css'
function Hero(props) {
 

    const Hero = 
        <section className='Hero-Section'>
             <div className="col-span-1  lg:hidden flex justify-center ">
        <img src="./public/profile-picture.PNG" alt="Profile Picture" className="w-3/4"/>
       </div>
        <div className="hero-info">
            
        <p className='inter-bold'>Hello, i’m</p>
        <p className='montserrat-bold text-gradient'>Nicko Reorizo</p>
        <p className='montserrat-thin '>FRONT-END WEBSITE DEVELOPER</p>
        <p></p>
        <button className="cv-button background-color">DOWNLOAD CV</button>
        <p></p>

        <div className='social-links mt-5'>
        <a href="" className="fa-brands fa-facebook fa-2x"></a>
        <a href="" className="fa-brands fa-instagram fa-2x"></a>
        <a href="" className="fa-brands fa-linkedin-in fa-2x"></a>
        </div>
       </div>

       <div className="col-span-1 lg:mr-20 hidden lg:block">
        <img id='profile-picture' src="./public/profile-picture.PNG" alt="Profile Picture" className="w-150 h-[auto] ml-20"/>
       </div>

       <div className=" top-0 w-50 hidden lg:fixed h-100 blur-3xl -z-0 opacity-30 rounded-full  bg-purple-700"></div>
        <div className="top-50 right-0 w-50  hidden lg:fixed h-100 blur-3xl -z-0 opacity-30 rounded-full  bg-purple-700"></div>
        <div className="bottom-50 left-[50vw]  hidden lg:fixed w-50 h-100 blur-3xl -z-0 opacity-30 rounded-full  bg-purple-700"></div>
       </section>
        
        
       return(Hero);
}


export default Hero