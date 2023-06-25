import React from "react";
import 'animate.css'
import styles from '../CSS/Portfolio.module.css'
import { AiFillGithub } from "react-icons/ai";
import { SiExpress, SiPostgresql, SiReact, SiCss3, SiJquery } from "react-icons/si"
import { FaNodeJs, FaBootstrap } from "react-icons/fa"

function Portfolio ({mouseOverEvent, mouseOutEvent}) {
  return (
    <div className={styles.body}>

      <section className={styles.project}>

        <div className={styles.description}>
          <h4>
            <a 
              href="https://hike-seek.onrender.com/" 
              target="none"
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              className={styles.link}>
                Hike & Seek
            </a>
          </h4>

          <p>For the Fullstack Academy Capstone Project, my team built an e-commerce site geared towards outdoor enthusiasts.</p>

          <br />
            
          <p>With Hike & Seek’s web application, you can create an account, filter by category, add and edit items in your cart, checkout those items, and view past orders. Accessible with the right credentials, administrative users can manage inventory by adding products through their own secure portal.</p> 
          
          <br />

          <p> Accomplished by using React and Bootstrap for some persisting core components and grid layouts, a combination of vanilla CSS and jQuery for custom animations, Express and PostgreSQL to serve up our backend data, and finally BCRYPT as well as JSON web token to ensure our users data is stored securely and only accessible to properly authenticated users.</p>

          <div className={styles.technologies}>

            <div>
              {/* <h5>PostgreSQL</h5> */}
              <SiPostgresql />
            </div>

            <div>
              {/* <h5>Express</h5> */}
              <SiExpress />
            </div>

            <div>
              {/* <h5>React</h5> */}
              <SiReact />
            </div>

            <div>
              {/* <h5>Node JS</h5> */}
              <FaNodeJs />
            </div>

            <div>
              {/* <h5>CSS</h5> */}
              <SiCss3 />
            </div>

            <div>
              {/* <h5>Bootstrap</h5> */}
              <FaBootstrap />
            </div>

            <div>
              {/* <h5>jQuery</h5> */}
              <SiJquery />
            </div>

          </div>

          <div>
            <a
              href="https://github.com/chunkay1/graceShopper"
              target="none"
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              className={styles.icon}>
              <AiFillGithub />
            </a>
          </div>

        </div>

        <div className={styles.video}>
          <video autoPlay muted loop class="animate__animated animate__slideInRight">
              <source src="HaS_Demo.mp4" type="video/mp4"/>
              
          </video>
        </div>

      </section>

      <section className={styles.project}>

        <div className={styles.description}>
          <h4>
            <a
              href="https://heroic-pixie-09ba24.netlify.app/"
              target="none"
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              className={styles.link}>
                Strangers Things
            </a>
          </h4>

          <p>For our frontend review project I built a web application that simulates Craigslist using React as the frontend library and interacting with an API using CRUD methods.</p>

          <br />

          <p>Registered users can create new listings by filling out a form with details such as title, description, price, and location. They can also edit or delete their existing listings by clicking on the respective buttons and interacting with the post.</p>

          <br />
          
          <p>Overall, this project allowed me to apply my knowledge of React and API interactions to build a functional and responsive web application that simulates a popular online marketplace. I learned how to manage state and props in React, use hooks and libraries for enhanced functionality, and implement CRUD methods for data manipulation.</p>

          <div className={styles.technologies}>
            {/* <h5>React</h5> */}
            <SiReact />

            {/* <h5>CSS</h5> */}
            <SiCss3 />
          </div>

          <div className={styles.icon}>
            <a
                href="https://github.com/chunkay1/strangersthings"
                target="none"
                onMouseOver={mouseOverEvent}
                onMouseOut={mouseOutEvent}
                className={styles.icon}>
              <AiFillGithub />
            </a>
          </div>

        </div>

        <div className={styles.video}>
          <video autoPlay muted loop class="animate__animated animate__slideInRight">
              <source src="HaS_Demo.mp4" type="video/mp4"/>
              
          </video>
        </div>

      </section>

    </div>
  )
}

export default Portfolio;