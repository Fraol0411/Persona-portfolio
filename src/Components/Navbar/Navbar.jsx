import React from 'react'
import './Navbar.scss'

import { useState } from 'react';


function Navbar() {
  
    const [state,setState]=useState(false);
    const show=()=>{
      setState(true)
    }
    const unshow=()=>{
      setState(false)
    }
  return (
    <nav className='app__navbar'>
        <div className='app__navlogo'>
            <h2>FRAOL</h2>
        </div>
             <ul className='app__navlist'>
                
                {['Home','About',,"Project",'Certificates','Skills','Contact me'].map((item)=>(
                    <li className='app__flex p-text' key={`link-${item}`}>
                         <div/>
                         
                         <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>  
            
            <a href='#Contact me'>
              <button className='hire-btn'>Hire Me</button>
            </a>
            

    </nav>
  )
}

export default Navbar
