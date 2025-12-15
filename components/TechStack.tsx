import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../constants';

// Mapping function for logos
const getTechLogo = (name: string) => {
  const n = name.toLowerCase();
  
  // Custom Mappings for complex cases or specific preferences
  if (n === 'c++') return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg';
  if (n === 'next.js') return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg';
  if (n === 'scikit-learn') return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg';
  if (n === 'openai') return 'https://cdn.worldvectorlogo.com/logos/openai-2.svg'; // Better OpenAI logo
  if (n === 'hugging face') return 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg';
  if (n === 'langchain') return 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4'; // LangChain
  if (n === 'aws sagemaker') return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg';
  if (n === 'vs code') return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg';

  // Default Devicon patterns
  const deviconMap: Record<string, string> = {
    'python': 'python/python-original.svg',
    'java': 'java/java-original.svg',
    'javascript': 'javascript/javascript-original.svg',
    'typescript': 'typescript/typescript-original.svg',
    'sql': 'postgresql/postgresql-original.svg', // generic SQL -> Postgres usually looks good or mysql
    'pytorch': 'pytorch/pytorch-original.svg',
    'tensorflow': 'tensorflow/tensorflow-original.svg',
    'keras': 'keras/keras-original.svg',
    'numpy': 'numpy/numpy-original.svg',
    'pandas': 'pandas/pandas-original.svg',
    'matplotlib': 'matplotlib/matplotlib-original.svg', // unofficial but common
    'docker': 'docker/docker-original.svg',
    'kubernetes': 'kubernetes/kubernetes-plain.svg',
    'fastapi': 'fastapi/fastapi-original.svg',
    'git': 'git/git-original.svg',
    'jupyter': 'jupyter/jupyter-original-wordmark.svg',
    'mongodb': 'mongodb/mongodb-original.svg',
    'react.js': 'react/react-original.svg',
    'tailwind': 'tailwindcss/tailwindcss-original.svg',
  };

  if (deviconMap[n]) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${deviconMap[n]}`;
  }
  
  // Fallbacks for things without clear icons
  if (n.includes('nlp')) return '📝'; 
  if (n.includes('generative')) return '✨';
  
  return null;
};

export const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
         <div className="mb-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Tech Stack
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              The tools and technologies I use to build intelligent systems.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {DATA.techStack.map((tech, index) => {
            const logoUrl = getTechLogo(tech.name);
            const isEmoji = logoUrl && !logoUrl.startsWith('http');

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="group relative h-32">
                    {/* Background & Glass Effect */}
                    <div className="absolute inset-0 bg-secondary/30 backdrop-blur-sm rounded-2xl border border-white/5 group-hover:border-cyan-500/30 transition-all duration-300"></div>
                    
                    {/* Hover Gradient Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

                    <div className="relative h-full flex flex-col items-center justify-center gap-3 p-4 transition-transform duration-300 group-hover:-translate-y-1">
                      
                      {/* Logo Area */}
                      <div className="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                          {isEmoji ? (
                              <span className="text-4xl">{logoUrl}</span>
                          ) : logoUrl ? (
                              <img 
                                src={logoUrl} 
                                alt={tech.name} 
                                className={`w-full h-full object-contain drop-shadow-lg ${tech.name.toLowerCase().includes('next') ? 'invert' : ''}`} 
                                loading="lazy"
                              />
                          ) : (
                              <tech.icon className="w-10 h-10 text-muted-foreground group-hover:text-cyan-400" />
                          )}
                      </div>
                      
                      {/* Name */}
                      <span className="font-medium text-sm text-gray-400 group-hover:text-white transition-colors text-center">
                          {tech.name}
                      </span>
                    </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};