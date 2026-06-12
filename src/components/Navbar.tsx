/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Timeline" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div
            className="flex items-center gap-2.5 cursor-pointer"
            onClick={() => handleNavClick("hero")}
          >
            <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center text-white font-extrabold text-sm shadow-sm">
              AF
            </div>

            <div className="flex flex-col">
              <span className="text-slate-900 font-bold tracking-tight text-sm uppercase">
                Asim Farhath
                <span className="text-teal-700">.</span>
              </span>

              <span className="text-slate-500 font-mono text-[10px] uppercase tracking-wider">
                Web Developer
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs uppercase tracking-wider font-bold transition-colors hover:text-teal-700 px-1 py-1 cursor-pointer ${
                  activeSection === item.id
                    ? "text-teal-700"
                    : "text-slate-600"
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="h-5 w-[1px] bg-slate-200 mx-1"></div>

            {/* Download Resume */}
            <a
              href={`${import.meta.env.BASE_URL}Asim_Farhath_Resume.pdf`}
              target="_blank"
  rel="noopener noreferrer"
              className="text-slate-700 hover:text-slate-900 flex items-center gap-2 text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-all duration-300 shadow-sm"
            >
              <Download className="w-4 h-4 text-slate-500" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href={`${import.meta.env.BASE_URL}Asim_Farhath_Resume.pdf`}
              download
              className="text-slate-600 hover:text-slate-900 p-2.5 rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <Download className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2.5 rounded-xl transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 pt-4 pb-6 space-y-3 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold transition-all ${
                activeSection === item.id
                  ? "bg-teal-50 text-teal-700 border-l-4 border-teal-600"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-4 border-t border-slate-100">
            <a
              href={`${import.meta.env.BASE_URL}Asim_Farhath_Resume.pdf`}
              download
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs uppercase tracking-wider font-bold shadow-sm"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}