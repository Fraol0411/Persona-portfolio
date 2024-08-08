import React from 'react'
import { useState } from 'react'
import "./Testimony.scss"
import {motion} from 'framer-motion'
import {images} from '../../Constants'
function Testimony() {
  const [testimony,setTestimony]=useState([
    {id:1,name:"jim jack",image:images.proimg,testimony:'it wat great working with you.he delivered on time with more that he expected from him'},
    {id:2,name:"jim jack",image:images.proimg,testimony:'it wat great working with you.he delivered on time with more that he expected from him'},
    {id:3,name:"jim jack",image:images.proimg,testimony:'it wat great working with you.he delivered on time with more that he expected from him'},
    {id:4,name:"jim jack",image:images.proimg,testimony:'it wat great working with you.he delivered on time with more that he expected from him'},
  ])
  return (
    <motion.div
      whileInView={{y:[1,0],opacity:[0,1]}}
     className='testimony'>
       <h2 className="head-text">From People's  <span>I Worked With</span></h2>
       
      <motion.div className='inputtes'>
         <h3 className='p-text'>How do find working with me ?</h3>
         <input type='text' placeholder='Add your testimony'/>  
      </motion.div> 

      <motion.div className='testipart'>
         
          {testimony.map((says)=>(
            <>
              <motion 
              whileInView={{x:[100,0]}}
              className="div">
               <div className="eachcollege">
                   <img src={says.image} alt={says.name}/>
                   <h3 className="name bold-text">{says.name}</h3>
               </div>
               <div className="desc">
                  <h3 className='p-text'>{says.testimony}</h3>
               </div>
               </motion>
            </>   
          ))}  
          <img src={images.mu5} alt="next arrow"/>
      </motion.div> 
       
      
    </motion.div>
  )
}

export default Testimony