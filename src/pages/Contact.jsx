import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../css/pages/Contact.css'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ir3ge9b', 'template_yt2kt2r', form.current, {
        publicKey: 'oGGuiJEXMHdY20Gzm',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return (
    <React.Fragment>
      <div className='container'>
        <h1 className='heading'>Contact Me</h1>
        <div className='form-heading'>
        <form ref={form} onSubmit={sendEmail} className='my-form'>
          <label className='label-name'>Name</label>
          <input type="text" name="to_name" className='input-name'/>
          <label className='label-email'>Email</label>
          <input type="email" name="email" className='input-email'/>
          <label className='label-message'>Message</label>
          <textarea name="message" className='input-message'/>
          <input type="submit" value="Send" />
        </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Contact