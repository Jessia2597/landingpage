import React from "react";
import styles from "./styles.module.scss";

const Box = ({ name, img, href }) => (
  <a className={styles.boxContainer} href={href}>
    <img src={img} alt={name} />
    <h3>{name}</h3>
  </a>
);

export default Box;
