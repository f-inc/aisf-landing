import React from "react";
import styles from "../styles/BoxRow.module.css";

function BoxRow() {
  return (
    <div className={styles.row}>
      <div className={styles.box}>
        <p className={styles.boxText}>Hackathon</p>
        <p className={styles.boxSubtext}>Unlock your creativity and push the boundaries
 of AI at our exciting hackathon event.</p>
      </div>
      <div className={styles.box}>
        <p className={styles.boxText}>Summit</p>
        <p className={styles.boxSubtext}>Join top experts and explore the latest in AI
 at the San Francisco Summit.</p>
      </div>
      <div className={styles.box}>
        <p className={styles.boxText}>Events</p>
        <p className={styles.boxSubtext}>Discover the future of AI through expert talks
 and hands-on experiences at SF's AI events.</p>
      </div>
    </div>
  );
}

export default BoxRow;
