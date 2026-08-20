import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import SectionLabel from "./SectionLabel";

const socials = [
  {
    icon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/ololadea0",
    handle: "@ololadea0",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdusalam-fawaz-056443279/",
    handle: "in/abdusalam-fawaz-056443279",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:opeyemifawaz11@gmail.com",
    handle: "opeyemifawaz11@gmail.com",
  },
];

// Replace the endpoint below with your Formspree form URL, e.g. "https://formspree.io/f/abcd1234"
const FORMSPREE_ENDPOINT = "https://formspree.io/f/moearend";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        // try to read error message from Formspree
        const data = await res.json().catch(() => null);
        console.error("Formspree error:", data);
        alert("Failed to send message. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (name) => ({
    width: "100%",
    padding: "13px 16px",
    background: "var(--bg2)",
    border: `1px solid ${focused === name ? "var(--accent)" : "var(--border2)"}`,
    borderRadius: 10,
    fontSize: 14,
    color: "var(--fg)",
    outline: "none",
    boxShadow: focused === name ? "0 0 0 3px var(--accent-l)" : "none",
    fontFamily: "Inter, sans-serif",
  });

  return (
    <section id="contact" style={{ padding: "clamp(80px, 12vw, 140px) 0" }}>
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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel text="05 — Contact" />
            <h2
              style={{
                fontFamily: "Fraunces, serif",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "var(--fg)",
                margin: "0 0 20px",
              }}
            >
              Let&apos;s build something{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                useful.
              </em>
            </h2>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.75,
                color: "var(--fgm)",
                marginBottom: 40,
              }}
            >
              Have an idea, project, or opportunity? Let&apos;s talk.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {socials.map(({ icon: Icon, label, href, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "14px 18px",
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    textDecoration: "none",
                    boxShadow: "var(--shadow)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--accent)";
                    el.style.boxShadow = `var(--shadow), 0 0 20px var(--accent-g)`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--border)";
                    el.style.boxShadow = "var(--shadow)";
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 9,
                      background: "var(--accent-l)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent)",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={17} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "var(--fg)",
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "var(--fgm)",
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                    >
                      {handle}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 20,
                padding: "clamp(24px, 4vw, 36px)",
                boxShadow: "var(--shadow)",
              }}
            >
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: "center", padding: "40px 20px" }}
                  >
                    <CheckCircle
                      size={48}
                      style={{ color: "#22c55e", margin: "0 auto 16px" }}
                    />
                    <h3
                      style={{
                        fontFamily: "Fraunces, serif",
                        fontSize: 24,
                        fontWeight: 700,
                        color: "var(--fg)",
                        marginBottom: 8,
                      }}
                    >
                      Message sent!
                    </h3>
                    <p style={{ fontSize: 14, color: "var(--fgm)" }}>
                      Thanks for reaching out. I&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 16,
                    }}
                  >
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: 13,
                          fontWeight: 500,
                          color: "var(--fg)",
                          marginBottom: 6,
                        }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, name: e.target.value }))
                        }
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        style={inputStyle("name")}
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: 13,
                          fontWeight: 500,
                          color: "var(--fg)",
                          marginBottom: 6,
                        }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, email: e.target.value }))
                        }
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        style={inputStyle("email")}
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: 13,
                          fontWeight: 500,
                          color: "var(--fg)",
                          marginBottom: 6,
                        }}
                      >
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell me about your project or idea..."
                        value={form.message}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, message: e.target.value }))
                        }
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        style={{ ...inputStyle("message"), resize: "none" }}
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        padding: "13px",
                        background: loading
                          ? "var(--accent-l)"
                          : "var(--accent)",
                        color: loading ? "var(--accent)" : "#fff",
                        border: "none",
                        borderRadius: 10,
                        fontSize: 14,
                        fontWeight: 600,
                        cursor: loading ? "not-allowed" : "pointer",
                        letterSpacing: "0.01em",
                      }}
                    >
                      <Send size={14} />
                      {loading ? "Sending..." : "Send Message"}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
