import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--fg)",
      }}
    >
      <Navbar dark={dark} onToggle={() => setDark((d) => !d)} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}
