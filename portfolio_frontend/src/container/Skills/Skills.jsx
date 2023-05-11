import React,{useEffect,useState} from 'react';
import {motion, useAnimate} from 'framer-motion';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

import {AppWrap,MotionWrap3} from '../../wrapper';
import {urlFor,client} from '../../client';
import './Skills.scss';


const Skills = () => {

  const [experience,setExperience]=useState([]);
  const [skills,setSkills]=useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';
    client.fetch(query)
      .then((data)=>
        {
          setExperience(data)
        })
    client.fetch(skillsQuery)
        .then((data)=>
        {
          setSkills(data)
        })
  },[]);
  // console.log(experience[0].works[0].company)
  return (
    <div className='skills'>
      <h2 className='skills__head-text'>Skills & Experience</h2>
      <div className='skills__container'>
        <motion.div
          className='skills__list'
        >
            {skills?.map((skill)=>(
              <motion.div
                whileInView={{opacity: [0,1]}}
                transition={{duration: 0.5}}
                whileHover={{scale:1.1}}
                className='skills__item app__flex'
                key={skill.name}
              >
                <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className='p-text'>{skill.name}</p>
              </motion.div>
            ))}
        </motion.div>
        <motion.div className='skills__exp'>
              {experience?.map((work,index)=>(
                <div>
                  <motion.div
                   whileInView={{opacity: [0,1]}}
                   transition={{duration: 0.5}}
                   whileHover={{scale:1.1}}
                   className='skills__exp-work'
                   data-tip
                   data-tooltip-id={work.name}
                   data-tooltip-place='right'
                  //  data-for={work.name}
                   key={work.year + index}
                  >
                    <div className='exp-work-items'>
                      <h3 className='bold-text'>{work.year}</h3>
                    <div className='exp-work-items-p2'>
                    {work.works?.map((exp, index)=>(
                      <div>
                        <motion.div
                         whileInView={{opacity: [0,1]}}
                         transition={{duration: 0.5}}
                         whileHover={{scale:1.1}}
                         data-tip
                         data-tooltip-id={exp.name}
                         className='exp-work-item-name'
                         key={exp.name}
                        >
                        <h4>{exp.name}</h4>
                        <p className='p-text'>{exp.company}</p>
                        </motion.div>
                        <Tooltip
                        id={exp.name}
                        title="Add"
                        className='skills___exp-tooltip'
                        leaveTouchDelay={10000}
                        clickable
                        enterTouchDelay={5000}
                      >
                        <h3>date:</h3>
                        <p>{exp.startDate} to {exp.endDate}</p>
                        <h3>desc:</h3>
                        <p>{exp.description}</p>
                      </Tooltip>
                      </div>
                    ))}
                    </div>
                    </div>
                  </motion.div>
                </div>
              ))}
        </motion.div>
      </div>
    </div>
  )
}

export default AppWrap(
  MotionWrap3(Skills, 'skill-Wrap'),
  'skills',
  'skills__bg',
);
