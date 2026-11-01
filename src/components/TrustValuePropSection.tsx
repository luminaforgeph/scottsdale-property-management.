import React from 'react';
import { ShieldCheck, MapPin, Clock, BarChart3, CheckCircle } from 'lucide-react';
import { TRUST_PILLARS } from '../data/content';

const iconMap = {
  ShieldCheck,
  MapPin,
  Clock,
  BarChart3,
};

export const TrustValuePropSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF9F5] border-b border-[#EAE6DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#C59A45] mb-3">
            <span className="w-6 h-[1.5px] bg-[#C59A45]" />
            <span>The SPM Standard</span>
            <span className="w-6 h-[1.5px] bg-[#C59A45]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0E1626] font-semibold tracking-tight">
            Property Managers You Can Truly Trust
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Scottsdale Property Management is dedicated to delivering exceptional service to rental property owners and investors across Maricopa County.
          </p>
        </div>

        {/* 4 Trust Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_PILLARS.map((pillar, idx) => {
            const Icon = iconMap[pillar.iconName as keyof typeof iconMap] || ShieldCheck;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-[#E8E4DA] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-[#C59A45]/40"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#FAF9F5] border border-[#EAE6DE] flex items-center justify-center text-[#C59A45] mb-6 group-hover:bg-[#0E1626] group-hover:text-[#E6CA85] transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[#0E1626] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#C59A45]">
                  <CheckCircle className="w-3.5 h-3.5 mr-1.5" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stat strip banner */}
        <div className="mt-14 bg-[#0E1626] rounded-xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#C59A45] font-semibold mb-1">Local Focus & Experience</div>
            <div className="font-serif text-xl sm:text-2xl font-medium">Headquartered in Scottsdale, Arizona</div>
            <p className="text-sm text-slate-300 mt-1">Specialized in desert micro-markets, seasonal rental shifts, and City of Scottsdale ordinances.</p>
          </div>
          <div className="flex items-center gap-8 divide-x divide-white/10 shrink-0 text-center">
            <div className="px-4">
              <div className="font-serif text-3xl font-bold text-[#E6CA85]">100%</div>
              <div className="text-xs text-slate-400 mt-0.5">Local Arizona Team</div>
            </div>
            <div className="pl-8">
              <div className="font-serif text-3xl font-bold text-[#E6CA85]">24/7</div>
              <div className="text-xs text-slate-400 mt-0.5">Emergency Dispatch</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
