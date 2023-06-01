import React from "react";
import styles from '../CSS/Portfolio.module.css'

function Portfolio () {
  return (
    <div className={styles.body}>
      <h3>Portfolio</h3>

      <div className={styles.project}>
        <h4>Hike & Seek</h4>
        <p>Project Description</p>
      </div>

      <div className={styles.project}>
        <h4>Strangers Things</h4>
        <p>Project Description</p>
      </div>

    </div>
  )
}

export default Portfolio;