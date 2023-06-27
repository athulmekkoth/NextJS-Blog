"use client"
import Link from 'next/link'
import React from 'react'
import styles from "./navbar.module.css"
import Darkmode from '../darkmode/Darkmode.jsx'

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
  
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href='./'>BABU</Link>
      <div className={styles.links}>
    <Darkmode />
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
  )
}

export default Navbar