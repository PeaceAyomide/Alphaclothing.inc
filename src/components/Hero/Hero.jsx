import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import ALPHA1 from '../assets/new2.png'
import  ALPHA2 from '../assets/new1.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './hero.css'

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  return (
    <section className='home section' id='home' >
      <div className="home__container container grid">
        <div className="home__data" >
          <h1 className="home__title" data-aos="fade-up-right" >
            Mens Clothing <br />
            Collection
          </h1>
          <p className='home__description' data-aos="fade-right">
            The Amazing brand new collection of<br />
             clothing from 
            our brands the best in the world
          </p>
          <a href="#new" className="button__link">
            BE AMAZED
<AiOutlineArrowRight/>
          </a>
        </div>
        <div className="home__images" data-aos="fade-right">
          <img src={ALPHA1} alt="home image" / >
          <img src={ALPHA2} alt="home image" />

        </div>
      </div>
   </section>
  )
}

export default Hero