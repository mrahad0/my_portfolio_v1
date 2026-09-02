import styles from "./Marquee.module.css";

export default function Marquee() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        <span>★ LATEST WORKS AND FEATURED ★</span>
        <span>LATEST WORKS AND FEATURED ★</span>
        <span>LATEST WORKS AND FEATURED ★</span>
        <span>LATEST WORKS AND FEATURED ★</span>
      </div>
      <div className={styles.marqueeContent}>
        <span>★ LATEST WORKS AND FEATURED ★</span>
        <span>LATEST WORKS AND FEATURED ★</span>
        <span>LATEST WORKS AND FEATURED ★</span>
        <span>LATEST WORKS AND FEATURED ★</span>
      </div>
    </div>
  );
}
