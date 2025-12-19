import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Cpu, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------- Dropdown Data ---------- */

const servicesDropdown = [
  { label: "Design Services", to: "/services#design" },
  { label: "Verification Services", to: "/services#verification" },
  { label: "FPGA / Emulation", to: "/services#fpga" },
  { label: "Backend Services", to: "/services#backend" },
  { label: "Staff Augmentation", to: "/services#staff" },
  { label: "Training Services", to: "/services#training" },
];

const whyDropdown = [
  { label: "Strategy & Planning", to: "/why-zyron#strategy" },
  { label: "Reliability", to: "/why-zyron#reliability" },
  { label: "In-depth Understanding", to: "/why-zyron#understanding" },
  { label: "Reusability", to: "/why-zyron#reusability" },
  { label: "Scalability", to: "/why-zyron#scalability" },
  { label: "Tracking", to: "/why-zyron#tracking" },
];

/* ---------- Reusable Dropdown ---------- */

const NavDropdown: React.FC<{
  title: string;
  items: { label: string; to: string }[];
  open: boolean;
}> = ({ title, items, open }) => (
  <div className="relative">
    <div className="flex items-center gap-1 text-xl font-medium text-gray-700 hover:text-zyron-cyan transition cursor-pointer">
      {title}
      <ChevronDown
        size={18}
        className={`transition-transform duration-300 ${open ? "rotate-180" : ""
          }`}
      />
    </div>

    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 mt-3 w-60 bg-blue-500 rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
        >
          <div className="py-2">
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block px-5 py-3 text-sm text-white hover:bg-gray-50 hover:text-zyron-cyan transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);


/* ---------- Navbar ---------- */

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<null | "services" | "why">(
    null
  );
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 font-sans transition-all duration-300 ease-out
      ${scrolled
          ? "bg-white/95 backdrop-blur shadow-lg h-20"
          : "bg-white h-28"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Cpu className="w-12 h-12 text-zyron-cyan group-hover:rotate-6 transition-transform" />
          <span className="font-display font-bold text-5xl text-black tracking-wide">
            ZYRON<span className="text-zyron-cyan">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            to="/"
            className="text-xl font-medium text-gray-700 hover:text-zyron-cyan transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-xl font-medium text-gray-700 hover:text-zyron-cyan transition"
          >
            About
          </Link>

          <div
            onMouseEnter={() => setOpenDropdown("services")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <NavDropdown
              title="Services"
              items={servicesDropdown}
              open={openDropdown === "services"}
            />
          </div>

          <div
            onMouseEnter={() => setOpenDropdown("why")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <NavDropdown
              title="Why Zyron"
              items={whyDropdown}
              open={openDropdown === "why"}
            />
          </div>
          <Link
            to="/careers"
            className="text-xl font-medium text-gray-700 hover:text-zyron-cyan transition"
          >
            Careers
          </Link>
          <Link
            to="/contact"
            className="text-xl font-medium text-gray-700 hover:text-zyron-cyan transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-800 rounded-md hover:bg-gray-100 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md border-t border-gray-200 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <Link to="/" className="block text-lg font-medium">
                Home
              </Link>
              <Link to="/about" className="block text-lg font-medium">
                About
              </Link>

              <div>
                <p className="font-semibold mb-2">Services</p>
                {servicesDropdown.map((i) => (
                  <Link
                    key={i.to}
                    to={i.to}
                    className="block pl-4 py-1 text-sm text-gray-700 hover:text-zyron-cyan"
                  >
                    {i.label}
                  </Link>
                ))}
              </div>

              <div>
                <p className="font-semibold mb-2">Why Zyron</p>
                {whyDropdown.map((i) => (
                  <Link
                    key={i.to}
                    to={i.to}
                    className="block pl-4 py-1 text-sm text-gray-700 hover:text-zyron-cyan"
                  >
                    {i.label}
                  </Link>
                ))}
              </div>

              <Link to="/careers" className="block text-lg font-medium">
                Careers
              </Link>
              <Link to="/contact" className="block text-lg font-medium">
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
