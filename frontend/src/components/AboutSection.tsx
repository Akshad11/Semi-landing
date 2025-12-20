import React from "react";
import SkillBar from "./SkillBar";

interface Skill {
    name: string;
    value: number;
}

interface AboutData {
    title: string;
    subtitle: string;
    paragraphs: string[];
    skills: Skill[];
}

interface AboutSectionProps {
    data: AboutData;
}

const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
    const { title, subtitle, paragraphs, skills } = data;

    return (
        <section className="py-24 bg-white" id="about">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {title}
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
                            {subtitle}
                        </h3>

                        {paragraphs.map((para, idx) => (
                            <p
                                key={idx}
                                className="text-gray-600 leading-relaxed mb-4"
                            >
                                {para}
                            </p>
                        ))}
                    </div>

                    {/* Right Skills */}
                    <div className="space-y-6">
                        {skills.map((skill) => (
                            <SkillBar
                                key={skill.name}
                                label={skill.name}
                                value={skill.value}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
