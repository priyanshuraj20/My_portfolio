import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../constants';

export const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 border-l-4 border-cyan-500 pl-4"
          >
            My Skills
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {DATA.skillCategories.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4">
                {/* Circular Progress (Visual only) */}
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    className="stroke-gray-800 fill-transparent stroke-[6px]"
                  />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    className="stroke-cyan-500 fill-transparent stroke-[6px] transition-all duration-1000 ease-out"
                    strokeDasharray="283"
                    strokeDashoffset={283 - (283 * skill.progress) / 100}
                    strokeLinecap="round"
                  />
                </svg>
                
                {/* Icon in Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-3 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                        <skill.icon className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" />
                    </div>
                </div>
              </div>
              
              <h3 className="text-center font-medium text-sm md:text-base text-gray-300 group-hover:text-cyan-400 transition-colors max-w-[120px]">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};