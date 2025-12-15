import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal, Trophy } from 'lucide-react';
import { DATA } from '../constants';

export const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="py-24 relative overflow-hidden">
      {/* Subtle Background Highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
             <Trophy className="w-5 h-5 text-cyan-400" />
             <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">Competitive Programming</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Coding Profiles
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
             Regular practice on these platforms helps me sharpen my algorithmic thinking.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {DATA.codingProfiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group block"
            >
              <div className="relative h-full bg-white/5 border border-white/5 hover:border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group-hover:bg-white/10 backdrop-blur-sm">
                
                {/* Hover Top Border Gradient */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${profile.color.replace('text-', 'text-')}`} />

                {/* Icon Circle */}
                <div className={`relative w-16 h-16 flex items-center justify-center bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-white/10 ${profile.color.replace('text-', 'text-opacity-20 ')}`}>
                     {profile.icon === 'terminal' ? (
                        <Terminal className={`w-8 h-8 ${profile.color}`} />
                    ) : (
                        <img 
                            src={profile.icon} 
                            alt={profile.name}
                            className={`w-9 h-9 object-contain drop-shadow-md transition-all duration-300 ${profile.name === 'LeetCode' || profile.name === 'CodeChef' ? 'filter brightness-90 group-hover:brightness-110' : ''}`} 
                        />
                    )}
                </div>

                {/* Text Info */}
                <div className="text-center z-10">
                    <h3 className={`font-bold text-base transition-colors ${profile.color}`}>
                        {profile.name}
                    </h3>
                    <div className="flex items-center justify-center gap-1 text-[11px] font-medium text-gray-500 mt-2 uppercase tracking-wide group-hover:text-gray-300 transition-colors">
                        <span>View Stats</span>
                        <ExternalLink className="w-3 h-3" />
                    </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};