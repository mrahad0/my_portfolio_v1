import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import styles from "./FeaturedProjects.module.css";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A full-featured e-commerce platform with payment integration, admin dashboard, and real-time inventory management.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    color: "#00aaff",
  },
  {
    title: "Task Management App",
    category: "Mobile App",
    description:
      "Cross-platform mobile application for team collaboration with real-time updates and push notifications.",
    tags: ["Flutter", "Firebase", "Dart"],
    color: "#7c3aed",
  },
  {
    title: "Portfolio Dashboard",
    category: "UI/UX Design",
    description:
      "Modern analytics dashboard with interactive charts, data visualization, and responsive design.",
    tags: ["React", "D3.js", "TypeScript"],
    color: "#10b981",
  },
  {
    title: "Social Media API",
    category: "Backend",
    description:
      "RESTful API service with authentication, rate limiting, and comprehensive documentation.",
    tags: ["Express", "PostgreSQL", "Redis"],
    color: "#f59e0b",
  },
];

export default function FeaturedProjects() {
  return (
    <section className={styles.featured}>
      <div className={styles.sectionHeader}>
        <div className={styles.headerLeft}>
          <span className="subtitle">Portfolio</span>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
        </div>
        <Link href="/projects" className="theme-btn">
          View All
          <ArrowUpRight size={14} />
        </Link>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project, i) => (
          <div key={i} className={styles.projectCard}>
            <div
              className={styles.projectThumb}
              style={{
                background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
              }}
            >
              <div
                className={styles.projectThumbInner}
                style={{ borderColor: `${project.color}20` }}
              >
                <span
                  className={styles.projectNumber}
                  style={{ color: project.color }}
                >
                  0{i + 1}
                </span>
              </div>
            </div>

            <div className={styles.projectContent}>
              <span className={styles.projectCategory}>
                {project.category}
              </span>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.description}</p>
              <div className={styles.projectTags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.projectArrow}>
              <ArrowUpRight size={18} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
