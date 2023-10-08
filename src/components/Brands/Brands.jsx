import React from 'react'
import LOGO1 from '../assets/logo1.png'
import LOGO2 from '../assets/logo2.png'
import LOGO3 from '../assets/logo3.png'
import LOGO4 from '../assets/logo4.png'

import './brands.css'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"


const Brands = () => {


  useEffect(() => {
    Aos.init({duration: 2000})
}, [])

  return (
      <section className='brand section'>
          <h2 className="section__title" data-aos="fade-up"
     data-aos-duration="3000">
              Brands We Sell
          </h2>
          <div className="brand__continer container grid">
        <img src={LOGO1} alt=""  className='brand__img' data-aos="fade-up"
     data-aos-duration="3000"/>
        <img src={LOGO2} alt="" className='brand__img'data-aos="fade-up"
     data-aos-duration="3000"/>
        <img src={LOGO3} alt="" className='brand__img'data-aos="fade-up"
     data-aos-duration="3000"/>
        <img src={LOGO4} alt="" className='brand__img'data-aos="fade-up"
     data-aos-duration="3000"/>
        
        </div>
    </section>
  )
}

export default Brands