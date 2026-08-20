import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 5, suffix: "+", label: "Major Projects" },
  { value: 3, suffix: "+", label: "Full-Stack Applications" },
  { value: 2, suffix: "", label: "Computer Vision Systems" },
  { value: 20, suffix: "+", label: "Technologies Used" },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const step = 16;
    const steps = duration / step;
    let current = 0;
    const timer = setInterval(() => {
      current++;
      setCount(Math.round((current / steps) * target));
      if (current >= steps) {
        setCount(target);
        clearInterval(timer);
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section style={{ padding: "clamp(60px, 8vw, 100px) 0" }}>
      <div className="mx-auto px-6" style={{ maxWidth: 1200 }}>
        <div
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 24,
            padding: "clamp(40px, 6vw, 64px)",
            position: "relative",
            overflow: "hidden",
            boxShadow: "var(--shadow)",
          }}
        >
          {/* Background accent */}
          <div
            style={{
              position: "absolute",
              top: -80,
              right: -80,
              width: 360,
              height: 360,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, var(--accent-g) 0%, transparent 70%)",
              filter: "blur(48px)",
              pointerEvents: "none",
            }}
          />

          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 40,
              position: "relative",
              zIndex: 1,
            }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontSize: "clamp(42px, 5vw, 64px)",
                    fontWeight: 700,
                    lineHeight: 1,
                    color: "var(--accent)",
                    marginBottom: 8,
                    letterSpacing: "-0.03em",
                  }}
                >
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div
                  style={{ fontSize: 14, color: "var(--fgm)", fontWeight: 500 }}
                >
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
