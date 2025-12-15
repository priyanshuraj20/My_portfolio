import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { CodingProfiles } from "./components/CodingProfiles";
import { Contact } from "./components/Contact";
import { Background } from "./components/Background";
import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time to ensure assets are ready and show animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loader

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-transparent text-foreground overflow-x-hidden relative">
          <Background />
          <Navbar />
          <main className="relative z-10 flex flex-col gap-10 md:gap-20 pb-0">
            <Hero />
            <About />
            <Skills />
            <TechStack />
            <Projects />
            <CodingProfiles />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
