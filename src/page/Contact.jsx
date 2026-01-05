import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-[#050505] px-6 lg:px-20 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* --- LEFT SIDE: CONTACT INFO --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/5"
          >
            <h4 className="text-purple-500 font-semibold tracking-widest uppercase text-sm mb-4">
              Contact Me
            </h4>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Let’s Build Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                Great Together
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              I'm currently available for freelance work and full-time
              positions. If you have a project that needs some creative touch,
              get in touch!
            </p>

            {/* Contact Details */}
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-5">
                <div className="p-4 bg-purple-500/10 rounded-2xl border border-purple-500/20 text-purple-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold">
                    Email Me
                  </p>
                  <p className="text-white text-lg font-medium">
                    yourname@email.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-4 bg-purple-500/10 rounded-2xl border border-purple-500/20 text-purple-400">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold">
                    Call Me
                  </p>
                  <p className="text-white text-lg font-medium">
                    +880 1234 567890
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-4 bg-purple-500/10 rounded-2xl border border-purple-500/20 text-purple-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold">
                    Location
                  </p>
                  <p className="text-white text-lg font-medium">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Social Connect */}
            <div className="flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 border border-white/5 bg-white/5 rounded-full text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: CONTACT FORM --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-3/5"
          >
            <div className="p-8 lg:p-12 bg-[#0d0d0d] border border-white/5 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              {/* Form Gradient Border Effect */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-indigo-500 opacity-50"></div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-purple-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-purple-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Subject</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-purple-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Message</label>
                  <textarea
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-purple-500 transition-all resize-none"
                  ></textarea>
                </div>

                <button className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-purple-500/20">
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
