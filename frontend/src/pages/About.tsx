import React from "react";
import { motion } from "framer-motion";
import { Flag, Target, Users } from "lucide-react";
import Navbar from "../components/Navbar";

/* ---------------- Header ---------------- */

const AboutHeader: React.FC = () => (
  <div className="relative h-[60vh] w-full flex items-center justify-center text-center overflow-hidden">
    {/* Background Image */}
    <img
      src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop"
      alt="About background"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/60" />

    {/* Content */}
    <div className="relative z-10 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold mb-6 text-white"
      >
        About <span className="text-blue-400">ZYRON</span>
      </motion.h1>
      <p className="text-lg text-gray-200 max-w-3xl mx-auto">
        We are a team of passionate engineers dedicated to pushing the boundaries
        of semiconductor innovation and delivering excellence worldwide.
      </p>
    </div>
  </div>
);


/* ---------------- Mission ---------------- */

const MissionSection: React.FC = () => (
  <section className="py-20 bg-gray-50 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          To provide world-class semiconductor design and verification services
          that accelerate innovation for our global partners. We strive to be the
          trusted extension of engineering teams worldwide.
        </p>
        <div className="space-y-3">
          {[
            "First-time-right silicon delivery",
            "Zero-defect engineering mindset",
            "Strong collaboration with partners",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <VisionValuesCards />
    </div>
  </section>
);

/* ---------------- Vision & Values Cards ---------------- */

const VisionValuesCards: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-lg transition">
      <Target className="w-10 h-10 text-blue-600 mb-4" />
      <h3 className="font-semibold text-xl mb-2 text-gray-900">Our Vision</h3>
      <p className="text-gray-600 text-sm">
        To become a global leader in semiconductor engineering services, enabling
        future-ready technologies.
      </p>
    </div>
    <div className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-lg transition">
      <Flag className="w-10 h-10 text-blue-600 mb-4" />
      <h3 className="font-semibold text-xl mb-2 text-gray-900">Our Values</h3>
      <p className="text-gray-600 text-sm">
        Integrity, innovation, collaboration, and excellence in everything we do.
      </p>
    </div>
  </div>
);

/* ---------------- Timeline ---------------- */

const TimelineSection: React.FC = () => {
  const timeline = [
    { year: "2015", title: "Founded", desc: "Zyron Semiconductors was established in Bangalore." },
    { year: "2018", title: "Global Expansion", desc: "Expanded services across USA and Europe." },
    { year: "2021", title: "50+ Tapeouts", desc: "Achieved milestone of 50 successful tapeouts." },
    { year: "2024", title: "AI Excellence", desc: "Launched AI/ML Center of Excellence." },
  ];

  return (
    <section className="py-24 bg-white px-6">
      <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
        Our Journey
      </h2>

      <div className="max-w-4xl mx-auto relative border-l-2 border-blue-200 pl-8 space-y-12">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            <div className="absolute -left-[41px] top-1 w-4 h-4 bg-blue-600 rounded-full" />
            <span className="text-blue-600 font-bold text-lg">
              {item.year}
            </span>
            <h3 className="text-xl font-semibold text-gray-900 mt-1 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (<>
    <div className="min-h-screen w-full flex  overflow-hidden">
      <Navbar />

      <div className="flex-1 min-h-0 justify-center flex items-center">
        <AboutHeader />
      </div>
    </div>

    <div className=" bg-white">
      <MissionSection />
      <TimelineSection />
    </div>
  </>
  );
};

export default About;
