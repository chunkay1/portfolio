import styles from '../CSS/Home.module.css'
import { BASEURL } from '../Constants/constants';


function Home({mouseOverEvent, mouseOutEvent}) {
  return (
    <div className={styles.main}>


      <div className={styles.content}>
        <h3>Why hello there!</h3>


        <p>Welcome to my portfolio site.</p>
            
          
        <p>
            Among other things, I am a budding software engineer who recently graduated from Fullstack Academy.
        </p>

            
        <p>
            After nearly two decades in customer service I'm looking for a new challenge where I can apply the skills I've developed over my career and apply myself towards honing a new skillset. 
        </p>
            
        <p>
            When I'm not working on projects or Codewars, I'm usually hanging out with my wife and son, playing guitar, or training Brazilian Jiu-Jitsu.  
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

          {/* <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
          </p> */}

      </div>

    </div>
  )
}

export default Home;