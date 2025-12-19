import React from 'react';
import { Cpu, Activity, Globe, Zap, Shield } from 'lucide-react';
import ServiceCard from './ServiceCard';

export const ServicesSection: React.FC = () => {
    const services = [
        {
            id: 1,
            title: "Semiconductor Design",
            subtitle: "ASIC & FPGA",
            description: "Custom ASIC and FPGA design solutions tailored for high-performance computing and edge AI applications.",
            image:
                "https://images.unsplash.com/photo-1666037801539-f30fd661657a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 2,
            title: "Global Connectivity",
            subtitle: "5G & IoT",
            description: "Low-latency networking modules designed for the next generation of 5G and IoT infrastructure.",
            image:
                "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200",
        },
        {
            id: 3,
            title: "Power Efficiency",
            subtitle: "Energy Optimized",
            description: "Industry-leading PMICs that maximize battery life while minimizing thermal output.",
            image:
                "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
        },
        {
            id: 4,
            title: "Secure Processing",
            subtitle: "Hardware Security",
            description: "Hardware-level security enclaves ensuring data integrity for critical financial and medical systems.",
            image:
                "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
        },
        {
            id: 5,
            title: "System Testing",
            subtitle: "Validation",
            description: "Rigorous automated validation pipelines ensuring zero-defect manufacturing at scale.",
            image:
                "https://images.unsplash.com/photo-1568209865332-a15790aed756?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 6,
            title: "Foundry Services",
            subtitle: "Fabrication",
            description: "End-to-end fabrication support with strategic partnerships in major global foundries.",
            image:
                "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1200",
        },
    ];

    return (
        <section className=" bg-white" id="services">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4">OUR SERVICES</h2>
                    <div className="h-1 w-20 bg-brandaccent mx-auto rounded-full" />
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Providing end-to-end semiconductor solutions from architectural design to mass production.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            subtitle={service.subtitle}
                            description={service.description}
                            image={service.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
