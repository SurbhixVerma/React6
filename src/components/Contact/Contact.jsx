import React from "react";

import styles from "./Contact.module.css";
import Img1 from "./contact/emailIcon.png";
import Img2 from "./contact/githubIcon.png";
import Img3 from "./contact/linkedinIcon.png";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
        <img src={Img1} />
          <a href="mailto:surbhiv2278@gmail.com">surbhiv2278@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={Img2}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/surbhi-verma-638156274/">linkedin.com/SurbhiVerma</a>
        </li>
        <li className={styles.link}>
          <img src={Img3} alt="Github icon" />
          <a href="https://github.com/SurbhixVerma">github.com/SurbhiVerma</a>
        </li>
      </ul>
    </footer>
  );
};