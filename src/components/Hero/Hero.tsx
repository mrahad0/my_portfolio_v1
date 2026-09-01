import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.subtitleWrap}>
          <span className="subtitle">👋 Hello, I&apos;m Rahatul</span>
        </div>

        <h1 className={styles.heroTitle}>
          I Craft{" "}
          <span className={styles.highlight}>Digital</span>{" "}
          <br />
          Experiences That{" "}
          <span className={styles.highlight}>Matter</span>
        </h1>

        <p className={styles.heroDesc}>
          A passionate Full Stack Developer specializing in building
          exceptional digital experiences. I design and code beautifully
          simple things, and I love what I do.
        </p>

        <div className={styles.heroCta}>
          <Link href="/projects" className="theme-btn">
            View Projects
            <ArrowUpRight size={14} />
          </Link>
          <Link href="/contact" className="theme-btn">
            Let&apos;s Talk
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className={styles.heroDecor}>
        <div className={styles.decorLine} />
        <div className={styles.decorDot} />
        <div className={styles.decorCircle} />
      </div>
    </section>
  );
}
