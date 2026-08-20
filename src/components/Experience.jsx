import { motion } from "framer-motion";
import { GraduationCap, Code2, Cpu, Globe, Briefcase } from "lucide-react";
import SectionLabel from "./SectionLabel";

const timeline = [
  {
    year: "2021 — present",
    icon: GraduationCap,
    title: "B.Tech Computer Science",
    org: "University",
    type: "Education",
    desc: "Final-year Bachelor of Technology student in Computer Science, with a focus on software engineering, computer vision, algorithms, data structures, and intelligent systems.",
    accent: false,
  },
  {
    year: "2025",
    icon: Briefcase,
    title: "Software Development Intern",
    org: "Dawah Nigeria",
    type: "Experience",
    desc: "Completed SIWES training focused on full-stack web development, contributing to web-based applications and gaining practical experience with frontend and backend technologies.",
    accent: false,
  },
  {
    year: "2025",
    icon: Globe,
    title: "LASEPA Landing Page",
    org: "Dawah Nigeria · SIWES",
    type: "Frontend",
    desc: "Designed and developed a responsive landing page concept for the Lagos State Environmental Protection Agency (LASEPA) as part of SIWES training at Dawah Nigeria, using React and CSS.",
    accent: false,
  },

  {
    year: "2025 — 2026",
    icon: Code2,
    title: "Full-Stack Web Development",
    org: "Personal Projects",
    type: "Development",
    desc: "Built full-stack applications including a digital library and food ordering platform using React, Node.js, Express, and modern database technologies. Worked with PostgreSQL, MySQL, and MongoDB, alongside Prisma, Supabase, Cloudinary, and JWT authentication.",
    accent: false,
  },
  {
    year: "2026",
    icon: Cpu,
    title: "Biometric Systems Development",
    org: "Personal Projects",
    type: "Project",
    desc: "Developed facial recognition systems for student attendance and examination verification using React and Python/FastAPI. Integrated FaceNet, DeepFace, MTCNN, facenet-pytorch, and TensorFlow for face detection, embedding generation, and identity verification.",
    accent: true,
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "clamp(80px, 12vw, 140px) 0" }}>
      <div className="mx-auto px-6" style={{ maxWidth: 1200 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 56 }}
        >
          <SectionLabel text="04 — Journey" />
          <h2
            style={{
              fontFamily: "Fraunces, serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "var(--fg)",
              margin: 0,
            }}
          >
            Experience &amp;{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
              Education
            </em>
          </h2>
        </motion.div>

        <div style={{ position: "relative", maxWidth: 760 }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 19,
              top: 0,
              bottom: 0,
              width: 1,
              background: "var(--border2)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {timeline.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.1,
                  }}
                  style={{
                    display: "flex",
                    gap: 28,
                    paddingBottom: i < timeline.length - 1 ? 40 : 0,
                  }}
                >
                  {/* Icon node */}
                  <div
                    style={{ flexShrink: 0, position: "relative", zIndex: 1 }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: item.accent
                          ? "var(--accent)"
                          : "var(--card)",
                        border: `2px solid ${item.accent ? "var(--accent)" : "var(--border2)"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: item.accent ? "#fff" : "var(--accent)",
                        boxShadow: item.accent
                          ? "0 0 20px var(--accent-g)"
                          : "none",
                      }}
                    >
                      <Icon size={16} />
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ paddingTop: 8 }}>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 8,
                        alignItems: "center",
                        marginBottom: 8,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "JetBrains Mono, monospace",
                          fontSize: 11,
                          color: "var(--accent)",
                          fontWeight: 500,
                        }}
                      >
                        {item.year}
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          padding: "2px 8px",
                          background: "var(--accent-l)",
                          color: "var(--accent)",
                          borderRadius: 100,
                          fontWeight: 500,
                          fontFamily: "JetBrains Mono, monospace",
                        }}
                      >
                        {item.type}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: "Fraunces, serif",
                        fontSize: 20,
                        fontWeight: 700,
                        color: "var(--fg)",
                        margin: "0 0 4px",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 13,
                        color: "var(--accent)",
                        fontWeight: 500,
                        margin: "0 0 10px",
                      }}
                    >
                      {item.org}
                    </p>
                    <p
                      style={{
                        fontSize: 14,
                        lineHeight: 1.7,
                        color: "var(--fgm)",
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
