import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import SectionLabel from "./SectionLabel";

const projects = [
  {
    id: 1,
    title: "Maktabatul Huda",
    shortDesc:
      "An Islamic digital library for discovering, reading, saving, and downloading Islamic books.",

    fullDesc:
      "A full-stack digital library platform that allows users to discover, read, save, and download Islamic books. The platform features a custom PDF reader, personalized reading progress, Google authentication, and an admin dashboard for managing library content.",

    image:
      "https://res.cloudinary.com/djw640wo2/image/upload/v1787231732/Screenshot_2026-08-20_141515_eantt5.jpg",

    gradient: "linear-gradient(135deg, #0f766e 0%, #0e4d44 100%)",

    tags: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Cloudinary",
      "JWT",
      "Passport",
    ],

    links: {
      demo: "https://maktabatu-huda.onrender.com/",
      github: "https://github.com/ololadea0/maktabatul-hudah.git",
    },

    features: [
      "Digital library for browsing, reading, and downloading books",
      "Custom PDF reader with page navigation, zoom, fit modes, rotation, and fullscreen",
      "Email/password and Google authentication",
      "Personalized reading progress and saved books",
      "Book categories and collection-based organization",
      "Admin dashboard for uploading and managing library content",
      "Newsletter subscription and management",
      "Cloud-based storage for book covers and PDF files",
      "Responsive and mobile-friendly interface",
    ],

    challenge:
      "Building a responsive PDF reading experience that could handle large documents efficiently while providing smooth page navigation and controls across desktop and mobile devices. The platform also required secure authentication, content management, and reliable cloud file storage.",

    result:
      "Built and deployed a full-stack digital library with secure authentication, personalized reading features, a custom PDF reader, administrative content management, and cloud-based media storage using React, Node.js, PostgreSQL, Prisma, Supabase, and Cloudinary.",
  },
  {
    id: 2,
    title: "Food Ordering App",
    shortDesc:
      "A full-stack food ordering platform for browsing meals, managing carts, making payments, and tracking orders in real time.",

    fullDesc:
      "A full-stack food ordering platform where customers can browse and search meals, manage their cart, place orders, make payments, and receive real-time order status updates. It also includes user accounts and an admin dashboard for managing meals, orders, and users.",

    image:
      "https://res.cloudinary.com/djw640wo2/image/upload/v1787233086/Screenshot_2026-08-20_143751_b0xy4g.jpg",

    gradient: "linear-gradient(135deg, #c2410c 0%, #7c2d12 100%)",

    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
      "Multer",
      "JWT",
    ],

    links: {
      demo: "https://chopstack.netlify.app/",
      github: {
        frontend: "https://github.com/ololadea0/food_order_frontend.git",
        backend: "https://github.com/ololadea0/food_order_backend.git",
      },
    },

    features: [
      "Menu browsing with categories and search",
      "Shopping cart and checkout flow",
      "Online payment integration",
      "Real-time order status updates",
      "User authentication and profile management",
      "Admin dashboard for food, orders, and users",
      "Cloudinary image hosting with Multer uploads",
    ],

    challenge:
      "Building a smooth ordering experience while keeping cart, payment, and order states consistent across the customer and admin interfaces. The application also required secure authentication, reliable image uploads, payment handling, and real-time communication for order status updates.",

    result:
      "Built a complete MERN-stack food ordering platform with customer and administrative workflows, online payment integration, real-time order updates, secure authentication, MongoDB data management, and cloud-based image storage.",
  },
  {
    id: 3,
    title: "Biometric Attendance System",
    shortDesc:
      "A facial-recognition attendance system that automates student identity verification and attendance logging.",

    fullDesc:
      "A biometric attendance system built with React and Python that uses FaceNet, MTCNN, PyTorch, and OpenCV for facial enrollment, face detection, embedding generation, and identity verification. The system automates attendance through real-time facial verification while providing administrative and lecturer management tools.",

    image:
      "https://res.cloudinary.com/djw640wo2/image/upload/v1787233435/Screenshot_2026-08-20_144340_nhuinw.jpg",

    gradient: "linear-gradient(135deg, #1e3a8a 0%, #312e81 100%)",

    tags: [
      "React",
      "Python",
      "Flask",
      "OpenCV",
      "PyTorch",
      "FaceNet",
      "MTCNN",
      "MySQL",
      "JWT",
    ],

    links: {
      github: {
        frontend:
          "https://github.com/ololadea0/biometric_attendance_frontend.git",
        backend:
          "https://github.com/ololadea0/biometric_attendance_backend.git",
      },
      caseStudy:
        "https://res.cloudinary.com/djw640wo2/video/upload/v1787309701/lv_0_20260821113714_owk3zm.mp4",
    },

    features: [
      "Authentication & Roles: JWT-based authentication with role-based access for administrators, lecturers, and students.",
      "Student & Academic Management: Manage faculties, departments, courses, lecturers, students, and user accounts.",
      "Facial Enrollment: Capture five facial samples during enrollment and select a suitable facial representation for biometric verification.",
      "Face Recognition: Detect faces, generate FaceNet embeddings, and verify student identity using facial similarity matching.",
      "Session Management: Create, manage, monitor, and close course attendance sessions.",
      "Automated Attendance: Mark attendance following successful facial verification and provide attendance history and course summaries.",
      "Reports & Dashboards: Provide administrative and lecturer dashboards with attendance statistics and exportable reports.",
    ],

    challenge:
      "The main challenges involved achieving reliable facial recognition across variations in lighting, pose, image quality, and camera conditions. The system also required careful handling of biometric data, efficient image-processing workflows, and deployment considerations for machine-learning dependencies.",

    result:
      "Implemented an end-to-end biometric attendance platform that combines a React frontend with a Python-based facial recognition backend. The system supports student enrollment, five-image facial capture, real-time identity verification, automated attendance logging, role-based management, dashboards, and attendance reporting.",
  },

  {
    id: 4,
    title: "Biometric Exam Verification",
    shortDesc:
      "An administrative biometric system for verifying candidates before examinations using facial recognition.",

    fullDesc:
      "A secure, admin-operated examination verification system that uses facial recognition to confirm candidate identities before exams. The system combines a React frontend with Node.js/Express and Python/FastAPI services for facial embedding generation, biometric matching, and verification reporting.",

    image:
      "https://res.cloudinary.com/djw640wo2/image/upload/v1787234379/Screenshot_2026-08-20_145923_vlv9zb.jpg",

    gradient: "linear-gradient(135deg, #6d28d9 0%, #3b0764 100%)",

    tags: [
      "React",
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "FaceNet",
      "MTCNN",
      "MongoDB",
    ],

    links: {
      github: "https://github.com/ololadea0/exam-verification.git",
      caseStudy:
        "https://res.cloudinary.com/djw640wo2/video/upload/v1787309672/lv_0_20260821112742_tzhsmr.mp4",
    },

    features: [
      "Admin authentication and candidate management",
      "Candidate registration and facial enrollment",
      "Real-time pre-exam identity verification",
      "Face embedding generation using FaceNet",
      "Face detection and preprocessing with MTCNN",
      "Configurable similarity thresholds for verification",
      "Secure biometric template storage",
      "Verification metrics and audit logging",
    ],

    challenge:
      "Reliable facial verification in real-world examination environments requires handling variations in lighting, facial pose, occlusion, camera quality, and individual appearance. The system also needed to balance false acceptance and false rejection rates through appropriate similarity thresholds while keeping biometric data securely stored.",

    result:
      "Implemented an end-to-end examination verification workflow where administrators can register candidates, enroll facial samples, perform real-time identity verification, and review verification outcomes. The system integrates React, Node.js/Express, and Python/FastAPI services for facial processing and matching, with verification attempts and audit events recorded for review.",
  },
  {
    id: 5,
    title: "LASEPA Landing Page",
    shortDesc:
      "A modern responsive landing page concept for the Lagos State Environmental Protection Agency.",

    fullDesc:
      "A responsive landing page concept developed as part of my SIWES training at Dawah Nigeria. Built with React and CSS, the project focused on creating a clear, professional public-sector interface with responsive layouts and accessible design.",

    image:
      "https://res.cloudinary.com/djw640wo2/image/upload/v1787234449/Screenshot_2026-08-20_150034_nlmcqa.jpg",

    gradient: "linear-gradient(135deg, #065f46 0%, #064e3b 100%)",

    tags: ["HTML", "JavaScript", "CSS"],

    links: {
      demo: "https://lasepalagos.netlify.app/",
      github: "https://github.com/ololadea0/lasepa-landing-page.git",
    },

    features: [
      "Fully responsive layout across desktop, tablet, and mobile",
      "Reusable React component structure",
      "Semantic HTML and accessible design",
      "Responsive navigation and page sections",
      "Optimized styling with minimal dependencies",
    ],

    challenge:
      "Creating a professional public-sector interface that communicates clarity and trust while maintaining responsive behavior and accessible design across different screen sizes.",

    result:
      "Built a responsive landing page concept demonstrating practical React development, component-based design, responsive CSS, and attention to accessibility as part of SIWES training at Dawah Nigeria.",
  },
];

function Tag({ label }) {
  return (
    <span
      style={{
        fontSize: 11,
        fontWeight: 500,
        padding: "3px 10px",
        background: "var(--accent-l)",
        color: "var(--accent)",
        borderRadius: 100,
        border: "1px solid var(--border)",
        fontFamily: "JetBrains Mono, monospace",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(8px)",
        zIndex: 200,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: 20,
          width: "100%",
          maxWidth: "min(92vw, 760px)",
          maxHeight: "88vh",
          overflow: "auto",
          boxShadow: "var(--shadow2)",
        }}
      >
        {/* Header */}
        <div
          style={{
            height: "clamp(140px, 22vw, 200px)",
            background: project.gradient,
            borderRadius: "20px 20px 0 0",
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            padding: "24px 28px",
            overflow: "hidden",
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
              borderRadius: "20px 20px 0 0",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.55) 70%)",
              borderRadius: "20px 20px 0 0",
            }}
          />
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.35)",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 4,
            }}
          >
            <X size={16} />
          </button>
          <div style={{ position: "relative", zIndex: 5 }}>
            <h3
              style={{
                fontFamily: "Fraunces, serif",
                fontSize: 28,
                fontWeight: 700,
                color: "#fff",
                margin: 0,
                letterSpacing: "-0.02em",
                textShadow: "0 4px 18px rgba(0,0,0,0.6)",
                WebkitTextStroke: "0.2px rgba(0,0,0,0.2)",
              }}
            >
              {project.title}
            </h3>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: 28 }}>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.75,
              color: "var(--fgm)",
              marginBottom: 28,
            }}
          >
            {project.fullDesc}
          </p>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 28,
            }}
          >
            {project.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>

          {/* Features */}
          <h4
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "var(--fg)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 12,
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            Key Features
          </h4>
          <ul
            style={{
              paddingLeft: 0,
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              marginBottom: 24,
            }}
          >
            {project.features.map((f) => (
              <li
                key={f}
                style={{
                  fontSize: 14,
                  color: "var(--fgm)",
                  display: "flex",
                  gap: 10,
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: "var(--accent)",
                    marginTop: 3,
                    flexShrink: 0,
                  }}
                >
                  ▸
                </span>{" "}
                {f}
              </li>
            ))}
          </ul>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              marginBottom: 28,
            }}
            className="grid-cols-1 md:grid-cols-2"
          >
            <div
              style={{
                padding: 16,
                background: "var(--bg2)",
                borderRadius: 12,
                border: "1px solid var(--border)",
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 8,
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                Challenge
              </p>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.65,
                  color: "var(--fgm)",
                  margin: 0,
                }}
              >
                {project.challenge}
              </p>
            </div>
            <div
              style={{
                padding: 16,
                background: "var(--bg2)",
                borderRadius: 12,
                border: "1px solid var(--border)",
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 8,
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                Outcome
              </p>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.65,
                  color: "var(--fgm)",
                  margin: 0,
                }}
              >
                {project.result}
              </p>
            </div>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: 12 }}>
            {project.links.demo && (
              <a
                href={project.links.demo}
                target={
                  typeof project.links.demo === "string" ? "_blank" : undefined
                }
                rel={
                  typeof project.links.demo === "string"
                    ? "noopener noreferrer"
                    : undefined
                }
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "10px 20px",
                  background: "var(--accent)",
                  color: "#fff",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <ExternalLink size={13} /> Live Demo
              </a>
            )}
            {project.links.caseStudy && (
              <a
                href={
                  typeof project.links.caseStudy === "string"
                    ? project.links.caseStudy
                    : "#"
                }
                target={
                  typeof project.links.caseStudy === "string"
                    ? "_blank"
                    : undefined
                }
                rel={
                  typeof project.links.caseStudy === "string"
                    ? "noopener noreferrer"
                    : undefined
                }
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "10px 20px",
                  background: "var(--accent)",
                  color: "#fff",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <ExternalLink size={13} />
                {typeof project.links.caseStudy === "string"
                  ? " Watch Case Study"
                  : " Case Study"}
              </a>
            )}
            {project.links.github && (
              <>
                {typeof project.links.github === "string" && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "10px 20px",
                      background: "transparent",
                      color: "var(--fg)",
                      border: "1px solid var(--border2)",
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    <GithubIcon size={13} /> GitHub
                  </a>
                )}

                {Array.isArray(project.links.github) &&
                  project.links.github.map((repo, idx) => {
                    const href = typeof repo === "string" ? repo : repo.url;
                    const label =
                      typeof repo === "string"
                        ? `Repo ${idx + 1}`
                        : repo.label || `Repo ${idx + 1}`;
                    return (
                      <a
                        key={idx}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          padding: "10px 20px",
                          background: "transparent",
                          color: "var(--fg)",
                          border: "1px solid var(--border2)",
                          borderRadius: 8,
                          fontSize: 13,
                          fontWeight: 600,
                          textDecoration: "none",
                        }}
                      >
                        <GithubIcon size={13} /> {label}
                      </a>
                    );
                  })}

                {typeof project.links.github === "object" &&
                  !Array.isArray(project.links.github) &&
                  Object.entries(project.links.github).map(([key, url]) => (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "10px 20px",
                        background: "transparent",
                        color: "var(--fg)",
                        border: "1px solid var(--border2)",
                        borderRadius: 8,
                        fontSize: 13,
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      <GithubIcon size={13} />{" "}
                      {key[0].toUpperCase() + key.slice(1)}
                    </a>
                  ))}
              </>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
      onClick={onClick}
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: 20,
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: "var(--shadow)",
        display: "flex",
        flexDirection: "column",
      }}
      whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(0,0,0,0.18)" }}
    >
      {/* Image/gradient header */}
      <div
        style={{
          height: "clamp(120px, 20vw, 180px)",
          background: project.gradient,
          position: "relative",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
        {/* Abstract grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 16,
            right: 16,
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            zIndex: 2,
          }}
        >
          <ArrowUpRight size={16} />
        </div>
      </div>

      {/* Card body */}
      <div
        style={{
          padding: "20px 24px 24px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3
          style={{
            fontFamily: "Fraunces, serif",
            fontSize: 20,
            fontWeight: 700,
            color: "var(--fg)",
            margin: "0 0 8px",
            letterSpacing: "-0.02em",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.65,
            color: "var(--fgm)",
            margin: "0 0 16px",
            flex: 1,
          }}
        >
          {project.shortDesc}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.tags.slice(0, 4).map((t) => (
            <Tag key={t} label={t} />
          ))}
          {project.tags.length > 4 && (
            <span
              style={{
                fontSize: 11,
                padding: "3px 10px",
                borderRadius: 100,
                border: "1px solid var(--border)",
                color: "var(--fgm)",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" style={{ padding: "clamp(80px, 12vw, 140px) 0" }}>
      <div className="mx-auto px-6" style={{ maxWidth: 1200 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 52 }}
        >
          <SectionLabel text="03 — Work" />
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
            Selected{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
              Projects
            </em>
          </h2>
        </motion.div>

        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
              onClick={() => setSelected(p)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
