import React, { useEffect } from 'react'
import "./About.scss"
import {motion} from 'framer-motion'
import { useState } from 'react'
import {images} from '../../Constants'
// import { urlFor, client } from '../../client';


function About() {
  const [abouts, setAbouts] = useState([
    {
      img:images.uiux,
      title:"UX/UI desing",
      description:"User-centric UX/UI designs crafted with Figma for seamless collaboration and delightful digital experiences"
    },
    {
      img:images.uiux,
      title:"UX/UI desing",
      description:"User-centric UX/UI designs crafted with Figma for seamless collaboration and delightful digital experiences"
    },
    {
      img:images.web,
      title:"Full-stack webdevelopemt",
      description:"Expert full-stack web developer proficient in front-end and back-end technologies, delivering robust and scalable web solutions."
    },
    {
      img:images.figma,
      title:"UI desing into React",
      description:"Crafting stunning UI designs into React applications, combining aesthetics and functionality to deliver immersive user experiences"
    },
  ]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query)
  //   .then((data) => setAbouts(data));
  // }, []);
 
  return (
    <div className='aa'>
      <h2 className="head-text"> Coding <span>And Design</span></h2>
      <div id='About' className="app__profiles">
        {abouts.map((about,index)=>(
          <motion.div
          whileInView={{ opacity: 1,y:[80,0]}}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, type: 'tween' }}
          className="app__profile-item"
          key={about.title + index}
          >
              {/* <img src={urlFor(about.img)} alt={about.title}/> */}
              <img src={about.img} alt="no imageurl" />
              <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
              <h3 className='p-text' style={{marginTop:20}}>{about.description}</h3>
          </motion.div>
        ))}
         
      </div>   
    </div>
  )
}
export default About