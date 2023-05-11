import React from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';


import {AiTwotoneMail} from 'react-icons/ai'
import {AiFillPhone} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
const SocialMedia = () => {
  return (
    <>
    <div className='app__social'>
        <div 
         data-tip
         data-tooltip-id='phone'
         data-tooltip-place='right' 
        >
            <AiFillPhone/>
        </div>

        <div
         data-tip
         data-tooltip-id='mail'
         data-tooltip-place='right'
        >
            <AiTwotoneMail/>
        </div>
        <div 
         data-tip
         data-tooltip-id='linkedin'
         data-tooltip-place='right'
        >
            <AiFillLinkedin/>
        </div>
    </div>
    <Tooltip
          id='phone'
          className='app__tooltip'
          clickable
          enterTouchDelay={0}
        >
          <h4> +1 (501) 451-9895 </h4>
        </Tooltip>
    <Tooltip
      id='mail'
      className='app__tooltip'
      clickable
      enterTouchDelay={0}
    >
      <h4> Mahsa.abrishamii@gmail.com </h4>
    </Tooltip>
    <Tooltip
          id='linkedin'
          className='app__tooltip'
          clickable
          enterTouchDelay={0}
        >
          <h4> https://www.linkedin.com/in/mahsa-abrishami-aa7095246 </h4>
        </Tooltip>
  </>
  )
}

export default SocialMedia
