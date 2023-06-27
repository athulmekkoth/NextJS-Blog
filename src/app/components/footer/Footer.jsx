import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div>All rights reserved</div>
      <div className={styles.imagecon}>
      <Image src="/facebook.png" alt="abc" width={15} height={15} />
      <Image src="/facebook.png" alt="abc" width={15} height={15}  />
      <Image src="/facebook.png" alt="abc" width={15} height={15}  />
      </div>
    </div>
  );
};

export default Footer;
