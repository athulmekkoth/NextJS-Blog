// Footer.js
import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
        <ul className={styles.links}>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
        </ul>
      </div>
      <div className={styles.right}>
        <div className={styles.socialIcons}>
          <Image src="/facebook.png" alt="Facebook" width={15} height={15} />
          <Image src="/twitter.png" alt="Twitter" width={15} height={15} />
          <Image src="/instagram.png" alt="Instagram" width={15} height={15} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
