import Image from "next/image";
import styles from "./Testimonials.module.css";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechCorp",
    content: "Rahatul is an exceptional developer. His attention to detail and ability to deliver high-quality code on time is unmatched.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    content: "Working with him was a breeze. He understands complex requirements and translates them into beautiful, functional interfaces.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.sectionHeader}>
        <span className="subtitle">Client Reviews</span>
        <h2 className={styles.sectionTitle}>Testimonials</h2>
      </div>

      <div className={styles.grid2}>
        {testimonials.map((test, i) => (
          <div key={i} className={styles.testimonialCard}>
            <div className={styles.quoteIcon}>
              <Quote size={24} />
            </div>
            <p className={styles.content}>"{test.content}"</p>
            <div className={styles.clientInfo}>
              <Image 
                src={test.image} 
                alt={test.name} 
                width={50} 
                height={50} 
                className={styles.clientImage}
              />
              <div>
                <h4 className={styles.clientName}>{test.name}</h4>
                <span className={styles.clientRole}>{test.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
