import { ArrowRight, Phone, CheckCircle2, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { HeroAddressBar } from './HeroAddressBar';

interface HeroSectionProps {
  onRequestConsultation: () => void;
  onExploreTracks: () => void;
  onAddressAnalyze?: (address: string, propertyType: string) => void;
}

export const HeroSection = ({
  onRequestConsultation,
  onExploreTracks,
  onAddressAnalyze,
}: HeroSectionProps) => {
  const handleAddressSubmit = (address: string, propertyType: string) => {
    if (onAddressAnalyze) {
      onAddressAnalyze(address, propertyType);
    } else {
      onRequestConsultation();
    }
  };

  return (
    <section className="relative bg-[#FAF8F5] pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-sandstone">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Editorial Top Eyebrow with Monospaced Refinement */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sandstone/80 pb-5 mb-10 text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-terracotta inline-block"></span>
            <span className="uppercase tracking-[0.25em] font-sans font-semibold text-desert-charcoal">
              Scottsdale &bull; Paradise Valley &bull; Sonoran Modern Management
            </span>
          </div>
          <div className="flex items-center gap-4 text-charcoal-muted font-sans hidden sm:flex text-[11px]">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-desert-sage" />
              <span>Maricopa County Licensed &bull; ARMLS</span>
            </span>
            <span className="h-3 w-[1px] bg-sandstone"></span>
            <span>9259 E Raintree Dr &middot; Ste 2019</span>
          </div>
        </div>

        {/* Asymmetrical Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Bold Editorial Typography & Belong-style High Intent Calculator (7 Cols) */}
          <div className="lg:col-span-7 space-y-7">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sandstone text-desert-charcoal text-xs font-medium">
                <span className="text-desert-sage font-bold">&bull;</span>
                <span>By Property Owners, For Property Owners</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-desert-charcoal leading-[1.10] tracking-tight font-medium">
                Property ownership. <br />
                <span className="italic font-normal text-terracotta">Managed with intention.</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-sans max-w-xl">
              From long-term residences to high-yield Scottsdale vacation homes, we steward your capital with owner-level care, in-house maintenance, and complete financial transparency.
            </p>

            {/* High-Converting Address Evaluation Search Bar */}
            <div className="pt-1">
              <HeroAddressBar onAnalyze={handleAddressSubmit} />
            </div>

            {/* Editorial Quick Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onRequestConsultation}
                className="bg-desert-charcoal hover:bg-terracotta text-sandstone px-7 py-3.5 rounded-xs text-xs font-semibold tracking-wider uppercase transition-editorial flex items-center justify-center gap-2.5 shadow-md group"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreTracks}
                className="bg-transparent hover:bg-sandstone text-desert-charcoal border border-desert-charcoal/40 hover:border-desert-charcoal px-6 py-3.5 rounded-xs text-xs font-semibold tracking-wider uppercase transition-editorial text-center"
              >
                Compare Two Tracks (LTR &amp; STR)
              </button>
            </div>

            {/* Reassurance Grid with Authentic SPM Elements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-sandstone/80 text-xs font-sans">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-desert-sage flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-desert-charcoal block">Owner-Run Leadership</span>
                  <span className="text-charcoal-muted">We own rental properties in the Valley ourselves</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-desert-sage flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-desert-charcoal block">In-House Field Ops</span>
                  <span className="text-charcoal-muted">Dedicated maintenance &amp; desert irrigation</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-desert-sage flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-desert-charcoal block">Direct Disbursements</span>
                  <span className="text-charcoal-muted">Propertyware live ledger with 100% receipt backup</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Editorial Imagery & Direct Contact Badge (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Architectural Image: Authentic Scottsdale Desert-Modern */}
              <div className="relative rounded-xs overflow-hidden border border-sandstone shadow-xl aspect-[4/5] bg-sandstone">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"
                  alt="Scottsdale contemporary desert-modern residential property"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-editorial duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-desert-charcoal-deep/80 via-transparent to-black/10"></div>

                {/* Bottom Overlay Story Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xs bg-[#FAF9F6]/95 backdrop-blur-md border border-sandstone shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-desert-sage font-bold">
                        Local Scottsdale Operations
                      </div>
                      <div className="font-serif text-sm font-semibold text-desert-charcoal">
                        9259 E Raintree Dr &middot; Ste 2019
                      </div>
                    </div>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="flex items-center gap-1.5 text-xs font-semibold text-terracotta hover:underline"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{COMPANY_INFO.phone}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Offset Accent Stamp: Architectural Badge */}
              <div className="hidden sm:block absolute -top-5 -left-5 bg-desert-charcoal text-sandstone p-4 rounded-xs shadow-lg border border-sandstone/20 max-w-[170px]">
                <div className="font-serif text-2xl font-normal text-terracotta leading-none">
                  24/7
                </div>
                <div className="text-[11px] font-sans text-sandstone mt-1 leading-tight">
                  Proactive owner &amp; guest emergency dispatch
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
