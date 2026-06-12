/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { personalInfo } from "../data";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    // Simulate clean backend storage/delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white border-t border-slate-200/90">
      <div className="space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200/80 text-teal-700 text-xs font-mono uppercase font-bold tracking-wider rounded-full mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Connection Gateway</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-emerald-600 font-extrabold">Collaborate</span>
          </h2>
          <p className="mt-4 text-slate-500 text-base leading-relaxed font-sans">
            i'm Ready to hire.
          </p>
        </div>

        {/* Contact layout grid */}
        <div className="flex justify-center">
          
          {/* Direct Address/Contact Block */}
          <div className="lg:col-span-12 lg:lg:col-span-5 rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-white to-slate-50/40 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-sm">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold uppercase text-slate-900 tracking-tight">
                  Contact
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1.5 font-sans">
                  Reach out at any time.
                </p>
              </div>

              {/* Contacts info list */}
              <div className="space-y-6">
                
                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-teal-600 mt-0.5 shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold leading-none mb-1">Send Mail</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-slate-800 hover:text-teal-700 font-bold font-sans text-sm sm:text-base transition-colors break-all">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Handphone Number */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-teal-600 mt-0.5 shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold leading-none mb-1">Make a Call</span>
                    <a href={`tel:${personalInfo.phone}`} className="text-slate-800 hover:text-teal-700 font-bold font-sans text-sm sm:text-base transition-colors truncate block">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Geography Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-teal-600 mt-0.5 shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold leading-none mb-1">Location</span>
                    <p className="text-slate-700 font-bold uppercase tracking-wider text-xs sm:text-sm leading-normal">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick response note */}
            <div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-400 font-mono">
              <AlertCircle className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Typically responds within 2-4 hours on weekdays.</span>
            </div>

          </div>

          {/* Interactive contact input form */}
          

        </div>

      </div>
    </section>
  );
}
