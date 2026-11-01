import React, { useState } from 'react';
import { Home, Palmtree, Building2, Wrench, ArrowRight, Check } from 'lucide-react';
import { SERVICES_DATA, type ServiceItem } from '../data/content';

const categoryIcons = {
  residential: Home,
  str: Palmtree,
  multifamily: Building2,
  maintenance: Wrench,
};

interface ServicesSectionProps {
  onRequestConsultation: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onRequestConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES_DATA[0]);

  return (
    <section id="services" className="py-24 bg-[#F4F1EA] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#C59A45] mb-3">
              <span className="w-6 h-[1.5px] bg-[#C59A45]" />
              <span>Full-Scope Services</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0E1626] font-semibold tracking-tight">
              Tailored Property Management For Every Asset Class
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              From high-end single-family residential homes in North Scottsdale to high-yield Airbnb vacation properties in Old Town and scaled multi-family units.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onRequestConsultation()}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E1626] hover:text-[#C59A45] transition-colors group cursor-pointer"
            >
              <span>Compare all management plans</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Interactive Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SERVICES_DATA.map((service) => {
            const Icon = categoryIcons[service.category] || Home;
            const isSelected = selectedService.id === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`cursor-pointer rounded-xl p-6 transition-all duration-300 flex flex-col justify-between border text-left ${
                  isSelected
                    ? 'bg-[#0E1626] text-white border-[#C59A45] shadow-xl scale-[1.02]'
                    : 'bg-white text-[#0E1626] border-[#E2DDD2] hover:border-[#C59A45]/50 hover:shadow-md'
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-colors ${
                    isSelected ? 'bg-[#C59A45] text-[#0A101C]' : 'bg-[#FAF9F5] text-[#C59A45] border border-[#EAE6DE]'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className={`font-serif text-lg font-bold mb-2 ${isSelected ? 'text-white' : 'text-[#0E1626]'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-xs leading-relaxed line-clamp-3 mb-4 ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                    {service.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/20 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? 'text-[#E6CA85]' : 'text-[#C59A45]'}>
                    {isSelected ? 'Viewing Details' : 'View Scope'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-[#E6CA85]' : 'text-slate-400'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Service Detailed Showcase */}
        <div className="bg-white rounded-2xl border border-[#E2DDD2] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all">
          {/* Image side */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-full object-cover object-center absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1626]/80 via-transparent to-transparent lg:hidden" />
            <div className="absolute bottom-4 left-4 lg:hidden text-white font-serif font-bold text-xl">
              {selectedService.title}
            </div>
          </div>

          {/* Details side */}
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest font-bold text-[#C59A45] mb-2">
                Detailed Service Overview
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E1626] mb-3">
                {selectedService.title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {selectedService.description}
              </p>

              {/* Highlights pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedService.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F5] border border-[#E2DDD2] text-xs font-semibold text-[#0E1626]"
                  >
                    <Check className="w-3.5 h-3.5 text-[#C59A45]" />
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Comprehensive features list */}
              <div className="space-y-2.5 mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Included In This Package:</div>
                {selectedService.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C59A45] mt-2 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom action bar */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-500 block">Ready to discuss your property?</span>
                <span className="text-sm font-semibold text-[#0E1626]">Custom quote based on your portfolio</span>
              </div>
              <button
                onClick={() => onRequestConsultation(selectedService.title)}
                className="bg-[#0E1626] hover:bg-[#1A2642] text-white font-semibold text-sm px-6 py-3 rounded-md transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-md hover:shadow-lg"
              >
                <span>Request {selectedService.title} Plan</span>
                <ArrowRight className="w-4 h-4 text-[#C59A45]" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
