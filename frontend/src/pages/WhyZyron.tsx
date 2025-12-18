import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import { Shield, Clock, TrendingUp, CheckCircle } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'Faster Time-to-Market',
    desc: 'Our agile methodologies and reusable IP blocks significantly reduce design cycles, ensuring you beat the competition.'
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    desc: 'Security is ingrained in our design process. We adhere to the strictest IP protection standards.'
  },
  {
    icon: CheckCircle,
    title: 'First-Time-Right Silicon',
    desc: ' rigorous verification methodologies (UVM, Formal) minimize re-spins and costly delays.'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Architecture',
    desc: 'We design with the future in mind, creating modular architectures that scale with your business needs.'
  }
];

const WhyZyron: React.FC = () => {
  return (
    <div className="min-h-screen py-24">
      <Section className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Why Partner with <span className="text-zyron-cyan">Zyron</span>?</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          We combine deep domain expertise with cutting-edge tools to deliver exceptional semiconductor solutions.
        </p>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zyron-panel border border-zyron-border p-8 rounded-2xl flex gap-6 hover:bg-white/5 transition-colors"
            >
              <div className="shrink-0 w-16 h-16 bg-zyron-blue/10 rounded-full flex items-center justify-center text-zyron-cyan">
                <item.icon size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="mt-20">
        <div className="bg-gradient-to-r from-zyron-blue to-zyron-violet rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Ready to start your next project?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
              Join leading tech companies who trust Zyron for their critical silicon needs.
            </p>
            <button className="px-8 py-4 bg-white text-zyron-blue font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default WhyZyron;