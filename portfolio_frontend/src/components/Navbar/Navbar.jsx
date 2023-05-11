import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4,HiX } from "react-icons/hi";
import {easeOut, motion} from 'framer-motion';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [toggle,SetToggle]=useState(false);

  const handleLinkClick = (item) => {
    setActiveLink(item);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={images.logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        {['home', 'about', 'work', 'skills', 'testimonial','contact'].map((item) => (
          <li
            key={`link-${item}`}
            className={`nav-link ${item === activeLink ? "active" : ""}`}
            onClick={() => handleLinkClick(item)}
          >
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="navbar-menu">

           <HiMenuAlt4 onClick={()=>SetToggle(true)}/>
        
        {toggle && (
          <motion.div
          transition={{transition:0.85, ease:'easeOut'}}
          whileInView={{x:[200,0]}}
          animate={{
            x: 0,
            y: 0,
            scale: 0.9,
          }}
          className='navbar-menu-links'
          >
            <HiX onClick={()=>SetToggle(false)}/>
            <ul>
              {['home', 'about', 'work', 'skills', 'testimonial','contact'].map((item) => (
                <li key={`${item}`} className='navbar-menu-small'>
                  <a href={`#${item}`} onClick={()=>SetToggle(false)}>{item}</a>
                </li>
               ))}
            </ul>
          </motion.div>
        ) }
      </div>
    </nav>
  );
};

export default Navbar;
