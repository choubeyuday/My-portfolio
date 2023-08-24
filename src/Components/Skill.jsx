import { useState } from 'react'
import React from 'react'
import Side from './Side'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Navbar from './Navbar';
import { useEffect } from 'react';


const Skill = () => {

    
    const [isnavbar , setIsNavbar] = useState(false)
    const togg = () => setIsNavbar(prev => !prev)
    console.log(isnavbar)

    const [isToggle , setIsToggle] = useState(false)
    const clicked = () => setIsToggle(prev => !prev)
    console.log("isToggle " +isToggle)

    return (
        <>
            
            <div className="skillcontainer" >
         
           {
               isnavbar ? <Navbar onClick={togg} /> : <MenuIcon className='menu-1' onClick={togg} />
            }

            {/* Yha pr hmne css hiercy ka use kra hai jisse hm closeicon se ek class ad krva rhe hai bo class body mai add ho rhi hai or fir ye body 
            bali class jo yha pr al hai bo av kisi bhi dushri class ko target krke hm jo chaye no krva skte hai yha pr hmne alert class ko display none 
            kr vaya hai ye sb css mai hoga kuch is tarah se
            .al .alert{
            display: none;
            }*/}

            <div className="alert" >
                  <p  ><strong>Make Sure!</strong>Hover on the small color box.</p>
                  <CloseIcon id="cross" onClick={()=>document.body.classList.add('al')} />    
            </div>

                <div className="skills">
                <h4>Skills :</h4>
                    <div className="skillitem">HTML : <div className="skill-1"></div>
                    </div>
                    <div className="skillitem"> CSS : <div className="skill-2"></div>
                    </div>
                    <div className="skillitem">Java script : <div className="skill-3"></div>
                    </div>
                    <div className="skillitem"> Bootstrap : <div className="skill-4"></div>
                    </div>
                    <div className="skillitem">React-Js : <div className="skill-5"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill
