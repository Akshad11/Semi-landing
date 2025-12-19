import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Zap, ShieldCheck } from 'lucide-react';
import { HeroCarousel } from '../components/HeroCarousel';
import Section from '../components/ui/Section';
import { Slide } from '../types';
import Navbar from '../components/Navbar';
import { ServicesSection } from '../components/ServicesSection';
import OurFeatures from '../components/OurFeatures';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
const DEFAULT_SLIDES: Slide[] = [
  {
    id: '1',
    title: "Powering the Next Generation of Electronics",
    subtitle: "Advanced Semiconductors",
    description: "Reclk Semiconductors delivers high-performance, energy-efficient chips for automotive, industrial, and consumer applications.",
    ctaText: "Explore Products",
    imageUrl: "https://plus.unsplash.com/premium_photo-1683120974913-1ef17fdec2a8?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Using grayscale/blur to fake a moody tech bg, seed randomizes
  },
  {
    id: '2',
    title: "Global Supply Chain Excellence",
    subtitle: "Reliability First",
    description: "With manufacturing hubs across three continents, we ensure your production lines never stop moving.",
    ctaText: "Our Network",
    imageUrl: "https://images.unsplash.com/photo-1672307613484-3254a04651fd?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: '3',
    title: "Sustainable Innovation",
    subtitle: "Eco-Friendly Tech",
    description: "Pioneering green manufacturing processes to reduce carbon footprints in every silicon wafer we produce.",
    ctaText: "Sustainability Report",
    imageUrl: "https://images.unsplash.com/photo-1640955785023-1854685dae05?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

const Home: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>(DEFAULT_SLIDES);
  const [isGenerating, setIsGenerating] = useState(false);
  const [topic, setTopic] = useState('');

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setIsGenerating(true);

  };
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen w-full flex  overflow-hidden">
        <Navbar />

        <div className="flex-1 min-h-0">
          <HeroCarousel slides={slides} />
        </div>
      </div>

      {/* Services Preview */}
      <Section className="relative z-10">
        <ServicesSection />
      </Section>

      {/* Stats/Highlights */}
      <Section className="bg-gradient-to-b from-transparent to-zyron-blue/5">
        <OurFeatures />
      </Section>
      <Section className="bg-gradient-to-b from-transparent to-zyron-blue/5">
        <AboutSection />
      </Section>
      <Section className="bg-gradient-to-b from-transparent to-zyron-blue/5">
        <ContactSection />
      </Section>
    </>
  );
};

export default Home;