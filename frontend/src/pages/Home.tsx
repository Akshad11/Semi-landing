import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Layers, Zap, ShieldCheck } from 'lucide-react';
import ThreeHero from '../components/ThreeHero';
import Section from '../components/ui/Section';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <ThreeHero />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zyron-dark/50 to-zyron-dark pointer-events-none" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-[-80px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <span className="text-zyron-cyan text-sm font-semibold tracking-wide uppercase">Next-Gen Semiconductor Engineering</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight"
          >
            Engineering the Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zyron-cyan via-zyron-blue to-zyron-violet">
              Silicon Innovation
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Your trusted partner for RTL-to-GDSII, Verification, and Embedded Software solutions. 
            Delivering high-performance chips for AI, Automotive, and IoT.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-zyron-blue hover:bg-zyron-cyan text-white hover:text-black font-semibold rounded-lg transition-all flex items-center justify-center gap-2 group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 bg-white/5 border border-white/10 hover:border-zyron-cyan text-white rounded-lg transition-all backdrop-blur-md"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Services Preview */}
      <Section className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Core Capabilities</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">End-to-end semiconductor design capabilities ensuring first-time-right silicon.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Layers, title: 'Design & DV', desc: 'RTL Design, SoC Integration, and UVM based Verification.' },
            { icon: Cpu, title: 'Physical Design', desc: 'RTL to GDSII implementation with optimal PPA.' },
            { icon: Zap, title: 'Analog & Mixed Signal', desc: 'Custom layout design for high-speed interfaces.' },
            { icon: ShieldCheck, title: 'Software Support', desc: 'Embedded software, firmware, and post-silicon validation.' },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-zyron-panel border border-zyron-border hover:border-zyron-blue transition-all group"
            >
              <div className="w-12 h-12 bg-zyron-blue/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zyron-blue/20 transition-colors">
                <service.icon className="w-6 h-6 text-zyron-blue group-hover:text-zyron-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Stats/Highlights */}
      <Section className="bg-gradient-to-b from-transparent to-zyron-blue/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Tapeouts Delivered', value: '50+' },
            { label: 'Expert Engineers', value: '200+' },
            { label: 'Years Experience', value: '15+' },
            { label: 'Global Clients', value: '20+' },
          ].map((stat, idx) => (
            <div key={idx} className="p-6">
              <h4 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.value}</h4>
              <p className="text-zyron-cyan font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Home;