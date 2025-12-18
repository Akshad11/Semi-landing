import React, { useState } from "react";
import Section from "../components/ui/Section";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess("Message sent successfully! We'll get back to you soon.");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (err: any) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-24">
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Let's <span className="text-zyron-cyan">Talk</span>
            </h1>
            <p className="text-gray-400 text-lg mb-12">
              Have a complex design challenge? Need a partner for your next
              tapeout? Reach out to our engineering team.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zyron-panel border border-zyron-border rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="text-zyron-cyan" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email Us</h3>
                  <p className="text-gray-400">contact@zyronsemi.com</p>
                  <p className="text-gray-400">sales@zyronsemi.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zyron-panel border border-zyron-border rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="text-zyron-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Call Us</h3>
                  <p className="text-gray-400">+91 80 1234 5678</p>
                  <p className="text-gray-400">Mon-Fri, 9am - 6pm IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zyron-panel border border-zyron-border rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="text-zyron-violet" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Visit Us</h3>
                  <p className="text-gray-400">
                    Zyron Semiconductors Pvt. Ltd.
                    <br />
                    Tech Park, Electronic City,
                    <br />
                    Bangalore, Karnataka - 560100
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-zyron-panel border border-zyron-border p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    type="text"
                    className="w-full bg-black/50 border border-zyron-border rounded-lg p-3 focus:border-zyron-cyan focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    type="text"
                    className="w-full bg-black/50 border border-zyron-border rounded-lg p-3 focus:border-zyron-cyan focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Email Address
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  className="w-full bg-black/50 border border-zyron-border rounded-lg p-3 focus:border-zyron-cyan focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-black/50 border border-zyron-border rounded-lg p-3 focus:border-zyron-cyan focus:outline-none transition-colors"
                  placeholder="Tell us about your project..."
                />
              </div>

              {success && (
                <p className="text-green-500 text-sm">{success}</p>
              )}
              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-zyron-blue to-zyron-cyan text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"} <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
