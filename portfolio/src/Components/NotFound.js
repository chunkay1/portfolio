import React from "react";
import styles from '../CSS/NotFound.module.css'

function NotFound({mouseOverEvent, mouseOutEvent}) {
  return (
      <div className={styles.container}>
          <h2 className={styles.mainHeader}>Oops!</h2>
          <img className={styles.image} src={'https://media.tenor.com/nEP6ovplEd8AAAAj/so-really.gif'} alt='lost' />
          <h3 className={styles.subHeader}>Try using the links above!</h3>
      </div>
  )
}

export default NotFound; 