import { React, useEffect, useRef} from "react";
import styles from '../CSS/Portfolio.module.css'
import { AiFillGithub } from "react-icons/ai";
import { SiExpress, SiPostgresql, SiReact, SiCss3, SiJquery } from "react-icons/si"
import { FaNodeJs, FaBootstrap } from "react-icons/fa"
import { animate, motion, useAnimation, useInView } from "framer-motion";

function Portfolio ({mouseOverEvent, mouseOutEvent}) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  
  useEffect( () => {
    isInView ?
    mainControls.start("visible")
    :
    console.log('')
  }, [isInView] );

  return (
    <div className={styles.body}>
      
      <section 
        className={styles.project}
        ref={ref}>

        <div className={styles.description}>
          <div className={styles.card}>

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

            <p>For the Fullstack Academy Capstone Project, our team built an e-commerce site geared towards outdoor enthusiasts.</p>

            <br />
              
            <p>With Hike & Seek’s web application, you can create an account, filter by category, add and edit items in your cart, checkout those items, and view past orders. Accessible with the right credentials, administrative users can manage inventory by adding products through their own secure portal.</p> 
            
            <br />

            <p> Accomplished by using React and Bootstrap for some persisting core components and grid layouts, a combination of vanilla CSS and jQuery for custom animations, Express and PostgreSQL to serve up our backend data, and finally BCRYPT as well as JSON web token to ensure our users data is stored securely and only accessible to properly authenticated users.</p>

            <div className={styles.technologies}>

              <div>
                <SiPostgresql />
              </div>

              <div>
                <SiExpress />
              </div>

              <div>
                <SiReact />
              </div>

              <div>
                <FaNodeJs />
              </div>

              <div>
                <SiCss3 />
              </div>

              <div>
                <FaBootstrap />
              </div>

              <div>
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
                <AiFillGithub 
                  className={styles.icon} />
              </a>
            </div>

          </div>

        </div>

        <motion.div 
          className={`box ${styles.video}`}
          variants={{
            hidden: { 
              opacity: 0, 
              x: 75
            },
            visible: { 
              opacity: 1, 
              x: 0, 
              transition: { duration: 0.5, delay: 0.1} 
            },
          }}
          viewport={{ 
            once: false
          }}
          whileInView="visible"
          initial="hidden"
          animate={mainControls}>
            <video autoPlay muted loop>
                <source src="HaS_Demo.mp4" type="video/mp4"/> 
            </video>
        </motion.div>

      </section>

      <section 
        className={styles.project}
        ref={ref}>

        <div className={styles.description}>
          <div className={styles.card}>

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

              <div>
                <SiReact />
              </div>

              <div>
                <SiCss3 />
              </div>
              
            </div>

            <div className={styles.icon}>
              <a
                  href="https://github.com/chunkay1/strangersthings"
                  target="none"
                  onMouseOver={mouseOverEvent}
                  onMouseOut={mouseOutEvent}
                  className={styles.icon}>
                <AiFillGithub 
                className={styles.icon}/>
              </a>
            </div>
          </div>

        </div>

        <motion.div 
          className={`box ${styles.video}`}
          variants={{
            hidden: { 
              opacity: 0, 
              x: -75
            },
            visible: { 
              opacity: 1, 
              x: 0, 
              transition: { duration: 0.5, delay: 0.1} 
            },
          }}
          viewport={{ 
            once: false
          }}
          whileInView="visible"
          initial="hidden"
          animate={mainControls}>
            <video autoPlay muted loop>
                <source src="ST_Demo.mp4" type="video/mp4"/> 
            </video>
        </motion.div>

      </section>      

    </div>
  )
}

export default Portfolio;