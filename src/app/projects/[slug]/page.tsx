import { ArrowUpRight, ChevronRight, ArrowRight, User, Calendar, Briefcase, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Footer from "@/components/Footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retro Remix — Project Details",
  description: "Detailed view of the Retro Remix project.",
};

const nextProjects = [
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

export default function ProjectDetailsPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <section className={styles.detailsPage}>
        {/* Top Split Section */}
        <div className={styles.topSection}>
          <div className={styles.topLeft}>
            <div className={styles.headerBar}>
              <div className={styles.headerTitleBtn}>
                Projects <ArrowUpRight size={14} style={{ marginLeft: 6 }} />
              </div>
              <div className={styles.marqueeContainer}>
                <div className={styles.marqueeText}>
                  It is a long established fact that a reader will distracted by the readable content of a page when looking at its readable ⌘ It is a long established fact that a reader will distracted by the readable content of a page when looking
                </div>
              </div>
            </div>

            <div className={styles.titleSection}>
              <h1 className={styles.projectTitle}>Retro Remix</h1>
              <p className={styles.projectDesc}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </p>
            </div>
          </div>

          <div className={styles.topRight}>
            <div className={styles.infoBox}>
              <div className={styles.iconWrapper}><User size={16} /></div>
              <div className={styles.infoText}>
                <span className={styles.infoLabel}>Client:</span> David Henderson
              </div>
            </div>

            <div className={styles.infoBox}>
              <div className={styles.iconWrapper}><Briefcase size={16} /></div>
              <div className={styles.infoText}>
                <span className={styles.infoLabel}>Services:</span> Web Development
              </div>
            </div>
            <div className={styles.infoBox}>
              <div className={styles.iconWrapper}><Globe size={16} /></div>
              <div className={styles.infoText}>
                <span className={styles.infoLabel}>Website:</span> Live Preview
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className={styles.heroImageWrapper}>
          <Image 
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200&h=600" 
            fill 
            alt="Hero" 
            className={styles.coverImg} 
          />
        </div>

        {/* Problem / Solution */}
        <div className={styles.textGrid}>
          <div className={styles.textBox}>
            <div className={styles.badge}>Problem</div>
            <p className={styles.boxText}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
            <br />
            <p className={styles.boxText}>As opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
          </div>
          <div className={styles.textBox}>
            <div className={styles.badge}>Solution</div>
            <p className={styles.boxText}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
            <br />
            <p className={styles.boxText}>As opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
          </div>
        </div>

        {/* 2-Column Image Grid */}
        <div className={styles.imageGrid}>
          <div className={styles.gridImageWrapper}>
            <Image src="https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=600" fill alt="Grid 1" className={styles.coverImg} />
          </div>
          <div className={styles.gridImageWrapper}>
            <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600" fill alt="Grid 2" className={styles.coverImg} />
          </div>
        </div>

        {/* Detailed Text Box */}
        <div className={styles.fullTextBox}>
          <p className={styles.boxText}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>


        {/* Next Projects */}
        <div className={styles.nextProjectsSection}>
          <div className={styles.headerBar}>
            <div className={styles.headerTitleBtn}>
              Projects <ArrowUpRight size={14} style={{ marginLeft: 6 }} />
            </div>
            <div className={styles.marqueeContainer}>
              <div className={styles.marqueeText}>
                It is a long established fact that a reader will distracted by the readable content of a page when looking at its readable ⌘ It is a long established fact that a reader will distracted by the readable content of a page when looking
              </div>
            </div>
          </div>

          <div className={styles.projectsGrid}>
            {nextProjects.map((project, i) => (
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
      <Footer />
    </>
  );
}
