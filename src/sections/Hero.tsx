import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play, Code, Layout, Server, Database, MapPin } from 'lucide-react';

const RotatingTitle = () => {
  const titles = [
    'Senior Full-Stack Developer',
    'JavaScript Specialist',
    'Architecting Next-Gen Scalability',
    'Expert in React & Node.js',
    'Driving Digital Excellence',
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-12 overflow-hidden flex justify-center">
      <motion.div
        key={index}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-2xl md:text-3xl font-display font-medium neon-text-blue"
      >
        {titles[index]}
      </motion.div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden scroll-mt-24">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="relative z-10 max-w-5xl text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium mb-4 backdrop-blur-md"
        >
          <div className="flex items-center gap-2 text-accent-cyan">
             <MapPin className="w-3.5 h-3.5" />
             <span>Monastir, Tunisia</span>
          </div>
          <div className="w-px h-3 bg-white/20" />
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue"></span>
            </span>
            <span>Available for Hire</span>
          </div>
        </motion.div>

        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-black tracking-tighter"
          >
            I'M <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan bg-clip-text text-transparent">RAMI JAWADI</span>
          </motion.h1>
          
          <RotatingTitle />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light leading-relaxed"
        >
          Senior Full-Stack JavaScript Developer with 7+ years of expertise. 
          Designing scalable, user-focused applications with React.js, Next.js, and Node.js. 
          I bridge the gap between complex architectures and flawless UI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#projects" className="btn-primary flex items-center gap-2 group min-w-[180px]">
            View My Projects
            <Play className="w-4 h-4 fill-primary group-hover:scale-110 transition-transform" />
          </a>
          <a href="#contact" className="btn-secondary group min-w-[180px]">
            Contact Me
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>

        {/* Tech Stack Pills (Subtle) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-6 pt-12"
        >
          {[
            { icon: Layout, label: 'React / Next.js' },
            { icon: Server, label: 'Node.js / NestJS' },
            { icon: Database, label: 'Firebase / Supabase' },
            { icon: Code, label: 'TypeScript / Docker' },
          ].map((tech) => (
            <div key={tech.label} className="flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-white transition-colors cursor-default">
              <tech.icon className="w-3.5 h-3.5 text-accent-blue" />
              {tech.label}
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 opacity-50 cursor-pointer hover:opacity-100 transition-opacity"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};
