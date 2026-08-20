import { motion } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "40px 0",
      }}
    >
      <div
        className="mx-auto px-6"
        style={{
          maxWidth: 1200,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        {/* Left */}
        <div>
          <div
            style={{
              fontFamily: "Fraunces, serif",
              fontSize: 20,
              fontWeight: 700,
              color: "var(--fg)",
              letterSpacing: "-0.02em",
              marginBottom: 4,
            }}
          >
            Fawaz<span style={{ color: "var(--accent)" }}>.</span>
          </div>
          <div style={{ fontSize: 13, color: "var(--fgm)" }}>
            Computer Scientist / Full-Stack Developer
          </div>
        </div>

        {/* Center: copyright */}
        <div
          style={{
            fontSize: 12,
            color: "var(--fgm)",
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          © {new Date().getFullYear()} Ololade. All rights reserved.
        </div>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {[
            { href: "https://github.com/ololadea0", Icon: GithubIcon },
            {
              href: "https://www.linkedin.com/in/abdusalam-fawaz-056443279/",
              Icon: LinkedinIcon,
            },
            { href: "mailto:opeyemifawaz11@gmail.com", Icon: Mail },
          ].map(({ href, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{
                width: 34,
                height: 34,
                borderRadius: 8,
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--fgm)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.color = "var(--accent)";
                el.style.borderColor = "var(--accent)";
                el.style.background = "var(--accent-l)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.color = "var(--fgm)";
                el.style.borderColor = "var(--border)";
                el.style.background = "transparent";
              }}
            >
              <Icon size={14} />
            </a>
          ))}

          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              background: "var(--accent)",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              cursor: "pointer",
              marginLeft: 4,
            }}
          >
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
