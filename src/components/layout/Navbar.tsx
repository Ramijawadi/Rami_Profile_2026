import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Github, Linkedin, Mail, Menu, X, Youtube } from 'lucide-react';
import { cn } from '../../utils/cn';

const NavLink = ({ href, children, icon: Icon }: any) => (
  <a
    href={href}
    className="group flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-accent-blue"
  >
    {Icon && <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />}
    <span className="relative">
      {children}
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent-blue transition-all group-hover:w-full" />
    </span>
  </a>
);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Ramijawadi' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jawadi-rami/' },
    { icon: Youtube, href: 'https://www.youtube.com/@ramijawadi4356' },
    { icon: Mail, href: 'mailto:ramijawadi104@gmail.com' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300',
        (scrolled || mobileOpen) ? 'bg-[#020617]/90 backdrop-blur-xl border-b border-white/5 py-3 shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center border border-accent-blue/20 transition-all group-hover:scale-110 group-hover:bg-accent-blue/20">
            <Terminal className="w-5 h-5 text-accent-blue" />
          </div>
          <span className="text-xl font-display font-bold text-white group-hover:neon-text-blue tracking-tight">RAMI.DEV</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.name} href={link.href}>
              {link.name}
            </NavLink>
          ))}
          <div className="w-px h-4 bg-white/10 mx-2" />
          <div className="flex items-center gap-4">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-gray-400 transition-all hover:text-white hover:scale-110 active:scale-95"
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 overflow-hidden rounded-2xl glass-card p-4 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                  
                  // Allow menu to start closing then scroll
                  setTimeout(() => {
                    const target = document.querySelector(link.href);
                    if (target) {
                      target.scrollIntoView({ 
                         behavior: 'smooth',
                         block: 'start'
                      });
                    }
                  }, 100);
                }}
                className="block px-4 py-2 text-lg font-medium text-white hover:bg-white/5 rounded-xl transition-colors text-center"
              >
                {link.name}
              </a>
            ))}
            <div className="grid grid-cols-4 gap-2 border-t border-white/5 pt-4 px-4">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
