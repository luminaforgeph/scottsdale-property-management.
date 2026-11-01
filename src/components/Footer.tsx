import React from 'react';
import { Phone, MapPin, ExternalLink, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#0A101C] text-slate-300 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">

          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#D4AF37] to-[#996515] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#0E1626] flex items-center justify-center">
                  <span className="font-serif text-[#C59A45] font-bold text-lg">SPM</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-white tracking-wide">
                  SCOTTSDALE
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#C59A45] font-semibold">
                  Property Management
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              An esteemed real estate property management company based in Scottsdale, Arizona. Dedicated to delivering elevated stewardship for landlords and renters across the Valley.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div>AZ Prop Group Affiliate</div>
              <div>Equal Housing Opportunity</div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#E6CA85] font-bold">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Residential Single-Family</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Vacation Rentals (STR)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Airbnb & Vrbo Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Multi-Family Portfolios</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Irrigation & Landscaping</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#E6CA85] font-bold">
              Service Areas
            </h4>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {COMPANY_INFO.serviceAreas.map((area, idx) => (
                <span key={idx} className="bg-white/5 border border-white/10 px-2.5 py-1 rounded text-slate-300">
                  {area}
                </span>
              ))}
            </div>

            <div className="pt-3">
              <h4 className="text-xs uppercase tracking-widest text-[#E6CA85] font-bold mb-2">
                Portals
              </h4>
              <div className="space-y-1.5 text-xs">
                <a
                  href={COMPANY_INFO.ownerPortalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <span>Propertyware Owner Login</span>
                  <ExternalLink className="w-3 h-3 text-[#C59A45]" />
                </a>
                <a
                  href={COMPANY_INFO.tenantPortalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <span>ClickPay Tenant Rent Login</span>
                  <ExternalLink className="w-3 h-3 text-[#C59A45]" />
                </a>
              </div>
            </div>
          </div>

          {/* Verified Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#E6CA85] font-bold">
              Scottsdale Office
            </h4>

            <div className="space-y-2.5 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C59A45] shrink-0 mt-1" />
                <span>
                  {COMPANY_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C59A45] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-white font-medium">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#C59A45] shrink-0" />
                <span className="text-xs text-slate-400">Licensed in the State of Arizona</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#rental-analysis"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E6CA85] hover:text-white uppercase tracking-wider"
              >
                <span>Request Free Rent Comps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Sales Demo Concept Notice & Legal Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Scottsdale Property Management. All rights reserved.
          </div>

          <div className="text-center md:text-right max-w-xl text-[11px] text-slate-400">
            <span className="text-[#E6CA85] font-semibold">Concept Prototype by Lumina Forge:</span> This is an unofficial design showcase and engineering concept created for sales demonstration purposes. Not an official website or formal endorsement by the actual company.
          </div>
        </div>

      </div>
    </footer>
  );
};
