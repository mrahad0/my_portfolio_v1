import { ArrowUpRight } from "lucide-react";
import styles from "./page.module.css";
import Footer from "@/components/Footer/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Portfolio",
  description: "Explore my projects and work across web development, mobile apps, and UI/UX design.",
};

const categories = ["All", "Web", "Mobile", "Backend", "UI/UX"];

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web",
    description: "Full-featured e-commerce with payment integration and admin dashboard.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    color: "#00aaff",
  },
  {
    title: "Task Management App",
    category: "Mobile",
    description: "Cross-platform mobile app with real-time collaboration features.",
    tags: ["Flutter", "Firebase", "Dart"],
    color: "#7c3aed",
  },
  {
    title: "Analytics Dashboard",
    category: "Web",
    description: "Interactive analytics dashboard with data visualization and reporting.",
    tags: ["React", "D3.js", "TypeScript"],
    color: "#10b981",
  },
  {
    title: "Social Media API",
    category: "Backend",
    description: "RESTful API with authentication, rate limiting, and documentation.",
    tags: ["Express", "PostgreSQL", "Redis"],
    color: "#f59e0b",
  },
  {
    title: "Fitness Tracker",
    category: "Mobile",
    description: "Health and fitness tracking app with workout plans and progress monitoring.",
    tags: ["Flutter", "SQLite", "BLoC"],
    color: "#ef4444",
  },
  {
    title: "Design System",
    category: "UI/UX",
    description: "Comprehensive design system with reusable components and guidelines.",
    tags: ["Figma", "Storybook", "CSS"],
    color: "#8b5cf6",
  },
  {
    title: "Chat Application",
    category: "Web",
    description: "Real-time messaging application with group chats, file sharing, and video calls.",
    tags: ["Socket.io", "React", "WebRTC"],
    color: "#06b6d4",
  },
  {
    title: "CMS Platform",
    category: "Backend",
    description: "Headless CMS with content management, media library, and API generation.",
    tags: ["Node.js", "GraphQL", "S3"],
    color: "#d946ef",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className={styles.projectsPage}>
        <div className={styles.pageHeader}>
          <span className="subtitle">My Work</span>
          <h1 className={styles.pageTitle}>Projects</h1>
          <p className={styles.pageDesc}>
            A curated collection of my recent projects showcasing my skills in
            web development, mobile apps, and design.
          </p>
        </div>

        {/* Filter tabs */}
        <div className={styles.filterTabs}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${cat === "All" ? styles.filterBtnActive : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {projects.map((project, i) => (
            <div key={i} className={styles.projectCard}>
              <div
                className={styles.projectThumb}
                style={{
                  background: `linear-gradient(135deg, ${project.color}18, ${project.color}05)`,
                }}
              >
                <div
                  className={styles.thumbCenter}
                  style={{ borderColor: `${project.color}25` }}
                >
                  <span style={{ color: project.color, fontSize: 28, fontWeight: 700 }}>
                    0{i + 1}
                  </span>
                </div>
              </div>

              <div className={styles.projectInfo}>
                <span className={styles.projectCat}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className={styles.projectArrow}>
                <ArrowUpRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
