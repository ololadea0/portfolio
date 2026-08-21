import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const row1 = [
  "JavaScript",
  "Python",
  "React",
  "Node.js",
  "Express",
  "FastAPI",
  "Flask",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Prisma",
  "REST APIs",
  "Git",
  "GitHub",
  "Supabase",
  "CLoudinary",
];
const row2 = [
  "TypeScript",
  "Tailwind CSS",
  "Vite",
  "Supabase",
  "Cloudinary",
  "Docker",
  "Passport",
  "JWT",
  "Computer Vision",
  "Facial Recognition",
  "FaceNet",
  "DeepFace",
  "MTCNN",
  "TensorFlow",
];

function Badge({ label }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "8px 18px",
        background: "var(--card)",
        border: "1px solid var(--border2)",
        borderRadius: 100,
        fontSize: 13,
        fontWeight: 500,
        color: "var(--fg)",
        whiteSpace: "nowrap",
        flexShrink: 0,
        marginRight: 12,
        boxShadow: "var(--shadow)",
        fontFamily: "JetBrains Mono, monospace",
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "var(--accent)",
          marginRight: 8,
          flexShrink: 0,
        }}
      />
      {label}
    </span>
  );
}

export default function Skills() {
  const doubled1 = [...row1, ...row1];
  const doubled2 = [...row2, ...row2];

  return (
    <section
      id="skills"
      style={{ padding: "clamp(60px, 8vw, 100px) 0", overflow: "hidden" }}
    >
      <div
        className="mx-auto px-6"
        style={{ maxWidth: 1200, marginBottom: 48 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center" }}
        >
          <SectionLabel text="02 — Technologies" />
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
            Tools &amp;{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
              Technologies
            </em>
          </h2>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div style={{ position: "relative" }}>
        {/* Fade edges */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(90deg, var(--bg) 0%, transparent 12%, transparent 88%, var(--bg) 100%)`,
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Row 1 — left */}
        <div style={{ overflow: "hidden", marginBottom: 14 }}>
          <div
            className="marquee-left"
            style={{
              display: "flex",
              alignItems: "center",
              width: "max-content",
            }}
          >
            {doubled1.map((t, i) => (
              <Badge key={`${t}-${i}`} label={t} />
            ))}
          </div>
        </div>

        {/* Row 2 — right */}
        <div style={{ overflow: "hidden" }}>
          <div
            className="marquee-right"
            style={{
              display: "flex",
              alignItems: "center",
              width: "max-content",
            }}
          >
            {doubled2.map((t, i) => (
              <Badge key={`${t}-${i}`} label={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
