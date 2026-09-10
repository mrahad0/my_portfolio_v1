import { ArrowUpRight, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import styles from "./FeaturedProjects.module.css";

const projects = [
  {
    title: "Retro Remix",
    category: "Ux Design",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "Mystical Meodows",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "Cybernetic Dreams",
    category: "Brand Marketing",
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "Neon Nights",
    category: "App Design",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "Zenith UI Kit",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "Velocity Dashboard",
    category: "Data Visualization",
    year: "2023",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600",
  },
];

export default function FeaturedProjects() {
  return (
    <section className={styles.featured}>
      <div className={styles.sectionWrapper}>
        <div className={styles.headerBar}>
          <div className={styles.headerTitleBtn}>
            Projects
          </div>
          
          <Link href="/projects" className={styles.viewAllBtn}>
            View All <ArrowUpRight size={14} />
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {project.year && (
                  <span className={styles.projectYear}>{project.year}</span>
                )}
              </div>

              <div className={styles.projectInfo}>
                <div className={styles.projectText}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <span className={styles.projectCategory}>{project.category}</span>
                </div>
                <Link href="/projects/retro-remix" className={styles.projectLinkBtn}>
                  <ChevronRight size={16} className={styles.defaultIcon} />
                  <ArrowRight size={16} className={styles.hoverIcon} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
