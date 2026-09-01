import styles from "./page.module.css";
import Footer from "@/components/Footer/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Portfolio",
  description: "Browse through my photo gallery showcasing creative works and moments.",
};

const galleryItems = [
  { title: "Creative Workspace", color: "#00aaff", height: "tall" },
  { title: "Code & Coffee", color: "#7c3aed", height: "normal" },
  { title: "Design Process", color: "#10b981", height: "normal" },
  { title: "Team Collaboration", color: "#f59e0b", height: "tall" },
  { title: "Tech Conference", color: "#ef4444", height: "normal" },
  { title: "Late Night Coding", color: "#8b5cf6", height: "normal" },
  { title: "UI Sketches", color: "#06b6d4", height: "tall" },
  { title: "Product Launch", color: "#d946ef", height: "normal" },
  { title: "Hackathon Win", color: "#14b8a6", height: "normal" },
];

export default function GalleryPage() {
  return (
    <>
      <section className={styles.galleryPage}>
        <div className={styles.pageHeader}>
          <span className="subtitle">Visual Stories</span>
          <h1 className={styles.pageTitle}>Gallery</h1>
          <p className={styles.pageDesc}>
            A collection of moments, creative works, and behind-the-scenes
            glimpses of my journey.
          </p>
        </div>

        <div className={styles.galleryGrid}>
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`${styles.galleryItem} ${
                item.height === "tall" ? styles.tall : ""
              }`}
              style={{
                background: `linear-gradient(135deg, ${item.color}15, ${item.color}05)`,
              }}
            >
              <div className={styles.galleryOverlay}>
                <span
                  className={styles.galleryNumber}
                  style={{ color: item.color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.galleryTitle}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
