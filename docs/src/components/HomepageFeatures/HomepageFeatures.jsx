import React from "react";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Easy to use",
    description: (
      <>
        All functions and parameters use human readable words. No more weird
        letter codes to get the right output.
      </>
    ),
  },
  {
    title: "Focus on building",
    description: (
      <>
        Forget about whether dates are returned in seconds or milliseconds.
        <code>easy-dates</code> removes the complexity from dates.
      </>
    ),
  },
  {
    title: "Tiny bundle size",
    description: (
      <>
        Many of the 'go to' date libraries are over 4mb, and deprecated. At only a few kilobytes, <code>easy-dates</code> is tiny. And we plan to keep it that way.
      </>
    ),
  }
];

function Feature({ title, description }) {
  return (
    <div className={styles.feature}>
      <h3 className={styles.title}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresContainer}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
