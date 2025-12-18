import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, ChevronRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Why Zyron', path: '/why-zyron' },
  // { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zyron-dark/80 backdrop-blur-md border-b border-zyron-border' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-zyron-blue to-zyron-cyan rounded-lg overflow-hidden">
            <Cpu className="w-6 h-6 text-white relative z-10" />
            <div className="absolute inset-0 bg-white/20 group-hover:bg-white/40 transition-colors" />
          </div>
          <span className="font-display font-bold text-xl tracking-wider text-white">
            ZYRON<span className="text-zyron-cyan">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-zyron-cyan ${location.pathname === link.path ? 'text-zyron-cyan' : 'text-gray-400'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2 bg-white/5 hover:bg-white/10 border border-zyron-border rounded-full text-sm font-semibold transition-all hover:border-zyron-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zyron-dark border-b border-zyron-border overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between text-lg font-medium p-2 rounded-lg hover:bg-white/5 ${location.pathname === link.path ? 'text-zyron-cyan' : 'text-gray-300'
                    }`}
                >
                  {link.name}
                  <ChevronRight size={16} />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;