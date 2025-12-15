import React from 'react';
import { motion } from 'framer-motion';

export const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
    >
      <div className="relative">
        {/* Spinner Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 rounded-full border-4 border-t-cyan-500 border-r-transparent border-b-cyan-500/30 border-l-transparent"
        />
        
        {/* Inner Pulse */}
        <motion.div
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute inset-0 m-auto w-8 h-8 bg-cyan-500/20 rounded-full blur-md"
        />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-cyan-400/90 text-sm font-mono tracking-widest uppercase"
      >
        Loading Portfolio...
      </motion.h2>
    </motion.div>
  );
};