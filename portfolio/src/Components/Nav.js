import React from "react";
import styles from "../CSS/Nav.module.css"
import { BASEURL } from "../Constants/constants";

function Nav () {
  return (
    <nav className={styles.nav}>
      <div className={styles.body}>

        <div className={styles.nameAndTitle}>
          <h2 className={styles.headers}>Fabian Hernandez</h2>
          <h5 className={styles.headers}>Fullstack Engineer</h5>
        </div> 

        <a 
          className={styles.links} 
          href={`${BASEURL}`}>Home</a>
        <a 
          className={styles.links} 
          href={`${BASEURL}portfolio`}>Portfolio</a>
        <a 
          className={styles.links} 
          href={`${BASEURL}contact`}>Contact</a>
          
      </div>
    </nav>
  )
}

export default Nav;