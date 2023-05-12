import React from "react";
import styles from "../src/styles/ListItem.module.css";
import Image from "next/image";
import Modal from "./Modal";

const ListItem = (props) => {
  return (
    <div
      className={styles.main}
      data-bs-toggle="modal"
      data-bs-target={"#userModal" + props.id}
    >
      <Modal
        bio={props.bio}
        pic={props.pic}
        fname={props.fname}
        lname={props.lname}
        username={props.username}
        job={props.job}
        email={props.email}
        id={props.id}
      />
      <div className={styles.imgSection}>
        <Image src={props.pic} width={50} alt="img" />
      </div>
      <div className={styles.usernameSection}>
        {props.fname} {props.lname}
      </div>
    </div>
  );
};

export default ListItem;
