import React,{useEffect,useState} from 'react';
import {motion, useAnimate} from 'framer-motion';
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi';

import {AppWrap,MotionWrap2} from '../../wrapper';
import {urlFor,client} from '../../client'
import './Testimonial.scss';


const Testimonial = () => {
  const [brands,setBrands]=useState([]);
  const [testimonials,setTestimonials]=useState([]);
  const [currentIndex,setCurrentIndex]=useState(0);
  
  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';
    client.fetch(query)
      .then((data)=>
        {
          setTestimonials(data)
          console.log(data)
        })
    client.fetch(brandsQuery)
        .then((data)=>
        {
          setBrands(data)
        })
  },[]);
  
  return (
    <div className='testimonial'>
      {testimonials?.map((testimonial,index)=>(
        <>
          <div className={`testimonial__items ${index % 4 === 0 ? 'gray' : index % 4 === 1 ? 'black' : index % 4 === 2 ? 'white' : 'purple'}`} key={ testimonial.name + index}>
            <div className='testimonial__header'> 
              <img className='testimonial__header-image' src={urlFor(testimonial.imageurl)} alt={testimonial.name} />
              <div className='testimonial__header-part2' >
                <h4>{testimonial.name}</h4>
                <h5>{testimonial.company}</h5>
              </div>
            </div>
            <div className='testimonial__content'>
              <p className='p-text'>"{testimonial.feedback}"</p>
            </div>
            
          </div>
        </>
      ))}
    </div>
  )
}

export default AppWrap(
  MotionWrap2(Testimonial, 'testimonial-Wrap'),
  'testimonial',
  'testimonial__bg',
);
