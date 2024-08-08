import React,{useNavigate, useState} from 'react'
import "./Header.scss"
// import { AppWrap } from '../../wrapper/Appwrap';
import {motion} from 'framer-motion'
import {images} from "../../Constants"
import { useEffect } from 'react';
// import {urlFor,client} from '../../client'
import Images from '../../Constants/Images';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
function Header() {
  const [proimg,setProimg]=useState([])
 
  // useEffect(()=>{
  //   const query='*[_type == "header"]'

  //   client.fetch(query)
  //   .then((data)=>setProimg(data))
  // })

  console.log(proimg.img)
  return (
    <div id='Home' className='app__header ' >
        
        <motion.div
         whileInView={{y:[0,60],opacity:[0,1]}}
         transition={{duration:2}}
         className="app__header-info"
      >
        {/* <div className='app__header-badge'>
          <div className="badge-cmp ">
             
             <div style={{marginLeft:20}}>
                 <span className='p-text'>Wellcome</span>
                 <p className="p_text">Hello,I am</p>
                <h1 className="headtext">Fraol Dabi</h1>
             </div>     
          </div>
          <div className='tag-camp'>
               <h2 className="head-text1">React-js Front<span>End Web Developer</span></h2>
               <h2 className="head-text1">UX/UI <span>Designer</span></h2>
               <h2 className="head-text1">FREE<span>Ler</span></h2>
               
          </div>
        </div> */}
        <div className="textpart">
          <h1>Hi, am Fraol <span>Dabi</span></h1>
          <p>Official portfolio website <br/>showcase skills and exprience <br/> </p>
          <h2 className="head-text1">Java-script Front<span>End Web Developer</span></h2>
          <h2 className="head-text1">Python <span>Developer</span></h2>
          <h2 className="head-text1">UX/UI <span>Designer</span></h2>
          <a href='#Contact me'>Contact Me</a>
        </div>
      </motion.div>

      <motion.div
         whileInView={{x:[80,0],opacity:[0,1]}}
         transition={{duration:2,delayChildren:0.5}}
         className="app__header-image"
      > 
      
           
             <>
              <img src={images.shape} alt="shape" className='shape'/>
              <img src={images.bgpro} alt="nothing" className='profile' />
              {/* <img src={urlFor(image.img)} alt="profile" className='profile'/>   */}
             </>
     

      </motion.div>        
    </div>
  )
}

export default Header