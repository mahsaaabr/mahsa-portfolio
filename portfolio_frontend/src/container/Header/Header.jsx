import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import {AppWrap} from "../../wrapper";
import "./Header.scss";
const scaleVariant={
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease:'easeInOut'
    }
  }
}

function Header() {
  return (
    <div className="header">

      <div className="header__container">
        <motion.div
          className="header__greeting"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 5.5 }}
        >
        <div>
          <div className="header__badge-cmp">
            <p className="header__title">Hello, I'm</p>
            <div className="header__title__part2">
              <h1>Mahsa</h1>
              <motion.span
              className="header__wave"
              animate={{ rotate: [0, 40, 0] }}
              transition={{ duration: 1.5, ease: "easeInOut", times: [0, 0.2, 1] }}
            >
              👋
            </motion.span>
          </div>
          </div>
           <div className="header__tag-cmp">
            <p >Web Developer </p>
            <p >Freelancer</p>
           </div>
        </div>
        </motion.div>
        <motion.div
          whileInView={{opacity:[0,1]}}
          transition={{ duration:5.5, delayChildren:0.5}}
        >
          <img className='header__img'  src={images.myphoto} alt="" />
        </motion.div>
      </div>
        {/* <motion.div 
         variants={scaleVariant}
         whileInView={scaleVariant.whileInView}
         className='header__circle'
         >
          {[images.sanity,images.nextjs,images.react,images.sass,images.html,images.javascript].map((circle,index)=>(
            <div className="circle-cpm" key={`circle-${index}`} >
              <img src={circle} alt="circle" />
            </div>
          ))}
        </motion.div> */}
    </div>
  );
}

export default AppWrap(Header,'home');
