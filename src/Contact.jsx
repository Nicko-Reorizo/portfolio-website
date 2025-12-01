import './css/Contact.css'
function Contact(){

return(
    <>
    
    <div className="Contact-section">
        <div className="contact-card">
            <div className="contact-info-container">
                <div className="contact-info">
                
                 <p className='contact-header'>Contact Us</p>
                 <p className='contact-subheader'>You have a project in mind? Reach out and let’s talk about it. I’m here to listen, collaborate, and turn your ideas into something real and meaningful.</p>
                 
                
                
                  
                 
                 <p className='pt-10'>Social Links:</p>
                 <div className="contact-socials">
                    
                 <i class="fa-brands fa-github text-white text-5xl"></i>
                 <i class="fa-brands fa-linkedin text-white text-5xl"></i>
                 <i class="fa-brands fa-facebook text-white text-5xl"></i>
                 </div>
                 
            </div>
            </div>
            
            <div className="contact-form">
               <form action="POST">
                <div className='col-span-2 lg:col-span-1'>
                <label htmlFor="" className='block '>Full Name <span className='text-[red]'>*</span></label>
                <input className='input-text' type="text" placeholder='ex: John Doe' required/>
                </div>
                <div className='col-span-2 lg:col-span-1'>
                <label htmlFor="" className='block'>Email <span className='text-[red]'>*</span></label>
                <input type="email" className='input-text' placeholder='ex: Johndoe123@gmail.com' required/>
                </div>

                <div className='col-span-2'>
                <label htmlFor="" className='block'>Message <span className='text-[red]'>*</span></label>
                <textarea name="" id="" className='resize-none' placeholder='ex: I want a website for my business' required></textarea>
                </div>
                <div className='col-span-2'>
                    <input className='submit-btn' type="submit" value="SUBMIT" />
                </div>
                
               </form>

            </div>
        </div>
    </div>
    
    
    
    
    
    
    
    </>
);



}


export default Contact;