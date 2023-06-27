
import React from "react";
import {notFound} from "next/navigation"
import Link from "next/link";
import Image from "next/image";
import styles from './page.module.css'
async function getData( id ) {

  const res = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store"

  })


  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return notFound()
  }

  return res.json()
  console.log(res.json())
}
    



const BlogPost = async ({ params }) => {
  console.log(params)
  const data = await getData(params.id)
  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
          {data.title}
            </h1>
           
          
            <Image
              src={data.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />

        

        </div>
        <p className={styles.title}>
        {data.desc}
            </p>
      </div>




    </div>
  );
};


export default BlogPost