"use client";

import { useRef } from "react";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Larry Daley",
    role: "Product Designer",
    content: "I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience and industries.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    name: "Manny William",
    role: "Full Stack Developer",
    content: "Working with him was a breeze. He understands complex requirements and translates them into beautiful, functional interfaces with robust backend support.",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    name: "Sarah Johnson",
    role: "CEO at TechCorp",
    content: "Rahatul is an exceptional developer. His attention to detail and ability to deliver high-quality code on time is unmatched in the industry.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = (scrollRef.current.clientWidth + 24) / 2;
      scrollRef.current.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.sectionWrapper}>
        
        <div className={styles.headerBar}>
          <div className={styles.titleBox}>
            Client Reviews
          </div>
          <div className={styles.headerNav}>
            <button className={styles.navBtn} onClick={() => scroll('left')}>
              <ChevronLeft size={16} />
            </button>
            <button className={styles.navBtn} onClick={() => scroll('right')}>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className={styles.scrollContainer} ref={scrollRef}>
          <div className={styles.slider}>
            {testimonials.map((test, i) => (
              <div key={i} className={styles.testimonialCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.avatarBox}>
                    <Image 
                      src={test.image} 
                      alt={test.name} 
                      width={60} 
                      height={60} 
                      className={styles.clientImage}
                    />
                    <div className={styles.dashedLine}></div>
                  </div>
                  <div className={styles.nameBox}>
                    <div className={styles.nameDetails}>
                      <h4 className={styles.clientName}>{test.name}</h4>
                      <span className={styles.clientRole}>{test.role}</span>
                    </div>
                    <div className={styles.iconBox}>
                      <Quote size={18} />
                    </div>
                  </div>
                </div>
                
                <div className={styles.cardBody}>
                  <p className={styles.content}>{test.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
