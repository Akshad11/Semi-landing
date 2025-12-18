import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import { Flag, Target, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-zyron-panel border-b border-zyron-border py-24 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-display font-bold mb-6"
        >
          About <span className="text-zyron-cyan">ZYRON</span>
        </motion.h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          We are a team of passionate engineers dedicated to pushing the boundaries of what's possible in semiconductor technology.
        </p>
      </div>

      {/* Mission & Vision */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              To provide world-class semiconductor design and verification services that accelerate innovation for our global partners. We aim to be the extended arm of engineering teams worldwide, delivering excellence in every tapeout.
            </p>
            <div className="space-y-4">
              {[
                'First-time-right Silicon',
                'Zero-defect delivery methodology',
                'Collaborative innovation ecosystem'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-zyron-cyan rounded-full" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-zyron-blue to-zyron-violet opacity-20 blur-3xl rounded-full" />
            <div className="relative grid grid-cols-2 gap-4">
               <div className="bg-zyron-panel p-6 rounded-2xl border border-zyron-border">
                 <Target className="w-10 h-10 text-zyron-cyan mb-4" />
                 <h3 className="font-bold text-lg mb-2">Vision</h3>
                 <p className="text-sm text-gray-400">To be the global leader in semiconductor engineering services.</p>
               </div>
               <div className="bg-zyron-panel p-6 rounded-2xl border border-zyron-border mt-8">
                 <Flag className="w-10 h-10 text-zyron-violet mb-4" />
                 <h3 className="font-bold text-lg mb-2">Values</h3>
                 <p className="text-sm text-gray-400">Integrity, Innovation, and Excellence in everything we do.</p>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="bg-white/5">
        <h2 className="text-3xl font-display font-bold text-center mb-16">Our Journey</h2>
        <div className="max-w-4xl mx-auto border-l-2 border-zyron-border pl-8 space-y-12 relative">
          {[
            { year: '2015', title: 'Founded', desc: 'Zyron Semiconductors established in Bangalore.' },
            { year: '2018', title: 'Global Expansion', desc: 'Expanded operations to serve clients in USA and Europe.' },
            { year: '2021', title: '50th Tapeout', desc: 'Celebrated a major milestone of 50 successful tapeouts.' },
            { year: '2024', title: 'AI Center of Excellence', desc: 'Launched dedicated division for AI/ML chip design.' },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-0 w-5 h-5 bg-zyron-dark border-2 border-zyron-cyan rounded-full" />
              <span className="text-zyron-cyan font-bold text-xl block mb-2">{item.year}</span>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;