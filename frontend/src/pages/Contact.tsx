import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar from "../components/Navbar";

/* ---------- Header ---------- */

const ContactHeader: React.FC = () => (
  <div className="relative h-[50vh] w-full flex items-center justify-center text-center overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=1920&auto=format&fit=crop"
      alt="Contact background"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/60" />
    <div className="relative z-10 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold mb-4 text-white"
      >
        Let’s <span className="text-blue-400">Talk</span>
      </motion.h1>
      <p className="text-lg text-gray-200 max-w-2xl mx-auto">
        Have a project in mind? Our team is ready to help you bring it to life.
      </p>
    </div>
  </div>
);

/* ---------- Info Card ---------- */

const InfoItem: React.FC<{
  icon: any;
  title: string;
  children: React.ReactNode;
}> = ({ icon: Icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
      <Icon />
    </div>
    <div>
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <div className="text-gray-600 text-sm leading-relaxed">{children}</div>
    </div>
  </div>
);

/* ---------- Main Page ---------- */

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setSuccess("Message sent successfully! We'll get back to you soon.");
      setForm({ firstName: "", lastName: "", email: "", message: "" });
    } catch {
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen w-full flex  overflow-hidden">
        <Navbar />

        <div className="flex-1 min-h-0 justify-center flex items-center">
          <ContactHeader />

        </div>
      </div>

      <div className="min-h-screen bg-gray-50">

        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-10 text-lg">
                Reach out to discuss your semiconductor design challenges or to
                learn more about our services.
              </p>

              <div className="space-y-8">
                <InfoItem icon={Mail} title="Email Us">
                  <p>contact@zyronsemi.com</p>
                  <p>sales@zyronsemi.com</p>
                </InfoItem>

                <InfoItem icon={Phone} title="Call Us">
                  <p>+91 80 1234 5678</p>
                  <p>Mon–Fri, 9am – 6pm IST</p>
                </InfoItem>

                <InfoItem icon={MapPin} title="Visit Us">
                  <p>
                    Zyron Semiconductors Pvt. Ltd.
                    <br />
                    Electronic City, Bangalore
                    <br />
                    Karnataka – 560100
                  </p>
                </InfoItem>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a message
              </h3>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
                  />
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 resize-none"
                />

                {success && <p className="text-green-600 text-sm">{success}</p>}
                {error && <p className="text-red-600 text-sm">{error}</p>}

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"} <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
