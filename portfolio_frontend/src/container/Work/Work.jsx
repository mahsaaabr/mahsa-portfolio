import React,{useEffect,useState} from 'react';
import {AiFillEye,AiFillGithub} from 'react-icons/ai'
import {motion} from 'framer-motion';

import {AppWrap,MotionWrap2} from '../../wrapper';
import {urlFor,client} from '../../client'
import './Work.scss';


const Work = () => {
  const[activeFilter,setActiveFilter]=useState('All');
  const [animateCard,setAnimateCard]=useState({ y: 0, opacity: 1 });
  const[projects,setProjects]=useState([]);
  const [filterWork,setFilterWork]=useState([])
  const handleWorkFilter=(item)=>{
    setActiveFilter(item);
    setAnimateCard([{ y:200, opacity:0 }])

    setTimeout(()=>{
      setAnimateCard([{ y:0, opacity:1 }])

      if(item ==='All'){
        setFilterWork(projects);
      } else {
        setFilterWork(projects.filter((work)=>work.category.includes(item)))
      }
    },500)
    

  }
  useEffect(() => {
    const query = '*[_type == "project"]';
    client.fetch(query)
      .then((data)=>
        {
          setProjects(data)
          setFilterWork(data)
        })
  },[]);

  return (
    <section className="work">
      <h2 className='work__head-text'>My Creative <span>Portfolio</span> Section</h2>
      <div className="work__projects">
        <div className='project-desc'>
        {['Social Media','E-commerce','Blogging Platform','Web App','Small Projects','All'].map((item,index)=>(
          <div
            key={item+index} 
            onClick={()=>handleWorkFilter(item)}
            className={`project-desc-item ${activeFilter=== item ? 'item-active' : '' }`}
          >
            <p>{item}</p>
          </div>
        ))}
        </div>
        <div className='projects'>
        {filterWork.map((project,index) => (
          <motion.div
            animate={animateCard}
            transition={{duration:0.5, delayChildren:0.5}}
            key={project.title+index}
            className="project"
            whileHover={{scale: 1.05 }}
          >
            <img src={urlFor(project.coverImage)} alt={project.title} />
            <motion.div
            //  whileHover={{opacity:[0,1]}}
             transition={{duration:1.25, ease:'easeInOut', staggerChildren:0.5 }}
             className='project-hover'
             whileInView={{opacity:[0,1]}}
            >
              <a href={project.links[0].url} target='_blank' rel='noreferrer'>
                <motion.div
                 whileHover={{scale:1.2}}
                 whileTap={{scale:0.9}}
                 transition={{duration:0.25}}
                >
                  <AiFillEye/>
                </motion.div>
              </a>
              <a href={project.links[0].codeurl} target='_blank' rel='noreferrer'>
                <motion.div
                 whileHover={{scale:1.2}}
                 whileTap={{scale:0.9}}
                 transition={{duration:0.25}}
                >
                  <AiFillGithub/>
                </motion.div>
              </a>
            </motion.div>
            <h3>{project.title}</h3>
            <p className='p-text'>{project.description}</p>
            {/* <ul className="tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul> */}
            <p>{project.category}</p>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default AppWrap(
  MotionWrap2(Work, 'work-Wrap'),
  'work',
  'work__bg',
);
