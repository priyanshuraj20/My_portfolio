import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';
import { DATA } from '../constants';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-black/40 border-t border-white/5 backdrop-blur-md overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-32 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-6 relative z-10">
            {/* Social Links */}
            <div className="flex items-center gap-6">
                <a 
                    href={DATA.contact.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-[#0077b5] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
                    aria-label="LinkedIn"
                >
                    <Linkedin className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
                <a 
                    href={DATA.contact.social.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/20"
                    aria-label="GitHub"
                >
                    <Github className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
                <a 
                    href={DATA.contact.social.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-[#E1306C] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/20"
                    aria-label="Instagram"
                >
                    <Instagram className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
            </div>

            {/* Copyright & Credit */}
            <div className="flex flex-col items-center gap-2 text-center">
                <p className="text-gray-500 text-sm flex items-center gap-1.5">
                    Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by <span className="text-gray-300 font-medium">{DATA.name}</span>
                </p>
                <p className="text-gray-600 text-xs">
                    © {currentYear}. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  );
};