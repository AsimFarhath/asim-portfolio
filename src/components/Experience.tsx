/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";
import { internshipsList } from "../data";

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { x: -15, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="experience" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-200/80">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-16"
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200/80 text-teal-700 text-xs font-mono uppercase font-bold tracking-wider rounded-full mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work History</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-emerald-600 font-extrabold">Experience</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="mt-4 text-slate-550 text-base sm:text-lg leading-relaxed">
            A chronological timeline of building academic projects, creating dynamic software, and engineering real-world solutions during internships.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-16 pl-8 border-l border-slate-200 space-y-12">
          {internshipsList.map((job, idx) => (
            <motion.div
              key={job.id || idx}
              variants={itemVariants}
              className="relative group pb-2"
            >
              {/* Node Dot indicator */}
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-slate-50 border-2 border-slate-200 flex items-center justify-center group-hover:border-teal-600 transition-colors duration-300">
                <div className="w-2 rounded-full h-2 bg-slate-300 group-hover:bg-teal-600 transition-colors duration-300"></div>
              </div>

              {/* Job Card wrapper */}
              <div className="rounded-2xl border border-slate-200/95 bg-gradient-to-br from-white to-slate-50/40 p-6 sm:p-8 hover:border-slate-300 transition-all duration-300 shadow-sm relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors duration-200">
                      {job.role}
                    </h3>
                    <div className="text-slate-500 font-semibold text-sm mt-0.5">
                      {job.company}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 shrink-0">
                    <span className="inline-flex items-center gap-1.5 text-xs text-teal-700 font-bold bg-teal-50 border border-teal-100/90 px-3 py-1 rounded-xl">
                      <Calendar className="w-3.5 h-3.5" />
                      {job.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-450 text-xs font-medium">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                  </div>
                </div>

                <ul className="list-disc list-outside pl-4 space-y-1.5 mb-6 text-slate-650 text-sm leading-relaxed font-sans">
                  {job.description.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>

                {/* Key Accomplishments / Tech specs List */}
                {job.skillsLearned && job.skillsLearned.length > 0 && (
                  <div className="pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-2 mb-3.5">
                      <Sparkles className="w-3.5 h-3.5 text-teal-650" />
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">Skills Mastered</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.skillsLearned.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] bg-slate-50/70 text-slate-650 border border-slate-200/80 px-2.5 py-1 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {job.certificateUrl && (
  <div className="mt-5">
    <a
      href={job.certificateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white text-xs font-bold rounded-lg hover:bg-teal-700 transition-all"
    >
      View Certificate →
    </a>
  </div>
)}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
