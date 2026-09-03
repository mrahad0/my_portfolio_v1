"use client";

import { useEffect, useRef, useState } from "react";
import { Hexagon, Terminal, Compass, Type, Mail, Feather, Code, Github } from "lucide-react";
import styles from "./Skills.module.css";

const skills = [
  { name: "JavaScript / TypeScript", level: 92 },
  { name: "React / Next.js", level: 88 },
  { name: "Node.js / Express", level: 85 },
  { name: "Flutter / Dart", level: 80 },
  { name: "Python / Django", level: 75 },
  { name: "MongoDB / PostgreSQL", level: 82 },
];

const stackItems = [
  {
    name: "Framer",
    desc: "Start you dream sith with AI. Zero code, Maximum Speed.",
    icon: Hexagon,
    color: "#fff",
    bg: "#000",
  },
  {
    name: "Hyper",
    desc: "Hyper is an electron based terminal Application.",
    icon: Terminal,
    color: "#fff",
    bg: "#000",
  },
  {
    name: "Brave Browser",
    desc: "The best privacy policy online network.",
    icon: Compass,
    color: "#ff2000",
    bg: "#fff",
  },
  {
    name: "iA Writer",
    desc: "Pure writing pleasure with in your hands.",
    icon: Type,
    color: "#000",
    bg: "#fff",
  },
  {
    name: "Superhuman",
    desc: "The fastest Email Experience ever made.",
    icon: Mail,
    color: "#fff",
    bg: "#333",
  },
  {
    name: "Typefully",
    desc: "Write better tweets. Grow your audience.",
    icon: Feather,
    color: "#fff",
    bg: "#1da1f2",
  },
  {
    name: "VS Code",
    desc: "The most popular code editor for web developers.",
    icon: Code,
    color: "#fff",
    bg: "#007acc",
  },
  {
    name: "GitHub",
    desc: "Where the world builds and collaborates on software.",
    icon: Github,
    color: "#fff",
    bg: "#24292e",
  }
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
      <div className={styles.topHeader}>
        <div className={styles.titleBox}>My Expertise</div>
      </div>

      <div className={styles.sectionWrapper}>
        <div className={styles.skillsLayout}>
          {/* Skill bars (Left) */}
          <div className={styles.skillBars}>
            <h3 className={styles.sectionTitle}>Skills & Technologies</h3>
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

          {/* Tech stack items (Right) */}
          <div className={styles.techStack}>
            <h3 className={styles.sectionTitle}>Stack</h3>

            <div className={styles.stackGrid}>
              {stackItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className={styles.stackItem}>
                    <div 
                      className={styles.stackIconWrapper}
                      style={{ background: item.bg, color: item.color }}
                    >
                      <Icon size={20} />
                    </div>
                    <div className={styles.stackInfo}>
                      <h4 className={styles.stackName}>{item.name}</h4>
                      <p className={styles.stackDesc}>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
