
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../components/buttons/Button.jsx";

const About = () => {
return (
<div className={styles.container}>
<div className={styles.imgContainer}>
<Image
       src="/home.png"
       fill={true}
       alt=""
       className={styles.img}
     />
<div className={styles.imgText}>
<h1 className={styles.imgTitle}>Design Agency</h1>
<h2 className={styles.imgDesc}>
Crafting beautiful and impactful designs
</h2>
</div>
</div>
<div className={styles.textContainer}>
<div className={styles.item}>
<h1 className={styles.title}>Who Are We?</h1>
<p className={styles.desc}>
At our Design Agency, we are passionate about creating exceptional designs that captivate and engage. Our team of skilled designers combines creativity, technical expertise, and strategic thinking to deliver outstanding results. Whether it's crafting visually stunning graphics, designing intuitive user interfaces, or developing compelling branding elements, we bring ideas to life through our design solutions. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
beatae, a suscipit eos. Animi quibusdam cum omnis officiis
<br />
<br />
voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
officiis voluptatum quo ea eveniet?
</p>
</div>
<div className={styles.item}>
<h1 className={styles.title}>What We Do?</h1>
<p className={styles.desc}>
Our Design Agency offers a wide range of services to meet your design needs. We specialize in:
<br />
<br /> - Creative Graphic Design: Our talented designers create visually appealing graphics that communicate your brand's message effectively.
<br />
<br /> - User Interface (UI) Design: We design intuitive and user-friendly interfaces for websites and applications, ensuring a seamless user experience.
<br />
<br /> - Branding and Identity Design: We develop distinctive and memorable branding elements, including logos, color palettes, and brand guidelines.
<br />
<br /> - Web Design: Our team creates engaging and responsive websites that showcase your brand and drive conversions.
<br />
<br /> - Mobile App Design: We design mobile applications that combine aesthetics with functionality, providing users with a seamless mobile experience.
</p>
<Button url="/contact" text="Contact" />
</div>
</div>
</div>
);
};
export default About;