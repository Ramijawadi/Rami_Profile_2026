import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Mail, Phone, CheckCircle, Github, Linkedin, Youtube, Globe, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init('o3a8xCkRA16ZOofYQ');

const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_jb4402m', 
  TEMPLATE_ID: 'template_vo7s9jy', 
  PUBLIC_KEY: 'o3a8xCkRA16ZOofYQ', 
};

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // explicit data mapping to the template variables in the screenshot
    const templateParams = {
      name: formState.name,
      email: formState.email,
      message: formState.message,
      gmail: 'Portfolio Site', // matching your subject line variable {{gmail}}
    };

    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('EmailJS Response:', response.status, response.text);
      
      setIsSubmitting(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 5000);
      setFormState({ name: '', email: '', message: '' });
    } catch (err: any) {
      console.error('EmailJS Detailed Error:', err);
      setIsSubmitting(false);
      
      // Checking for specific status codes
      if (err.status === 412) {
         setError('Precondition Failed (412): Please check your Dashboard and reconnect your Email Service (Gmail).');
      } else if (err.status === 400) {
         setError('Invalid Request (400): Double-check your Service ID and Template ID.');
      } else {
         setError(`Error ${err.status || 'unknown'}: ${err.text || 'Check console for details'}`);
      }
      
      setTimeout(() => setError(null), 10000);
    }
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Ramijawadi', color: 'hover:text-white hover:bg-white/10' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jawadi-rami/', color: 'hover:text-accent-blue hover:bg-accent-blue/10' },
    { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@ramijawadi4356', color: 'hover:text-red-500 hover:bg-red-500/10' },
    { icon: Globe, label: 'Portfolio', href: 'https://ramijawadidev.netlify.app/', color: 'hover:text-accent-purple hover:bg-accent-purple/10' },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative max-w-7xl mx-auto">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold lg:text-left text-center tracking-tight">
              Let's Build Something <br />
              <span className="neon-text-blue line-clamp-1">Great Together</span>
            </h2>
            <div className="w-20 h-1.5 bg-accent-blue rounded-full md:mx-0 mx-auto" />
          </div>

          <p className="max-w-md text-gray-400 text-lg leading-relaxed lg:text-left text-center mx-auto lg:mx-0">
            Senior Full-Stack Developer base in Tunisia. Open for high-impact partnerships and engineering roles.
          </p>

          <div className="space-y-4 max-w-sm mx-auto lg:ml-0">
            {[
              { icon: Mail, label: 'Email Address', value: 'ramijawadi104@gmail.com', href: 'mailto:ramijawadi104@gmail.com' },
              { icon: Phone, label: 'Phone Number', value: '+216 51 276 993', href: 'tel:+21651276993' },
              { icon: MapPin, label: 'Current Base', value: 'Monastir, Tunisia / Remote', href: '#' },
            ].map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="flex items-center gap-5 p-4 rounded-2xl glass-card hover:bg-white/10 hover:border-white/20 transition-all group"
              >
                <div className="p-3 bg-accent-blue/10 rounded-xl border border-accent-blue/20 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none mb-1">{item.label}</div>
                  <div className="text-white font-medium">{item.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="pt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-2xl glass-card transition-all group ${social.color}`}
                title={social.label}
              >
                <social.icon className="w-6 h-6 text-gray-400 transition-colors group-hover:text-inherit" />
              </a>
            ))}
          </div>
        </div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="glass-card hover:bg-white/10 p-10 flex flex-col justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
             <div className="h-full w-full bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Full Name</label>
              <input
                required
                type="text"
                placeholder="Rami Jawadi"
                className="w-full h-14 px-6 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/30 transition-all font-medium"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Email Address</label>
              <input
                required
                type="email"
                placeholder="ramijawadi104@gmail.com"
                className="w-full h-14 px-6 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/30 transition-all font-medium"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Project Details</label>
              <textarea
                required
                rows={4}
                placeholder="Tell me about your project or role..."
                className="w-full px-6 py-5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/30 transition-all font-medium resize-none"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />
            </div>

            <AnimatePresence>
               {error && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-medium">
                     <AlertCircle className="w-4 h-4" /> {error}
                  </motion.div>
               )}
            </AnimatePresence>

            <button
              disabled={isSubmitting || isSent}
              className="w-full h-14 btn-primary flex items-center justify-center gap-3 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <AnimatePresence mode="wait">
                {isSent ? (
                  <motion.div key="sent" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" /> Message Sent
                  </motion.div>
                ) : isSubmitting ? (
                  <motion.div key="submitting" className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                    Transmitting...
                  </motion.div>
                ) : (
                  <motion.div key="idle" className="flex items-center gap-2">
                    <Send className="w-4 h-4 mr-1" /> Initialise Contact
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </form>
        </motion.div>
      </div>
      
      <div className="mt-32 pt-16 border-t border-white/5 text-center flex flex-col items-center gap-6">
         <div className="flex items-center gap-2 opacity-100 group">
           <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center border border-accent-blue/20 group-hover:bg-accent-blue/20 transition-all">
             <span className="text-sm font-black text-accent-blue">RJ</span>
           </div>
           <span className="text-lg font-black text-white tracking-widest uppercase">RAMI JAWADI</span>
         </div>
         <p className="text-[10px] uppercase tracking-[0.4em] text-gray-700 font-bold">
           &copy; 2026 Developed by Rami J. • Next-Gen Portfolio Engine 
         </p>
      </div>
    </section>
  );
};
