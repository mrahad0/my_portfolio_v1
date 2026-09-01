import { Code, Palette, Smartphone, Globe, Database, Zap } from "lucide-react";
import styles from "./Services.module.css";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building modern, responsive web applications with cutting-edge technologies and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Creating cross-platform mobile applications using Flutter and React Native for seamless user experiences.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Designing intuitive and beautiful interfaces that delight users and drive engagement.",
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Building scalable and secure server-side applications with modern frameworks and cloud services.",
  },
  {
    icon: Globe,
    title: "API Integration",
    description:
      "Connecting and integrating third-party APIs and services for enhanced functionality.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Optimizing applications for speed, scalability, and overall performance.",
  },
];

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.sectionHeader}>
        <span className="subtitle">What I Do</span>
        <h2 className={styles.sectionTitle}>My Services</h2>
      </div>

      <div className={styles.servicesGrid}>
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={i}
              className={styles.serviceCard}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={styles.serviceIcon}>
                <Icon size={24} />
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
