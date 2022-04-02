import React from "react";
import styles from "./HomepageHero.module.css";

export default function HomepageHero() {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>
        <span>
          <img className={styles.svg} src="img/calendar-dark.svg" width={75} />
        </span>
        <span className={styles.title}>
          <code className={styles.titleCode}>easy-dates</code>
        </span>
      </h1>
      <h2 className={styles.tagline}>
        <p>
          <span className={styles.nonCode}>Forget nonsense like</span>
          <code className={styles.code}>
            new Date(Date.now()).getTime() / 1000
          </code>
        </p>
        <p>
          <span className={styles.nonCode}>Use</span>
          <a href="/docs/functions/dateNowUnix">
            <code className={styles.code}>dateNowUnix()</code>
          </a>
          <span className={styles.nonCode}> instead.</span>
        </p>
      </h2>
    </div>
  );
}
