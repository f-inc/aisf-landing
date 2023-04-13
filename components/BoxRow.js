import React from "react";
import styles from "../styles/BoxRow.module.css";
import Image from 'next/image'

function BoxRow() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.box}>
          <div className={styles.boxContent}>
            <div className={styles.boxImage}>
              <Image src="/keyboard.svg" alt="Keyboard" width={32} height={32} />
            </div>
            <p className={styles.boxText}>Hackathon</p>
          </div>
          <p className={styles.boxSubtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.box}>
          <div className={styles.boxContent}>
            <div className={styles.boxImage}>
              <Image src="/summit.svg" alt="Keyboard" width={32} height={32} />
            </div>
            <p className={styles.boxText}>Summit</p>
          </div>
          <p className={styles.boxSubtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.box}>
          <div className={styles.boxContent}>
            <div className={styles.boxImage}>
              <Image src="/events.svg" alt="Keyboard" width={32} height={32} />
            </div>
            <p className={styles.boxText}>Events</p>
          </div>
          <p className={styles.boxSubtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
}

export default BoxRow;
