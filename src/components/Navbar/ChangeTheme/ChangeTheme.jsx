import React, { useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import './changetheme.css';

const ChangeTheme = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    // Toggle the dark-theme class on the body element
    document.body.classList.toggle('dark-theme');
  };

  return (
    <div className={`theme-toggle ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <i className={`theme-icon ${theme === 'dark' ? 'dark-theme' : ''}`} id='theme-button' onClick={toggleTheme}>
        {theme === 'dark' ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
      </i>
    </div>
  );
};

export default ChangeTheme;
