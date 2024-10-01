import React from "react";
import ServieImg from "@site/static/img/Services_Overview.png";
import styles from "./styles.module.scss";
import Link from "@docusaurus/Link";

const XfscServices = () => {
  return (
    <div className={styles.serviceContainer}>
      <h2>XFSC SERVICES</h2>
      <img src={ServieImg} />

      <Link to="/xfsc-toolbox" className="primaryBtn">
        Learn More
      </Link>
    </div>
  );
};

export default XfscServices;
