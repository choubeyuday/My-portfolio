import { useState } from 'react';
import React  from 'react'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Side from '../Components/Side';

const Projects = () => {

  const [isview, setIsView] = useState(true)
  const onView = () => setIsView(prev => !prev)
  // console.log("isToggle " + isview)

  const [isToggle, setIsToggle] = useState(false)
  const clicked = () => setIsToggle(prev => !prev)
  // console.log("isToggle " + isToggle)

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  return (
 <>

<Side isToggle={isToggle} />
 <h3 style={{padding:"10px",fontFamily:"fantasy",fontSize:"40px",color:'white',letterSpacing:"5px"}}>Projects</h3>
  <div className="heading-line">
          {/* <div className="line"> */}
            <button className='detail-btn'>Details</button>
            <p className='detl-line' >* Click the Click Me button for more details</p>
          {/* </div> */}
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
                <button className="edu-btn" ><a href="https://choubeyuday.github.io/WeatherLocation.githup.io/" target='_blank' >View</a></button>
              </div>

              <div className="detail-pro">
                <div className="pro-pic">
                  <img src="./src/assets/top-page.JPEG" alt="" />
                </div>
                <button className="edu-btn" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="not available" ><a href="#" target='_blank'>View</a></button>
              </div>

              <div className="detail-pro">
                <div className="pro-pic">
                  <img src="./src/assets/portfolio-img.jpeg" alt="" />
                </div>
                <button className="edu-btn" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="not available" ><a href="#" target='_blank'>View</a></button>
              </div>
            </div>
          </div>
         
 </>
  )
}

export default Projects
