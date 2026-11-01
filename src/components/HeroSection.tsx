import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeroSectionProps {
  onRequestConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestConsultation }) => {
  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center bg-[#0E1626] overflow-hidden">
      {/* Background Photography with Warm Luxury Tint */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Scottsdale architectural desert home with patio and pool"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Gradients to keep typography crisp and prestigious */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A101C] via-[#0E1626]/90 to-[#0E1626]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A101C] via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Main Hero Copy (Landlord-Focused) */}
          <div className="lg:col-span-8 max-w-2xl">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C59A45]/40 text-[#E6CA85] text-xs font-semibold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4 text-[#C59A45]" />
              <span>Scottsdale & Paradise Valley Property Management</span>
            </div>

            {/* Suggested Hero Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-[1.15]">
              Your Property Deserves <span className="italic font-serif text-[#E6CA85]">Better Management.</span>
            </h1>

            {/* Suggested Supporting Text */}
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-xl">
              Property ownership should be an investment, not a second full-time job. Discover a more thoughtful approach to managing your rental property.
            </p>

            {/* CTA Group */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onRequestConsultation}
                className="bg-gradient-to-r from-[#C59A45] via-[#D4AF37] to-[#B38734] hover:from-[#D4AF37] hover:to-[#C59A45] text-[#0A101C] font-bold text-base px-8 py-4 rounded-md shadow-xl shadow-[#C59A45]/20 hover:shadow-2xl hover:shadow-[#C59A45]/30 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md bg-white/10 hover:bg-white/15 text-white font-medium text-base border border-white/20 backdrop-blur-sm transition-all duration-200 hover:border-white/40"
              >
                <span>Explore Our Services</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Value bullets */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#C59A45] shrink-0" />
                <span>Zero Hidden Vendor Markups</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#C59A45] shrink-0" />
                <span>24/7 Dedicated Owner Support</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#C59A45] shrink-0" />
                <span>Free Rental Market Analysis</span>
              </div>
            </div>
          </div>

          {/* Quick Real-Time Landlord Snapshot Card */}
          <div className="lg:col-span-4">
            <div className="bg-[#121B2F]/90 backdrop-blur-md border border-white/15 rounded-xl p-6 sm:p-8 shadow-2xl text-white relative">
              <div className="absolute -top-3 right-6 bg-[#C59A45] text-[#0A101C] text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
                Owner Direct Line
              </div>

              <div className="font-serif text-2xl font-semibold mb-2">Speak With A Property Manager</div>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Whether you have an empty rental, an underperforming short-term vacation property, or are transitioning from another company:
              </p>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">Direct Arizona Office</div>
                <div className="text-2xl font-bold text-white tracking-wide">{COMPANY_INFO.phone}</div>
                <div className="text-xs text-[#E6CA85] mt-1">Scottsdale office • Open Mon - Fri 8am - 6pm</div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={onRequestConsultation}
                  className="w-full bg-white/10 hover:bg-[#C59A45] hover:text-[#0A101C] text-white font-semibold py-3 px-4 rounded-md text-sm transition-all duration-200 border border-white/15 hover:border-[#C59A45] text-center cursor-pointer"
                >
                  Get Your Free Rental Estimate
                </button>
                <div className="text-[12px] text-center text-slate-400">
                  No obligation • In-depth local comps
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
