import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import Side from '../Components/Side';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import WorkIcon from '@mui/icons-material/Work';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const About = () => {
  const [isclose, setIsClose] = useState(false)
  const click = () => setIsClose(prev => !prev)
  // console.log(isclose)

  const [isToggle, setIsToggle] = useState(false)
  const clicked = () => setIsToggle(prev => !prev)
  // console.log("isToggle " + isToggle)

  const [isview, setIsView] = useState(true)
  const onView = () => setIsView(prev => !prev)
  // console.log("isToggle " + isview)

  const [issports, setIsSports] = useState(false)
  const onsport = () => setIsSports(prev => !prev)
  // console.log("isToggle " + onsport)

  // const [btnchange , setBtnChange] = useState(false)
  // const clickClose = () => setBtnChange(prev => !prev)
  // console.log(btnchange)

  const [isexpt, setIsExpt] = useState(false)
  const onVisible = () => setIsExpt(prev => !prev)

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  return (
    <>
      <Side isToggle={isToggle} />

      <div className="main-cont">

        

        <div className="intro">
          <div className="para">
            <h3>About me</h3>
            <p>I'm Uday Choubey, a full-stack developer from Harda District, Madhya Pradesh. I really enjoy working with all parts of
              websites and apps, from how they look to how they work behind the scenes. Even though I know a lot about technology, I
              always stay humble and ready to learn from others. Hard work and determination guide me, and I'm proud of where I come from.
              Being from a small town like Harda reminds me to be down-to-earth and kind. I believe that being friendly and open helps me
              connect with others and keep growing in the exciting world of tech.</p>
          </div>
        </div>

        <div className="heading-line">
          {/* <div className="line"> */}
            <button className='detail-btn'>Details</button>
            <p className='detl-line' >* Click the Click Me button for more details</p>
          {/* </div> */}
        </div>

        <div className="containerBox">
          <div className="Education">
            <div className="topInfo">
              <SchoolIcon id="sclicon" />
              <h4 className='edu-head'>Education</h4>
             { !isclose? <button className="edu-btn" onClick={click} >Click Me</button> :<button className="edu-open " onClick={click} >Close Me</button>  } 
            </div>
            <div className={`More-Info ${isclose ? "notInfo  " : "More-Info  "}`}>
              <h4>College</h4>
              <h5>Prestige Institute Of Engineering Management & Research Indore (M.P)</h5>
              <h4>School</h4>
              <h5>Shree Sai Niketan Vidhya Mandir Sirali,Harda (M.P)</h5>
            </div>
          </div>

          <div className="Education">
            <div className="topInfo">
              <BusinessCenterIcon id="sclicon" />
              <h4 className='edu-head'>Projects</h4>
            { isview ?  <button className="edu-btn" onClick={onView} >Click Me</button> : <button className="edu-open " onClick={onView} >Close Me</button> }
            </div>
            <div className={` ${isview ? 'projt' : 'projt_view'}`}>
              <div className="detail-pro">
                <div className="pro-pic">
                  <img src="./src/assets/cloud.png" alt="weather" />
                </div>
                <button className="edu-btn" ><a href="https://choubeyuday.github.io/WeatherLocation.githup.io/" target='_blank' >View</a></button>
              </div>

              <div className="detail-pro">
                <div className="pro-pic">
                  <img src="./src/assets/clock-img-1.jpg" alt="" />
                </div>
                <button className="edu-btn" ><a href="#" target='_blank' >View</a></button>
              </div>

              <div className="detail-pro">
                <div className="pro-pic">
                  <img src="./src/assets/top-page.JPEG" alt="" />
                </div>
                <button type='text' className="edu-btn" data-bs-toggle="tooltip" title='not available' ><a href="#" target='_blank' >View</a></button>
              </div>

              <div className="detail-pro">
                <div className="pro-pic">
                  <img src="./src/assets/portfolio-img.jpeg" alt="portfolio" />
                </div>
                <button className="edu-btn" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="not available" ><a href="#" target='_blank'>View</a></button>
              </div>
            </div>
          </div>

          <div className="Education">
            <div className="topInfo">
              <SportsCricketIcon id="sclicon" />
              <h4 className='edu-head'>Sports</h4>
             {!issports ? <button className="edu-btn" onClick={onsport} >Click Me</button> : <button className="edu-open" onClick={onsport} >Close Me</button> }
            </div>
            <div className={` ${issports ? "issport" : "fav_sport"}`}>
              <div className="cricket">
                <h2>Cricket</h2>
                <img src="./src/assets/uday_pic.jpg" alt="cricket" />
                <p>I am a Sports Person , my favourite sport is Cricket , cricket is key for fitness .
                  I am very to be the part of ASCL(ALL Star Cricket League) which is played in Dehradhun(U.K).
                  I love to play Cricket any time any where.
                </p>
              </div>
              <div className="cricket">
                <h2>Badminton</h2>
                <img src="./src/assets/badminton_racket.jpg" className="badm_img" alt="badminton" />
                <p>After cricket , i love to play Badminton , this is always help me to be a fit person.
                  I was represented my School SSNVM at District level Badminton Competition.After play
                  Badminton i feel very strechable.</p>
              </div>
            </div>
          </div>

          <div className="Education">
            <div className="topInfo">
              <WorkIcon id="sclicon" />
              <h4 className='edu-head'>Experience</h4>
            { !isexpt ?  <button className="edu-btn" onClick={onVisible} >Click Me</button> : <button className="edu-open" onClick={onVisible} >Close Me</button> }
            </div>
            <div className={` ${isexpt ? "expbox" : "fav_sport"}`} >
              <div className="fit-box">
                <h2>Work Experience</h2>
                <img src="./src/assets/codemeg.jpeg" alt="codemeg" />
                <div className="exp-detail">
                  <h3>Codemeg Soft Solution - Internship</h3>
                  <h5>Indore, Madhya Pradesh, India · On-site</h5>
                  <h1>Full Stack Developer</h1>
                  <h6><a href="https://www.linkedin.com/company/codemeg-soft-solutions/" target='_blank'><LinkedInIcon />Linkedin</a></h6>
                  <p>I am thrilled to announce that I have been accepted for a full stack development internship at Codemeg Soft Solutions!
                    This incredible opportunity allows me to delve into various aspects of web development, including front-end and back-end
                    technologies. I'm eager to learn and contribute my skills to real-world projects under the mentorship of experienced professionals.
                    This internship promises to be a transformative experience, enabling me to gain practical expertise in designing
                    and building dynamic applications. I look forward to a fruitful and enriching journey with Codemeg Soft Solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}


export default About
