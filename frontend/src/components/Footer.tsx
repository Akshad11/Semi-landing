import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Linkedin, Twitter, Github, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zyron-border text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="w-8 h-8 text-zyron-cyan" />
              <span className="font-display font-bold text-xl text-white">ZYRON.</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Pioneering the next generation of silicon innovation. We deliver enterprise-grade semiconductor solutions for the AI and IoT era.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-zyron-cyan transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-zyron-cyan transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-zyron-cyan transition-colors"><Github size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-zyron-cyan transition-colors">About Us</Link></li>
              <li><Link to="/why-zyron" className="hover:text-zyron-cyan transition-colors">Why Zyron</Link></li>
              <li><Link to="/careers" className="hover:text-zyron-cyan transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-zyron-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-display font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-zyron-cyan transition-colors">Design & Verification</Link></li>
              <li><Link to="/services" className="hover:text-zyron-cyan transition-colors">Physical Design</Link></li>
              <li><Link to="/services" className="hover:text-zyron-cyan transition-colors">FPGA Prototyping</Link></li>
              <li><Link to="/services" className="hover:text-zyron-cyan transition-colors">Embedded Software</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-display font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-zyron-blue mt-1 shrink-0" />
                <span>Tech Park, Bangalore, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-zyron-blue shrink-0" />
                <span>contact@zyronsemi.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-zyron-blue shrink-0" />
                <span>+91 80 1234 5678</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} ZYRON Semiconductors Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;