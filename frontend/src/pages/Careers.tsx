import React, { useState } from "react";
import { Briefcase, MapPin, Search } from "lucide-react";
import Navbar from "../components/Navbar";
import Section from "../components/ui/Section";

/* ---------------- Data ---------------- */

const jobs = [
  {
    title: "Senior RTL Design Engineer",
    dept: "Front-end Design",
    location: "Bangalore, India",
    type: "Full-time",
  },
  {
    title: "Physical Design Lead",
    dept: "Back-end Design",
    location: "Bangalore, India",
    type: "Full-time",
  },
  {
    title: "DV Engineer (UVM)",
    dept: "Verification",
    location: "Remote / Hybrid",
    type: "Contract",
  },
  {
    title: "Embedded Firmware Developer",
    dept: "Software",
    location: "Bangalore, India",
    type: "Full-time",
  },
];

const culturePoints = [
  {
    title: "Innovative Environment",
    desc: "Work on cutting-edge semiconductor technologies with industry experts.",
  },
  {
    title: "Collaborative Teams",
    desc: "Open culture where ideas are valued and teamwork drives success.",
  },
  {
    title: "Continuous Learning",
    desc: "Upskill with trainings, mentorship, and real-world challenges.",
  },
  {
    title: "Work-Life Balance",
    desc: "Flexible schedules and supportive management for healthy balance.",
  },
];

export const CultureSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop"
            alt="Team culture"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Life at <span className="text-blue-600">Zyron</span>
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            At Zyron, we believe our people are our greatest strength. We foster a
            culture where innovation, respect, and growth go hand in hand.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {culturePoints.map((item, i) => (
              <div
                key={i}
                className="p-5 bg-gray-50 rounded-xl border hover:shadow-md transition"
              >
                <h4 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
/* ---------------- Small Components ---------------- */


export const CareersCTA: React.FC = () => {
  const [form, setForm] = useState({
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // for now just keep data in state
    console.log("Saved form data:", form);
    alert("Thanks! We’ll get back to you soon.");

    setForm({ email: "", message: "" });
  };

  return (
    <section className="bg-blue-600 rounded-lg py-20">
      <div className="max-w-5xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Didn’t find a role that fits?
        </h2>
        <p className="text-blue-100 mb-10 text-lg">
          Send us your details and we’ll reach out when an opportunity matches
          your profile.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto text-gray-900">
          <div className="space-y-5">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email address"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your skills or interests..."
              rows={4}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send to HR Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const CareersHeader = () => (
  <div className="relative h-[70vh] w-full flex items-center justify-center text-center overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&auto=format&fit=crop"
      className="absolute inset-0 w-full h-full object-cover"
      alt="Careers"
    />
    <div className="absolute inset-0 bg-black/60" />
    <div className="relative z-10 px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Build Your Career With Us
      </h1>
      <p className="text-gray-200 max-w-2xl mx-auto text-lg">
        Join a team of innovators shaping the future of semiconductor technology.
      </p>
    </div>
  </div>
);

const CareersIntro = () => (
  <section className="max-w-5xl mx-auto px-6 py-16 text-center">
    <h2 className="text-3xl font-bold mb-4 text-gray-900">
      Why Work With Zyron?
    </h2>
    <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
      At Zyron, we foster a culture of learning, innovation, and collaboration.
      You’ll work on cutting-edge technology with industry experts and grow your
      career in a supportive environment.
    </p>
  </section>
);

const JobCard: React.FC<{ job: any }> = ({ job }) => (
  <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition flex flex-col justify-between">
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {job.title}
      </h3>
      <p className="text-sm text-gray-600 mb-4">{job.dept}</p>

      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
        <span className="flex items-center gap-1">
          <MapPin size={14} /> {job.location}
        </span>
        <span className="flex items-center gap-1">
          <Briefcase size={14} /> {job.type}
        </span>
      </div>
    </div>

    <button className="mt-6 w-full py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
      View & Apply
    </button>
  </div>
);

/* ---------------- Main Page ---------------- */

const Careers: React.FC = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const departments = ["All", ...new Set(jobs.map((j) => j.dept))];

  const filteredJobs = jobs.filter((job) => {
    const matchSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchDept = filter === "All" || job.dept === filter;
    return matchSearch && matchDept;
  });

  return (<>
    <div className="min-h-screen w-full flex  overflow-hidden">
      <Navbar />

      <div className="flex-1 min-h-0 justify-center flex items-center">
        <CareersHeader />
      </div>
    </div>

    <div className="bg-gray-50 min-h-screen">
      <CareersIntro />
      <Section className="relative z-10">
        <CultureSection />
      </Section>
      {/* 🔍 Search & Filter */}
      <section className="max-w-7xl mx-auto px-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by job title..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full md:w-1/4 py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* 💼 Jobs Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        {filteredJobs.length === 0 ? (
          <p className="text-center text-gray-500">
            No jobs found for your search.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job, idx) => (
              <JobCard key={idx} job={job} />
            ))}
          </div>
        )}
      </section>

      <Section className="relative z-10">
        <CareersCTA />
      </Section>
    </div></>
  );
};

export default Careers;
