import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI SaaS Dashboard",
      description:
        "A premium AI-powered dashboard with real-time data visualization and dark mode support. Built for high-scale enterprise use.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      tags: ["React", "Tailwind", "Chart.js", "Firebase"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "E-Commerce Experience",
      description:
        "A fully functional e-commerce platform with a focus on smooth animations, fast filtering, and a seamless checkout process.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      tags: ["Next.js", "Redux", "Stripe", "Node.js"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Crypto Portfolio Tracker",
      description:
        "Real-time cryptocurrency tracking app with live price updates and portfolio management features using public APIs.",
      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=800&auto=format&fit=crop",
      tags: ["React", "TypeScript", "Axios", "Framer Motion"],
      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-[#050505] px-6 lg:px-20 relative overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 text-purple-500 mb-4 font-medium uppercase tracking-widest text-sm">
              <Layers size={18} />
              My Works
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                Projects
              </span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-lg">
            A collection of my best work, combining clean code with beautiful
            design.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#0d0d0d] border border-white/5 rounded-[2rem] overflow-hidden hover:border-purple-500/40 transition-all duration-500 shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold uppercase rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Action Links */}
                <div className="flex items-center gap-6 border-t border-white/5 pt-6">
                  <a
                    href={project.liveLink}
                    className="flex items-center gap-2 text-white text-sm font-semibold hover:text-purple-400 transition-colors"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 text-gray-400 text-sm font-semibold hover:text-white transition-colors"
                  >
                    <Github size={18} /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- VIEW MORE BUTTON --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <button className="px-10 py-4 border border-purple-500/30 text-white rounded-2xl font-bold hover:bg-purple-600 hover:border-purple-600 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 active:scale-95">
            Browse All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
