import React from "react";
import styles from "../CSS/Nav.module.css"
import { BASEURL } from "../Constants/constants";
// import Cursor from "./Cursor";

function Nav ({mouseOverEvent, mouseOutEvent}) {
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
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent} 
            href={`${BASEURL}`}>Home</a>
          <a 
            className={styles.link}
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent} 
            href={`${BASEURL}portfolio`}>Portfolio</a>
          <a 
            className={styles.link}
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent} 
            href={`${BASEURL}contact`}>Contact</a>
        </div>
          
      </div>
    </nav>
  )
}

export default Nav;