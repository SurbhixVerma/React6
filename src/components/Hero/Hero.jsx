import React from "react";

import styles from "./Hero.module.css";
import Img1 from "./hero/Surbhi.jpeg"


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Surbhi</h1>
        <p className={styles.description}>
          I'm a full-stack developer with profficiency in React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:surbhiv2278@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={Img1}
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};