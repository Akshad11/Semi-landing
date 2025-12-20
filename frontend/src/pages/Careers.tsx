import React, { useState } from "react";
import { Briefcase, MapPin, Search } from "lucide-react";
import Navbar from "../components/Navbar";
import Section from "../components/ui/Section";
import emailjs from "emailjs-com";
import PageHeader from "../components/PageHeader";
import Eng from "../content/Eng";
import { CultureSection } from "../components/CultureSection";
import { CareersIntro } from "../components/CareersIntro";
import { CareersCTA } from "../components/CareersCTA";

interface JobFilterBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  filter: string;
  onFilterChange: (value: string) => void;
  departments: string[];
}

/* ---------------- Small Components ---------------- */

export const JobCard: React.FC<{ job: any }> = ({ job }) => (
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


export const JobFilterBar: React.FC<JobFilterBarProps> = ({
  search,
  onSearchChange,
  filter,
  onFilterChange,
  departments,
}) => {
  return (
    <div className="max-w-7xl mx-auto mb-10">
      <div className="bg-white  rounded-xl shadow-sm flex flex-col md:flex-row gap-4 items-center">
        {/* Search */}
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by job title..."
            className="w-full pl-10 pr-4 py-2 border text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Filter */}
        <select
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
          className="w-full md:w-1/4 py-2 px-4 border text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

/* ---------------- Main Page ---------------- */

const Careers: React.FC = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const departments = ["All", ...new Set(Eng.Careers.jobs.map((j) => j.dept))];

  const filteredJobs = Eng.Careers.jobs.filter((job) => {
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
        <PageHeader
          title={Eng.headers.careers.title}
          highlight={Eng.headers.careers.highlight}
          subtitle={Eng.headers.careers.subtitle}
          bgImage={Eng.headers.careers.bgImage}
        />
      </div>
    </div>

    <div className="bg-gray-50 min-h-screen">
      <CareersIntro data={Eng.Careers.intro} />
      <Section className="relative z-10">
        <CultureSection data={Eng.Careers.culture} />
      </Section>
      {/* 🔍 Search & Filter */}
      <Section className="max-w-7xl mx-auto py-0 mb-10">
        <JobFilterBar
          search={search}
          onSearchChange={setSearch}
          filter={filter}
          onFilterChange={setFilter}
          departments={departments}
        />
      </Section>

      {/* 💼 Jobs Grid */}
      <Section className="max-w-7xl mx-auto py-0 pb-24">
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
      </Section>

      <Section className="relative z-10">
        <CareersCTA data={Eng.Careers.cta} />
      </Section>
    </div></>
  );
};

export default Careers;
