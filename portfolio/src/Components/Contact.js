import React from "react";
import styles from '../CSS/Contact.module.css'
import { AiFillLinkedin } from "react-icons/ai"

function Contact () {
  return (
    
    <div className={styles.body}>

      <form>
        <h2>Let's Connect!</h2>
        <a href="https://www.linkedin.com/in/fabian-s-hernandez/" target="blank" className={styles.icon}> <AiFillLinkedin /> </a>
        

        <div className={styles.inputs}>
          <input 
            type='text'
            label='Name'
            placeholder='Name'
            className={styles.input}>
          </input>
          <input 
            type='email'
            label='Email'
            placeholder='Email'
            className={styles.input}>
          </input>
          <textarea 
            type='text'
            label='Message'
            placeholder='Message'
            maxLength="250"
            className={`${styles.message} ${styles.input}`}>
          </textarea>
        </div>

        <button className={styles.button}>Submit</button>

      </form>

    </div>

  )
}

export default Contact