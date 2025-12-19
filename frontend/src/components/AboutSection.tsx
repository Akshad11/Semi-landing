import React from "react";
import SkillBar from "./SkillBar";

const skills = [
    { name: "Design Services", value: 95 },
    { name: "Verification Services", value: 100 },
    { name: "FPGA / Emulation", value: 90 },
    { name: "Backend Services", value: 92 },
];

const AboutSection: React.FC = () => {
    return (
        <section className="py-24 bg-white" id="about">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        About Us
                    </h2>
                    <div className="flex justify-center gap-2">
                        <span className="w-10 h-1 bg-blue-600 rounded-full" />
                        <span className="w-4 h-1 bg-blue-300 rounded-full" />
                        <span className="w-10 h-1 bg-blue-600 rounded-full" />
                    </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Text */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            Who We Are
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We are a team of experienced semiconductor professionals delivering
                            end-to-end ASIC IP and design services. Our mission is to help
                            businesses accelerate innovation through reliable and scalable
                            engineering solutions.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            From architecture and RTL design to verification and backend
                            implementation, we ensure quality at every stage of the silicon
                            lifecycle using modern methodologies and tools.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            With a strong focus on integrity, collaboration, and excellence,
                            we partner with our clients to turn ideas into production-ready
                            silicon.
                        </p>
                    </div>

                    {/* Right Skills / Progress */}
                    <div className="space-y-6">
                        {skills.map((skill) => (
                            <SkillBar
                                key={skill.name}
                                label={skill.name}
                                value={100}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
