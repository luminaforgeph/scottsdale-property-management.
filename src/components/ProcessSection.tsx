import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

interface ProcessSectionProps {
  onRequestConsultation: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onRequestConsultation }) => {
  return (
    <section id="process" className="py-24 bg-[#0E1626] text-white relative overflow-hidden scroll-mt-20">
      {/* Subtle luxury glow accent in background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C59A45]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#C59A45]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#E6CA85] mb-3">
            <span className="w-6 h-[1.5px] bg-[#C59A45]" />
            <span>The Landlord Roadmap</span>
            <span className="w-6 h-[1.5px] bg-[#C59A45]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            How Our Management Process Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Transitioning your property should be seamless, transparent, and completely stress-free. Here is what to expect from day one.
          </p>
        </div>

        {/* 4 Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#121B2F] border border-white/10 rounded-xl p-8 relative flex flex-col justify-between hover:border-[#C59A45]/50 transition-all duration-300 group"
            >
              <div>
                {/* Step number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#C59A45] group-hover:scale-105 transition-transform">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-[#E6CA85] transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-serif text-xl font-semibold text-white mb-3 leading-snug">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center text-xs text-[#E6CA85] font-medium">
                <span>Phase {idx + 1} of Onboarding</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 bg-white/5 border border-white/10 px-8 py-5 rounded-xl">
            <span className="text-sm text-slate-200">
              Already have existing tenants or another property manager under contract?
            </span>
            <button
              onClick={onRequestConsultation}
              className="text-[#E6CA85] hover:text-white font-semibold text-sm underline flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>We handle hassle-free owner transitions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
