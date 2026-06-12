/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Printer, X, Mail, Phone, MapPin, Award, GraduationCap } from "lucide-react";
import { personalInfo, educationList, internshipsList, projectsList, certificationsList, skillsList } from "../data";

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeViewer({ isOpen, onClose }: ResumeViewerProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-md overflow-y-auto p-4 sm:p-6 md:p-8">
      {/* Background click dismiss */}
      <div className="absolute inset-0 cursor-default" onClick={onClose}></div>

      {/* Main Resume Sheet Container */}
      <div className="relative bg-white border border-slate-200 rounded-2xl w-full max-w-4xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden z-10 animate-scale-up print:absolute print:inset-0 print:m-0 print:border-none print:shadow-none print:max-h-full print:bg-white print:text-black">
        
        {/* Modal Toolbar (hidden in print) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-150 shrink-0 bg-slate-50 print:hidden">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center text-white font-extrabold text-xs">
              AF
            </div>
            <span className="text-slate-700 font-bold text-xs uppercase tracking-wider">Asim H. &bull; Interactive Resume</span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-slate-950 hover:bg-slate-800 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition-all cursor-pointer uppercase tracking-wider shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            
            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-800 rounded-xl border border-slate-200 bg-white hover:border-slate-350 transition-colors cursor-pointer shadow-sm"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Area */}
        <div className="overflow-y-auto p-4 sm:p-8 md:p-10 bg-slate-50 print:overflow-visible print:p-0 print:bg-white">
          
          {/* Printable Sheet Card */}
          <div className="mx-auto max-w-3xl space-y-8 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-10 md:p-12 shadow-sm print:shadow-none print:border-none print:p-0 print:bg-white print:text-black printable-area">
            
            {/* Resume Header */}
            <div className="text-center sm:text-left border-b border-slate-100 pb-6 print:border-black/20">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-1.5">
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none print:text-black">
                    {personalInfo.name}
                  </h1>
                  <p className="text-sm sm:text-base font-bold text-teal-700 uppercase tracking-wider font-mono print:text-slate-700 print:text-xs">
                    {personalInfo.title}
                  </p>
                </div>

                {/* Direct Contact info */}
                <div className="flex flex-col sm:items-end gap-1.5 shrink-0 text-slate-600 text-xs sm:text-right print:text-black font-sans">
                  <span className="flex items-center sm:justify-end gap-2 text-slate-650 hover:text-teal-700 transition-colors print:text-black">
                    <Mail className="w-3.5 h-3.5 text-teal-600 shrink-0 print:text-black" />
                    <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                  </span>
                  <span className="flex items-center sm:justify-end gap-2 text-slate-650 print:text-black">
                    <Phone className="w-3.5 h-3.5 text-teal-600 shrink-0 print:text-black" />
                    <span>{personalInfo.phone}</span>
                  </span>
                  <span className="flex items-center sm:justify-end gap-2 text-slate-650 print:text-black">
                    <MapPin className="w-3.5 h-3.5 text-teal-650 shrink-0 print:text-black" />
                    <span>{personalInfo.location}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700 font-mono flex items-center gap-2 print:text-black print:font-bold">
                <span>Professional Summary</span>
                <span className="flex-1 h-[1px] bg-slate-205/80 print:bg-black/20"></span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-sans text-justify print:text-black/95">
                {personalInfo.summary}
              </p>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700 font-mono flex items-center gap-2 print:text-black print:font-bold">
                <span>Technical Skills & Tools</span>
                <span className="flex-1 h-[1px] bg-slate-205/80 print:bg-black/25"></span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 print:grid-cols-2">
                {skillsList.map((g, idx) => (
                  <div key={idx} className="text-xs space-y-1 border-l-2 border-slate-200 pl-3 py-0.5 print:border-black/20">
                    <span className="font-bold text-slate-800 uppercase tracking-wider print:text-black font-sans">{g.category}:</span>
                    <p className="text-slate-500 leading-normal print:text-black/80 font-normal">{g.skills.join(", ")}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Internship Experiences */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700 font-mono flex items-center gap-2 print:text-black print:font-bold">
                <span>Practical Internships</span>
                <span className="flex-1 h-[1px] bg-slate-205/80 print:bg-black/25"></span>
              </h2>
              <div className="space-y-5">
                {internshipsList.map((intern, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-sm font-bold uppercase text-slate-900 print:text-black font-sans">
                        {intern.role}
                      </h3>
                      <span className="text-[11px] font-mono font-bold text-teal-700 tracking-wider text-right shrink-0 print:text-black uppercase">
                        {intern.period}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 font-semibold tracking-wider uppercase print:text-black/85">
                      <span>{intern.company}</span>
                      <span>{intern.location}</span>
                    </div>
                    <ul className="list-disc list-outside pl-4 space-y-1">
                      {intern.description.map((bullet, k) => (
                        <li key={k} className="text-xs text-slate-600 leading-relaxed print:text-black/90">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Showcase */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700 font-mono flex items-center gap-2 print:text-black print:font-bold">
                <span>Engineering Projects</span>
                <span className="flex-1 h-[1px] bg-slate-205/80 print:bg-black/25"></span>
              </h2>
              <div className="space-y-5">
                {projectsList.map((proj, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-sm font-bold uppercase text-slate-900 print:text-black font-sans">
                        {proj.title}
                      </h3>
                      <span className="text-[11px] font-mono font-bold text-teal-700 tracking-wider text-right shrink-0 print:text-black uppercase">
                        {proj.period}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 font-semibold tracking-wider uppercase print:text-black/85">
                      <span>{proj.organization}</span>
                      <span>{proj.location}</span>
                    </div>
                    <ul className="list-disc list-outside pl-4 space-y-1">
                      {proj.description.map((bullet, k) => (
                        <li key={k} className="text-xs text-slate-600 leading-relaxed print:text-black/90 font-sans">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Block */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700 font-mono flex items-center gap-2 print:text-black print:font-bold">
                <span>Higher Education</span>
                <span className="flex-1 h-[1px] bg-slate-205/80 print:bg-black/25"></span>
              </h2>
              {educationList.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-sm font-bold uppercase text-slate-900 print:text-black font-sans">
                      {edu.degree}
                    </h3>
                    <span className="text-[11px] font-mono font-bold text-teal-700 shrink-0 print:text-black uppercase">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs text-slate-550 font-semibold tracking-wider uppercase print:text-black/85">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications and Additional Details */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700 font-mono flex items-center gap-2 print:text-black print:font-bold">
                <span>Additional Endorsements</span>
                <span className="flex-1 h-[1px] bg-slate-205/80 print:bg-black/25"></span>
              </h2>
              {certificationsList.map((cert, idx) => (
                <div key={idx} className="flex justify-between text-xs text-slate-600 print:text-black">
                  <span className="font-bold uppercase tracking-wider text-[11px] text-slate-700">{cert.title} &mdash; {cert.provider}</span>
                  <span className="font-mono text-[11px] font-bold text-teal-700 print:text-black uppercase tracking-wider">{cert.period}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
