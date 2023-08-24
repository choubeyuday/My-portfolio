import React, { useState } from 'react'
import '../App.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from 'react-router-dom';



const Side = () => {

  const [isToggle, setIsToggle] = useState(false)
  const clicked = () => setIsToggle(prev => !prev)
  console.log("isToggle " + isToggle)

  const [isclose , setIsClose] = useState(false)
  const tog = ()=>setIsClose( !isclose)  

  return (
    <>
     <div className="containerSide">
     <i >{!isToggle ? <MenuIcon className="menu-1" onClick={clicked} /> : <CloseIcon className='menu-1' style={{position:"absolute"}} onClick={clicked} />}
     </i>
        <div className="S-bar">
             <div className={`top-section   ${isToggle ? 'display ' :"none  "} `} >
                <h2 className="logo"><img src="./src/assets/udayremove2.png" alt="udaypic" />Uday Choubey</h2>
                <div className="bars">
                    <ul>
                        {/* <li><NavLink to=""><CloseIcon onClick={tog} className='clear' /></NavLink></li> */}
                        <li><NavLink to="/" ><DashboardIcon />Home</NavLink></li>
                        <li><NavLink to="/Contact" ><ConnectWithoutContactIcon />Contact</NavLink></li>
                        <li><NavLink to="/Skill" ><AddTaskIcon />Skills</NavLink></li>
                        <li><NavLink to="/Projects" ><BusinessCenterIcon />Projects</NavLink></li>
                        <li><NavLink to="/about" ><PersonIcon />About</NavLink></li>
                    </ul> 
                </div>
             </div>
        </div>
     </div>
    </>
  )
}

export default Side
