import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function SectionLabel({ text, mb = 12 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });

  const [displayed, setDisplayed] = useState("");
  const [cursorOn, setCursorOn] = useState(true);
  const [done, setDone] = useState(false);

  /* Start typing the moment the element enters view */
  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 38);
    return () => clearInterval(interval);
  }, [inView, text]);

  /* Cursor blinks while typing; stops blinking and fades after done */
  useEffect(() => {
    if (done) {
      const t = setTimeout(() => setCursorOn(false), 1800);
      return () => clearTimeout(t);
    }
    const blink = setInterval(() => setCursorOn((v) => !v), 480);
    return () => clearInterval(blink);
  }, [done]);

  return (
    <p
      ref={ref}
      style={{
        fontFamily: "JetBrains Mono, monospace",
        fontSize: 12,
        color: "var(--accent)",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        marginBottom: mb,
        minHeight: "1.4em",
      }}
    >
      {displayed}
      <span
        style={{
          display: "inline-block",
          width: 2,
          height: "0.8em",
          background: "var(--accent)",
          marginLeft: 2,
          verticalAlign: "middle",
          borderRadius: 1,
          opacity: cursorOn ? 1 : 0,
          transition: done ? "opacity 0.6s ease" : "none",
        }}
      />
    </p>
  );
}
