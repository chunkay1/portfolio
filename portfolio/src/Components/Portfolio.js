import React from "react";
import styles from '../CSS/Portfolio.module.css'

function Portfolio () {
  return (
    <div className={styles.body}>
      <h3>Portfolio</h3>

      <section className={styles.project}>

        <h4>
          <a 
            href="https://hike-seek.onrender.com/" target="none"
            className={styles.link}>
              Hike & Seek
          </a>
        </h4>

        <p>For the Fullstack Academy Capstone Project, my team built an e-commerce site geared towards outdoor enthusiasts.</p>
          
        <p>With Hike & Seek’s web application, you can create an account, filter by category, add and edit items in your cart, checkout those items, and view past orders. Accessible with the right credentials, administrative users can manage inventory by adding products through their own secure portal.</p> 
        
        <p> Accomplished by using React and Bootstrap for some persisting core components and grid layouts, a combination of vanilla CSS and jQuery for custom animations, Express and PostgreSQL to serve up our backend data, and finally BCRYPT as well as JSON web token to ensure our users data is stored securely and only accessible to properly authenticated users.</p>
      </section>

      <section className={styles.project}>
        <h4>
          <a
            href="https://heroic-pixie-09ba24.netlify.app/"
            target="none"
            className={styles.link}>
              Strangers Things
          </a>
        </h4>

        <p>For our frontend review project I built a web application that simulates Craigslist using React as the frontend library and interacting with an API using CRUD methods.</p>

        <p>Registered users can create new listings by filling out a form with details such as title, description, price, and location. They can also edit or delete their existing listings by clicking on the respective buttons and interacting with the post.</p>
        
        <p>Overall, this project allowed me to apply my knowledge of React and API interactions to build a functional and responsive web application that simulates a popular online marketplace. I learned how to manage state and props in React, use hooks and libraries for enhanced functionality, and implement CRUD methods for data manipulation.</p>
      </section>

    </div>
  )
}

export default Portfolio;