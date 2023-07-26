import React from "react";
import styles from '../CSS/NotFound.module.css'

function NotFound({mouseOverEvent, mouseOutEvent}) {
  return (
      <div className={styles.container}>

        <div className={styles.glass}>

          <h2 className={styles.mainHeader}>Oops!</h2>
          <img className={styles.image} src={'https://media.tenor.com/nEP6ovplEd8AAAAj/so-really.gif'} alt='lost' />
          <h4 className={styles.subHeader}>Invalid URL</h4>
          <h4 className={styles.subHeader}>Try using the links above!</h4>

        </div>

      </div>
  )
}

export default NotFound; 