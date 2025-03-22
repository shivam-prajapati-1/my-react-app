// import React, { useState } from 'react';
// import './HamburgerMenu.css';

// const HamburgerMenu = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSubMenu, setActiveSubMenu] = useState(null);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const toggleSubMenu = (index) => {
//     setActiveSubMenu(activeSubMenu === index ? null : index);
//   };

//   return (
//     <div className="hamburger-menu">
//       <button className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
//         &#9776;
//       </button>

//       {menuOpen && (
//         <ul className="menu">
//           <li>
//             <a href="#home">Home</a>
//           </li>
//           <li>
//             <a href="#about">About</a>
//           </li>
//           <li>
//             <a href="#services" onClick={() => toggleSubMenu(0)}>
//               Services
//             </a>
//             {activeSubMenu === 0 && (
//               <ul className="submenu">
//                 <li><a href="#web-design">Web Design</a></li>
//                 <li><a href="#seo">SEO</a></li>
//               </ul>
//             )}
//           </li>
//           <li>
//             <a href="#portfolio" onClick={() => toggleSubMenu(1)}>
//               Portfolio
//             </a>
//             {activeSubMenu === 1 && (
//               <ul className="submenu">
//                 <li><a href="#project1">Project 1</a></li>
//                 <li><a href="#project2">Project 2</a></li>
//               </ul>
//             )}
//           </li>
//           <li>
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default HamburgerMenu;
