import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Building2, UserX, Clock, ArrowRight } from 'lucide-react';

interface ComparisonMatrixSectionProps {
  onRequestConsultation: () => void;
}

export const ComparisonMatrixSection: React.FC<ComparisonMatrixSectionProps> = ({
  onRequestConsultation,
}) => {
  const [activeTab, setActiveTab] = useState<'ltr' | 'str'>('ltr');

  const comparisonCriteria = [
    {
      label: 'Tenant / Guest Screening',
      self: 'Rudimentary credit check; vulnerable to forged paystubs and sublease arbitrage.',
      standard: 'Automated credit score check only; no manual landlord verification.',
      spm: 'Multi-tiered 6-point verification (employment, criminal, past eviction, debt-to-income, landlord references).',
    },
    {
      label: 'Desert Climate & Preventive Care',
      self: 'Reactive panic when 118°F summer HVAC fails or irrigation lines burst.',
      standard: 'Dispatches 3rd-party subcontractor with marked-up invoices ($150+ trip fees).',
      spm: 'Pre-summer HVAC capacitor audits, drip irrigation pressure checks led by in-house partner Braxton Heise.',
    },
    {
      label: 'Financial P&L & Tax Accounting',
      self: 'Shoebox receipts, tangled personal bank accounts, manual 1099 filing chaos.',
      standard: 'Delayed monthly PDF statements delivered 20+ days after rent collection.',
      spm: 'Live Propertyware owner portal, direct electronic disbursement, audit-ready CPA statements & 1099s.',
    },
    {
      label: 'HOA & City Compliance Defense',
      self: 'Risk of fines from DC Ranch, Gainey Ranch, or Scottsdale STR licensing division.',
      standard: 'Owner receives fines directly; management firm takes zero accountability.',
      spm: 'Proactive HOA rule management, strict noise monitoring, prompt architectural & landscape compliance.',
    },
    {
      label: 'Owner Communication & Access',
      self: '24/7 tenant calls interrupt dinners, vacations, and family weekends.',
      standard: '1-800 call center representatives who have never stepped foot on the property.',
      spm: 'Direct direct-dial access to Trevor Reeves, Braxton Heise, and dedicated Scottsdale office staff.',
    },
  ];

  const strComparisonCriteria = [
    {
      label: 'Dynamic Pricing & Yield',
      self: 'Static seasonal nightly rates leaving thousands on the table during WM Phoenix Open & Spring Training.',
      standard: 'Basic automated Airbnb Smart Pricing that suppresses average daily rates (ADR).',
      spm: 'Custom algorithmic daily pricing keyed to Valley event surges, golf demand, and length-of-stay curve.',
    },
    {
      label: 'Guest Screening & Neighborhood Harmony',
      self: 'Vulnerable to unauthorized parties, excessive noise, and disgruntled neighbor complaints.',
      standard: 'Hands-off messaging; no integrated decibel hardware monitoring.',
      spm: 'Strict age & guest verification, integrated noise sensors, rapid on-site intervention if decibels exceed threshold.',
    },
    {
      label: 'Turnover & Hotel-Grade Cleanliness',
      self: 'Constantly chasing unreliable independent cleaners on weekends.',
      standard: 'Low-cost cleaning crews with high turnover; frequent guest cleanliness complaints.',
      spm: 'Dedicated hospitality cleaning teams, linen sanitization, consumable restocking, and pre-arrival photo inspection.',
    },
    {
      label: 'Scottsdale City STR Licensing & Tax',
      self: 'Complex Maricopa County TPT filing and municipal registration paperwork.',
      standard: 'Owner left to navigate local zoning rules and tax filings alone.',
      spm: 'Full compliance handling: Scottsdale short-term rental permits, neighbor notification, and TPT tax records.',
    },
  ];

  const criteriaToDisplay = activeTab === 'ltr' ? comparisonCriteria : strComparisonCriteria;

  return (
    <section id="comparison" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-sandstone">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-terracotta inline-block"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold font-sans">
              Objective Comparison
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-desert-charcoal font-medium leading-tight">
            How Scottsdale Property Management Compares
          </h2>
          <p className="text-charcoal-muted font-sans text-sm sm:text-base leading-relaxed">
            Not all property management is created equal. See how our Sonoran Modern approach protects your equity and eliminates operational drag compared to self-management or generic volume firms.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-2 p-1 bg-sandstone rounded-xs max-w-md mb-8">
          <button
            onClick={() => setActiveTab('ltr')}
            className={`flex-1 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider rounded-xs transition-editorial flex items-center justify-center gap-2 ${
              activeTab === 'ltr'
                ? 'bg-desert-charcoal text-sandstone shadow-sm'
                : 'text-desert-charcoal hover:text-terracotta'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Long-Term Rentals</span>
          </button>
          <button
            onClick={() => setActiveTab('str')}
            className={`flex-1 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider rounded-xs transition-editorial flex items-center justify-center gap-2 ${
              activeTab === 'str'
                ? 'bg-desert-charcoal text-sandstone shadow-sm'
                : 'text-desert-charcoal hover:text-terracotta'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vacation Rentals (STR)</span>
          </button>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[760px] bg-[#FAF9F6] border border-sandstone rounded-xs shadow-sm overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-sandstone/60 border-b border-sandstone text-xs font-sans uppercase tracking-wider text-desert-charcoal font-semibold py-4 px-6">
              <div className="col-span-3">Core Operational Area</div>
              <div className="col-span-3 text-charcoal-muted">Self-Management</div>
              <div className="col-span-3 text-charcoal-muted">Traditional Volume Firm</div>
              <div className="col-span-3 text-terracotta font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-desert-sage" />
                <span>Scottsdale Prop Mgmt</span>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-sandstone/70">
              {criteriaToDisplay.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 py-5 px-6 items-start gap-4 hover:bg-sandstone-light/50 transition-colors"
                >
                  <div className="col-span-3 font-serif font-medium text-desert-charcoal text-sm">
                    {row.label}
                  </div>
                  <div className="col-span-3 text-xs text-charcoal-muted leading-relaxed font-sans pr-2">
                    <span className="inline-block sm:hidden text-[10px] font-bold uppercase text-charcoal-muted/60 block mb-0.5">Self-Mgmt:</span>
                    {row.self}
                  </div>
                  <div className="col-span-3 text-xs text-charcoal-muted leading-relaxed font-sans pr-2">
                    <span className="inline-block sm:hidden text-[10px] font-bold uppercase text-charcoal-muted/60 block mb-0.5">Volume Firm:</span>
                    {row.standard}
                  </div>
                  <div className="col-span-3 text-xs text-desert-charcoal font-medium leading-relaxed font-sans bg-desert-sage-subtle/50 -my-2 py-3 px-3.5 rounded border-l-2 border-desert-sage">
                    <span className="inline-block sm:hidden text-[10px] font-bold uppercase text-desert-sage block mb-0.5">SPM Standard:</span>
                    {row.spm}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Highlights & Conversion Prompt */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FAF9F6] p-5 rounded-xs border border-sandstone flex items-start gap-3.5">
            <UserX className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-serif text-sm font-semibold text-desert-charcoal">
                Zero Hidden Vendor Markups
              </div>
              <p className="text-xs text-charcoal-muted font-sans mt-0.5 leading-relaxed">
                We pass contractor volume discounts directly to property owners with 100% receipt transparency.
              </p>
            </div>
          </div>

          <div className="bg-[#FAF9F6] p-5 rounded-xs border border-sandstone flex items-start gap-3.5">
            <Clock className="w-5 h-5 text-desert-sage flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-serif text-sm font-semibold text-desert-charcoal">
                Rapid Emergency Dispatch
              </div>
              <p className="text-xs text-charcoal-muted font-sans mt-0.5 leading-relaxed">
                Direct in-house coordination ensures immediate mitigation before water or desert heat inflicts irreversible damage.
              </p>
            </div>
          </div>

          <div className="bg-desert-charcoal p-5 rounded-xs text-sandstone flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-terracotta font-bold">
                Experience the Difference
              </div>
              <div className="font-serif text-sm font-medium mt-0.5">
                Ready to elevate your management?
              </div>
            </div>
            <button
              onClick={onRequestConsultation}
              className="bg-sandstone hover:bg-white text-desert-charcoal px-3.5 py-2 rounded-xs text-xs font-semibold uppercase tracking-wider transition-editorial flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Consult</span>
              <ArrowRight className="w-3.5 h-3.5 text-terracotta" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
