import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  TrendingUp,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import Navbar from "../components/Navbar";

/* ---------- Data ---------- */

const reasons = [
  {
    icon: Clock,
    title: "Faster Time-to-Market",
    desc: "Our agile methodologies and reusable IP blocks significantly reduce design cycles, ensuring you beat the competition.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    desc: "Security is ingrained in our design process. We adhere to the strictest IP protection standards.",
  },
  {
    icon: CheckCircle,
    title: "First-Time-Right Silicon",
    desc: "Rigorous verification methodologies minimize re-spins and costly delays.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    desc: "We design modular architectures that scale seamlessly with your business needs.",
  },
];

const features = [
  {
    title: "Deep Domain Expertise",
    short: "Decades of semiconductor engineering experience.",
    more:
      "Our team brings decades of combined experience across ASIC, SoC, and advanced-node designs, enabling faster ramp-up and fewer design risks.",
  },
  {
    title: "Advanced Toolchains",
    short: "State-of-the-art EDA and automation flows.",
    more:
      "We leverage industry-leading EDA tools with custom automation to improve productivity, accuracy, and turnaround time across projects.",
  },
  {
    title: "Proven Methodologies",
    short: "Robust design and verification processes.",
    more:
      "From UVM-based verification to formal methods and emulation, our methodologies ensure high coverage and first-pass success.",
  },
  {
    title: "Flexible Engagement",
    short: "Engagement models tailored to your needs.",
    more:
      "We offer flexible engagement models including turnkey projects, staff augmentation, and long-term partnerships.",
  },
];

/* ---------- Header ---------- */

const WhyHeader: React.FC = () => (
  <div className="relative h-[50vh] w-full flex items-center justify-center text-center overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop"
      alt="Why Zyron"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/60" />

    <div className="relative z-10 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold mb-6 text-white"
      >
        Why Partner with <span className="text-blue-400">Zyron</span>?
      </motion.h1>
      <p className="text-lg text-gray-200 max-w-3xl mx-auto">
        We combine deep domain expertise with cutting-edge tools to deliver
        exceptional semiconductor solutions.
      </p>
    </div>
  </div>
);

/* ---------- Reason Card ---------- */

const ReasonCard: React.FC<any> = ({ icon: Icon, title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-white border border-gray-200 p-8 rounded-2xl flex gap-6 shadow-sm hover:shadow-lg transition"
  >
    <div className="shrink-0 w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
      <Icon size={28} />
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

/* ---------- Feature Card (Expandable) ---------- */

const FeatureCard: React.FC<any> = ({ title, short, more, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
    >
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div>
          <h4 className="font-semibold text-lg text-gray-900">{title}</h4>
          <p className="text-gray-600 text-sm mt-1">{short}</p>
        </div>
        <ChevronDown
          className={`text-blue-600 transition-transform ${open ? "rotate-180" : ""
            }`}
        />
      </div>

      {open && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="text-gray-600 text-sm mt-4 leading-relaxed"
        >
          {more}
        </motion.p>
      )}
    </motion.div>
  );
};

/* ---------- CTA ---------- */

const WhyCTA: React.FC = () => (
  <section className="py-20">
    <div className="max-w-6xl mx-auto bg-blue-600 rounded-3xl p-12 text-center text-white shadow-xl">
      <h2 className="text-3xl font-bold mb-6">
        Ready to start your next project?
      </h2>
      <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
        Join leading tech companies who trust Zyron for their critical silicon
        needs.
      </p>
      <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition">
        Schedule a Consultation
      </button>
    </div>
  </section>
);

/* ---------- Main Page ---------- */

const WhyZyron: React.FC = () => {
  return (
    <>
      <div className="min-h-screen w-full flex  overflow-hidden">
        <Navbar />

        <div className="flex-1 min-h-0 justify-center flex items-center">
          <WhyHeader />

        </div>
      </div>

      <div className=" bg-gray-50">

        {/* Reasons */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((item, idx) => (
              <ReasonCard key={idx} {...item} index={idx} />
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="py-12 max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our strengths go beyond services — they define how we deliver value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, idx) => (
              <FeatureCard key={idx} {...f} index={idx} />
            ))}
          </div>
        </section>

        <WhyCTA />
      </div>
    </>
  );
};

export default WhyZyron;
