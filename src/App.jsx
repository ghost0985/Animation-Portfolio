import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar />

      <Hero />
      <Projects />
      <Contact />

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{once: true}}
        transition={{duration: 1.6}}
      >
        <p> &copy; 2025 Logan Heath. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

export default App;
