import React,{ useState } from 'react';
import {RiChatSmile2Line} from 'react-icons/ri';
import { client } from '../../client';

import { images } from '../../constants';
import { AppWrap,MotionWrap3 } from '../../wrapper';


import './Footer.scss';


const Footer = () => {
  const [formData,setFormData]= useState({name:'',email:'',message:''})
  const [isFormSubmitted,setIsFormSubmitted]= useState(false)
  const [loading,setLoading]= useState(false)

  const {name,email,message}= formData;
  const handleChangeInput=(e)=>{
    const { name, value } = e.target;

    setFormData({...formData,[name]:value})
  }

  const handleSubmit= ()=>{
    setLoading(true);

    const contact={
      _type:'contact',
      name:name,
      email:email,
      message:message,
    }
    client.create(contact)
      .then(()=>{
        setLoading(false);
        setIsFormSubmitted(true);
      })

  }
  return (
    <>
    <div className='footer'>
      <h2 className='footer__title'>Contact Me and Let's Make Magic Happen <RiChatSmile2Line/> </h2>
      <div className='footer__cards'>
        <div className='footer__cardbox'>
          <div className='footer__card'>
            <img src={images.email} alt="amail" />
            <a href="mailto:mahsa.abrishamii@gmail.com" className='p-text'>Mahsa.abrishamii@gmail.com</a>
          </div>
          <div className='footer__card'>
            <img src={images.mobile} alt="mobile" />
            <a href="tel: +1 (501) 451-9895" className='p-text'>+1 (501) 451-9895</a>
          </div>
        </div>
        {!isFormSubmitted ? 
          <div className='footer__form app__flex'>
            <div className='footer__input'>
              <input className='p-text' type="text" placeholder='Your Name' name='name' value={name}  onChange={handleChangeInput}/>
            </div>
            <div className='footer__input'>
              <input className='p-text' type="email" placeholder='Your Email' name='email' value={email}  onChange={handleChangeInput}/>
            </div>
            <div className='footer__input'>
              <textarea
                placeholder='Your Message...'
                name='message' 
                value={message}
                onChange={handleChangeInput}
              />
            </div>
            <button type='button' className='footer__button' onClick={handleSubmit}>{loading ? 'Sending':'Send Message'}</button>
          </div> :
          <div className='footer__submit'>
            <h3>Thank you for getting in touch!😊</h3>
          </div>
        }
      </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap3(Footer, 'footer-Wrap'),
  'contact',
  'footer__bg',
);
