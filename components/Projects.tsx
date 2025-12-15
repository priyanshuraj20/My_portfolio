import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Play } from "lucide-react";
import { DATA } from "../constants";
import { Button } from "./ui";

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? DATA.projects : DATA.projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <span className="text-cyan-400 font-mono text-sm uppercase mb-2 block">
                Featured Work
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Selected Projects
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md hidden md:block text-right">
              AI / ML, Generative AI and hackathon-based projects.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => {
            const isPending = project.status === "pending";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-col h-full bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500 backdrop-blur-sm relative">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-transparent" />

                    {/* 🔥 TEAM / PERSONAL BADGE */}
                    <div className="absolute top-4 left-4 z-20">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-md text-white
                          ${
                            project.isTeamProject
                              ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 animate-pulse"
                              : "bg-black/60 border-white/10"
                          }
                        `}
                      >
                        {project.isTeamProject
                          ? "Hackathon • Team Project"
                          : "Personal Project"}
                      </span>
                    </div>

                    {/* 🚧 IN PROGRESS OVERLAY */}
                    {isPending && (
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-30">
                        <span className="px-4 py-2 text-sm rounded-full bg-white/10 border border-white/20 text-white">
                          🚧 Coming Soon
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-white/5 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        className={`flex-1 ${
                          isPending ? "pointer-events-none opacity-40" : ""
                        }`}
                      >
                        <Button variant="outline" className="w-full">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </Button>
                      </a>

                      <a
                        href={project.demo}
                        target="_blank"
                        className={`flex-1 ${
                          isPending ? "pointer-events-none opacity-40" : ""
                        }`}
                      >
                        <Button className="w-full bg-white/5">
                          <Play className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </a>

                      <a
                        href={project.liveDemo}
                        target="_blank"
                        className={`flex-1 ${
                          isPending ? "pointer-events-none opacity-40" : ""
                        }`}
                      >
                        <Button className="w-full bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-black">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View More / Less */}
        {DATA.projects.length > 3 && (
          <div className="flex justify-center mt-16">
            <Button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-6 text-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all"
            >
              {showAll ? "View Less ↑" : "View More ↓"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
