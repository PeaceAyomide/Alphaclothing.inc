import React, { useEffect } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import './arrowup.css';

const Arrowup = () => {
  useEffect(() => {
    const scrollUp = () => {
      const scrollUpButton = document.getElementById('scroll-up');
      window.scrollY >= 350 ? scrollUpButton.classList.add('show-scroll') : scrollUpButton.classList.remove('show-scroll');
    };

    window.addEventListener('scroll', scrollUp);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', scrollUp);
    };
  }, []);

  return (
    <a href="#" className="scrollup" id='scroll-up'>
      <i className="ri-arrow-up-line">
        <BsFillArrowUpCircleFill />
      </i>
    </a>
  );
};

export default Arrowup;
