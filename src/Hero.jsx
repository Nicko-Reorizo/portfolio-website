import './index.css'

function Hero(props) {
 
    const LoggedIn = 
        <section>
             <div className="col-span-1  lg:hidden flex justify-center ">
        <img src="./public/testing%20picture.PNG" alt="Profile Picture" className="w-3/4"/>
       </div>
        <div className="hero-info">
            
        <p>Hello, i’m</p>
        <p>Nicko Reorizo</p>
        <p>FRONT-END WEBSITE DEVELOPER</p>
        <p></p>
        <button className="cv-button">DOWNLOAD CV</button>
        <p></p>

        <div className='social-links mt-5'>
        <a href="" className="fa-brands fa-facebook fa-2x"></a>
        <a href="" className="fa-brands fa-instagram fa-2x"></a>
        <a href="" className="fa-brands fa-linkedin-in fa-2x"></a>
        </div>
       </div>

       <div className="col-span-1  lg:mr-20 hidden lg:block">
        <img src="./public/testing%20picture.PNG" alt="Profile Picture" className="w-150 h-auto ml-20"/>
       </div>

       <div className=" top-0 w-50 hidden lg:fixed h-100 blur-3xl -z-0 opacity-30 rounded-full  bg-purple-700"></div>
        <div className="top-50 right-0 w-50  hidden lg:fixed h-100 blur-3xl -z-0 opacity-30 rounded-full  bg-purple-700"></div>
        <div className="bottom-50 left-[50vw]  hidden lg:fixed w-50 h-100 blur-3xl -z-0 opacity-30 rounded-full  bg-purple-700"></div>
       </section>
        
    const LoggedOut = <h1>Please Log In First</h1>
        
       return(props.Logged ? LoggedIn : LoggedOut);
}


export default Hero