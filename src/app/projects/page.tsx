import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import styles from "./page.module.css";
import Footer from "@/components/Footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Portfolio",
  description: "Explore my projects and work across web development, mobile apps, and UI/UX design.",
};

const baseProjects = [
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "Light Play",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "Synthwave Sympony",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "Mindscapes",
    category: "Robotic Automation",
    image: "https://images.unsplash.com/photo-1618410320928-17fc2ac3ab52?auto=format&fit=crop&q=80&w=800&h=600",
  },
];

const projects = [...baseProjects, ...baseProjects, ...baseProjects];

export default function ProjectsPage() {
  return (
    <>
      <section className={styles.projectsPage}>
        <div className={styles.headerBar}>
          <div className={styles.headerTitleBtn}>
            Projects <ArrowUpRight size={14} style={{ marginLeft: 6 }} />
          </div>
          
          <div className={styles.marqueeContainer}>
            <div className={styles.marqueeText}>
              It is a long established fact that a reader will distracted by the readable content of a page when looking at its readable ⌘ It is a long established fact that a reader will distracted by the readable content of a page when looking ⌘ It is a long established fact that a reader will distracted by the readable content of a page when looking at its readable
            </div>
          </div>
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
              </div>

              <div className={styles.projectInfo}>
                <div className={styles.projectText}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <span className={styles.projectCategory}>{project.category}</span>
                </div>
                <button className={styles.projectLinkBtn}>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
