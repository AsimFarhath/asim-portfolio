/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  FileText, 
  Terminal,
  Printer
} from "lucide-react";
import { motion } from "motion/react";

// Modals & Sections
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { SkillsGrid } from "./components/SkillsGrid";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { ResumeViewer } from "./components/ResumeViewer";

// Static Resume Data
import { personalInfo } from "./data";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isResumePrintOpen, setIsResumePrintOpen] = useState(false);
  


  // Simple scroll spy to highlight navbar menu items based on scroll position
  useEffect(() => {
    const sections = ["hero", "about", "skills", "experience", "projects"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans selection:bg-slate-200 selection:text-slate-900">
      
      {/* Top Navbar */}
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        onOpenResumePrint={() => setIsResumePrintOpen(true)}
      />

      {/* ================= HERO SECTION ================= */}
      <header id="hero" className="relative min-h-[95vh] flex items-center justify-center pt-12 overflow-hidden border-b border-slate-200 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-16">
          <div className="flex justify-center">
            
            {/* Left Column - Core Intro Details */}
            <div className="max-w-2xl space-y-8 text-center relative">
              

              {/* Profile Picture */}
              <div className="flex justify-center">
                <img 
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Asim Farhath Profile" 
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover object-top border-4 border-slate-200 shadow-md"
                />
              </div>

              {/* High-Impact Greeting & Elegant Headline */}
              <div className="space-y-4">
                <h2 className="text-slate-500 font-mono text-xs uppercase tracking-widest font-bold">
                  Hello, I'm Asim 
                </h2>
                
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-slate-900">
                  Code. Create.  <br />
                  <span className="text-slate-700">
                    Innovate.
                  </span>
                </h1>
                
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
                  Aspiring Web Developer with expertise in Java, React.js, Node.js, and MS SQL. Strong foundation in problem-solving, object-oriented programming, and full-stack web development. Built a Turf Online Booking Platform and currently developing an AI-powered Financial Literacy System.
                </p>
              </div>

              {/* Elegant Action Trigger Buttons */}
              <div className="flex justify-center pt-2">
                <a
  href={`${import.meta.env.BASE_URL}Asim_Farhath_Resume.pdf`}
  target="_blank"
  rel="noopener noreferrer"
  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-lg flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer"
>
  <FileText className="w-4.5 h-4.5" />
  <span>VIEW RESUME</span>
  <ArrowRight className="w-4 h-4" />
</a>

              </div>

              {/* Pure Elegant Connection Row */}
              <div className="flex items-center justify-center gap-4 pt-6 border-t border-slate-100 max-w-sm mx-auto">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider select-none">contact:</span>
                
                <a 
                  href="mailto:asimfarhath9@gmail.com" 
                  className="p-3 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-900 transition-all cursor-pointer shadow-sm"
                  title="Send Email"
                >
                  <Mail className="w-4.5 h-4.5" />
                </a>

                <a 
                  href="tel:+918248461679" 
                  className="p-3 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-900 transition-all cursor-pointer shadow-sm"
                  title="Make a Call"
                >
                  <Phone className="w-4.5 h-4.5" />
                </a>


                <a
  href="https://www.linkedin.com/in/asim-farhath-9a114a293?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-900 transition-all cursor-pointer shadow-sm"
  title="LinkedIn Profile"
>
  <Linkedin className="w-4.5 h-4.5" />
</a>
                <a 
                  href="https://github.com/AsimFarhath" 
                  target="_blank" 
                  className="p-3 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-900 transition-all cursor-pointer shadow-sm"
                  title="Check GitHub"
                >
                  <Github className="w-4.5 h-4.5" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </header>

      {/* About Section */}
      <About />

      {/* Technical Skills Bento Grid */}
      <SkillsGrid />

      {/* Experiential internship Timeline */}
      <Experience />

      {/* Portfolio Projects Cards */}
      <Projects />

      {/* Contact and form gates */}
      <Contact />

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-200 bg-white py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-center md:text-left">
          
          {/* Brand block */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-9 h-9 rounded-xl bg-slate-950 flex items-center justify-center text-white font-extrabold text-sm shadow-sm">
              AF
            </div>
            <div className="flex flex-col">
              <span className="text-slate-900 font-bold tracking-tight text-sm leading-none uppercase">Asim Farhath<span className="text-teal-700">.</span></span>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">&copy; 2026. ALL RIGHTS RESERVED.</span>
            </div>
          </div>

          {/* Quick linkages lists */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500 font-semibold uppercase tracking-wider">
            <a href="#about" className="hover:text-teal-700 transition-colors">About</a>
            <a href="#skills" className="hover:text-teal-700 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-teal-700 transition-colors">Timeline</a>
            <a href="#projects" className="hover:text-teal-700 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-teal-700 transition-colors">Contact</a>
          </div>

          {/* Core resume widget button for fast access */}
          <div className="flex items-center gap-3 shrink-0">
  <a
  href={`${import.meta.env.BASE_URL}Asim_Farhath_Resume.pdf`}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wide py-2.5 px-4 rounded-xl flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
>
  <FileText className="w-3.5 h-3.5" />
  <span>View Resume</span>
</a>
</div>

        </div>
      </footer>

      {/* Interactive Resume printable Modal */}
      <ResumeViewer
  isOpen={isResumePrintOpen}
  onClose={() => setIsResumePrintOpen(false)}
/>

    </div>
  );
}
