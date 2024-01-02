import React from 'react'
import './collection.css'
import {AiOutlineArrowRight} from 'react-icons/ai'
import CLOTHS from '../assets/new3.png'
import CLOTHS2 from '../assets/home2.png'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"



const Collection = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
}, [])

  return (
    <section className='collection section' id='collection'> 
  <div className="collection__container container">
        <div className="collection__explore">
          <div className="collection__data-men">
            <h2 className="collection__title" data-aos="fade-up"
     data-aos-duration="3000"
    data-aos-once="true"
    >
              Men <br />
              Collections
            </h2>
            <a href="" className="button__link" data-aos="fade-up"
     data-aos-duration="3000"
    data-aos-once="true"
    >
              Explore Clothes <AiOutlineArrowRight/>
            </a>
          </div>
          
<img src={CLOTHS} alt="" data-aos="fade-up"
     data-aos-duration="3000"
    data-aos-once="true"
    />
        </div>     
        <div className="collection__explore" data-aos="fade-up"
     data-aos-duration="3000"
    data-aos-once="true"
    >
        <img src={CLOTHS2} alt="" />
          <div className="collection__data-women">
            <h2 className="collection__title" data-aos="fade-up"
     data-aos-duration="3000"
    data-aos-once="true"
    >
          MENS TOPS
            </h2>
            <a href="" className="button__link" data-aos="fade-up"
     data-aos-duration="3000"
    data-aos-once="true"
    >
              Explore Clothes <AiOutlineArrowRight/>
            </a>
          </div>
          

        </div>     

 </div>
    </section>
  )
}

export default Collection