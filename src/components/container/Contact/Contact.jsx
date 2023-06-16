import React, { useState } from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';

const Contact = () => {
  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    message: '',
    phoneNumber: ''
  })
  const {email, name, message, phoneNumber } = inputs;
  const handlChange = (event) => {
    const { name, value } = event.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  return (
    <div className="container" id="contact">
      <motion.div
        initial={{opacity: 0}}
        viewport={{ once: true }}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            <span>get in touch</span>
            <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          viewport={{ once: true }}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3>Just Say Hi</h3>
          <p className='contact_text'>For collaborations, enquiries or even just to say hello. I'll always get back to you! Let's spark together!</p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{ contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index} >
                {socialIcon}
              </div>
            )
          })}
          </div>
        </motion.div>
        <motion.div
          initial={{x: 0, opacity: 0}}
          viewport={{ once: true }}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right"
        
        >
          <h3>Get In Touch</h3>
          <form onSubmit={handleSubmit}>
          <div className="row">
            <input type="text" placeholder='Fullname' name="name" value={name} required onChange={handlChange}/>
          </div>
          <div className="row">
            <input name="phoneNumber"  type="text" placeholder='Phone' value={phoneNumber} required onChange={handlChange} />
            <input type="email"
            placeholder='Email'
            name="email"
            value={email}
            onChange={handlChange}
            required/>
          </div>
          <div className="row">
            <textarea name="message" placeholder='message' value={message} onChange={handlChange} required></textarea>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{duration: 0.3}}
            className="btn"
          >
            <button type="submit" value="Send"><a href={`mailto:dorisiheme14@gmail.com?cc=dorisiheme@gmail.com&subject=Hello%20Let%20Work&body=My%20Name%20is%20${name}%20lets%20connect%20call%20me%20${phoneNumber}!`} target="_top">Send</a></button>
          </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact