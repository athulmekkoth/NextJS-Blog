import React, { useContext } from 'react'
import styles from "./dark.module.css"
import { ThemeContext } from '../../../statemanagment/Theme'
const Darkmode=()=>
 {
  const {toggle,mode}=useContext(ThemeContext)

  return (
    <div className={styles.container} onClick={toggle}> 
   
    <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>

      <div
        className={styles.ball} 
        style={mode === "dark" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
    
    
  )
}

export default Darkmode