import React from "react";
import styles from "../CSS/Nav.module.css"
import { BASEURL } from "../Constants/constants";
// import Cursor from "./Cursor";

function Nav () {
  return (
    <nav className={styles.nav}>
      
      <div className={styles.body}>

        <div className={styles.nameAndTitle}>
          <h3 className={styles.headers}>Fabian Hernandez</h3>
          <h5 className={styles.headers}>Fullstack Engineer</h5>
        </div> 

        <div className={styles.links}>
          <a 
            className={styles.link} 
            href={`${BASEURL}`}>Home</a>
          <a 
            className={styles.link} 
            href={`${BASEURL}portfolio`}>Portfolio</a>
          <a 
            className={styles.link} 
            href={`${BASEURL}contact`}>Contact</a>
        </div>
          
      </div>
    </nav>
  )
}

export default Nav;