/* ================================
   Global English Content File
   ================================ */

import { CalendarCheck, Code2, Cpu, Layers, TestTube2, Wrench } from "lucide-react";
import { FooterData } from "../types";

export const Eng = {
    /* ---------- Headers ---------- */
    headers: {
        home: [
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
        ],
        about: {
            title: "About",
            highlight: "ZYRON",
            subtitle:
                "We are a team of passionate engineers dedicated to pushing the boundaries of semiconductor innovation and delivering excellence worldwide.",
            bgImage:
                "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=1169&auto=format&fit=crop",
        },
        services: {
            title: "Our",
            highlight: "Services",
            subtitle:
                "We offer a full spectrum of semiconductor engineering services, from concept to silicon.",
            bgImage:
                "https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=1170&auto=format&fit=crop",
        },
        why: {
            title: "Why Partner with",
            highlight: "Zyron?",
            subtitle:
                "We combine deep domain expertise with cutting-edge tools to deliver exceptional semiconductor solutions.",
            bgImage:
                "https://plus.unsplash.com/premium_photo-1682144748274-add3d8ed04ea?q=80&w=2034&auto=format&fit=crop",
        },
        careers: {
            title: "Build Your",
            highlight: "Career With Us",
            subtitle:
                "Join a team of innovators shaping the future of semiconductor technology.",
            bgImage:
                "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&auto=format&fit=crop",
        },
        contact: {
            title: "Let’s",
            highlight: "Talk",
            subtitle:
                "Have a project in mind? Our team is ready to help you bring it to life.",
            bgImage:
                "https://images.unsplash.com/photo-1587560699334-bea93391dcef?q=80&w=1170&auto=format&fit=crop",
        },
    },

    /* ---------- Home content ---------- */
    home: {
        about: {
            title: "About Us",
            subtitle: "Who We Are",
            paragraphs: [
                "We are a team of experienced semiconductor professionals delivering end-to-end ASIC IP and design services. Our mission is to help businesses accelerate innovation through reliable and scalable engineering solutions.",
                "From architecture and RTL design to verification and backend implementation, we ensure quality at every stage of the silicon lifecycle using modern methodologies and tools.",
                "With a strong focus on integrity, collaboration, and excellence, we partner with our clients to turn ideas into production-ready silicon."
            ],
            skills: [
                { name: "Design Services", value: 95 },
                { name: "Verification Services", value: 100 },
                { name: "FPGA / Emulation", value: 90 },
                { name: "Backend Services", value: 92 }
            ]
        },
        features: {
            title: "OUR FEATURES",
            subtitle:
                "Discover the strengths that make our semiconductor solutions reliable, scalable, and future-ready.",
            list: [
                {
                    id: "planning",
                    title: "Strategy & Planning",
                    description:
                        "Well-defined project planning ensuring efficient execution and predictable outcomes.",
                    icon: CalendarCheck,
                },
                {
                    id: "reliability",
                    title: "Reliability",
                    description:
                        "Robust processes that guarantee high-quality and dependable silicon delivery.",
                    icon: Cpu,
                },
                {
                    id: "understanding",
                    title: "In-depth Understanding",
                    description:
                        "Strong domain expertise across ASIC, FPGA, and SoC design lifecycles.",
                    icon: Layers,
                },
                {
                    id: "reusability",
                    title: "Reusability",
                    description:
                        "Reusable IPs and frameworks to accelerate development and reduce cost.",
                    icon: Code2,
                },
                {
                    id: "scalability",
                    title: "Scalability",
                    description:
                        "Architectures designed to grow with your business and future needs.",
                    icon: TestTube2,
                },
                {
                    id: "tracking",
                    title: "Tracking",
                    description:
                        "Transparent progress tracking with clear milestones and reporting.",
                    icon: Wrench,
                },
            ],
        },
        services: {
            title: "OUR SERVICES",
            subtitle:
                "Providing end-to-end semiconductor solutions from architectural design to mass production.",
            list: [
                {
                    id: "design",
                    title: "Semiconductor Design",
                    subtitle: "ASIC & FPGA",
                    description:
                        "Custom ASIC and FPGA design solutions tailored for high-performance computing and edge AI applications.",
                    image:
                        "https://images.unsplash.com/photo-1666037801539-f30fd661657a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0",
                },
                {
                    id: "connectivity",
                    title: "Global Connectivity",
                    subtitle: "5G & IoT",
                    description:
                        "Low-latency networking modules designed for the next generation of 5G and IoT infrastructure.",
                    image:
                        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200",
                },
                {
                    id: "power",
                    title: "Power Efficiency",
                    subtitle: "Energy Optimized",
                    description:
                        "Industry-leading PMICs that maximize battery life while minimizing thermal output.",
                    image:
                        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
                },
                {
                    id: "security",
                    title: "Secure Processing",
                    subtitle: "Hardware Security",
                    description:
                        "Hardware-level security enclaves ensuring data integrity for critical financial and medical systems.",
                    image:
                        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
                },
                {
                    id: "testing",
                    title: "System Testing",
                    subtitle: "Validation",
                    description:
                        "Rigorous automated validation pipelines ensuring zero-defect manufacturing at scale.",
                    image:
                        "https://images.unsplash.com/photo-1568209865332-a15790aed756?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
                },
                {
                    id: "foundry",
                    title: "Foundry Services",
                    subtitle: "Fabrication",
                    description:
                        "End-to-end fabrication support with strategic partnerships in major global foundries.",
                    image:
                        "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1200",
                },
            ],
        },
    },
    /* ---------- Common ---------- */
    Common: {
        contactInfo: {
            title: "Get in Touch",
            formTitle: "Send Message",
            address: {
                label: "Headquarters",
                value:
                    "18-8-40D/305, Madhura Nagar, Revenue Ward No: 8, Tirupati (U), Tirupati Dist.",
            },
            emails: {
                label: "Email Us",
                general: "zyronsemiconductors@gmail.com",
                hr: "HR@zyronsemi.com",
            },
            phone: {
                label: "Call Us",
                number: "+91 8123561362",
                hours: "Mon–Fri, 9am – 6pm IST",
            },
            website: {
                label: "Visit Us",
                url: "https://www.zyronsemiconductors.com",
                text: "www.zyronsemiconductors.com",
            },
        },
        footer: {
            brand: {
                name: "ZYRON.",
                description:
                    "Pioneering the next generation of silicon innovation. We deliver enterprise-grade semiconductor solutions for the AI and IoT era.",
                socials: [
                    { icon: "linkedin", url: "#" },
                    { icon: "twitter", url: "#" },
                    { icon: "github", url: "#" },
                ],
            },
            company: [
                { label: "About Us", to: "/about" },
                { label: "Why Zyron", to: "/why-zyron" },
                { label: "Careers", to: "/careers" },
                { label: "Contact", to: "/contact" },
            ],
            services: [
                { label: "Design & Verification", to: "/services#design" },
                { label: "Physical Design", to: "/services#backend" },
                { label: "FPGA Prototyping", to: "/services#fpga" },
                { label: "Embedded Software", to: "/services#backend" },
            ],
            contact: {
                address:
                    "18-8-40D/305, Madhura Nagar, Revenue Ward No: 8, Tirupati (U), Tirupati Dist.",
                email: "zyronsemiconductors@gmail.com",
                phone: "+91 8123561362",
            },
            bottom: {
                copyright:
                    "© " + new Date().getFullYear() + " ZYRON Semiconductors Pvt. Ltd. All rights reserved.",
                links: [
                    { label: "Privacy Policy", to: "#" },
                    { label: "Terms of Service", to: "#" },
                ],
            },
        } as FooterData,
    },

    /* ---------- Careers ---------- */
    Careers: {
        jobs: [
            {
                id: "rtl",
                title: "Senior RTL Design Engineer",
                dept: "Front-end Design",
                location: "Bangalore, India",
                type: "Full-time",
            },
            {
                id: "pd",
                title: "Physical Design Lead",
                dept: "Back-end Design",
                location: "Bangalore, India",
                type: "Full-time",
            },
            {
                id: "dv",
                title: "DV Engineer (UVM)",
                dept: "Verification",
                location: "Remote / Hybrid",
                type: "Contract",
            },
            {
                id: "fw",
                title: "Embedded Firmware Developer",
                dept: "Software",
                location: "Bangalore, India",
                type: "Full-time",
            },
        ],
        culture: {
            title: "Life at Zyron",
            highlight: "Zyron",
            description:
                "At Zyron, we believe our people are our greatest strength. We foster a culture where innovation, respect, and growth go hand in hand.",
            image:
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop",
            points: [
                {
                    title: "Innovative Mindset",
                    desc: "We encourage creative thinking and bold ideas to solve real-world challenges.",
                },
                {
                    title: "Collaborative Teams",
                    desc: "Work in diverse teams where knowledge sharing drives success.",
                },
                {
                    title: "Continuous Learning",
                    desc: "Upskill with access to training, mentorship, and hands-on projects.",
                },
                {
                    title: "Work-Life Balance",
                    desc: "We value well-being and support flexible work environments.",
                },
            ],
        },

        intro: {
            title: "Why Work With Zyron?",
            description:
                "At Zyron, we foster a culture of learning, innovation, and collaboration. You’ll work on cutting-edge technology with industry experts and grow your career in a supportive environment.",
        },
        cta: {
            title: "Didn’t find a role that fits?",
            subtitle:
                "Send us your details and we’ll reach out when an opportunity matches your profile.",
            emailPlaceholder: "Your email address",
            messagePlaceholder: "Tell us about your skills or interests...",
            buttonText: "Send to HR Team",
            successMessage: "Thanks! Our HR team will get back to you soon.",
            errorMessage: "Failed to send. Please try again later.",
        },
    },

    /* ---------- Services ---------- */
    services: [
        {
            id: "design",
            title: "Design Services",
            content: [
                "Our design services provide end-to-end ASIC and SoC solutions, from specification to RTL implementation.",
                "We ensure optimized architectures using proven methodologies and deep domain expertise.",
                "Our focus is on delivering high performance, low power, and area-efficient designs.",
            ],
        },
        {
            id: "verification",
            title: "Verification Services",
            content: [
                "We offer comprehensive functional verification services using industry-standard UVM methodologies.",
                "Our verification process ensures maximum coverage and early bug detection.",
                "This helps minimize costly silicon re-spins and accelerates time-to-market.",
            ],
        },
        {
            id: "fpga",
            title: "FPGA / Emulation Services",
            content: [
                "We deliver robust FPGA and emulation solutions for early validation and prototyping.",
                "Our experts help reduce risk by validating designs before silicon tapeout.",
                "High-performance platforms ensure faster debug and time-to-market.",
            ],
        },
        {
            id: "backend",
            title: "Backend Services",
            content: [
                "Our backend services cover physical implementation from RTL to GDSII.",
                "We focus on timing closure, power optimization, and clean layouts.",
                "Expertise across advanced nodes ensures manufacturable designs.",
            ],
        },
        {
            id: "signoff",
            title: "Design Signoff",
            content: [
                "Our design signoff service ensures your chip is fully validated and ready for tapeout with zero critical issues.",
                "We perform comprehensive checks including timing, power, signal integrity, and physical verification to guarantee first-time-right silicon.",
                "Our team uses industry-standard signoff tools and methodologies to minimize risks and costly re-spins.",
                "With a strong focus on quality and reliability, we help you confidently move from design to manufacturing."
            ],
        },
        {
            id: "synthesis-sta",
            title: "Synthesis & STA",
            content: [
                "Our synthesis and static timing analysis services transform your RTL into an optimized gate-level design that meets performance, power, and area goals.",
                "We ensure high-quality RTL-to-netlist synthesis using proven constraint-driven methodologies.",
                "Through detailed static timing analysis, we identify and fix setup, hold, and clock-related issues across all corners.",
                "This service helps achieve early timing closure and provides a strong foundation for successful physical design."
            ],
        },
        {
            id: "staff",
            title: "Staff Augmentation",
            content: [
                "We provide highly skilled engineers to extend your in-house teams.",
                "Flexible engagement models help you scale quickly and efficiently.",
                "Our engineers integrate seamlessly with your workflows.",
            ],
        },
        {
            id: "training",
            title: "Training Services",
            content: [
                "Our training programs help engineers upskill in VLSI and semiconductor domains.",
                "Courses include RTL, UVM, Physical Design, and hands-on labs.",
                "Customized programs for industry and academic needs.",
            ],
        },

    ],

    /* ---------- community ---------- */
    community: {
        header: {
            title: "Zyron Community",
            highlight: "Connect & Grow",
            subtitle:
                "Join engineers, innovators, and learners shaping the future of semiconductor technology.",
            bgImage:
                "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },

        intro: {
            title: "Welcome to the Zyron Community",
            description:
                "Our community brings together passionate engineers, students, and industry professionals to share knowledge, collaborate on ideas, and grow together in the semiconductor ecosystem.",
        },

        pillars: [
            {
                id: "collaboration",
                title: "Collaboration",
                desc: "Work with like-minded engineers on ideas, projects, and real-world challenges.",
            },
            {
                id: "learning",
                title: "Continuous Learning",
                desc: "Access talks, webinars, and discussions led by industry experts.",
            },
            {
                id: "innovation",
                title: "Innovation",
                desc: "Explore emerging trends in ASIC, FPGA, AI hardware, and system design.",
            },
            {
                id: "networking",
                title: "Networking",
                desc: "Build meaningful connections across academia and industry.",
            },
        ],


        activities: {
            title: "What We Do",
            description: "Activities designed to help you learn, connect, and innovate.",
            activity: [
                {
                    title: "Technical Webinars",
                    desc: "Monthly sessions on RTL design, UVM, backend flows, and FPGA prototyping.",
                },
                {
                    title: "Workshops & Bootcamps",
                    desc: "Hands-on training programs for students and early-career engineers.",
                },
                {
                    title: "Open Discussions",
                    desc: "Ask questions, share insights, and learn from peers and mentors.",
                },
                {
                    title: "Hackathons",
                    desc: "Solve real-world semiconductor problems with the community.",
                },
            ]
        },
        join: {
            title: "Be a Part of Zyron Community",
            subtitle:
                "Whether you're a student, professional, or enthusiast, there's a place for you here.",
            button: "Join the Community",
        },
    },

    /* ---------- resources ---------- */

    resources: {
        header: {
            title: "Resources",
            highlight: "Knowledge Hub",
            subtitle:
                "Explore technical content, guides, and insights to accelerate your semiconductor journey.",
            bgImage:
                "https://images.unsplash.com/photo-1598618589821-f031d29a366f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },

        intro: {
            title: "Learn. Explore. Innovate.",
            description:
                "Our resources are curated by industry experts to help engineers and students stay ahead in ASIC design, verification, FPGA prototyping, and backend implementation.",
        },

        categories: [
            {
                id: "design",
                title: "Design & Architecture",
                desc: "Guides on SoC architecture, RTL coding, and design best practices.",
            },
            {
                id: "verification",
                title: "Verification & UVM",
                desc: "Tutorials and tips on functional verification and coverage-driven flows.",
            },
            {
                id: "fpga",
                title: "FPGA & Prototyping",
                desc: "Hands-on resources for FPGA bring-up and emulation platforms.",
            },
            {
                id: "backend",
                title: "Physical Design",
                desc: "Insights into timing closure, power optimization, and DRC/LVS.",
            },
        ],

        items: [
            {
                id: "rtl-guide",
                title: "RTL Coding Best Practices",
                type: "Guide",
                category: "Design",
                desc: "A practical guide to writing clean, synthesizable, and reusable RTL.",
            },
            {
                id: "uvm-basics",
                title: "UVM for Beginners",
                type: "Tutorial",
                category: "Verification",
                desc: "Learn the foundations of UVM and how to build scalable testbenches.",
            },
            {
                id: "fpga-flow",
                title: "FPGA Prototyping Flow",
                type: "Article",
                category: "FPGA",
                desc: "Step-by-step flow for mapping RTL to FPGA for early validation.",
            },
            {
                id: "pd-closure",
                title: "Timing Closure Techniques",
                type: "Whitepaper",
                category: "Backend",
                desc: "Strategies to achieve timing closure in advanced nodes.",
            },
            {
                id: "low-power",
                title: "Low Power Design Methods",
                type: "Guide",
                category: "Design",
                desc: "Techniques for reducing dynamic and leakage power in SoCs.",
            },
            {
                id: "formal",
                title: "Introduction to Formal Verification",
                type: "Article",
                category: "Verification",
                desc: "How formal methods complement simulation-based verification.",
            },
        ],

        cta: {
            title: "Looking for something specific?",
            subtitle:
                "Reach out to our experts for personalized guidance or access to exclusive technical material.",
            button: "Contact Our Team",
        },
    },

    /* ---------- Why Zyron Features ---------- */
    whyFeatures: [
        {
            id: "strategy",
            title: "Strategy & Planning",
            content: [
                "We start every engagement with a clear roadmap aligned to your business goals.",
                "Our strategic planning ensures optimal architecture and risk mitigation.",
            ],
        },
        {
            id: "reliability",
            title: "Reliability",
            content: [
                "Our processes ensure high-quality and reliable silicon delivery.",
                "We follow industry best practices to minimize defects and re-spins.",
            ],
        },
        {
            id: "understanding",
            title: "In-depth Understanding",
            content: [
                "Deep domain expertise across multiple semiconductor verticals.",
                "We understand system-level challenges and solve them effectively.",
            ],
        },
        {
            id: "reusability",
            title: "Reusability",
            content: [
                "Reusable IP and methodologies accelerate development cycles.",
                "We reduce cost and time by leveraging proven building blocks.",
            ],
        },
        {
            id: "scalability",
            title: "Scalability",
            content: [
                "Our solutions are designed to scale with your product roadmap.",
                "From startups to enterprises, we grow with your needs.",
            ],
        },
        {
            id: "tracking",
            title: "Tracking",
            content: [
                "Transparent project tracking with clear milestones.",
                "Regular updates ensure visibility and trust throughout execution.",
            ],
        },
    ],

    /* ---------- Contact Info ---------- */
    contact: {
        address:
            "18-8-40D/305, Madhura Nagar, Revenue Ward No: 8, Tirupati (U), Tirupati Dist.",
        emails: ["zyronsemiconductors@gmail.com", "HR@zyronsemi.com"],
        phone: "+91 8123561362",
        website: "https://www.zyronsemiconductors.com",
        hours: "Mon–Fri, 9am – 6pm IST",
    },

    /* ---------- Navigation ---------- */
    nav: {
        main: [
            { label: "About Us", to: "/about" },
            { label: "Careers", to: "/careers" },
            { label: "Community", to: "/community" },
            { label: "Resources", to: "/resources" },
            { label: "Contact", to: "/contact" },
        ],
        services: [
            { label: "Design Services", to: "/services#design" },
            { label: "Verification Services", to: "/services#verification" },
            { label: "FPGA / Emulation", to: "/services#fpga" },
            { label: "Backend Services", to: "/services#backend" },
            { label: "Design Signoff", to: "/services#signoff" },
            { label: "Synthesis & STA", to: "/services#synthesis-sta" },
            { label: "Staff Augmentation", to: "/services#staff" },
            { label: "Training Services", to: "/services#training" },
        ],
        why: [
            { label: "Strategy & Planning", to: "/why-zyron#strategy" },
            { label: "Reliability", to: "/why-zyron#reliability" },
            { label: "In-depth Understanding", to: "/why-zyron#understanding" },
            { label: "Reusability", to: "/why-zyron#reusability" },
            { label: "Scalability", to: "/why-zyron#scalability" },
            { label: "Tracking", to: "/why-zyron#tracking" },
        ],
    },
};

export default Eng;
