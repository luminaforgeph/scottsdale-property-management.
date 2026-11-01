import { ArrowUpRight } from 'lucide-react';

interface PhilosophySectionProps {
  onRequestConsultation: () => void;
}

export const PhilosophySection = ({ onRequestConsultation }: PhilosophySectionProps) => {
  return (
    <section id="philosophy" className="py-20 lg:py-28 bg-[#F2ECE1] border-b border-sandstone">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Statement (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold font-sans">
              Section A &middot; The SPM Philosophy
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-desert-charcoal leading-tight font-medium">
              We Think Like Landlords. <br />
              <span className="italic font-normal text-desert-sage">Because we are landlords ourselves.</span>
            </h2>

            <p className="text-charcoal-muted font-sans text-base leading-relaxed">
              Most property management firms treat assets like ticket numbers and spreadsheet line items. At Scottsdale Property Management, our team members own rental properties in the Valley.
            </p>

            <p className="text-charcoal-muted font-sans text-sm leading-relaxed">
              We know what it feels like when an air conditioning unit fails in mid-July, when an HOA issues a frivolous citation, or when an inexperienced tenant neglects routine maintenance. We manage your property with the same rigor, cost-consciousness, and protectiveness we apply to our own.
            </p>

            <div className="pt-2">
              <button
                onClick={onRequestConsultation}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-desert-charcoal hover:text-terracotta border-b border-desert-charcoal hover:border-terracotta pb-1 transition-colors"
              >
                <span>Talk with an SPM Partner</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Architectural Pillars (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#FAF9F6] p-7 rounded-xs border border-sandstone shadow-sm hover:border-terracotta/40 transition-editorial">
              <div className="font-serif text-2xl text-terracotta mb-3">01</div>
              <h3 className="font-serif text-lg text-desert-charcoal font-medium mb-2">
                Capital Protection First
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed font-sans">
                Preserving asset condition, preventing deferred maintenance, and enforcing lease obligations is just as vital as maximizing gross top-line rent.
              </p>
            </div>

            <div className="bg-[#FAF9F6] p-7 rounded-xs border border-sandstone shadow-sm hover:border-terracotta/40 transition-editorial">
              <div className="font-serif text-2xl text-desert-sage mb-3">02</div>
              <h3 className="font-serif text-lg text-desert-charcoal font-medium mb-2">
                Local Presence Over Call Centers
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed font-sans">
                Located on Raintree Drive in Scottsdale. Our team conducts regular on-site walkthroughs, move-in checklists, and in-person contractor verifications.
              </p>
            </div>

            <div className="bg-[#FAF9F6] p-7 rounded-xs border border-sandstone shadow-sm hover:border-terracotta/40 transition-editorial">
              <div className="font-serif text-2xl text-terracotta mb-3">03</div>
              <h3 className="font-serif text-lg text-desert-charcoal font-medium mb-2">
                Desert Climate Readiness
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed font-sans">
                Specialized management tailored for Sonoran heat: drip irrigation audits, pool equipment upkeep, and preventative pre-summer AC health checks.
              </p>
            </div>

            <div className="bg-[#FAF9F6] p-7 rounded-xs border border-sandstone shadow-sm hover:border-terracotta/40 transition-editorial">
              <div className="font-serif text-2xl text-desert-sage mb-3">04</div>
              <h3 className="font-serif text-lg text-desert-charcoal font-medium mb-2">
                Transparent Statements
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed font-sans">
                Zero convoluted surcharges. Clean monthly P&amp;L reporting and 24/7 visibility into receipts, work orders, and tenant payment disbursements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
