import React from 'react';
import { motion } from 'framer-motion';

export const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      {/* Base Noise/Texture Overlay - Subtle Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

      {/* Main Gradient Blobs - Brighter, Larger, Softer */}
      {/* Top Left - Cyan/Blue */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-cyan-500/15 rounded-full blur-[120px]"
      />
      
      {/* Bottom Right - Purple/Indigo */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-indigo-500/15 rounded-full blur-[120px]"
      />

      {/* Center/Top-Right - Accent */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[20%] right-[20%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]"
      />
    </div>
  );
};