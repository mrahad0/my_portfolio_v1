"use client";

import { Mail, MapPin, Phone, Send, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import styles from "./page.module.css";
import Footer from "@/components/Footer/Footer";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rahatul@example.com",
    href: "mailto:rahatul@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1XXX-XXXXXX",
    href: "tel:+8801000000000",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "#",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <section className={styles.contactPage}>
        <div className={styles.pageHeader}>
          <span className="subtitle">Get In Touch</span>
          <h1 className={styles.pageTitle}>Contact Me</h1>
          <p className={styles.pageDesc}>
            Have a project in mind or just want to say hello? Feel free to reach
            out. I&apos;m always open to new opportunities and collaborations.
          </p>
        </div>

        <div className={styles.contactLayout}>
          {/* Contact Form */}
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className={styles.formInput}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.formLabel}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project inquiry"
                required
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={6}
                className={styles.formTextarea}
              />
            </div>

            <button type="submit" className="theme-btn">
              <Send size={14} />
              Send Message
            </button>
          </form>

          {/* Contact Info Sidebar */}
          <div className={styles.contactSidebar}>
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <a
                  key={info.label}
                  href={info.href}
                  className={styles.contactCard}
                >
                  <div className={styles.contactCardIcon}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <span className={styles.contactCardLabel}>
                      {info.label}
                    </span>
                    <p className={styles.contactCardValue}>{info.value}</p>
                  </div>
                  <ArrowUpRight size={14} className={styles.contactCardArrow} />
                </a>
              );
            })}

            {/* Availability card */}
            <div className={styles.availabilityCard}>
              <div className={styles.availDot} />
              <div>
                <span className={styles.availLabel}>
                  Currently Available
                </span>
                <p className={styles.availDesc}>
                  Open to freelance and full-time opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
