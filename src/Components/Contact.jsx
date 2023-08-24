import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import DraftsIcon from '@mui/icons-material/Drafts';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Side from './Side';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';

const Contact = () => {


  const [isToggle, setIsToggle] = useState(false)
  const clicked = () => setIsToggle(prev => !prev)
  // console.log("isToggle " + isToggle)

  const [loadmap , setLoadMap] = useState(false)

  useEffect(() => {
  const loadMaping =() => {
    setLoadMap(prev => !prev)
  }  
  const timer = setTimeout(loadMaping,1000)
  return ()=> {clearTimeout(timer)
  }
 },[])

 const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  return (
    <>
      <div className="Container_contact">
        <div className='svgcont'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff"
            fill-opacity="1" d="M0,96L48,122.7C96,149,192,203,288,208C384,213,480,171,576,149.3C672,128,768,128,864,144C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </div>
      <Side isToggle={isToggle} />
      
        <h1>Get in Touch! </h1>
        <h5>Connect me with you</h5>
        <div className="alert" id='cont-alrt' >
                  <p  ><strong>Make Sure!</strong>Hover on the small color box.</p>
                  <CloseIcon id="cross" onClick={()=>document.body.classList.add('al')} />    
            </div>
        <div className="contact_detl">
          <div className="logo-detl">
            <ul>
              <li><a className='call' href="Tel: 9343023981 " target='_blank'><span><CallIcon id="phone" /></span>9343023981</a></li>
              <li><a className='whats' href="https://wa.me/9343023981" target='_blank'><span><WhatsAppIcon id="whats" /></span>9343023981</a></li>
              <li><a className='email' href="https://mail.google.com/mail/u/0/#search/choubeyuday8%40gmail.com?compose=DmwnWrRsqXrCcqJRsXRqQWXhSwcsTJwCrKtVhfvtCMdVNvvJpthsVStBWvHcNBXdjGSJZlvCgQPL" target='_blank'><span><DraftsIcon id="email" /></span>choubeyuday8@gmail.com</a></li>
              <li><a className='linkedin' href="https://linkedin.com/in/uday-choubey10" target='_blank' ><span><LinkedInIcon id="linkedin" /></span>Linkedin</a></li>
              <li><a className='github' href="https://github.com/choubeyuday" target='_balnk'><span><GitHubIcon id="github" /></span>Github</a></li>
              <li><a className='location' href="https://www.google.com/maps/place/22%C2%B045'46.3%22N+75%C2%B053'30.0%22E/@22.7628569,75.8890911,17z/data=!3m1!4b1!4m12!1m7!3m6!1s0x396303472560387d:0xbf21c68aa3e2e011!2s78!8m2!3d22.7623375!4d75.8936718!16s%2Fg%2F11q839w1vf!3m3!8m2!3d22.762852!4d75.891666?entry=ttu" target='_blank' ><span><LocationOnIcon id="location" /></span>Indore</a></li>
            </ul>
          </div>

           {
            loadmap?
            <>
            <div id='set_map'  className={loadmap ? 'visible': 'invisible' }
            >
            <div style={{
              overflow: "hidden",
              background: "none!important",
              width: "100%",
              height: "400px"
            }}>
              <iframe style={{ height: "400px!important" }} width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                src="https://maps.google.com/maps?width=753&amp;height=400&amp;hl=en&amp;q=Indore , 78,sector 4,Slice 4 , near Jain Mandir , atal khel parishar&amp;t=&amp;
            z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              </iframe>

            </div>
          </div>
            </>
            :
            <>
             <div id='blank_div'><h1>Map loading....</h1></div>
            </>
           }

          
        </div>
      </div>
    </>
  )
}

export default Contact


    // <div className="contact_Container">
    //   <div className="detl-contact">
    //     <h1>Contact Me </h1>

    //     <div className="choice-contact">

    //       <form action="contact-form">
    //         <label htmlFor="Email">Email</label>
    //         <div className="input-email">
    //           <input type="email" name="Email" id="" placeholder='choubeyudayxy@gmail.com' />
    //         </div>

    //         <div className="input-contact">
    //           <label htmlFor="number">Phone</label>
    //           <div className="myNum">
    //             <input type="number" name="mobile_number" id="" />
    //           </div>
    //         </div>

    //         <div className="msg">
    //           <label htmlFor="message">Your Message</label>
    //           <div className="input-msg">
    //             <textarea name="Message" id="" cols="30" rows="10"></textarea>
    //           </div>
    //         </div>

    //       </form>

    //     </div>
    //   </div>
    // </div>

// let url = "https://jsonplaceholder.typicode.com/posts";
// console.log(url)
// fetch(url ,{
  //   method : "POST",
  //   body : JSON.stringify({
  //     id:11,
  //     username :" uday",
  //     email : "123@.com"
  //   }),
  //   header : {
  //     'Content-type ' : 'application/json'
  //   },
  // })
  // .then((response) => response.json())
  // .then((json) => console.log(json))