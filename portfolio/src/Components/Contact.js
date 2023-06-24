import React, { useRef, useState } from "react";
import styles from '../CSS/Contact.module.css';
import emailjs from '@emailjs/browser';
// import { IconContext } from "react-icons/lib";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import toast, { Toaster } from 'react-hot-toast';

function Contact ({mouseOverEvent, mouseOutEvent}) {
  const form = useRef();
  const [user_name, setUser_name] = useState('');
  const [user_email, setUser_email] = useState('');
  const [message, setMessage] = useState('');

  const setTargetValue = (callback) => {
    return (event) => {
        callback(event.target.value)
    }
  }

  const notify = () => {
    toast("Email Sent!")
    toast("I'll get back to you ASAP.")
  }

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_efywbnd', 'template_cbxgwfv', form.current, '9eW_xcLmN3UhfubAI')
      .then((result) => {
          console.log(result.text);
          notify();
      }, (error) => {
          console.log(error.text);
      });

      setUser_name('');
      setUser_email('');
      setMessage('');
  }

  return (
    
    <div className={styles.body}>

        <h2 className={styles.header}>Let's Connect!</h2>

        <div className={styles.icons}>
          <a 
            href="https://www.linkedin.com/in/fabian-s-hernandez/" 
            target="blank"
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            id="anchor"
            className={styles.icon}>
            <AiFillLinkedin /> 
          </a>

          <a 
            href="https://github.com/chunkay1"
            target="blank"
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            id="anchor"
            className={styles.icon}>
              <AiFillGithub />
          </a>
        </div>
        
      <form ref={form} onSubmit={sendEmail}>

        

        <div className={styles.inputs}>

          <div className={styles.inputBox}>

            <input 
              type='text'
              name='user_name'
              value={user_name}
              onChange={setTargetValue(setUser_name)}
              required='yes'
              onInvalid= {(e) => {
                e.target.setCustomValidity('Please Provide Your Name')
              }}
              onInput={(e) => {
                e.target.setCustomValidity('');
              }}
              className={styles.input}>
            </input>

            <span>Your Name</span>
            <i></i>

          </div>

          <div className={styles.inputBox}>

            <input 
              type='email'
              name='user_email'
              value={user_email}
              onChange={setTargetValue(setUser_email)}
              required='yes'
              onInvalid={(e) => {
                e.target.setCustomValidity('Please Provide a Valid Email');
              }}
              onInput={(e) => {
                e.target.setCustomValidity('');
              }}
              className={styles.input}>
            </input>

            <span>Your Email</span>
            <i></i>
            
          </div>

          <div className={styles.inputBox}>
            <textarea 
              type='text'
              name='message'
              value={message}
              onChange={setTargetValue(setMessage)}
              onInvalid={(e) => {
                e.target.setCustomValidity('Please Enter Your Message Here :)')
              }}
              onInput={(e) => {
                e.target.setCustomValidity('');
              }}
              maxLength="250"
              required='yes'
              className={`${styles.message} ${styles.input}`}>
            </textarea>
            <span>Your Message</span>
            <i></i>
          </div>

        </div>

        <input 
          type='submit' 
          value='Submit'
          onMouseOver={mouseOverEvent}
          onMouseOut={mouseOutEvent}
          className={styles.button}
        />
        

      </form>
      
      <Toaster 
         toastOptions={{
          className: '',
          style: {
            border: '1px solid #282C34',
            background: '#61AFEF',
            padding: '8px',
            color: '#282C34',
          },
        }}
      />
    </div>

  )
}

export default Contact