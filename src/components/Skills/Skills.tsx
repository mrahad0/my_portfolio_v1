"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Skills.module.css";

const skills = [
  { name: "JavaScript / TypeScript", level: 92 },
  { name: "React / Next.js", level: 88 },
  { name: "Node.js / Express", level: 85 },
  { name: "Flutter / Dart", level: 80 },
  { name: "Python / Django", level: 75 },
  { name: "MongoDB / PostgreSQL", level: 82 },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js",
  "Flutter", "Dart", "Python", "Django",
  "MongoDB", "PostgreSQL", "Firebase", "Docker",
  "Git", "Figma", "AWS", "GraphQL",
];

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.skills} ref={ref}>
      <div className={styles.sectionHeader}>
        <span className="subtitle">My Expertise</span>
        <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
      </div>

      <div className={styles.skillsLayout}>
        {/* Skill bars */}
        <div className={styles.skillBars}>
          {skills.map((skill, i) => (
            <div key={skill.name} className={styles.skillItem}>
              <div className={styles.skillInfo}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillPercent}>{skill.level}%</span>
              </div>
              <div className={styles.skillTrack}>
                <div
                  className={styles.skillFill}
                  style={{
                    width: visible ? `${skill.level}%` : "0%",
                    transitionDelay: `${i * 0.15}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack tags */}
        <div className={styles.techStack}>
          <h3 className={styles.techTitle}>Tech Stack</h3>
          <div className={styles.techTags}>
            {techStack.map((tech, i) => (
              <span
                key={tech}
                className={styles.techTag}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
