
import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Heart,
  Code2,
  Facebook,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8 px-6 lg:px-20 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-purple-600/10 rounded-full blur-[100px] -z-0"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
          {/* Logo & Slogan */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold text-white tracking-tighter">
                DEV<span className="text-purple-500">.</span>PORTFOLIO
              </span>
            </div>
            <p className="text-gray-500 max-w-xs leading-relaxed">
              Building digital experiences that combine modern technology with
              beautiful design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-purple-400 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-purple-400 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Social Icons with Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/Sima-akhter"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-purple-400 hover:border-purple-500/40 transition-all"
            >
              <Github size={20} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/sima-akter-6b4b3b3a3/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-purple-400 hover:border-purple-500/40 transition-all"
            >
              <Linkedin size={20} />
            </motion.a>

            <motion.a
              href="https://www.facebook.com/saima.islam.301007"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-purple-400 hover:border-purple-500/40 transition-all"
            >
              <Facebook size={20} />
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} All rights reserved by{" "}
            <span className="text-white font-medium">Sima Akter</span>
          </p>

          <p className="text-gray-500 text-sm flex items-center gap-1 italic">
            Made with{" "}
            <Heart
              size={14}
              className="text-purple-500 fill-purple-500 animate-pulse"
            />{" "}
            using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

