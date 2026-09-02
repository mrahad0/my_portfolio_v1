import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import styles from "./FeaturedProjects.module.css";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A full-featured e-commerce platform with payment integration, admin dashboard, and real-time inventory management.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    title: "Task Management App",
    category: "Mobile App",
    description:
      "Cross-platform mobile application for team collaboration with real-time updates and push notifications.",
    tags: ["Flutter", "Firebase", "Dart"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    title: "Portfolio Dashboard",
    category: "UI/UX Design",
    description:
      "Modern analytics dashboard with interactive charts, data visualization, and responsive design.",
    tags: ["React", "D3.js", "TypeScript"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    title: "Social Media API",
    category: "Backend",
    description:
      "RESTful API service with authentication, rate limiting, and comprehensive documentation.",
    tags: ["Express", "PostgreSQL", "Redis"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600&h=400",
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
            <div className={styles.projectThumb}>
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className={styles.projectImage}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
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
