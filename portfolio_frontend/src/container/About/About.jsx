import React,{useEffect,useState} from 'react';
import './About.scss'; 
import {motion} from 'framer-motion';
import {urlFor, client} from '../../client';
import {AppWrap,Motionwrap} from '../../wrapper';

const About = () => {
  const[abouts,setAbouts]=useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
      .then((data)=>setAbouts(data))
  },[]);

  return (
    <div className='about'>
      <>
        <h2 className='about__head-text'>
        <span> High-performing </span>
         web solutions for businesses
        </h2>

        <div className='about__profiles'>
          {abouts.map((about, index)=>(
            <motion.div
             whileInView={{ opacity:1 }}
             whileHover={{ scale:1.1 }}
             transition={{ duration:0.5, type:'tween'}}
             className='about__profile-item'
             key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
              <p className='p-text' style={{marginTop:10}}>{about.description}</p>
            </motion.div>
          ))}

        </div>
      </>
    </div>
  )
}

export default AppWrap(
  Motionwrap(About, 'about-Wrap'),
  'about',
  'app__whitebg',
);