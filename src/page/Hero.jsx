import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowUpRight, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#050505] overflow-hidden px-6 lg:px-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
        {/* --- LEFT SIDE: INFORMATION --- */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-3/5 text-left"
        >
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider uppercase">
              Available for Hire
            </span>
          </div>

          {/* Name & Title */}
          <h1 className="text-5xl lg:text-8xl font-bold text-white leading-tight mb-4">
            I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Your Name
            </span>
          </h1>
          <h2 className="text-2xl lg:text-3xl font-medium text-gray-300 mb-6">
            Senior Full-Stack Developer & UI/UX Designer
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg lg:text-xl max-w-xl mb-10 leading-relaxed">
            I help brands turn their ideas into high-performance digital
            products. Specializing in React, Next.js, and modern web
            architectures.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-5 mb-10">
            <a
              href="#"
              className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all"
            >
              <Github size={22} />
            </a>
            <a
              href="#"
              className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="#"
              className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all"
            >
              <Twitter size={22} />
            </a>
            <a
              href="#"
              className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all"
            >
              <Mail size={22} />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5">
            <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-purple-500/25">
              Hire Me <ArrowUpRight size={20} />
            </button>
            <button className="px-8 py-4 border border-gray-700 text-white rounded-2xl font-bold hover:bg-white hover:text-black transition-all">
              Download CV
            </button>
          </div>
        </motion.div>

        {/* --- RIGHT SIDE: IMAGE --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-2/5 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Image Border/Glow */}
            <div className="absolute -inset-2 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition duration-500"></div>

            {/* The Image Container */}
            <div className="relative aspect-[4/5] w-[320px] md:w-[400px] bg-[#111] rounded-[2rem] overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Glass Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl">
                <p className="text-white font-semibold text-sm">
                  Based in Bangladesh 🇧🇩
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Working worldwide since 2021
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
