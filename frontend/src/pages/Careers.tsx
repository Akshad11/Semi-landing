import React from 'react';
import Section from '../components/ui/Section';
import { Briefcase, MapPin, ArrowUpRight } from 'lucide-react';

const jobs = [
  {
    title: 'Senior RTL Design Engineer',
    dept: 'Front-end Design',
    location: 'Bangalore, India',
    type: 'Full-time'
  },
  {
    title: 'Physical Design Lead',
    dept: 'Back-end Design',
    location: 'Bangalore, India',
    type: 'Full-time'
  },
  {
    title: 'DV Engineer (UVM)',
    dept: 'Verification',
    location: 'Remote / Hybrid',
    type: 'Contract'
  },
  {
    title: 'Embedded Firmware Developer',
    dept: 'Software',
    location: 'Bangalore, India',
    type: 'Full-time'
  }
];

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen py-24">
      <Section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Join the <span className="text-zyron-cyan">Innovation</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Build the future of technology with us. We are always looking for brilliant minds to join our growing team.
        </p>
      </Section>

      <Section>
        <div className="space-y-4">
          {jobs.map((job, idx) => (
            <div 
              key={idx}
              className="group bg-zyron-panel border border-zyron-border p-6 md:p-8 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between hover:border-zyron-cyan transition-all"
            >
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-zyron-cyan transition-colors">{job.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1"><Briefcase size={14} /> {job.dept}</span>
                  <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                  <span className="bg-white/10 px-2 py-0.5 rounded text-white text-xs">{job.type}</span>
                </div>
              </div>
              <button className="mt-4 md:mt-0 px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2">
                Apply Now <ArrowUpRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Careers;