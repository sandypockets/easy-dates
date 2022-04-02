import React, { useState } from "react";
import styles from "./CallToAction.module.css";

export default function CallToAction() {
  const [isCopied, setIsCopied] = useState(false);

  function clickToCopy() {
    setIsCopied(true);
    navigator.clipboard.writeText("npm install easy-dates");
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Sound good?</h3>
      <p className={styles.paragraph}>
        It's as easy as running{" "}
        <span className={`${styles.copied} ${isCopied ? "" : styles.hidden}`}>
          Copied
        </span>
        <code
          onClick={clickToCopy}
          className={`${styles.code} ${isCopied ? styles.codeIsCopied : ""}`}
        >
          npm install easy-dates
        </code>{" "}
        in your terminal.
      </p>
      <p className={styles.paragraphTwo}>
        Check the <a href="/docs/intro">docs</a> for detailed instructions.
      </p>
    </div>
  );
}
