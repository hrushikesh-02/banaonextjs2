import React from "react";
import styles from "../src/styles/Detail.module.css";
import Image from "next/image";
import userpic from "../resources/userpic.png";

const Detail = (props) => {
  return (
    <div>
      <div className={styles.detailParent}>
        <h1 className={styles.header}>Users Details</h1>
        <div className={styles.modalBody}>
          <div className={styles.profileImage}>
            <Image src={userpic} width={150} alt="img" />
          </div>
          <div className={styles.username}>{props.username}</div>
          <div className={styles.section}>
            <b>BIO: </b> {props.bio}
          </div>
          <div className={styles.section}>
            <b>FULL NAME: </b> {props.fname} {props.lname}
          </div>
          <div className={styles.section}>
            <b>JOB TITLE: </b>
            {props.job}
          </div>
          <div className={styles.section}>
            <b>EMAIL: </b>
            {props.email}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
