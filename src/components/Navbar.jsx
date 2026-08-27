import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ dark, onToggle }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    /* Outer wrapper handles centering; inner motion.nav handles the entry animation */
    <div
      style={{
        position: "fixed",
        top: 16,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        padding: "0 20px",
        pointerEvents: "none",
      }}
    >
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: "100%",
          maxWidth: 1100,
          background: scrolled ? "var(--nav)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(1.4)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(1.4)" : "none",
          border: scrolled
            ? "1px solid var(--border)"
            : "1px solid transparent",
          borderRadius: 14,
          boxShadow: scrolled ? "var(--shadow)" : "none",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pointerEvents: "auto",
          position: "relative",
          minWidth: 0,
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            textDecoration: "none",
            fontFamily: "Fraunces, serif",
            fontWeight: 700,
            fontSize: 20,
            color: "var(--fg)",
            letterSpacing: "-0.02em",
            flexShrink: 0,
          }}
        >
          Fawaz<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        {/* Desktop nav links */}
        <div
          className="hidden lg:flex"
          style={{
            gap: 28,
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "var(--fgm)",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fgm)")}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          {/* Resume — desktop only */}
          <a
            href="https://drive.google.com/file/d/1JPy3RVgilkJHSEavPHa7ws69wYfW69xi/view?usp=drive_link"
            className="hidden lg:inline-flex"
            style={{
              fontSize: 13,
              fontWeight: 600,
              padding: "7px 16px",
              background: "var(--accent)",
              color: "#fff",
              borderRadius: 8,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.82")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Resume
          </a>

          {/* Social icons — hidden on small screens */}
          {[
            {
              href: "https://github.com/ololadea0",
              Icon: GithubIcon,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/abdusalam-fawaz-056443279/",
              Icon: LinkedinIcon,
              label: "LinkedIn",
            },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="hidden md:flex"
              style={{
                width: 34,
                height: 34,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
                color: "var(--fgm)",
                border: "1px solid var(--border)",
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
              <Icon size={15} />
            </a>
          ))}

          {/* Theme toggle — always visible */}
          <button
            onClick={onToggle}
            aria-label="Toggle theme"
            style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              background: "var(--accent-l)",
              border: "1px solid var(--border2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--accent)",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={dark ? "sun" : "moon"}
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.2 }}
                style={{ display: "flex", alignItems: "center" }}
              >
                {dark ? <Sun size={15} /> : <Moon size={15} />}
              </motion.span>
            </AnimatePresence>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="nav-hamburger"
            aria-label="Toggle menu"
            style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              background: "var(--accent-l)",
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--fg)",
            }}
          >
            {mobileOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                left: 0,
                right: 0,
                background: "var(--nav)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "16px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "var(--fg)",
                    textDecoration: "none",
                    padding: "12px 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {l.label}
                </a>
              ))}
              <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
                <a
                  href="https://drive.google.com/file/d/1JPy3RVgilkJHSEavPHa7ws69wYfW69xi/view?usp=drive_link"
                  style={{
                    flex: 1,
                    fontSize: 14,
                    fontWeight: 600,
                    padding: "10px",
                    background: "var(--accent)",
                    color: "#fff",
                    borderRadius: 8,
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  Resume
                </a>
                <a
                  href="https://github.com/ololadea0"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: 40,
                    height: 40,
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--fgm)",
                  }}
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/abdusalam-fawaz-056443279/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: 40,
                    height: 40,
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--fgm)",
                  }}
                >
                  <LinkedinIcon size={16} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
