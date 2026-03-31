import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Code } from 'lucide-react';

const ProjectCard = ({ title, tagline, description, tech, github, demo, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative h-full flex flex-col"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-accent-purple/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="glass-card hover:bg-white/10 hover:border-white/20 p-8 flex flex-col h-full space-y-6">
        <div className="flex justify-between items-start">
          <div className="p-3 bg-accent-blue/10 rounded-xl border border-accent-blue/20 group-hover:scale-110 group-hover:bg-accent-blue/20 transition-all duration-300">
            <Code className="w-6 h-6 text-accent-blue" />
          </div>
          <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <a href={github} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
            <a href={demo} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white group-hover:neon-text-blue transition-colors tracking-tight">{title}</h3>
          <p className="text-sm font-medium text-accent-purple tracking-wide uppercase font-mono">{tagline}</p>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed flex-grow">{description}</p>

        <div className="pt-6 border-t border-white/5 space-y-4">
          <div className="flex flex-wrap gap-2">
            {tech.map((t: string) => (
              <span key={t} className="px-2 py-1 text-[10px] font-bold bg-white/5 border border-white/10 rounded-md text-gray-500 uppercase tracking-wider group-hover:text-gray-300 transition-colors">
                {t}
              </span>
            ))}
          </div>
          
          <a
            href={demo}
            className="flex items-center justify-between text-xs font-bold text-accent-cyan group/link"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW PROJECT
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const projects = [
    {
      title: 'Eksi Platform',
      tagline: 'High-Performance E-commerce',
      description: 'Senior-level React platform for scaled commerce. Featuring SEO optimization, smooth Framer Motion interactions, and Radix UI components for high accessibility.',
      tech: ['React', 'Framer Motion', 'Radix UI', 'Vite'],
      github: 'https://github.com/Ramijawadi',
      demo: 'https://eksiplateform.vercel.app/',
    },
    {
      title: 'Admin Dashboard',
      tagline: 'Real-time Product CRM',
      description: 'Comprehensive product management system with real-time updates through Supabase. Built with type-safe architecture for maximum reliability and scalable data pipelines.',
      tech: ['Next.js', 'Ant Design', 'TypeScript', 'Tailwind'],
      github: 'https://github.com/Ramijawadi/Dashboard_Antd',
      demo: 'https://mydashboard-umber.vercel.app/',
    },
    {
      title: 'WaelAcademy',
      tagline: 'Educational Platform',
      description: 'Modern modular React architecture for online learning. Focused on performance-first delivery and sub-second page loads. Deployed on Vercel with CI/CD optimization.',
      tech: ['React', 'Vite', 'Vercel', 'Tailwind CSS'],
      github: 'https://github.com/Ramijawadi',
      demo: 'https://www.waelacademy.com/',
    },
    {
      title: 'Finance Application',
      tagline: 'DELTA Cloud Management Project',
      description: 'Finance Management Landing page including support and pricing sections.',
      tech: ['Vercel', 'PWA', 'React', 'styled-components'],
      github: 'https://github.com/Ramijawadi/FinanceApp',
      demo: 'https://deltacloud.vercel.app/',
    },
      {
      title: 'Multi-Vendor Platform',
      tagline: 'Enterprise Full-Stack CRM',
      description: 'Complex administrative and E-Commerce dashboards connected to a secure REST API backend. Implemented secure middleware, JWT authentication, and complex data models.',
      tech: ['Emotion','Material UI', 'React', 'supabase'],
      github: 'https://github.com/Ramijawadi',
      demo: 'https://eksi-2026.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative max-w-7xl mx-auto overflow-hidden scroll-mt-24">
      {/* Section Background Decorative */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-blue/5 -skew-x-12 blur-[100px] pointer-events-none" />

      <div className="space-y-16 text-center">
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Project <span className="neon-text-blue">Showcase</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-accent-blue rounded-full mx-auto" />
          <p className="max-w-2xl mx-auto text-gray-400 font-medium">
            Explore some of my high-impact builds. From real-time e-commerce platforms to complex enterprise dashboards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch pt-8">
          {projects.map((proj, i) => (
            <ProjectCard key={proj.title} {...proj} index={i} />
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="pt-10 flex flex-col items-center space-y-4"
        >
           <p className="text-gray-500 text-sm italic font-medium">Looking for more technical implementations?</p>
           <a href="https://github.com/Ramijawadi" target="_blank" className="btn-secondary flex items-center gap-3">
             <Github className="w-5 h-5 text-accent-blue" />
             Explore Full GitHub Portfolio
           </a>
        </motion.div>
      </div>
    </section>
  );
};
