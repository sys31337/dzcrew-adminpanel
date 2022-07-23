import React from "react";
import Layout from "../../components/layout";
import styles from "./example.module.css";

const Example = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Example !</h1>
      </div>
    </Layout>
  );
};

export default Example;
