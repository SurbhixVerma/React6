import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";


export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                <h2>{skill.title}</h2>
                </div>
              
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};