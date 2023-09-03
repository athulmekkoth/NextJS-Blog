 
import styles from './page.module.css'
import homes from 'public/home.png'
import Image from 'next/image';
export default function Home() {
  return (
  <div className={styles.container}>
   <div className={styles.texts}>
 
    <h1 className={styles.heading}>We make your Design World class</h1>
   
    <p className={styles.para}>We make your ideas into Reality.We bring the tems from global tech indusrty</p>

    <p className={styles.para}>We a group of indusry experts</p>

 </div>
    <div >
      <Image src={homes} alt="home" className={styles.img}/>
    </div>
  </div>     
  )
}
