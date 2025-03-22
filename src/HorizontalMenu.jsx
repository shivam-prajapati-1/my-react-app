import React from 'react';
// import './HorizontalMenu.css';

const HorizontalMenu = () => {
  return (
    <nav className="horizontal-menu">
      <ul className="menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default HorizontalMenu;
