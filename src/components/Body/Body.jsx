import React from 'react'
import WOMANRED from '../assets/collection2.png'
import MANBLACK from '../assets/collection1.png'
import MANHOODIE from '../assets/home1.png'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"

import './boy.css'

const Body = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  
  return (
<section className='new section' id='new'>
<h2 className='section__title' data-aos="fade-up"
     data-aos-duration="3000">
New Categories          
</h2>  

<div className="new__container container grid">
              <article data-aos="fade-up"
     data-aos-duration="3000">
  <img src={WOMANRED} alt="new image" className='new__img' />
  <a href="#" className='new__link'>
<div className="new__data">
    <h2 className='new__title'>
    Red Sleeves
    </h2>
    <span>
    Summer Collection
    </span>
    </div>       
    <i className='ri-arrow-right-line'></i>
  </a>
 </article>

 <article data-aos="fade-up"
     data-aos-duration="3000">
  <img src={MANBLACK} alt="new image" className='new__img' />
  <a href="#" className='new__link'>
<div className="new__data">
    <h2 className='new__title'>
    Black Sweater 
    </h2>
    <span>
    Winter Collection
    </span>
    </div>       
    <i className='ri-arrow-right-line'></i>
  </a>
 </article>

 <article data-aos="fade-up"
     data-aos-duration="3000">
  <img src={MANHOODIE} alt="new image" className='new__img' />
  <a href="#" className='new__link'>
<div className="new__data">
    <h2 className='new__title'>
    Hoodie
    </h2>
    <span>
    Winter Collection
    </span>
    </div>       
    <i className='ri-arrow-right-line'></i>
  </a>
 </article>

              
</div>
</section>

  )
}

export default Body