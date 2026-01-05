import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Terminal,
 
  Cpu,
  Globe,
  Zap,
  Database,
  Smartphone,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="text-purple-500" size={28} />,
      skills: [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "Redux Toolkit",
        "HTML5/CSS3",
      ],
    },
    {
      title: "Styling & UI Library",
      icon: <layout className="text-purple-500" size={28} />, // Tailwind icon toggle
      skills: [
        "Tailwind CSS",
        "Bootstrap",
        "Material UI",
        "Framer Motion",
        "SASS/SCSS",
        "Styled Components",
      ],
    },
    {
      title: "Tools & Backend",
      icon: <Terminal className="text-purple-500" size={28} />,
      skills: [
        "Git & GitHub",
        "Firebase",
        "Node.js (Basic)",
        "REST APIs",
        "Vite / Webpack",
        "Netlify/Vercel",
      ],
    },
    {
      title: "Design & Others",
      icon: <Cpu className="text-purple-500" size={28} />,
      skills: [
        "Figma",
        "Responsive Design",
        "SEO Optimization",
        "PWA",
        "Performance Tuning",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 bg-[#050505] px-6 lg:px-20 overflow-hidden"
    >
      {/* Background Blur Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-0"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-purple-500 font-semibold tracking-widest uppercase text-sm mb-3"
          >
            My Expertise
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Skillset
            </span>
          </motion.h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-8 bg-[#0a0a0a] border border-white/5 rounded-3xl hover:border-purple-500/30 transition-all duration-300 group"
            >
              <div className="mb-6 p-3 bg-purple-500/10 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-6">
                {category.title}
              </h3>

              <ul className="space-y-3">
                {category.skills.map((skill, sIndex) => (
                  <li
                    key={sIndex}
                    className="flex items-center gap-2 text-gray-400 text-sm"
                  >
                    <Zap size={14} className="text-purple-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Interactive Experience Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-16 p-8 rounded-[2.5rem] bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-500/20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Always Learning & Improving
            </h3>
            <p className="text-gray-400">
              Currently exploring Three.js for 3D web experiences and Web3
              technologies.
            </p>
          </div>
          <button className="px-8 py-3 bg-white text-black font-bold rounded-2xl hover:bg-purple-500 hover:text-white transition-all">
            Check My GitHub
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
