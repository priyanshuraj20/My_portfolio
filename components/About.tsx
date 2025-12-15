import React from "react";
import { motion } from "framer-motion";
import { DATA } from "../constants";

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Left: Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-5/12 sticky top-24"
          >
            <div className="inline-block p-2 px-4 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-mono mb-6">
              01. About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
              Decoding Complexity, <br />
              <span className="text-gray-500">Building Intelligence.</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 opacity-90">
              {DATA.about.description}
            </p>

            <div className="flex flex-col gap-4 border-l-2 border-white/10 pl-6 py-2">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">
                  Contact
                </p>
                <a
                  href={`mailto:${DATA.contact.email}`}
                  className="text-white hover:text-cyan-400 transition-colors text-lg"
                >
                  {DATA.contact.email}
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">
                  Education
                </p>
                <p className="text-white text-lg">B.Tech Computer Science</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Timeline Cards (Redesigned) */}
          <div className="lg:w-7/12 flex flex-col gap-8 w-full">
            {DATA.about.timeline.map((item, index) => {
              const isFuture = item.year === "2026";
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className={`group relative p-8 rounded-3xl bg-white/5 border border-white/5 transition-all duration-300 backdrop-blur-sm ${
                      isFuture
                        ? "opacity-80 pointer-events-none"
                        : "hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-900/5"
                    }`}
                  >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 pointer-events-none" />
                    {isFuture && (
                      <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold animate-pulse shadow-2xl shadow-yellow-400/30 border border-yellow-300/30">
                        Coming Soon
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-6 items-start relative z-10">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:scale-105 transition-transform duration-300">
                          <span
                            className={`${
                              isFuture ? "text-yellow-300" : "text-cyan-400"
                            } font-bold text-xl`}
                          >
                            {item.year}
                          </span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-base">
                          {item.description}
                        </p>
                        {isFuture && (
                          <p className="mt-3 text-sm text-gray-400 italic">
                            Details coming soon — planned for {item.year}.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
