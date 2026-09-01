import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./layout.module.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Portfolio — Creative Developer",
  description:
    "Personal portfolio website showcasing my projects, skills, and experience as a developer.",
  keywords: ["portfolio", "developer", "web development", "projects"],
  authors: [{ name: "Developer" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.variable}>
        <main className={styles.appLayout}>
          <Sidebar />
          <div className={styles.mainContent}>{children}</div>
        </main>
      </body>
    </html>
  );
}
