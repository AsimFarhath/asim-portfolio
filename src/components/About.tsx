/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Award, GraduationCap, Phone, MapPin, Mail, BookOpen, Clock } from "lucide-react";
import { personalInfo, educationList, certificationsList } from "../data";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-200 bg-slate-50">
      <div
        className="space-y-16"
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200/80 text-teal-700 text-xs font-mono uppercase font-bold tracking-wider rounded-full mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Profile </span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-emerald-600">Asim Farhath</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="mt-4 text-slate-500 text-base sm:text-lg leading-relaxed">
            Discover education, certifications, and the drive behind technical excellence.
          </motion.p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Biography Card */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 lg:col-span-7 rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white via-white to-teal-50/15 p-8 sm:p-10 shadow-sm relative overflow-hidden group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-slate-50 to-teal-100/30 flex items-center justify-center border border-slate-200/85 text-teal-700">
                  <BookOpen className="w-5.5 h-5.5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">Professional Bio</h3>
              </div>
              <p className="text-slate-650 text-base leading-relaxed mb-6 font-normal font-sans">
                {personalInfo.summary}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Aiming to merge algorithmic excellence with clean frontend user experiences, focusing deeply on technologies like React.js, Node.js, modern relational SQL structures, and object-oriented Java concepts.
              </p>
            </div>

            {/* Quick Contact Chips Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-100">
              <div className="flex items-center gap-2.5 text-slate-600">
                <MapPin className="w-4 h-4 text-teal-650 shrink-0" />
                <span className="text-xs truncate font-semibold">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-600">
                <Mail className="w-4 h-4 text-teal-650 shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="text-xs hover:text-teal-700 transition-colors truncate font-semibold">{personalInfo.email}</a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-600">
                <Phone className="w-4 h-4 text-teal-650 shrink-0" />
                <span className="text-xs truncate font-semibold">{personalInfo.phone}</span>
              </div>
            </div>
          </motion.div>

          {/* Education & Certs Side Column */}
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-8">
            
            {/* Education Card */}
            <motion.div
              variants={itemVariants}
              className="flex-1 rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white via-white to-emerald-50/15 p-8 shadow-sm relative overflow-hidden group"
            >
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-50 to-emerald-50 flex items-center justify-center border border-slate-200/85 text-teal-700">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">Academic Education</h3>
              </div>

              {educationList.map((edu, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-teal-700 font-mono text-xs font-semibold">{edu.period}</span>
                    <span className="text-[10px] uppercase tracking-wider text-emerald-700 font-bold bg-emerald-50 border border-emerald-250/50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" /> B.Tech
                    </span>
                  </div>
                  <h4 className="text-slate-900 font-bold text-base leading-snug">{edu.degree}</h4>
                  <p className="text-slate-600 text-xs font-semibold">{edu.institution}</p>
                  <p className="text-slate-500 text-xs leading-relaxed mt-2 pt-2 border-t border-slate-100">{edu.details}</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 mb-3">
  CGPA: 7.6 / 10
</div>
                </div>
              ))}
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white via-white to-teal-50/15 p-8 shadow-sm relative overflow-hidden group"
            >
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-200/80 text-teal-700">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">Certificates</h3>
              </div>

              {certificationsList.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-slate-50 text-teal-700 border border-slate-200 mt-1 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="space-y-2">
  <h4 className="text-slate-800 font-bold text-sm leading-snug">
    {cert.title}
  </h4>

  <p className="text-slate-550 text-xs">
    {cert.provider}
  </p>

  <div className="text-[10px] font-mono font-semibold text-teal-600 uppercase tracking-wide mt-1">
    {cert.period}
  </div>

  <a
    href="/Certificates/Coderead.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 hover:text-teal-900 transition-colors"
  >
    View Certificate →
  </a>
</div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
