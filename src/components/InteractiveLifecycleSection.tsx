import React, { useState } from 'react';
import { Search, ShieldAlert, Wrench, DollarSign, Award, ArrowRight } from 'lucide-react';

interface InteractiveLifecycleSectionProps {
  onRequestConsultation: () => void;
}

export const InteractiveLifecycleSection: React.FC<InteractiveLifecycleSectionProps> = ({
  onRequestConsultation,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      title: 'Strategic Onboarding & Audit',
      subtitle: 'Rent-Ready Analysis & Digital Ingestion',
      icon: Search,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      description:
        'Every relationship begins with an exhaustive on-site audit of your Scottsdale residence. We evaluate condition, inspect desert irrigation valves, review HVAC status, and formulate an aggressive market pricing model to optimize yield without unnecessary vacancy.',
      deliverables: [
        'Comprehensive 50-point physical asset condition report',
        'Competitive rental market analysis (CMA) with real-time submarket comps',
        'Ingestion into Propertyware portal with custom owner ledger set up',
        'HOA covenant alignment & city compliance registration',
      ],
      tag: 'Day 1 to 5',
    },
    {
      num: '02',
      title: 'Precision Marketing & Resident Vetting',
      subtitle: 'High-Fidelity Media & 6-Tier Screening',
      icon: ShieldAlert,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
      description:
        'We showcase your asset with professional architectural photography and syndicate across the Arizona Regional MLS, Zillow, and national premium portals. For STRs, we deploy multi-channel sync across Airbnb and Vrbo with dynamic daily rate algorithms.',
      deliverables: [
        'High-resolution architectural photography & virtual tours',
        'Multi-syndication across Top Tier rental portals & ARMLS',
        'Rigorous 6-point background, income (3x rent), credit & eviction check',
        'Custom Arizona Association of Realtors compliant lease execution',
      ],
      tag: 'Active Marketing',
    },
    {
      num: '03',
      title: 'Active Operations & Stewardship',
      subtitle: 'In-House Maintenance & Desert Preservation',
      icon: Wrench,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
      description:
        'Supervised by Partner Braxton Heise, our dedicated operations team handles regular maintenance, emergency triage, xeriscaping oversight, and quarterly checkups. No marked-up work orders; only authentic transparent field stewardship.',
      deliverables: [
        '24/7 emergency dispatch response for tenants and guests',
        'Pre-summer HVAC preventive maintenance and air filter cycles',
        'Routine drip irrigation emitter inspections to protect desert flora',
        'Before/after photographic documentation on all repairs',
      ],
      tag: 'Continuous',
    },
    {
      num: '04',
      title: 'Disbursements & Tax-Ready Transparency',
      subtitle: 'Direct Deposit & Audit-Ready Financials',
      icon: DollarSign,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
      description:
        'Led by Controller Trevor Reeves, our accounting delivers direct electronic disbursements into your account every month, accompanied by detailed, transparent cash-flow statements and full year-end 1099 tax packages.',
      deliverables: [
        'Monthly electronic owner draws directly deposited to your bank',
        'Clean monthly P&L statements with original invoice attachments',
        'Year-end tax summaries, cash-flow ledger, and IRS Form 1099-MISC',
        '24/7 on-demand access to all records via the Propertyware portal',
      ],
      tag: 'Monthly & Annual',
    },
  ];

  return (
    <section id="lifecycle" className="py-20 lg:py-28 bg-[#F2ECE1] border-b border-sandstone">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-desert-sage inline-block"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-desert-sage font-semibold font-sans">
              Operational Roadmap
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-desert-charcoal font-medium leading-tight">
            The Scottsdale Property Management Lifecycle
          </h2>
          <p className="text-charcoal-muted font-sans text-sm sm:text-base leading-relaxed">
            From initial onboarding and rigorous screening to preventative desert care and punctual distributions, our structured process safeguards your asset and liberates your time.
          </p>
        </div>

        {/* 4 Interactive Process Step Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-5 rounded-xs border transition-editorial flex flex-col justify-between ${
                  isSelected
                    ? 'bg-desert-charcoal text-sandstone border-desert-charcoal shadow-md scale-[1.02]'
                    : 'bg-[#FAF9F6] text-desert-charcoal border-sandstone hover:border-terracotta/40'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span
                    className={`font-serif text-lg font-bold ${
                      isSelected ? 'text-terracotta' : 'text-charcoal-muted'
                    }`}
                  >
                    {step.num}
                  </span>
                  <Icon
                    className={`w-4 h-4 ${
                      isSelected ? 'text-sandstone' : 'text-desert-sage'
                    }`}
                  />
                </div>
                <div>
                  <div className="font-serif text-sm font-semibold leading-snug">
                    {step.title}
                  </div>
                  <div
                    className={`text-[11px] font-sans mt-1 ${
                      isSelected ? 'text-[#B5B8BC]' : 'text-charcoal-muted'
                    }`}
                  >
                    {step.tag}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed Showcase */}
        <div className="bg-[#FAF9F6] border border-sandstone rounded-xs overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Text Detail (7 Cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sandstone text-[11px] font-medium text-desert-charcoal">
                <span className="text-terracotta font-bold">&bull;</span>
                <span>Stage {steps[activeStep].num} &middot; {steps[activeStep].tag}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-desert-charcoal font-medium">
                {steps[activeStep].title}
              </h3>
              <p className="font-serif text-base italic text-terracotta">
                {steps[activeStep].subtitle}
              </p>

              <p className="text-sm text-charcoal-muted font-sans leading-relaxed pt-2">
                {steps[activeStep].description}
              </p>

              <div className="pt-4 border-t border-sandstone">
                <div className="text-xs uppercase tracking-widest text-desert-charcoal font-semibold mb-3">
                  Key Scope Deliverables
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {steps[activeStep].deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-charcoal-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-desert-sage flex-shrink-0 mt-1.5"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-sandstone flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs text-charcoal-muted font-sans">
                Curious how this applies to your specific property?
              </span>
              <button
                onClick={onRequestConsultation}
                className="bg-desert-charcoal hover:bg-terracotta text-sandstone px-5 py-3 rounded-xs text-xs font-semibold uppercase tracking-wider transition-editorial flex items-center gap-2"
              >
                <span>Discuss With An SPM Partner</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Visual Frame (5 Cols) */}
          <div className="lg:col-span-5 relative bg-sandstone min-h-[320px] lg:min-h-full">
            <img
              src={steps[activeStep].image}
              alt={steps[activeStep].title}
              className="w-full h-full object-cover transition-editorial duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-desert-charcoal/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xs bg-[#FAF9F6]/95 backdrop-blur-md border border-sandstone shadow-md">
              <div className="flex items-center gap-2 text-xs font-semibold text-desert-charcoal">
                <Award className="w-4 h-4 text-terracotta" />
                <span>Scottsdale Standard of Care</span>
              </div>
              <div className="text-[11px] text-charcoal-muted mt-0.5">
                Managed locally from 9259 E Raintree Dr &middot; Suite 2019
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
