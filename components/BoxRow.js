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
              <Image src="/keyboard.svg" alt="Hackathon" width={32} height={32} />
            </div>
            <p className={styles.boxText}>Hackathon</p>
          </div>
          <p className={styles.boxSubtext}>Unlock your creativity and push the boundaries
 of AI at our 48 hour hackathon.</p>
        </div>
        <div className={styles.box}>
          <div className={styles.boxContent}>
            <div className={styles.boxImage}>
              <Image src="/summit.svg" alt="Summit" width={32} height={32} />
            </div>
            <p className={styles.boxText}>Summit</p>
          </div>
          <p className={styles.boxSubtext}>Join top experts and explore the latest in AI
 at our mini conference.</p>
        </div>
        <div className={styles.box}>
          <div className={styles.boxContent}>
            <div className={styles.boxImage}>
              <Image src="/events.svg" alt="Events" width={32} height={32} />
            </div>
            <p className={styles.boxText}>Events</p>
          </div>
          <p className={styles.boxSubtext}>Discover the future of AI through exclusive mixers, fireside chats, and more.</p>
        </div>
      </div>
    </div>
  );
}

export default BoxRow;
