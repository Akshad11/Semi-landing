import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, FileCode, GitBranch, Terminal } from 'lucide-react';
import Section from '../components/ui/Section';
import { Link } from 'react-router-dom';

interface ServiceDetail {
  id: string;
  title: string;
  icon: any;
  description: string;
  features: string[];
  capabilities: string[];
}

const servicesData: ServiceDetail[] = [
  {
    id: 'design',
    title: 'Design & Verification',
    icon: Cpu,
    description: 'Comprehensive RTL design and functional verification services ensuring bug-free silicon.',
    features: ['SoC Architecture', 'RTL Coding (Verilog/VHDL)', 'IP Integration', 'Low Power Design'],
    capabilities: ['UVM Methodologies', 'Formal Verification', 'Emulation', 'Gate Level Simulation']
  },
  {
    id: 'physical',
    title: 'Physical Design',
    icon: GitBranch,
    description: 'Transforming RTL to GDSII with industry-leading PPA (Power, Performance, Area) targets.',
    features: ['Floorplanning', 'Place & Route', 'Clock Tree Synthesis', 'Static Timing Analysis'],
    capabilities: ['7nm/5nm/3nm Nodes', 'Low Power Implementation', 'Signal Integrity Analysis', 'Physical Verification (DRC/LVS)']
  },
  {
    id: 'analog',
    title: 'Analog Layout',
    icon: FileCode,
    description: 'High-precision custom layout design for analog and mixed-signal circuits.',
    features: ['SerDes Layout', 'PLL/DLL Layout', 'ADC/DAC Layout', 'Power Management'],
    capabilities: ['FinFET Technologies', 'Matching & Shielding', 'Reliability Analysis (EM/IR)', 'Parasitic Extraction']
  },
  {
    id: 'software',
    title: 'Software Support',
    icon: Terminal,
    description: 'Embedded software and firmware solutions to bring your silicon to life.',
    features: ['Firmware Development', 'Device Drivers', 'Bootloaders', 'RTOS Porting'],
    capabilities: ['Post-silicon Validation', 'Board Bring-up', 'Performance Optimization', 'System Validation']
  }
];

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(servicesData[0]);

  return (
    <div className="min-h-screen pt-12 pb-24">
      {/* Header */}
      <Section className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Our <span className="text-zyron-cyan">Expertise</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We offer a full spectrum of semiconductor engineering services, from concept to silicon.
        </p>
      </Section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-4 space-y-4">
          {servicesData.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service)}
              className={`w-full text-left p-6 rounded-xl border transition-all duration-300 flex items-center gap-4 group ${
                activeService.id === service.id
                  ? 'bg-zyron-blue/10 border-zyron-cyan shadow-[0_0_20px_rgba(0,240,255,0.15)]'
                  : 'bg-zyron-panel border-zyron-border hover:border-zyron-blue'
              }`}
            >
              <div className={`p-3 rounded-lg ${activeService.id === service.id ? 'bg-zyron-cyan text-black' : 'bg-white/5 text-gray-400 group-hover:text-white'}`}>
                <service.icon size={24} />
              </div>
              <div>
                <h3 className={`font-semibold ${activeService.id === service.id ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                  {service.title}
                </h3>
              </div>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-zyron-panel border border-zyron-border rounded-2xl p-8 md:p-12 h-full relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-zyron-blue/10 blur-[100px] rounded-full pointer-events-none" />

              <h2 className="text-3xl font-display font-bold mb-6 flex items-center gap-3">
                {activeService.title}
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                {activeService.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-zyron-cyan font-bold mb-6 uppercase tracking-wider text-sm">Key Features</h3>
                  <ul className="space-y-4">
                    {activeService.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-zyron-blue rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-zyron-violet font-bold mb-6 uppercase tracking-wider text-sm">Capabilities</h3>
                  <ul className="space-y-4">
                    {activeService.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-zyron-violet rounded-full" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 flex justify-end">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-zyron-cyan transition-colors"
                >
                  Consult Now
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Services;