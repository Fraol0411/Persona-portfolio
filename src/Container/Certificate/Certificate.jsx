import React, { useState } from 'react'
import "./Certificate.scss"
import { images } from '../../Constants'
export default function Certificate() {

     const [certificates,setCerficates] = useState([
        { 
            certimg:images.webdesing,
            certname:"Responsive Web Desing from Sololearn",
            certdesc:"Fundamentals on responsive desing with practical approach "
        },
        { 
            certimg:images.uiuxx,
            certname:"Foundation of user experience (UX) Desing from coursera",
            certdesc:"The Foundamnetal ideas around user exprince in desing process of user intefaces"
        },
        { 
            certimg:images.web1,
            certname:"GenerativeAi",
            certdesc:"dsafbdnm,advnkdbv kand v"
        }
     ])


  return (
    <div id = "Certificates" className='maincert'>
        <div className='subcert'>
              <h2 className="head-text">Certi<span>ficates</span></h2>
              <div className='slider'>
                  {
                    certificates.map((each) => (
                        <div className='eachcert'>
                            <img src={each.certimg}/>
                            <p>{each.certname}</p>
                            <p className='sec'>{each.certdesc}</p>
                        </div>
                    ))}
              </div>
        </div>
    </div>
  )
}
