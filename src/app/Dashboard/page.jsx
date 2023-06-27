"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import styles from'./navbar.module.css'
import Image from 'next/image';
import Link from 'next/link';
const Dashboard= () => {

const session=useSession()
const router=useRouter()
const handelsubmit = async (e) => {
  e.preventDefault(); 
  console.log('dd');
  const title = e.target[0].value;
  const desc = e.target[1].value;
  const img = e.target[2].value;
  const content = e.target[3].value;
  try {
    await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc,
        img,
        content,
        username: session.data.user.name
      })
    });
  } catch (err) {
    console.log(err);
  }
};
const fetcher = (...args) => fetch(...args).then(res => res.json())
const { data, error, isLoading } = useSWR(`/api/post?username=${session?.data?.user.name}`, fetcher)
if(session.status === "loading")
{
  return <p>LOading</p>
}
if(session.status === "unauthenticated")
{
  router.push('/Dashboard/login')
   }

if(session.status === "authenticated")
{
  
  return(
    <div>
<div className={styles.container}>
<div className={styles.post}>

  {isLoading  ? "loading":data.map((item)=>(
    
    <div className={styles.container} key={item._id}>

<div className={styles.imgcontainer} >
<Image src={item.img} width={100} height={100} alt='no' />

  </div>
 
<h2 className={styles.postTitle}>{item.title}</h2>
<Link  href={`/blog/${item._id}`} >GO to your blog</Link>
<span style={styles.delete}>DELETE</span>


</div>
  ))}


</div>
<form className={styles.new} onSubmit={handelsubmit}>
  <h1>Add New Post</h1>
  <input type='text' placeholder='title' className={styles.input} />
  <input type='text' placeholder='Desc' className={styles.input} />
  <input type='text' placeholder='Image' className={styles.input} />
  <textarea placeholder='Content' className={styles.textarea} id="" cols="30" rows="10"></textarea>
  <button className={styles.button} type='submit'>Submit</button>
</form>
</div>




    </div>

  ) 
}


  }
  
  export default Dashboard