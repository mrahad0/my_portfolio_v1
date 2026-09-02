import styles from "./Experience.module.css";

const experiences = [
  {
    title: "Senior Product Designer",
    company: "Google",
    date: "2021 - Present",
    description: "Leading the design of the next generation of cloud tools.",
  },
  {
    title: "UI/UX Designer",
    company: "Apple",
    date: "2018 - 2021",
    description: "Designed core experiences for iOS and macOS applications.",
  },
];

const education = [
  {
    title: "MSc in Computer Science",
    company: "Stanford University",
    date: "2016 - 2018",
    description: "Specialized in Human-Computer Interaction.",
  },
  {
    title: "BSc in Software Engineering",
    company: "MIT",
    date: "2012 - 2016",
    description: "Focus on UI engineering and algorithms.",
  },
];

export default function Experience() {
  return (
    <section className={styles.experienceSection}>
      <div className={styles.grid2}>
        
        {/* Experience Column */}
        <div className={styles.column}>
          <div className={styles.columnHeader}>
            <span className="subtitle">Resume</span>
            <h2 className={styles.sectionTitle}>Experience</h2>
          </div>
          <div className={styles.timeline}>
            {experiences.map((exp, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <span className={styles.date}>{exp.date}</span>
                  <h3 className={styles.title}>{exp.title}</h3>
                  <span className={styles.company}>{exp.company}</span>
                  <p className={styles.description}>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className={styles.column}>
          <div className={styles.columnHeader}>
            <span className="subtitle">Education</span>
            <h2 className={styles.sectionTitle}>Education</h2>
          </div>
          <div className={styles.timeline}>
            {education.map((edu, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <span className={styles.date}>{edu.date}</span>
                  <h3 className={styles.title}>{edu.title}</h3>
                  <span className={styles.company}>{edu.company}</span>
                  <p className={styles.description}>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
