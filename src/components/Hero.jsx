import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";

const PORTRAIT =
  "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=520&h=520&fit=crop&auto=format";

const floatingBadges = [
  { label: "React", x: "102%", y: "12%", delay: 0 },
  { label: "Python", x: "96%", y: "70%", delay: 0.5 },
  { label: "Node.js", x: "-18%", y: "60%", delay: 0.9 },
  { label: "FastAPI", x: "-10%", y: "22%", delay: 1.3 },
];

const TYPEWRITER_TEXT = "My Name Is Fawaz Abdulsalam";

function Typewriter({ text, startDelay = 600 }) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, 52);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(startTimer);
  }, [text, startDelay]);

  /* Blink cursor until typing is done, then keep it for a moment then hide */
  useEffect(() => {
    if (!done) return;
    const timer = setTimeout(() => setShowCursor(false), 2200);
    return () => clearTimeout(timer);
  }, [done]);

  useEffect(() => {
    if (done) return;
    const blink = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, [done]);

  return (
    <span>
      {displayed}
      <span
        style={{
          display: "inline-block",
          width: 2,
          height: "0.85em",
          background: "var(--accent)",
          marginLeft: 2,
          verticalAlign: "middle",
          opacity: showCursor ? 1 : 0,
          borderRadius: 1,
        }}
      />
    </span>
  );
}

const subtitleWords = ["Computer", "Scientist", "&", "Full-Stack", "Developer"];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section
      id="home"
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "clamp(48px, 10vw, 100px)",
        paddingBottom: "clamp(36px, 6vw, 60px)",
      }}
    >
      {/* Dot/grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      {/* Accent orbs */}
      <div
        className="pulse-glow"
        style={{
          position: "absolute",
          top: "15%",
          right: "28%",
          width: "clamp(120px, 30vw, 500px)",
          height: "clamp(120px, 30vw, 500px)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, var(--accent-g) 0%, transparent 70%)",
          filter: "blur(48px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "5%",
          width: "clamp(100px, 24vw, 300px)",
          height: "clamp(100px, 24vw, 300px)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, var(--accent-l) 0%, transparent 70%)",
          filter: "blur(60px)",
          opacity: 0.7,
          pointerEvents: "none",
        }}
      />

      <div className="w-full mx-auto px-6" style={{ maxWidth: 1100 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) auto",
            gap: "clamp(40px, 6vw, 80px)",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* ── Left: text content ── */}
          <motion.div style={{ y: contentY, minWidth: 0 }}>
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.45 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                background: "var(--accent-l)",
                border: "1px solid var(--border2)",
                borderRadius: 100,
                fontSize: 12,
                fontWeight: 500,
                color: "var(--fgm)",
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 6px #22c55e",
                  flexShrink: 0,
                }}
              />
              Available for opportunities
            </motion.div>

            {/* Typewriter name */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "clamp(14px, 2vw, 17px)",
                fontWeight: 400,
                color: "var(--accent)",
                marginBottom: 16,
                letterSpacing: "0.02em",
              }}
            >
              <Typewriter text={TYPEWRITER_TEXT} startDelay={500} />
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                fontFamily: "Fraunces, serif",
                fontSize: "clamp(34px, 5.5vw, 68px)",
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "var(--fg)",
                margin: "0 0 12px",
              }}
            >
              Building{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                digital
              </em>{" "}
              experiences
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                fontFamily: "Fraunces, serif",
                fontSize: "clamp(34px, 5.5vw, 68px)",
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "var(--fg)",
                margin: "0 0 28px",
              }}
            >
              &amp; solving real-world problems with{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                code.
              </em>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.55 }}
              style={{
                fontSize: "clamp(14px, 1.6vw, 17px)",
                lineHeight: 1.7,
                color: "var(--fgm)",
                maxWidth: 500,
                margin: "0 0 36px",
              }}
            >
              Computer Scientist and Full-Stack Developer focused on building
              practical, intelligent, and user-centered software systems.
            </motion.p>

            {/* Subtitle role tags */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginBottom: 36,
              }}
            >
              {subtitleWords.map((w) => (
                <span
                  key={w}
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    padding: "4px 12px",
                    background: "var(--accent-l)",
                    border: "1px solid var(--border)",
                    borderRadius: 100,
                    color: "var(--accent)",
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
                  {w}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.5 }}
              style={{ display: "flex", flexWrap: "wrap", gap: 12 }}
            >
              <a
                href="#projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 26px",
                  background: "var(--accent)",
                  color: "#fff",
                  borderRadius: 10,
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                View Projects <ArrowRight size={15} />
              </a>
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 26px",
                  background: "transparent",
                  color: "var(--fg)",
                  border: "1px solid var(--border2)",
                  borderRadius: 10,
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border2)";
                  e.currentTarget.style.color = "var(--fg)";
                }}
              >
                Contact Me
              </a>
              {/* <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "12px 20px",
                  background: "transparent",
                  color: "var(--fgm)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  fontWeight: 500,
                  fontSize: 14,
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--fg)";
                  e.currentTarget.style.borderColor = "var(--border2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--fgm)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                <Download size={14} /> Resume
              </a> */}
            </motion.div>
          </motion.div>

          {/* ── Right: circular portrait ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: portraitY, position: "relative", flexShrink: 0 }}
            className="hidden md:block"
          >
            {/* Outer glow ring */}
            <div
              style={{
                position: "absolute",
                inset: -20,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, var(--accent-g) 0%, transparent 68%)",
                filter: "blur(28px)",
                zIndex: 0,
              }}
            />

            {/* Decorative rotating dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                inset: -10,
                borderRadius: "50%",
                border: "1.5px dashed var(--border2)",
                zIndex: 0,
              }}
            />

            {/* Portrait circle */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{
                position: "relative",
                zIndex: 1,
                width: "clamp(140px, 32vw, 300px)",
                height: "clamp(140px, 32vw, 300px)",
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid var(--accent)",
                boxShadow: `0 0 0 6px var(--accent-l), 0 0 50px var(--accent-g), 0 24px 60px rgba(0,0,0,0.35)`,
                background: "var(--bg2)",
              }}
            >
              <img
                src={PORTRAIT}
                alt="Fawaz Abdulsalam — Computer Scientist and Full-Stack Developer"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </motion.div>

            {/* Floating tech badges */}
            {floatingBadges.map((b) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: b.delay + 1.2, duration: 0.4 }}
                className="float-anim"
                style={{
                  position: "absolute",
                  left: b.x,
                  top: b.y,
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 11,
                  fontWeight: 500,
                  padding: "5px 12px",
                  background: "var(--card)",
                  border: "1px solid var(--border2)",
                  borderRadius: 100,
                  color: "var(--accent)",
                  whiteSpace: "nowrap",
                  boxShadow: "var(--shadow)",
                  zIndex: 2,
                  animationDelay: `${b.delay * 0.8}s`,
                }}
              >
                {b.label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "var(--fgm)",
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
