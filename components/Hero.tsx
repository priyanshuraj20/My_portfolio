import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui";
import { DATA } from "../constants";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center pt-20 pb-10 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          {/* Text Content */}
          <div className="flex-1 text-left order-2 lg:order-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Hello Heading */}
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6">
                Hello<span className="text-cyan-400">.</span>
              </h2>

              {/* Name Line - Simple */}
              <h3 className="text-3xl md:text-5xl font-medium text-gray-300 mb-6">
                I'm{" "}
                <span className="text-white font-semibold">{DATA.name}</span>
              </h3>

              {/* Role / Title - Clean & Minimal */}
              <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
                {DATA.role}
              </p>

              {/* Tagline - Refined Appearance */}
              <div className="mb-12">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm md:text-base font-mono text-gray-300 tracking-tight">
                    {DATA.tagline}
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-5"
            >
              {/* Resume Download Button */}
              <a
                href="Priyanshu_raj_Resume.pdf"
                download="Priyanshu_Raj_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume"
              >
                <Button
                  size="lg"
                  className="h-14 px-8 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-base shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] transition-all transform hover:-translate-y-1"
                >
                  Download Resume
                  <Download className="ml-2 w-5 h-5" />
                </Button>
              </a>

              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 rounded-full border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-medium text-base hover:border-cyan-500/60 transition-all"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          {/* Visual/Image Section */}
          <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 mb-10 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
              className="relative w-72 h-72 md:w-[450px] md:h-[450px]"
            >
              {/* Decorative Glows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-cyan-500/20 rounded-full blur-[90px]" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-[60px]" />

              {/* Main Image */}
              <img
                src="PRIYANSHU_RAJ.png"
                alt="Priyanshu Raj"
                className="relative w-full h-full object-cover rounded-[2.5rem] shadow-2xl z-10 grayscale-[10%] hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
      </motion.div>
    </section>
  );
};
