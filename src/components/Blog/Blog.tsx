import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./Blog.module.css";

const posts = [
  {
    title: "The Future of Web Development in 2026",
    date: "Oct 24, 2026",
    category: "Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    title: "Mastering Next.js 15 App Router",
    date: "Sep 12, 2026",
    category: "Tutorial",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600&h=400",
  },
];

export default function Blog() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.headerLeft}>
          <span className="subtitle">Articles</span>
          <h2 className={styles.sectionTitle}>Latest News</h2>
        </div>
        <Link href="/blog" className="theme-btn">
          View All
          <ArrowUpRight size={14} />
        </Link>
      </div>

      <div className={styles.grid2}>
        {posts.map((post, i) => (
          <div key={i} className={styles.blogCard}>
            <div className={styles.blogImageWrap}>
              <Image 
                src={post.image} 
                alt={post.title} 
                fill
                className={styles.blogImage}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <span className={styles.categoryBadge}>{post.category}</span>
            </div>
            <div className={styles.blogContent}>
              <span className={styles.date}>{post.date}</span>
              <h3 className={styles.title}>{post.title}</h3>
              <div className={styles.readMore}>
                Read More <ArrowUpRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
