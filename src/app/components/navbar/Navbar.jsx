"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import styles from "./navbar.module.css"
import Darkmode from '../darkmode/Darkmode.jsx'
import Image from 'next/image'
import { signOut, useSession } from "next-auth/react";

const Links=[
  {
    id:1,
    title:"Home",
    url:"/"
  },
  {
    id:2,
    title:"Portfolio",
    url:"/portfolio"
  },
  {
    id:3,
    title:"Blog",
    url:"/blog"
  },
  {
    id:4,
    title:"About",
    url:"/about"
  },
  {
    id:5,
    title:"Contact",
    url:"/contact"
  },
  {
    id:5,
    title:"Dashboard",
    url:"/Dashboard"
  }
]

/* Import statements here */

const Navbar = () => {
  const session = useSession();
  const [state, setState] = useState(false);

  const toggle = () => {
    setState(!state);
    console.log(state);
  };

  return (
    <div className={styles.container}>
     <div className={styles.box}>
     <div className={styles.first}>
        <Link className={styles.logo} href="./">
          VOXIO
        </Link>
        <Darkmode />
      </div>

      <div className={styles.nav}>
        <Image
          className={styles.img}
          onClick={toggle}
          src={state ? "/close.png" : "/menu.png"}
          width={20}
          height={20}
        />
       
      </div>
     
     </div>
     <div className={state ? styles.vis : styles.hid}>
          {Links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.link}>
              {link.title}
            </Link>
          ))}
          {session.status === "authenticated" && (
            <button className={styles.logout} onClick={signOut}>
              Logout
            </button>
          )}
        </div>
    </div>
  );
};

export default Navbar;



/*"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import styles from "./navbar.module.css"
import Darkmode from '../darkmode/Darkmode.jsx'
import Image from 'next/image'
import { signOut, useSession } from "next-auth/react";

const Links=[
  {
    id:1,
    title:"Home",
    url:"/"
  },
  {
    id:2,
    title:"Portfolio",
    url:"/portfolio"
  },
  {
    id:3,
    title:"Blog",
    url:"/blog"
  },
  {
    id:4,
    title:"About",
    url:"/about"
  },
  {
    id:5,
    title:"Contact",
    url:"/contact"
  },
  {
    id:5,
    title:"Dashboard",
    url:"/Dashboard"
  }
]

const Navbar = () => {
  const session = useSession();
  const [state,setState]=useState(false)
const toggle=()=>{
  setState(!state)
console.log(state)
}
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href='./'>VOXIO</Link>
      <Darkmode />


      
      <div className={styles.links}>
    
 
   
  <div className={state?styles.vis:styles.hid}>

  {Links.map((link) => (

          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
  </div>
    
       

   </div>
   <Image className={styles.img} onClick={()=>setState(!state)} src={state?"/close.png":"/menu.png"}  width={20} height={20}/>
   </div>
  )
}
  

export default Navbar*/