import styles from "./Contact.module.css";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.sectionHeader}>
        <span className="subtitle">Contact</span>
        <h2 className={styles.sectionTitle}>Let&apos;s Work Together!</h2>
      </div>

      <div className={styles.contactGrid}>
        {/* Left: Contact Form */}
        <div className={`${styles.formCard} common-box`}>
          <form className={styles.contactForm}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Name" className={styles.input} required />
            </div>
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Email" className={styles.input} required />
            </div>
            <div className={styles.inputGroup}>
              <textarea placeholder="Message" className={styles.textarea} rows={5} required></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className={styles.infoWrapper}>
          <div className={`${styles.infoCard} common-box`}>
            <div className={styles.iconBox}>
              <Mail size={20} />
            </div>
            <div className={styles.infoContent}>
              <span className={styles.infoLabel}>Email</span>
              <a href="mailto:rahatul@example.com" className={styles.infoText}>rahatul@example.com</a>
            </div>
          </div>
          
          <div className={`${styles.infoCard} common-box`}>
            <div className={styles.iconBox}>
              <MapPin size={20} />
            </div>
            <div className={styles.infoContent}>
              <span className={styles.infoLabel}>Address</span>
              <span className={styles.infoText}>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
