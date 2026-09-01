import {
  Briefcase,
  GraduationCap,
  Download,
  Calendar,
  Code,
} from "lucide-react";
import styles from "./page.module.css";
import Footer from "@/components/Footer/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Portfolio",
  description: "Learn about my background, experience, education, and skills as a developer.",
};

const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2023 — Present",
    description:
      "Leading the frontend architecture and building scalable web applications using Next.js and TypeScript.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Agency",
    period: "2022 — 2023",
    description:
      "Developed responsive web and mobile applications for various clients across different industries.",
  },
  {
    title: "Junior Developer",
    company: "StartupXYZ",
    period: "2021 — 2022",
    description:
      "Started my career building frontend interfaces and learning backend development with Node.js.",
  },
];

const education = [
  {
    title: "B.Sc. in Computer Science",
    institution: "University of Dhaka",
    period: "2018 — 2022",
    description:
      "Focused on software engineering, data structures, and algorithms.",
  },
  {
    title: "Higher Secondary Certificate",
    institution: "Dhaka College",
    period: "2016 — 2018",
    description: "Science group with focus on Mathematics and Physics.",
  },
];

const personalInfo = [
  { label: "Name", value: "Md Rahatul Islam" },
  { label: "Location", value: "Dhaka, Bangladesh" },
  { label: "Email", value: "rahatul@example.com" },
  { label: "Experience", value: "3+ Years" },
  { label: "Languages", value: "Bangla, English" },
  { label: "Availability", value: "Open to work" },
];

export default function AboutPage() {
  return (
    <>
      <section className={styles.aboutPage}>
        {/* Page Header */}
        <div className={styles.pageHeader}>
          <span className="subtitle">Know Me</span>
          <h1 className={styles.pageTitle}>About Me</h1>
        </div>

        {/* Bio Section */}
        <div className={styles.bioSection}>
          <div className={styles.bioContent}>
            <p className={styles.bioText}>
              I&apos;m a passionate Full Stack Developer from Dhaka, Bangladesh,
              with over 3 years of experience in building modern web and mobile
              applications. I specialize in creating exceptional digital
              experiences using cutting-edge technologies like Next.js, Flutter,
              and Node.js.
            </p>
            <p className={styles.bioText}>
              I believe in writing clean, maintainable code and building
              products that make a real difference. When I&apos;m not coding,
              you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer
              community.
            </p>
            <a href="#" className="theme-btn">
              <Download size={14} />
              Download CV
            </a>
          </div>

          {/* Personal Info */}
          <div className={styles.personalInfo}>
            {personalInfo.map((info) => (
              <div key={info.label} className={styles.infoItem}>
                <span className={styles.infoLabel}>{info.label}</span>
                <span className={styles.infoValue}>{info.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className={styles.timelineSection}>
          <div className={styles.timelineHeader}>
            <Briefcase size={20} className={styles.timelineIcon} />
            <h2 className={styles.sectionTitle}>Experience</h2>
          </div>
          <div className={styles.timeline}>
            {experience.map((item, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <div className={styles.timelineTop}>
                    <div>
                      <h3 className={styles.timelineTitle}>{item.title}</h3>
                      <p className={styles.timelineCompany}>
                        <Code size={12} /> {item.company}
                      </p>
                    </div>
                    <span className={styles.timelinePeriod}>
                      <Calendar size={12} /> {item.period}
                    </span>
                  </div>
                  <p className={styles.timelineDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div className={styles.timelineSection}>
          <div className={styles.timelineHeader}>
            <GraduationCap size={20} className={styles.timelineIcon} />
            <h2 className={styles.sectionTitle}>Education</h2>
          </div>
          <div className={styles.timeline}>
            {education.map((item, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <div className={styles.timelineTop}>
                    <div>
                      <h3 className={styles.timelineTitle}>{item.title}</h3>
                      <p className={styles.timelineCompany}>
                        <GraduationCap size={12} /> {item.institution}
                      </p>
                    </div>
                    <span className={styles.timelinePeriod}>
                      <Calendar size={12} /> {item.period}
                    </span>
                  </div>
                  <p className={styles.timelineDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
