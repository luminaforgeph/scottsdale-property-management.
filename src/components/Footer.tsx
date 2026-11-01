import { COMPANY_INFO } from '../data/content';
import { Phone, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-desert-charcoal-deep text-sandstone border-t border-sandstone/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-white/10 pb-16">
          {/* Brand & Editorial Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-sandstone text-desert-charcoal flex items-center justify-center rounded-xs font-serif text-base font-bold">
                SPM
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-tight font-semibold text-sandstone leading-tight">
                  SCOTTSDALE
                </span>
                <span className="font-sans text-[10px] tracking-[0.2em] text-[#9EA3AB] uppercase">
                  Property Management
                </span>
              </div>
            </div>

            <p className="text-xs text-[#9EA3AB] font-sans leading-relaxed">
              Scottsdale Property Management (SPM) / AZ Prop Group provides hands-on management for residential single-family homes, short-term vacation rentals (Airbnb &amp; Vrbo), and multi-family assets across Maricopa County.
            </p>

            <div className="pt-2 text-xs font-sans text-sandstone space-y-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />
                <span>9259 E Raintree Dr ste 2019, Scottsdale, AZ 85260</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-terracotta flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-terracotta transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Service Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs uppercase tracking-[0.2em] text-terracotta font-semibold font-sans">
              Arizona Service Areas
            </div>
            <ul className="space-y-2 text-xs text-[#9EA3AB] font-sans">
              {COMPANY_INFO.serviceAreas.map((area, idx) => (
                <li key={idx} className="flex items-center gap-2 hover:text-sandstone transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-desert-sage inline-block"></span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Client & Tenant Portals (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs uppercase tracking-[0.2em] text-terracotta font-semibold font-sans">
              Secure Portals
            </div>
            <div className="space-y-3 text-xs font-sans">
              <a
                href={COMPANY_INFO.ownerPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sandstone hover:text-terracotta transition-colors flex items-center gap-1.5"
              >
                <span>Owner Portal</span>
                <ArrowUpRight className="w-3 h-3 text-[#9EA3AB]" />
              </a>
              <span className="text-[10px] text-[#71767E] block -mt-2">Propertyware Login</span>

              <a
                href={COMPANY_INFO.tenantPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sandstone hover:text-terracotta transition-colors flex items-center gap-1.5 pt-1"
              >
                <span>Tenant Portal</span>
                <ArrowUpRight className="w-3 h-3 text-[#9EA3AB]" />
              </a>
              <span className="text-[10px] text-[#71767E] block -mt-2">ClickPay Online Payments</span>
            </div>
          </div>

          {/* Lumina Forge Sales Concept Note (3 cols) */}
          <div className="lg:col-span-3 bg-white/5 p-5 rounded-xs border border-white/10 space-y-3">
            <div className="text-[10px] uppercase tracking-widest text-[#B5B8BC] font-sans font-bold">
              Lumina Forge Prototype
            </div>
            <p className="text-[11px] text-[#A6ABB3] font-sans leading-relaxed">
              This is an unofficial website redesign concept created by <strong>Lumina Forge</strong> for Scottsdale Property Management. It demonstrates a distinctive Sonoran Modern visual direction and conversion strategy.
            </p>
            <div className="text-[10px] text-[#787D85] font-sans">
              Not officially affiliated with SPM / AZ Prop Group. All data derived from publicly available sources.
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#787D85] font-sans">
          <div>
            &copy; 2026 Scottsdale Property Management / AZ Prop Group. Concept by Lumina Forge.
          </div>
          <div className="flex items-center gap-6">
            <span>Equal Housing Opportunity</span>
            <span>Arizona Real Estate Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
