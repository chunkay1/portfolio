import styles from '../CSS/Home.module.css'
import { BASEURL } from '../Constants/constants';


function Home({mouseOverEvent, mouseOutEvent}) {
  return (
    <div className={styles.main}>

      <h3>Why hello there!</h3>

      <div className={styles.content}>

        <p>
          My name is Fabian Hernandez and I am a budding software engineer who recently graduated from Fullstack Academy.
          
          <br />

          After nearly two decades in customer service I'm looking for a new challenge where I can apply the skills I've developed over my career and apply myself towards honing a new skillset. 

          <br />

          I hope you'll enjoy your time here. 
        </p>

        <br />

        <p>
        Please feel free to browse my portfolio 
          <a 
            className={styles.link}
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            href={`${BASEURL}portfolio`}> here </a> 
        
        and if you want to connect, please feel free to reach out using my 
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