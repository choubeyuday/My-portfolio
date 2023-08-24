import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
  const [isMobile , setIsMobile] = useState(false)
 const Clicked = () => {
  setIsMobile(p=>!p)
 }
  
  
  return (
    <>
      <header className='containerHeader'>
      <li className='menu' onClick={Clicked}>  <NavLink to="" ><MenuIcon id="menu" /></NavLink></li>
        <nav className='Nav'>
          <ul id='navBar' className={`${isMobile ? 'display' : 'nonedis'} `} >
            <div className="right">
              <span className='logo-img'><img src="./src/assets/istockphoto.png" alt="logoU" /></span>
               <div className="text-name">
                <h1>Full Stack</h1>
                <h2>Developer</h2>
               </div>
            </div>
            <div className="left">
              <li><NavLink to="/"><DashboardIcon />Home</NavLink></li>
              <li><NavLink to="/About"><PersonIcon/>About</NavLink></li>
              <li><NavLink to="/Skill"><AddTaskIcon/>Skills</NavLink></li>
              <li><NavLink to="/Projects"><BusinessCenterIcon/>Projects</NavLink></li>
              <li><NavLink to="/Contact"><ConnectWithoutContactIcon/>Contact</NavLink></li>
              
            </div>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar
