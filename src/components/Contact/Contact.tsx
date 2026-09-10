import styles from "./Contact.module.css";
import { Map, Headphones } from "lucide-react";

export default function Contact() {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.sectionHeader}>
        <div className={styles.titleBox}>Contact</div>
      </div>
      <div className={styles.contactGrid}>
        {/* Left: Contact Form */}
        <div className={styles.formCard}>
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
              Submit
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className={styles.addressCard}>
          <div className={styles.addressBadge}>Address</div>
          
          <div className={styles.timeline}>
            {/* Item 1 */}
            <div className={styles.timelineItem}>
              <div className={styles.iconCol}>
                <div className={styles.iconBox}>
                  <Map size={18} />
                </div>
                <div className={styles.connectorLine}></div>
              </div>
              <div className={styles.contentBox}>
                <h4 className={styles.contentTitle}>Visit Me</h4>
                <p className={styles.contentText}>16/9, Down Street, Edinburgh<br />United Kingdom</p>
              </div>
            </div>
            
            {/* Item 2 */}
            <div className={styles.timelineItem}>
              <div className={styles.iconCol}>
                <div className={styles.iconBox}>
                  <Headphones size={18} />
                </div>
              </div>
              <div className={styles.contentBox}>
                <h4 className={styles.contentTitle}>Contact Info</h4>
                <p className={styles.contentText}>+1-2847-899, +1-2847-899<br />yourcompanyemail@mail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
