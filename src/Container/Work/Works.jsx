import { MotionConfig } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import "./Works.scss"
import { images } from '../../Constants'
// import {urlFor , client} from '../../client';
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
function Works() {
   const [activefilter,setActivefilter] = useState('ALL')
   const [animateCard,setAnimateCard]=useState({y:0,opacity:1})
   const [works,setWorks]=useState([
    {
      projectLink:"https://www.my-headhunter.com/",
      name:"my-Headhunter",
      description:"I contributed to front-end development using React for Headhunter Law Consultancies Company.",
      img:images.head,
      catagorie:"WEBSITES"
    },
    {
      projectLink:"https://mashroom.com/",
      name:"Mashroom",
      description:"As a front-end developer using React, I played a key role in developing Mashroom, a website dedicated to helping landlords navigate legal terms.",
      img:images.mashroom,
      catagorie:"WEBSITES"
    },
    {
      projectLink:"https://choicie.com/",
      name:"Choice",
      description:"Utilizing my front-end development skills with React, I contributed to creating Choice Collection, a website that maps and showcases a diverse selection of restaurants.",
      img:images.choice,
      catagorie:"WEBSITES"
    },

    {
      projectLink:"https://quwi.com/",
      name:"Quwi",
      description:"Quwi is a simple robust platform that makes it easy to work remotely with your team. We built Quwi to create a quick and easy to use platform.",
      img:images.qiwi,
      catagorie:"WEBSITES"
    },
        {
      projectLink:"https://planteats.co/",
      name:"Planteats",
      description:"In my role as a back-end developer using Node-js, I helped build Planteats, a website that personalizes meal programs by offering customized plant-based options. ",
      img:images.meal,
      catagorie:"WEBSITES"
    },
    {
      
      name:"Figma UI desing for onlinelearning",
      description:"I designed a user-friendly UI for an online learning site using Figma. The interface offers a seamless and intuitive experience, making it easy for users to navigate and access educational resources.",
      img:images.figma1,
      catagorie:"UX/UI"
    },
    {
      
      name:"Figma UI desing for travel app",
      description:"Using Figma, I crafted a visually stunning UI design for a travel website.",
      img:images.figma2,
      catagorie:"UX/UI"
    },
    {
      
      name:"Figma UI desing for apartment sell office",
      description:"I created a sleek and professional UI design for an apartment sales office using Figma. ",
      img:images.figma3,
      catagorie:"UX/UI"
    },

   ])
   const [filterWork,setFilterWork]=useState([

    {
      projectLink:"https://www.my-headhunter.com/",
      name:"my-Headhunter",
      description:"I contributed to front-end development using React for Headhunter Law Consultancies Company.",
      img:images.head,
      catagorie:"WEBSITES"
    },
    {
      projectLink:"https://mashroom.com/",
      name:"Mashroom",
      description:"As a front-end developer using React, I played a key role in developing Mashroom, a website dedicated to helping landlords navigate legal terms, providing them with a user-friendly platform to access valuable information and resources.",
      img:images.mashroom,
      catagorie:"WEBSITES"
    },
    {
      projectLink:"https://choicie.com/",
      name:"Choice",
      description:"Utilizing my front-end development skills with React, I contributed to creating Choice Collection, a website that maps and showcases a diverse selection of restaurants from around the world, offering users an immersive experience to explore and discover new culinary delights.",
      img:images.choice,
      catagorie:"WEBSITES"
    },
    {
      projectLink:"https://quwi.com/",
      name:"Quwi",
      description:"Quwi is a simple robust platform that makes it easy to work remotely with your team. We built Quwi to create a quick and easy to use platform, but powerful enough to manage a big team and large projects.",
      img:images.qiwi,
      catagorie:"WEBSITES"
    },
    {
      projectLink:"https://planteats.co/",
      name:"Planteats",
      description:"In my role as a back-end developer using Node-js, I helped build Planteats, a website that personalizes meal programs by offering customized plant-based options. Users can easily create and enjoy delicious, healthy meals tailored to their dietary preferences and needs",
      img:images.meal,
      catagorie:"WEBSITES"
    },
    {
      
      name:"Figma UI desing for onlinelearning",
      description:"In my role as a back-end developer using Node-js, I helped build Planteats, a website that personalizes meal programs by offering customized plant-based options. Users can easily create and enjoy delicious, healthy meals tailored to their dietary preferences and needs",
      img:images.figma1,
      catagorie:"UX/UI"
    },
    {
      
      name:"Figma UI desing for travel app",
      description:"In my role as a back-end developer using Node-js, I helped build Planteats, a website that personalizes meal programs by offering customized plant-based options. Users can easily create and enjoy delicious, healthy meals tailored to their dietary preferences and needs",
      img:images.figma2,
      catagorie:"UX/UI"
    },
    {
      
      name:"Figma UI desing for apartment sell office",
      description:"I created a sleek and professional UI design for an apartment sales office using Figma. The design showcases property listings, floor plans, and features an intuitive interface for potential buyers to easily explore and find their perfect new home.",
      img:images.figma3,
      catagorie:"UX/UI"
    },
   ])

  
  // useEffect(()=>{
  //     const query = '*[_type == "works"]';

  //     client.fetch(query)
  //       .then((data)=>{
  //         setWorks(data);
  //         setFilterWork(data);
  //       })
  // },[])




  const handleWorkFilter = (item) => {
    setActivefilter(item);
    setAnimateCard([{ y: 30, opacity:0 }]);

    setTimeout(() => {
      setAnimateCard([{ y:0, opacity: 1 }]);

      if (item === 'ALL') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.catagorie.includes(item)));
      }
    }, 600);
  };
  return (
    <div className='aaa'> 
        <h2 className="head-text">Previous  <span>Project's</span></h2>
          <div  id='Project' className='app__work-filter app__flex'>
                {['WEBSITES','UX/UI','ALL'].map((type,index)=>(
                      
                      <div key={index} 
                          onClick={()=>handleWorkFilter(type)}
                          className={`app__work-filter-each app__flex p-text ${activefilter === type ? 'item-active' : '' }`}
                      >
                        {type}                       
                      </div>
                ))}
          </div>
          <motion.div
                   animate={animateCard}
                   whileInView={{x:[70,0],opacity:[0,1]}}
                   transition={{ duration: 0.7, delayChildren: 0.1 }}
                   className="app__work-portfolio"
              >
              {
              filterWork.map((work,index)=>(
                <div className="app__work-item app__flex" key={index}>
                  <div className="app__work-img app__flex"> 
                     <img src={work.img} alt={work.name}/> 
                        <motion.div
                           whileHover={{ opacity: [1, 1] }}
                           transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                           className="app__work-hover app__flex"
                        >
                        { work.projectLink &&    
                        <a href={work.projectLink} >
                           <motion.div
                             whileInView={{ scale: [0.7, 1] }}
                             whileHover={{ scale: [1, 0.90] }}
                             transition={{ duration: 0.25 }}
                             className="app__flex"
                             >
                              <AiFillEye/>
                            </motion.div>
                          </a>
                         }
                         { work.codeLink &&
                         
                          <a href={work.codeLink} >
                           <motion.div
                             whileInView={{ scale: [0.5, 1] }}
                             whileHover={{ scale: [1, 0.90] }}
                             transition={{ duration: 0.25 }}
                             className="app__flex"
                             >
                              <AiFillGithub/>
                            </motion.div>
                          </a>
                           }
                  </motion.div>
                  </div>

                  <div className="app__work-content app__flex">
                        <h3 className="bold-text">{work.name}</h3>
                        {/* <p className="p-text" style={{marginTop:10}}>{work.description}</p> */}
                  </div>

                </div>
              ))}
              

          </motion.div>
    </div>
  )
}

export default Works