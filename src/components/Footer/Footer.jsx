import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"



const Footer = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    
  return (
      <footer className='footer'>
          <div className="footer__container container grid">
              <div>
                  <a href="" className="footer__logo"data-aos="fade-up"
     data-aos-duration="3000"
    data-aos-once="true"
    >
                Alpha.
                  </a>
                  <p className="footer__description" data-aos="fade-up"
     data-aos-duration="3000"
    data-aos-once="true"
    >
                Committed to bringing you the best clothing from popular brands  
                  </p>
              </div>
              <div className="footer__content">
                  <div>
                      <h3 className="footer__title" data-aos="fade-up"
     data-aos-duration="3000"
    data-aos-once="true"
    >
                          Company
                      </h3>
                      <ul className="footer__links">
                          <li>
                              <a href="" className="footer__link"data-aos="fade-up"
     data-aos-duration="3000"
    data-aos-once="true"
    >
                            Shop
                              </a>
                          </li>
                          <li>
                              <a href="" className="footer__link"data-aos="fade-up"
     data-aos-duration="3000"
    data-aos-once="true"
    >
                            Category
                              </a>
                          </li>
                          <li>
                              <a href="" className="footer__link" data-aos="fade-up"
     data-aos-duration="3000"
    data-aos-once="true"
    >
                            Contact info
                              </a>
                          </li>
                          
                      </ul>
                  </div> 


                  <div>
                      <h3 className="footer__title" data-aos="fade-up"
     data-aos-duration="3000"
    data-aos-once="true"
    >
                          Blog
                      </h3>
                      <ul className="footer__links">
                          <li>
                              <a href="" className="footer__link" data-aos="fade-up"
     data-aos-duration="3000"
      data-aos-once="true"
    >
                            Events
                              </a>
                          </li>
                          <li>
                              <a href="" className="footer__link" data-aos="fade-up"
     data-aos-duration="3000"
     data-aos-once="true"
    >
                            Popular news
                              </a>
                          </li>
                          <li>
                              <a href="" className="footer__link" data-aos="fade-up"
     data-aos-duration="3000"
     data-aos-once="true"
    >
                           Recent news
                              </a>
                          </li>
                          
                      </ul>
                  </div>

                  <div>
                      <h3 className="footer__title" data-aos="fade-up"
     data-aos-duration="3000"
     data-aos-once="true"
    >
                        Office  
                      </h3>

                      <p className="footer__information" data-aos="fade-up"
     data-aos-duration="3000"
     data-aos-once="true"
    >
                          Monday - Saturday
                          9AM - 10PM
                      </p>
                    </div>

                  <div>
                      <h3 className="footer__title" data-aos="fade-up"
     data-aos-duration="3000"
     data-aos-once="true"
    >
                          Contact us
                      </h3>
                      <ul className="footer__social">
                          <a href="" className="footer__social-link" data-aos="fade-up"
     data-aos-duration="3000"
     data-aos-once="true"
    >
                              <FaFacebookF/>
                          </a>
                          <a href="" className="footer__social-link" data-aos="fade-up"
     data-aos-duration="3000"
     data-aos-once="true"
    >
                              <BsInstagram/>
                          </a>
                          <a href="" className="footer__social-link" data-aos="fade-up"
     data-aos-duration="300"
     data-aos-once="true"
    >
                              <BsWhatsapp/>
                      </a>
                      </ul>
                  </div>
              </div>
          </div>   
          <div className="footer__info container">
              <span className="footer__copy">
                 &#169; PeaceDev. All rights reserved
              </span>
              <a href="" className="footer__privacy">
                      Terms and Condtions
                  </a>
          </div>
          
    </footer>
  )
}

export default Footer