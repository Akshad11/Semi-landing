import React from "react";
import {
    CalendarCheck,
    Cpu,
    Layers,
    Code2,
    TestTube2,
    Wrench,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
    {
        id: 1,
        title: "Strategy And Planning",
        description:
            "Defining a verification strategy with adequate planning for successful project execution.",
        icon: CalendarCheck,
    },
    {
        id: 2,
        title: "Design & Verification",
        description:
            "RTL design and UVM-based verification ensuring first-time-right silicon.",
        icon: Cpu,
    },
    {
        id: 3,
        title: "Physical Implementation",
        description:
            "Optimized RTL-to-GDSII flow focusing on power, performance, and area.",
        icon: Layers,
    },
    {
        id: 4,
        title: "Embedded Solutions",
        description:
            "Firmware and embedded software development for smart connected systems.",
        icon: Code2,
    },
    {
        id: 5,
        title: "Testing & Validation",
        description:
            "Automated testing pipelines to ensure high reliability and zero defects.",
        icon: TestTube2,
    },
    {
        id: 6,
        title: "Support & Maintenance",
        description:
            "Post-silicon support and long-term maintenance for continuous improvement.",
        icon: Wrench,
    },
];

const OurFeatures: React.FC = () => {
    return (
        <section className="py-24 bg-white" id="features">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4">
                        OUR FEATURES
                    </h2>
                    <div className="h-1 w-20 bg-brand-accent mx-auto rounded-full" />
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Discover the strengths that make our semiconductor solutions reliable,
                        scalable, and future-ready.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <FeatureCard
                            key={feature.id}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                            delay={idx * 120}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurFeatures;
