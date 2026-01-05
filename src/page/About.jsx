
import React from "react";
import { motion } from "framer-motion";
import { User, Code, Palette, Cpu } from "lucide-react";

const About = () => {
  const skills = [
    "React.js",
    "Next.js",
    "Express.js",
    "Tailwind CSS",
    "JavaScript",
    "Framer Motion",
    "UI/UX Design",
    "Responsive Design",
  ];

  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-[#050505] overflow-hidden px-6 lg:px-20"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* --- LEFT SIDE: IMAGE/VISUAL --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
                alt="Workspace"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Background Shape */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-purple-600/20 rounded-3xl -z-10"></div>
          </motion.div>

          {/* --- RIGHT SIDE: CONTENT --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-2 text-purple-400 mb-4 font-medium tracking-widest uppercase text-sm">
              <User size={18} />
              About Me
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Crafting Modern <br />
              <span className="text-purple-500">Frontend Experiences</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              I'm a passionate Frontend Developer focused on building fast,
              responsive, and user-friendly web applications. I specialize in
              React, Next.js, and Tailwind CSS to create clean and modern
              digital experiences.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-left">
                  <h3 className="text-3xl font-bold text-white">
                    {stat.value}
                  </h3>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Skills Section */}
            <div className="mb-10">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Code size={18} className="text-purple-400" /> My Tech Stack
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-300 text-sm hover:border-purple-500/50 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Final CTA Button for About */}
            <button className="flex items-center gap-2 text-white font-semibold group hover:text-purple-400 transition-colors">
              Read My Frontend Journey
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

