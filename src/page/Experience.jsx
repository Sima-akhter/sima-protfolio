import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      duration: "2023 - Present",
      description:
        "Leading the frontend team to build scalable SaaS products using Next.js and TypeScript. Improved site performance by 40%.",
      skills: ["Next.js", "TypeScript", "Team Leadership"],
    },
    {
      role: "Web Developer",
      company: "Creative Digital Agency",
      duration: "2021 - 2023",
      description:
        "Developed 20+ responsive websites for international clients. Specialized in React.js and Framer Motion for high-end animations.",
      skills: ["React", "Tailwind CSS", "Figma"],
    },
    {
      role: "Junior Developer (Intern)",
      company: "Softify BD",
      duration: "2020 - 2021",
      description:
        "Assisted in building UI components and fixing bugs. Learned the fundamentals of agile development and version control.",
      skills: ["JavaScript", "HTML/CSS", "Git"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-[#050505] px-6 lg:px-20 relative"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-4">
            <Briefcase size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">
              My Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Experience
            </span>
          </h2>
        </div>

        {/* --- TIMELINE LAYOUT --- */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500/50 via-indigo-500/20 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center justify-between w-full ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-[#050505] z-10 shadow-[0_0_10px_rgba(147,51,234,0.8)]"></div>

                {/* Content Card */}
                <div className="w-full md:w-[45%] ml-8 md:ml-0">
                  <div className="p-8 bg-[#0d0d0d] border border-white/5 rounded-[2rem] hover:border-purple-500/30 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="flex items-center gap-2 text-purple-400 text-sm font-semibold">
                        <Calendar size={14} /> {exp.duration}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-indigo-300 font-medium mb-4">
                      {exp.company}
                    </p>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Skill Tags for Experience */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-400 italic"
                        >
                          #{skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty Space for Desktop (to balance the grid) */}
                <div className="hidden md:block w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
