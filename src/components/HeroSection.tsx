import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeroSectionProps {
  onRequestConsultation: () => void;
  onExploreTracks: () => void;
}

export const HeroSection = ({
  onRequestConsultation,
  onExploreTracks,
}: HeroSectionProps) => {
  return (
    <section className="relative bg-[#F7F5F0] pt-8 pb-16 lg:pt-16 lg:pb-28 overflow-hidden border-b border-sandstone">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Editorial Top Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sandstone/80 pb-6 mb-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-terracotta inline-block"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-desert-charcoal">
              Scottsdale &bull; Paradise Valley &bull; Sonoran Modern Management
            </span>
          </div>
          <div className="text-xs text-charcoal-muted font-sans hidden sm:block">
            Specializing in Long-Term Residences &amp; High-Yield Vacation Rentals
          </div>
        </div>

        {/* Asymmetrical Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Typography & Conversion Strategy (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sandstone text-desert-charcoal text-xs font-medium">
                <span className="text-desert-sage font-bold">&bull;</span>
                <span>By Property Owners, For Property Owners</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-desert-charcoal leading-[1.12] tracking-tight font-medium">
                Property ownership. <br />
                <span className="italic font-normal text-terracotta">Managed with intention.</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-sans max-w-xl">
              From long-term residences to Scottsdale vacation homes, we take a hands-on approach to protecting and managing your investment.
            </p>

            {/* Editorial CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onRequestConsultation}
                className="bg-desert-charcoal hover:bg-terracotta text-sandstone px-8 py-4 rounded-xs text-sm font-medium tracking-wider uppercase transition-editorial flex items-center justify-center gap-3 shadow-md group"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreTracks}
                className="bg-transparent hover:bg-sandstone text-desert-charcoal border border-desert-charcoal/40 hover:border-desert-charcoal px-7 py-4 rounded-xs text-sm font-medium tracking-wider uppercase transition-editorial text-center"
              >
                Explore Two Management Tracks
              </button>
            </div>

            {/* Reassurance Grid with Authentic SPM Elements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-sandstone/80 text-xs font-sans">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-desert-sage flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-desert-charcoal block">Owner-Run Team</span>
                  <span className="text-charcoal-muted">We own rental properties in the Valley ourselves</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-desert-sage flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-desert-charcoal block">In-House Operations</span>
                  <span className="text-charcoal-muted">Dedicated maintenance &amp; desert irrigation</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-desert-sage flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-desert-charcoal block">Real-Time Portals</span>
                  <span className="text-charcoal-muted">Propertyware owner access with complete P&amp;L</span>
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
