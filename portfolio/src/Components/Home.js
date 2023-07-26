import styles from '../CSS/Home.module.css'
import { BASEURL } from '../Constants/constants';


function Home({mouseOverEvent, mouseOutEvent}) {
  return (
    <div className={styles.main}>


      <div className={styles.content}>
        <h3>Why hello there!</h3>

        <p>Welcome to my personal site.</p>
            
          
        <p>
          Among other things, I am a budding software engineer who recently graduated from Fullstack Academy.
        </p>

            
        <p>
          After almost two decades in the customer service industry, I'm now eagerly seeking a new and exciting challenge in the tech world. I am eager to leaverage the valuable skills I have cultivated throughout my career while dedicating myself to mastering a fresh and dynamic set. 
        </p>
            
        <p>
          When I'm not working on projects or upping my Codewars kata, I'm usually hanging out with my wife and son, playing guitar, or training Brazilian Jiu-Jitsu.
        </p>

        <p>
          Please feel free to browse my portfolio 
            <a 
              className={styles.link}
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              href={`${BASEURL}portfolio`}> here </a> 
          
          and if you'd like to connect, send me an email using my 
            <a 
              className={styles.link}
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent} 
              href={`${BASEURL}contact`}> contact page.</a>
        </p>
          

          {/* Use this site as an inspiration - https://brittanychiang.com/#about */}

      </div>

    </div>
  )
}

export default Home;