import { TECH_PORTAL_DETAILS, COMPANY_INFO } from '../data/content';
import { ArrowUpRight, Lock } from 'lucide-react';

interface TechOwnerExperienceSectionProps {
  onRequestConsultation: () => void;
}

export const TechOwnerExperienceSection = ({
  onRequestConsultation,
}: TechOwnerExperienceSectionProps) => {
  return (
    <section id="technology" className="py-20 lg:py-28 bg-[#F7F5F0] border-b border-sandstone">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Technology Overview (6 Cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold font-sans">
                Section D &middot; Transparent Infrastructure
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-desert-charcoal font-medium leading-tight">
                A More Informed Ownership Experience.
              </h2>
              <p className="text-charcoal-muted font-sans text-base leading-relaxed">
                Scottsdale Property Management integrates modern property technology into every operational workflow. Wherever in the world you reside, you have continuous visibility into your Arizona real estate.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              {TECH_PORTAL_DETAILS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xs bg-[#FAF9F6] border border-sandstone">
                  <div className="w-6 h-6 rounded-full bg-sandstone flex items-center justify-center text-desert-sage font-serif text-xs font-bold flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-desert-charcoal">
                      {item.title}
                    </h4>
                    <p className="text-xs text-charcoal-muted mt-0.5 font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Portal Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={COMPANY_INFO.ownerPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-desert-charcoal hover:bg-terracotta text-sandstone px-6 py-3 rounded-xs text-xs font-semibold uppercase tracking-wider transition-editorial flex items-center gap-2"
              >
                <span>Access Propertyware Portal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={COMPANY_INFO.tenantPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent hover:bg-sandstone text-desert-charcoal border border-desert-charcoal/30 px-6 py-3 rounded-xs text-xs font-semibold uppercase tracking-wider transition-editorial flex items-center gap-2"
              >
                <span>ClickPay Tenant Portal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={onRequestConsultation}
                className="text-xs text-terracotta font-semibold uppercase tracking-wider hover:underline"
              >
                Request a Portal Demo &rarr;
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Visual Showcase of Portal Interface (6 Cols) */}
          <div className="lg:col-span-6 relative">
            <div className="bg-desert-charcoal rounded-xs p-6 sm:p-8 text-sandstone shadow-2xl border border-sandstone/20 relative">
              {/* Header mockup */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="text-xs font-mono text-[#A8ACB3] ml-2">owner.propertyware.com/spm</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#A8ACB3]">
                  <Lock className="w-3 h-3 text-desert-sage" />
                  <span>256-Bit Encrypted</span>
                </div>
              </div>

              {/* Portal Dashboard Metric Cards */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-xs border border-white/10">
                    <span className="text-[10px] uppercase tracking-wider text-[#A8ACB3] font-sans block">
                      Current Portfolio Status
                    </span>
                    <span className="font-serif text-xl sm:text-2xl text-sandstone font-medium mt-1 block">
                      100% Leased
                    </span>
                    <span className="text-[11px] text-desert-sage mt-1 block">
                      &bull; Zero active delinquency
                    </span>
                  </div>

                  <div className="bg-white/5 p-4 rounded-xs border border-white/10">
                    <span className="text-[10px] uppercase tracking-wider text-[#A8ACB3] font-sans block">
                      Monthly Disbursement
                    </span>
                    <span className="font-serif text-xl sm:text-2xl text-sandstone font-medium mt-1 block">
                      Direct Deposit
                    </span>
                    <span className="text-[11px] text-[#A8ACB3] mt-1 block">
                      Itemized P&amp;L attached
                    </span>
                  </div>
                </div>

                {/* Simulated Recent Activity Feed */}
                <div className="bg-white/5 p-4 rounded-xs border border-white/10 space-y-3">
                  <div className="text-[10px] uppercase tracking-widest text-terracotta font-semibold font-sans">
                    Live Operational Activity Feed
                  </div>
                  <div className="space-y-2 text-xs text-[#D3D6DC] font-sans">
                    <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                      <span>Bi-annual AC condenser inspection photo report</span>
                      <span className="text-[10px] text-[#8E939A]">Verified</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                      <span>Automated ACH rent collection credited</span>
                      <span className="text-[10px] text-desert-sage">Deposited</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span>Drip emitter replacement &bull; Braxton Heise team</span>
                      <span className="text-[10px] text-[#8E939A]">Completed</span>
                    </div>
                  </div>
                </div>

                {/* Footer Note */}
                <div className="text-[11px] text-[#A8ACB3] font-sans flex items-center justify-between pt-2">
                  <span>Accessible via desktop or iOS/Android browser.</span>
                  <span className="text-terracotta font-semibold">Scottsdale Property Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
