import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  // Get current date formatted like "Wednesday, 2 September, 2026"
  const dateOptions: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  };
  const currentDate = new Date().toLocaleDateString('en-GB', dateOptions);

  return (
    <section className={styles.heroGrid}>
      {/* Left Column: Large Image */}
      <div className={`${styles.imageCard} common-box`}>
        <Image
          src="/images/rahatul-profile.jpg"
          alt="Md Rahatul Islam"
          fill
          className={styles.portraitImg}
          priority
        />
      </div>

      {/* Right Column: Content Grid */}
      <div className={styles.rightContent}>
        {/* Top Row: Availability, Date, Contact */}
        <div className={`${styles.topRow} common-box`}>
          <div className={styles.availableBox}>
            <span className={styles.statusDot}></span>
            <span>Available for freelance work</span>
          </div>
          
          <div className={styles.dateBox}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>{currentDate}</span>
          </div>

          <Link href="/contact" className={styles.contactBox}>
            <span>Contact Me</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Bottom Row: Bio and Map */}
        <div className={styles.bottomRow}>
          {/* Bio Card */}
          <div className={`${styles.bioCard} common-box`}>
            <span className={styles.subtitle}>A WEB DEVELOPER</span>
            
            <h1 className={styles.heroTitle}>
              Rahatul 👋
            </h1>

            <p className={styles.heroDesc}>
              I am a Bangladesh-based product designer and full-stack developer with a focus on web design, backend architecture, and visual development. I have a diverse range of experience across industries.
            </p>

            <div className={styles.signatureBox}>
              <div className={styles.signaturePlaceholder}>Signature</div>
            </div>
          </div>

          {/* Location Card - Clickable to open real map */}
          <a 
            href="https://maps.app.goo.gl/YourGoogleMapsLink" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${styles.locationCard} common-box`}
          >
            <div className={styles.locationTop}>
              <span className={styles.address}>Dhaka, BD</span>
              <span className={styles.countryTag}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                BD
              </span>
            </div>
            
            {/* Map Graphic (Rotating Earth) */}
            <div className={styles.mapGraphic}>
              <Image 
                src="/images/earth.png"
                alt="Earth Globe"
                width={240}
                height={240}
                className={styles.earthImage}
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
