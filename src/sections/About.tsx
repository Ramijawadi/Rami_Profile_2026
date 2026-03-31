import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, CheckCircle2, Star, Zap, Code, ShieldCheck } from 'lucide-react';

const ExperienceItem = ({ year, role, company, description }: any) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-8 md:pl-12 pb-14 last:pb-0 group"
  >
    {/* Line */}
    <div className="absolute left-[9px] md:left-[11px] top-2 bottom-0 w-px bg-white/10 group-last:hidden" />
    
    {/* Dot */}
    <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-[#020617] border-2 border-accent-blue/50 flex transition-all group-hover:scale-110 group-hover:border-accent-blue shadow-lg shadow-accent-blue/10" />

    <span className="inline-block px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-bold font-mono mb-2">
      {year}
    </span>
    <h3 className="text-xl font-bold text-white group-hover:neon-text-blue transition-all">{role}</h3>
    <p className="text-gray-400 font-medium mb-3">{company}</p>
    <p className="text-gray-500 text-sm leading-relaxed max-w-lg">{description}</p>
  </motion.div>
);

const SkillPill = ({ name }: any) => (
  <div className="px-5 py-2.5 rounded-2xl glass-card text-gray-300 text-sm font-medium border-white/5 hover:border-accent-blue/30 hover:bg-white/10 transition-all hover:scale-105 select-none flex items-center gap-2">
    <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue" />
    {name}
  </div>
);

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative max-w-7xl mx-auto scroll-mt-24">
      {/* Bio & Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold lg:text-left text-center tracking-tight">
              Designing Scalable <br />
              <span className="neon-text-purple">User-Focused</span> Apps
            </h2>
            <div className="w-20 h-1.5 bg-accent-purple rounded-full md:mx-0 mx-auto" />
          </div>

          <p className="text-xl text-gray-400 leading-relaxed lg:text-left text-center">
            Full-Stack JavaScript Developer with 7+ years of professional experience. 
            Designing and delivering high-performance, impactful digital experiences using 
            React.js, Next.js, Angular, Node.js, and NestJS. 
            Passionate about performance, clean code, and clean architecture.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10">
            {[
              { label: 'Total Experience', value: '7+ Yrs', icon: Briefcase },
              { label: 'Successful Apps', value: '25+', icon: Zap },
              { label: 'Tech Mastered', value: '15+', icon: Code },
              { label: 'Uptime Focus', value: '99.9%', icon: ShieldCheck },
            ].map((stat) => (
              <div key={stat.label} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors shadow-xl">
                <stat.icon className="w-6 h-6 text-accent-purple mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-wider text-gray-600 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-10">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-600 lg:text-left text-center flex items-center gap-2">
              <Star className="w-4 h-4 text-accent-blue" /> Core Expertise
            </h4>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {['TypeScript','JavaScript', 'React.js', 'Next.js', 'Nest.js', 'Node.js', 'Angular','Express.js', 'Docker', 'AWS S3', 'MongoDB', 'Supabase'].map((skill) => (
                <SkillPill key={skill} name={skill} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <div id="experience" className="space-y-12 scroll-mt-24">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold lg:text-left text-center">Work History</h2>
            <div className="w-20 h-1.5 bg-accent-blue rounded-full md:mx-0 mx-auto" />
          </div>
          
          <div className="space-y-0 relative border-l-0">
            <ExperienceItem
              year="JAN 2026 - PRESENT"
              role="Full-Stack Developer"
              company="Captiosus Axons"
              description="Building scalable REST APIs with Node.js & Express. Implementing secure OAuth authentication endpoints. Ensuring high UI/UX performance and seamless frontend delivery."
            />
            <ExperienceItem
              year="FEB 2024 - SEP 2024"
              role="Frontend Developer (Angular)"
              company="BonGest"
              description="Developed ERP interfaces for enterprises. Optimized NestJS backend services and reduced technical debt. Improved application performance by 30%."
            />
            <ExperienceItem
              year="FEB 2023 - DEC 2023"
              role="Full-Stack Developer"
              company="Tanit"
              description="Designed core system architecture and class diagrams. Built administrative dashboards and adherent systems with secure RESTful middleware."
            />
            <ExperienceItem
              year="JAN 2022 - NOV 2022"
              role="Frontend Developer (Next.js)"
              company="Bansco Consulting"
              description="Developed the PeopleSphere WebApp UX/UI. Built complex admin delivery interfaces using Ant Design and Next.js performance optimizations."
            />
          </div>
        </div>
      </div>

      {/* Education & Languages (Quick Bar) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-white/5">
         <div className="glass-card p-6 flex items-center gap-6">
            <div className="p-3 bg-accent-blue/10 rounded-xl border border-accent-blue/20">
               <GraduationCap className="w-6 h-6 text-accent-blue" />
            </div>
            <div>
               <h4 className="text-white font-bold">Bachelor's in Computer Science</h4>
               <p className="text-gray-500 text-sm">University of Monastir (2018)</p>
            </div>
         </div>
         <div className="glass-card p-6 flex flex-wrap gap-4 items-center justify-center sm:justify-start">
            <span className="text-xs font-bold text-gray-600 uppercase tracking-widest mr-2">Languages:</span>
            {['Arabic (Native)', 'French (Advanced)', 'English (Intermediate)', 'Spanish (Basic)'].map(l => (
               <span key={l} className="text-xs font-mono text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/10">{l}</span>
            ))}
         </div>
      </div>
    </section>
  );
};
