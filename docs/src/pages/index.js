import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "../components/HomepageFeatures/HomepageFeatures";
import HomepageHero from "../components/HomepageHero/HomepageHero";
import CallToAction from "../components/CallToAction/CallToAction";
import styles from "./index.module.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | JavaScript Dates Library`}
      description="Working with dates in JavaScript has never been easier"
    >
      <div className={styles.container}>
        <HomepageHero />
        <HomepageFeatures />
        <CallToAction />
      </div>
    </Layout>
  );
}
