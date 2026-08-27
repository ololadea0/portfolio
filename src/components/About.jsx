import { motion } from "framer-motion";
import { Code2, Cpu, Database, Globe, Lightbulb } from "lucide-react";
import SectionLabel from "./SectionLabel";

const highlights = [
  {
    icon: Globe,
    label: "Full-Stack Development",
    desc: "Building end-to-end web applications across frontend, backend, APIs, and databases",
  },
  {
    icon: Cpu,
    label: "Computer Vision",
    desc: "Developing facial recognition and biometric systems with Python and deep learning",
  },
  {
    icon: Database,
    label: "Backend Engineering",
    desc: "Designing REST APIs, database systems, authentication, and server-side architecture",
  },
  {
    icon: Code2,
    label: "Software Engineering",
    desc: "Applying algorithms, data structures, and engineering principles to real-world systems",
  },
  {
    icon: Lightbulb,
    label: "Problem Solving",
    desc: "Turning complex requirements into practical, maintainable software solutions",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: "clamp(80px, 12vw, 140px) 0", position: "relative" }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 1200 }}>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 64,
            alignItems: "start",
          }}
        >
          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <SectionLabel text="01 — About" />
            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "Fraunces, serif",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "var(--fg)",
                margin: "0 0 24px",
              }}
            >
              About{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                Me
              </em>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 16,
                lineHeight: 1.75,
                color: "var(--fgm)",
                marginBottom: 16,
              }}
            >
              I&apos;m Fawaz Abdulsalam, a Computer Science student and
              Full-Stack Developer who enjoys turning ideas into functional,
              purposeful software. I care about building reliable solutions that
              solve real-world problems.
            </motion.p>
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 16,
                lineHeight: 1.75,
                color: "var(--fgm)",
                marginBottom: 32,
              }}
            >
              My work spans web applications, backend systems, and computer
              vision, from full-stack digital libraries and business
              applications to biometric attendance and examination verification
              systems.
            </motion.p>
            <motion.p
              variants={fadeUp}
              style={{ fontSize: 16, lineHeight: 1.75, color: "var(--fgm)" }}
            >
              I&apos;m interested in building practical software that helps
              organizations improve their operations, solve everyday challenges,
              and deliver better digital experiences.
            </motion.p>
          </motion.div>

          {/* Right: highlight cards */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.08, delayChildren: 0.2 },
              },
            }}
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            {highlights.map(({ icon: Icon, label, desc }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  padding: "16px 20px",
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  boxShadow: "var(--shadow)",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--accent)";
                  el.style.boxShadow = `var(--shadow), 0 0 24px var(--accent-g)`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border)";
                  el.style.boxShadow = "var(--shadow)";
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "var(--accent-l)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--fg)",
                      marginBottom: 4,
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--fgm)",
                      lineHeight: 1.5,
                    }}
                  >
                    {desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
