import React,{useEffect, useState} from 'react'
import "./Skilss.scss"
// import {urlFor,client} from '../../client'
import {motion} from 'framer-motion'
import {images} from '../../Constants'
function Skills() {
  const [skills,setSkills]=useState([
    {
      img:images.figma,
      name:"Figma"
    },
    {
      img:images.html,
      name:"HTML"
    },
    {
      img:images.css,
      name:"CSS"
    },
    {
      img:images.javascript,
      name:"Javascript"
    },
    {
      img:images.react,
      name:"React"
    },
    {
      img:images.node,
      name:"node-js"
    },
    {
      img:images.sass,
      name:"sass(scss)"
    },
    {
      img:images.redux,
      name:"Redux"
    },
  ])

  const [exprience,setExprience]=useState([])
  const [certificates,setCertificates]=useState([

  ])

  // useEffect(() => {
  //   const query = '*[_type == "skills"]'
  
  //   client.fetch(query)
  //   .then((data)=>setSkills(data))
  // }, [])

  // useEffect(() => {
  //   const query = '*[_type == "exprience"]'
  
  //   client.fetch(query)
  //   .then((data)=>setExprience(data))
  // }, [])

  // useEffect(() => {
  //   const query = '*[_type == "certificates"]'
  
  //   client.fetch(query)
  //   .then((data)=>setCertificates(data))
  // }, [])
  
  return (
    <>
      <div id='Skills' className='SEC__container'>
        <div className='part1'>
         <motion.div
            whileInView={{x:[0,30],opacity:[0,1]}}
            className="app__skills"
        >
               <h2 className="head-text">Skill <span>Set's</span></h2>

              <div className="app__skill-list">
               {skills.map((skill) => (
                  <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-item app__flex"
                  key={skill.name}
                     >
                      
                   <div className="skill-img app__flex">
                      {/* <img src={urlFor(skill.icon)} alt={skill.name} /> */}
                      <img src={skill.img} />
                   </div>
                   <p className="p-text">{skill.name}</p>
                 </motion.div>
                 ))}
                </div>

        
        </motion.div>
        </div>

        <div className='part2'>
          
        {(exprience.length === 0 ) ? <motion.div
                                    whileInView={{z:[100,0],opacity:[0,1]}}
                                  >
                                  <img className='temp' src={images.fl1} alt="fl1"/>
                                 </motion.div> :
         <motion.div
           whileInView={{z:[50,0],opacity:[0,1]}}
           className="app__exprience"
           >
         
           
          <h2 className="head-text">Work <span>Exprience</span></h2>
          {exprience.map((experience) => (
              <motion.div className="app__skills-exp">
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"

                    >
                      <h4 className=" p-text">company:   {experience.company}</h4>
                      <h3 className=" p-text">position:   {experience.position}</h3>
                      <p className="p-text">{experience.startyear} -- {experience.endyear}</p>
                    </motion.div>

                 </motion.div> 
                ))}        

         </motion.div>  }
        </div> 

        <div className="part3">
        { (certificates.length === 0 ) ? <motion.div
                                    whileInView={{y:[100,0],opacity:[0,1]}}
                                  >

                                     
                                 </motion.div> :
         <motion.div
           whileInView={{x:[10,0],opacity:[0,1]}}
           className="app__certificate">
         
           
          <h2 className="head-text"><span>Certificates</span></h2>
          {certificates.map((certificate) => (
              <motion.div className="app__skills-cert-works">
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-cert-work"

                    >
                      <h4 className="bold-text">{certificate.name}</h4>
                      <br/>
                      {/* <img src={urlFor(certificate.img)} alt={certificate.name}/> */}
                      <img src={certificate.img} alt='' />
                     
                    </motion.div>

                 </motion.div>
                ))}        

         </motion.div> }
         </div>
      </div>
    </>
  )
}

export default Skills