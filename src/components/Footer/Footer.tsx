import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Md Rahatul Islam. All Rights Reserved.
        </p>
        <p className={styles.builtWith}>
          Built with <span className={styles.heart}>♥</span> using Next.js
        </p>
      </div>
    </footer>
  );
}
