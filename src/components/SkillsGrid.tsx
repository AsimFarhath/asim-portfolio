/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Cpu, Terminal, Database, Shield, Layout, Wrench } from "lucide-react";
import { skillsList } from "../data";

export function SkillsGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 120 } }
  };

  // Map icons to categories
  const getCategoryIcon = (category: string) => {
    const name = category.toLowerCase();
    if (name.includes("programming")) {
      return <Terminal className="w-5.5 h-5.5 text-teal-700" />;
    } else if (name.includes("frontend")) {
      return <Layout className="w-5.5 h-5.5 text-teal-700" />;
    } else if (name.includes("backend")) {
      return <Cpu className="w-5.5 h-5.5 text-teal-700" />;
    } else if (name.includes("database")) {
      return <Database className="w-5.5 h-5.5 text-teal-700" />;
    } else {
      return <Wrench className="w-5.5 h-5.5 text-teal-700" />;
    }
  };

  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-200 bg-white">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200/80 text-teal-700 text-xs font-mono uppercase font-bold tracking-wider rounded-full mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Expertise &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-emerald-600">Technologies</span>
          </h2>
          
          <p className="mt-4 text-slate-500 text-base sm:text-lg leading-relaxed font-normal">
            Asim's professional technical toolkit, mapped to standard software architectures and modern tooling profiles.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsList.map((group, idx) => {
            return (
              <div
                key={idx}
                className="group relative rounded-lg border border-slate-300 bg-white p-6 transition-all duration-200 hover:shadow-md flex flex-col justify-between overflow-hidden cursor-default"
              >
                <div className="relative z-10 w-full">
                  {/* Card Title Block */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 bg-gradient-to-br from-slate-50 to-teal-50/50 text-teal-700">
                      {getCategoryIcon(group.category)}
                    </div>
                    <h3 className="text-base font-bold text-slate-800">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skills tags list */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs bg-slate-50/70 font-semibold text-slate-650 hover:text-slate-900 px-3 py-1.5 rounded-xl border border-slate-100 hover:border-slate-300 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle bottom detail dot */}
                <div className="w-full h-1 mt-6 border-b border-dashed border-slate-100 relative z-10 flex items-center justify-end">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-teal-600 transition-colors"></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
