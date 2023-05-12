import React from "react";
import styles from "../src/styles/ListItem.module.css";
import Image from "next/image";

const Modal = (props) => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div
          className="modal fade"
          id="userModal"
          tabIndex="-1"
          aria-labelledby="userModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="userModalLabel">
                  User Details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className={styles.modalBody}>
                  <div className={styles.profileImage}>
                    <Image src={props.pic} width={150} alt="img" />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
