"use client"
import React from 'react'
import styles from './page.module.css'
import Link from "next/link";
import { signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
const Login = () => {
  const session=useSession()
  const router=useRouter()
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/Dashboard/login");
  }

  if (session.status === "authenticated") {
    router?.push("/Dashboard");
  }
  const handleSubmit = async (e) => {

    e.preventDefault();
  
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials",{email,password });
  }

    return (
      <div className={styles.container}>
        
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
      
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
       
      </form>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/Dashboard/register">
        Create a new Account
      </Link>
    </div>

<button className={styles.google}onClick={()=>signIn('google')}>log in with goggle</button>
      </div>
    )
  }
  
  export default Login