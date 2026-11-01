import { OPERATIONAL_CAPABILITIES } from '../data/content';
import { Wrench, Trees, Droplets, ClipboardCheck, Calculator } from 'lucide-react';

interface OperationalCapabilitiesSectionProps {
  onRequestConsultation: () => void;
}

export const OperationalCapabilitiesSection = ({
  onRequestConsultation,
}: OperationalCapabilitiesSectionProps) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'maintenance':
        return <Wrench className="w-5 h-5 text-terracotta" />;
      case 'landscaping':
        return <Trees className="w-5 h-5 text-desert-sage" />;
      case 'irrigation':
        return <Droplets className="w-5 h-5 text-blue-600/80" />;
      case 'inspections':
        return <ClipboardCheck className="w-5 h-5 text-terracotta" />;
      case 'accounting':
        return <Calculator className="w-5 h-5 text-desert-sage" />;
      default:
        return <Wrench className="w-5 h-5 text-terracotta" />;
    }
  };

  return (
    <section id="operations" className="py-20 lg:py-28 bg-[#F2ECE1] border-b border-sandstone">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Editorial Section Introduction */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold font-sans">
            Section C &middot; Operational Depth
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-desert-charcoal font-medium leading-tight">
            Beyond Rent Collection. <br />
            <span className="italic font-normal text-charcoal-muted">
              Hands-on maintenance, irrigation repairs &amp; desert landscaping.
            </span>
          </h2>
          <p className="text-charcoal-muted font-sans text-sm sm:text-base leading-relaxed">
            Many property managers simply forward tenant repair complaints to expensive third-party subcontractors with hidden markups. Scottsdale Property Management maintains direct operational oversight led by Partner &amp; Maintenance Manager Braxton Heise.
          </p>
        </div>

        {/* Asymmetrical 5-Feature Operational Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OPERATIONAL_CAPABILITIES.map((cap, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={cap.id}
                className={`bg-[#FAF9F6] p-8 rounded-xs border border-sandstone flex flex-col justify-between hover:border-terracotta/40 transition-editorial ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#FAF9F6] to-[#F5EFE4]' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xs bg-sandstone flex items-center justify-center">
                    {getIcon(cap.id)}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-desert-charcoal font-medium">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-muted mt-2 leading-relaxed font-sans">
                      {cap.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-sandstone/70">
                  <div className="text-[11px] font-sans text-desert-sage font-semibold uppercase tracking-wider">
                    {cap.detail}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Callout Card: Desert Specificity */}
          <div className="bg-desert-charcoal p-8 rounded-xs text-sandstone flex flex-col justify-between border border-desert-charcoal">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-terracotta font-semibold font-sans">
                Sonoran Climate Protocol
              </span>
              <h3 className="font-serif text-xl font-medium text-[#FAF9F6]">
                Arizona-Specific Asset Preservation
              </h3>
              <p className="text-xs text-[#D3D6DC] leading-relaxed font-sans">
                Summer temps exceeding 115&deg;F place extreme stress on HVAC capacitors and irrigation solenoids. Our seasonal preventive schedule protects against costly emergency failures.
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={onRequestConsultation}
                className="inline-flex items-center gap-1.5 text-xs text-terracotta font-semibold uppercase tracking-wider hover:underline"
              >
                <span>Review Maintenance Specs &rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
