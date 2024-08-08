import React, { useState } from 'react';
// import {urlFor,client} from '../../client'
import {motion} from 'framer-motion'
import './Footer.scss';
import { useEffect } from 'react';
import {BiPhone} from 'react-icons/bi'
import {TfiEmail} from 'react-icons/tfi'
import {ImLocation} from 'react-icons/im'
import { images } from '../../Constants';

const Footer = () => {
  const [contact,setContact]=useState([
    {
      img:images.upwork,
      name:"upwork",
      link:"https://www.upwork.com/freelancers/~014f5974c2c8ad3d38"
    },
    {
      img:images.linkidn,
      name:"Linkedin",
      link:"https://www.linkedin.com/in/fraol-dabi-53091924b/"
    },
    {
      img:images.fiver,
      name:"fiver",
      link:"https://www.fiverr.com/fraol_dabi/do-professional-ui-design-for-websites-apps-landing-pages-figma-expert"
    },
    {
      img:images.drible,
      name:"drible",
      link:"https://dribbble.com/firaols"
    }


  ])

  // useEffect(()=>{
  //    const query = '*[_type == "footer"]'

  //    client.fetch(query)
  //    .then((data)=>setContact(data))
  // },[])

  return (
    <div className="app__footer" id='Contact me'>
         <div className="htext">
          <h2 className="head-text">I Look <span>Forward To Hear</span><br/>From You <span>Contact ME</span></h2>
         </div>
         

         <div className="alling">
            <div className='summary'>
                    aim to design a user freindly responsive 
               <br/>and interactive web apps with a modern <br/> 
                    user interface design technologies  <br/>
                    
            </div>
            
            <div className="what">
               <h3>tasks</h3>
                <ul>
                  <li>web developement</li>
                  <li>ux / ui desing</li>
                  <li>desing into code converstion</li>
                  <li>code debugging</li>
                </ul>
             </div>

           <div className="tech">
              <h3>Technologies</h3>
              <ul>
                 <li>Figma</li>
                 <li>ReactJs</li>
                 <li>JavaScript</li>
                 <li>Nodejs</li>  
                 <li>TeleportHq</li>
             </ul>
           </div>

     <div id='Contact_me' className="app__footer-cards">
        <h3>contact me</h3>
      {  contact.map((each,index)=>(
      <div className="app__footer-card ">
        <div className="cont">
          <img src={each.img} alt={each.name} />
        </div>
        
        <a href={each.link} className="p-text">{each.name}</a>
        
      </div>       
    ))}
   

     </div>
         </div>

       <div className="line">
          <p> <ImLocation/>  AddisAbaba,Ethiopia     </p>
          <p><TfiEmail/> fraol0411@gmail.com</p>
          <p> <BiPhone/> +251964308437</p>
        <hr/>
      </div>
    </div>

  );
};

export default Footer
