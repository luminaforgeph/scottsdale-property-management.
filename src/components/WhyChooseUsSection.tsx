import React from 'react';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { WHY_CHOOSE_US_POINTS, COMPANY_INFO } from '../data/content';

interface WhyChooseUsSectionProps {
  onRequestConsultation: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onRequestConsultation }) => {
  return (
    <section id="why-choose-us" className="py-24 bg-[#FAF9F5] border-y border-[#EAE6DE] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Core Narrative & Callout */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#C59A45]">
              <span className="w-6 h-[1.5px] bg-[#C59A45]" />
              <span>Landlord Peace of Mind</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#0E1626] font-semibold tracking-tight leading-tight">
              Why Discerning Property Owners Choose SPM
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              We understand that your property is more than an address—it represents significant capital, future security, and hard work. Our proactive management principles eliminate the common friction points landlords face with legacy management companies.
            </p>

            {/* Testimonial from reference website */}
            <div className="bg-white p-6 rounded-xl border border-[#E2DDD2] shadow-sm relative">
              <div className="text-4xl font-serif text-[#C59A45] leading-none mb-2">“</div>
              <p className="text-sm italic text-slate-700 leading-relaxed">
                I finally bit the bullet and hired a company for my three rent houses and I'm so glad I did. A simple automated statement each month and THATS IT!
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-[#0E1626]">Randall Trimm</span>
                <span className="text-slate-500">Rental Property Investor</span>
              </div>
            </div>

            {/* Direct contact action */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onRequestConsultation}
                className="bg-[#C59A45] hover:bg-[#D4AF37] text-[#0A101C] font-semibold text-sm px-6 py-3.5 rounded-md shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Schedule Owner Discovery Call</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md border border-[#D1CAC0] text-[#0E1626] hover:bg-white text-sm font-medium transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C59A45]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: 6 Clear Management Standards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_CHOOSE_US_POINTS.map((point, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-[#E8E4DA] shadow-sm hover:shadow-md transition-all hover:border-[#C59A45]/40"
              >
                <div className="w-8 h-8 rounded-full bg-[#FAF9F5] border border-[#EAE6DE] flex items-center justify-center text-[#C59A45] mb-4">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#0E1626] mb-2">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
