import React, { useState, useEffect } from "react";
import {
  Home,
  User,
  Code,
  Layers,
  Mail,
  Github,
  Menu,
  X,
  Trophy,
  Award,
} from "lucide-react";
import { Button } from "./ui";
import { motion, AnimatePresence } from "framer-motion";
import { DATA } from "../constants";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // 👇 Added "certifications" to scroll spy
      const sections = [
        "hero",
        "about",
        "skills",
        "tech-stack",
        "projects",
        "coding-profiles",
        "certifications",
        "contact",
      ];

      let current = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
            break;
          }
        }
      }

      if (current === "hero") setActiveSection("home");
      else setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setIsMobileMenuOpen(false);
      setActiveSection(id === "hero" ? "home" : id);
    }
  };

  // 👇 Certifications added here
  const navLinks = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Tech", href: "#tech-stack", icon: Layers },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Profiles", href: "#coding-profiles", icon: Trophy },
    { name: "Certifications", href: "#certifications", icon: Award },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <>
      {/* ================= Desktop Navbar ================= */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div
          className={`pointer-events-auto flex items-center justify-between p-2 rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-[#0b0c15]/80 backdrop-blur-xl border border-white/10 shadow-lg shadow-cyan-900/10 w-full max-w-5xl"
              : "bg-transparent w-full max-w-6xl"
          }`}
        >
          {/* Logo */}
          <div
            className={`px-4 font-bold text-lg tracking-tight transition-opacity ${
              isScrolled ? "opacity-100" : "opacity-0 md:opacity-100"
            }`}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {DATA.name.split(" ")[0]}
            </span>
          </div>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => {
              const linkId =
                link.href.replace("#", "") === "hero"
                  ? "home"
                  : link.href.replace("#", "");

              const isActive = activeSection === linkId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      isActive ? "text-cyan-400" : ""
                    }`}
                  >
                    {link.name}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <a
              href={DATA.contact.social.github}
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-white transition border border-white/5"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={DATA.contact.social.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Button className="rounded-full bg-cyan-500 text-black hover:bg-cyan-400 font-semibold px-6 shadow-lg shadow-cyan-500/20">
                Connect
              </Button>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ================= Mobile Menu ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#02040a]/95 backdrop-blur-xl md:hidden pt-24 px-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="flex items-center gap-4 text-2xl font-medium text-white/80 hover:text-cyan-400"
                >
                  <link.icon className="w-6 h-6" />
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
