import React from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";

const ContactSection: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50" id="contact">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Info */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
                            Get in Touch
                        </h2>

                        <div className="space-y-8">
                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                    <MapPin />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">
                                        Headquarters
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        Level 14, Concorde Towers, UB City <br />
                                        Vittal Mallya Road, Bangalore - 560001 <br />
                                        Karnataka, India
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                    <Mail />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">
                                        Email Us
                                    </h4>
                                    <p className="text-gray-600">
                                        General: info@yourcompany.com <br />
                                        Sales: sales@yourcompany.com
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                    <Phone />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">
                                        Call Us
                                    </h4>
                                    <p className="text-gray-600">
                                        +91 80 1234 5678 <br />
                                        (Mon–Fri, 9am – 6pm IST)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">
                            Send Message
                        </h3>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-blue-600"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-blue-600"
                                />
                            </div>

                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-blue-600"
                            />

                            <textarea
                                rows={4}
                                placeholder="Your Message"
                                className="w-full border-b border-gray-300 bg-transparent py-2 resize-none focus:outline-none focus:border-blue-600"
                            />

                            <button
                                type="submit"
                                className="w-full mt-6 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
                            >
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
