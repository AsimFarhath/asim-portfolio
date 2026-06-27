/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FolderGit2, Rocket, Code2, Sparkles, ChevronDown, ChevronUp, Github } from "lucide-react";
import { projectsList } from "../data";

export function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { y: 35, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 85, damping: 16 } }
  };

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-200 bg-white">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200/80 text-teal-700 text-xs font-mono uppercase font-bold tracking-wider rounded-full mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-emerald-600 font-extrabold">Masterpieces</span>
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg leading-relaxed">
            Deep dive into Asim's personal projects, showcasing technical excellence from scalable search systems to real-time operations.
          </p>
        </div>

        {/* Projects Cards Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
        >
          {projectsList.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between h-auto ${
                  isExpanded
                    ? "bg-white border-teal-400 shadow-md"
                    : "bg-white border-slate-200 hover:border-slate-350 hover:shadow-md"
                }`}
              >
                {/* Visual Header Graphic */}
                <div className="h-40 bg-gradient-to-br from-slate-50 via-teal-50/15 to-slate-50/80 relative flex items-center justify-center p-6 border-b border-slate-150 overflow-hidden">
                  {/* Backdrop Matrix Graphic */}
                  <div className="absolute inset-0 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.05] pointer-events-none"></div>
                  
                  {project.id === "proj-1" ? (
                    <div className="flex flex-col items-center gap-2 relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 text-teal-700 flex items-center justify-center shadow-sm">
                        <Code2 className="w-7 h-7" />
                      </div>
                      <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold">Turf booking engine</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2 relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 text-teal-700 flex items-center justify-center shadow-sm">
                        <Sparkles className="w-7 h-7" />
                      </div>
                      <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold">Scale AI Operations</span>
                    </div>
                  )}

                  {/* Period Badge */}
                  <div className="absolute top-4 right-4 text-[10px] font-mono font-bold bg-white border border-slate-200/90 px-2.5 py-1 rounded-full text-teal-700 tracking-wide shadow-sm">
                    {project.period}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 space-y-6 flex-1">
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-teal-700 text-xs font-semibold uppercase tracking-wider font-mono">
                      {project.organization} &bull; {project.location}
                    </p>
                  </div>

                  {/* Core description */}
                  <div className="space-y-4">
                    {project.description.map((desc, idx) => (
                      <p key={idx} className="text-slate-600 text-[13px] sm:text-sm leading-relaxed font-sans">
                        {desc}
                      </p>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-slate-50 font-semibold px-2.5 py-1 rounded-xl border border-slate-200/70 text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Toggle technical report */}
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-650 hover:text-teal-700 hover:border-teal-400 hover:bg-slate-100/50 text-xs font-bold font-mono tracking-wide uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{isExpanded ? "Hide Specifications" : "View Specifications"}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-slate-50/70 rounded-xl border border-slate-200/90 p-5 mt-4 space-y-4"
                      >
                        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                          Architecture Highlights
                        </h4>
                        <ul className="space-y-2.5">
                          {project.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed font-sans">
                              <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 shrink-0"></span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer bar */}
                <div className="px-6 sm:px-8 py-5 border-t border-slate-100 bg-slate-50/60 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 font-mono">
                    Production Grade
                  </span>
                  
                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 bg-white hover:text-slate-900 hover:border-slate-350 p-2 px-3 rounded-xl border border-slate-200 transition-all text-xs flex items-center gap-1.5 font-bold tracking-wide cursor-pointer shadow-sm"
                    >
                      <Github className="w-4 h-4 text-slate-500" />
                      <span>Repo</span>
                    </a>
                    
                    <a
                      href={project.demoUrl}
                      className="text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 font-bold tracking-wide transition-all shadow-sm cursor-pointer hover:shadow-md"
                    >
                      <Rocket className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
