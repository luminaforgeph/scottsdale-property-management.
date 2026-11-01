import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck, ChevronDown, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  onRequestConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top micro-bar for verified contact and quick portal access */}
      <div className="bg-[#0A101C] text-[#94A3B8] text-xs border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59A45]" />
              <span>Direct: <strong className="text-white font-medium">{COMPANY_INFO.phone}</strong></span>
            </a>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C59A45]" />
              Serving Scottsdale, Paradise Valley & Surrounding Maricopa County
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href={COMPANY_INFO.ownerPortalUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              Owner Portal <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
            <span className="text-white/20">•</span>
            <a
              href={COMPANY_INFO.tenantPortalUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              Tenant Portal <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
            <span className="text-white/20">•</span>
            <span className="bg-[#C59A45]/15 text-[#E6CA85] px-2 py-0.5 rounded text-[11px] font-semibold border border-[#C59A45]/30">
              Concept by Lumina Forge
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0E1626]/95 backdrop-blur-md shadow-lg shadow-black/10 py-3.5'
            : 'bg-[#0E1626] py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo text */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#D4AF37] to-[#996515] p-0.5 flex items-center justify-center shadow-md shadow-black/20">
              <div className="w-full h-full bg-[#0E1626] flex items-center justify-center">
                <span className="font-serif text-[#C59A45] font-bold text-lg tracking-wider">SPM</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#F3EFE6] transition-colors leading-none">
                SCOTTSDALE
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#C59A45] font-semibold mt-1">
                Property Management
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="relative group" onMouseLeave={() => setServicesDropdown(false)}>
              <button
                onClick={() => setServicesDropdown(!servicesDropdown)}
                onMouseEnter={() => setServicesDropdown(true)}
                className="flex items-center gap-1.5 text-sm font-medium text-slate-200 hover:text-[#C59A45] transition-colors cursor-pointer py-2"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-[#C59A45]" />
              </button>

              {servicesDropdown && (
                <div
                  className="absolute top-full left-0 w-72 bg-[#121B2F] border border-white/10 rounded-lg shadow-2xl py-2 mt-1 backdrop-blur-lg animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => setServicesDropdown(true)}
                  onMouseLeave={() => setServicesDropdown(false)}
                >
                  <a
                    href="#services"
                    className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-[#1E293B] hover:text-[#C59A45] transition-colors"
                    onClick={() => setServicesDropdown(false)}
                  >
                    <div className="font-medium text-white">Residential Property Care</div>
                    <div className="text-xs text-slate-400">Single-family long term rentals</div>
                  </a>
                  <a
                    href="#services"
                    className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-[#1E293B] hover:text-[#C59A45] transition-colors"
                    onClick={() => setServicesDropdown(false)}
                  >
                    <div className="font-medium text-white">Vacation Rentals (STR)</div>
                    <div className="text-xs text-slate-400">Airbnb & Vrbo turn-key operations</div>
                  </a>
                  <a
                    href="#services"
                    className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-[#1E293B] hover:text-[#C59A45] transition-colors"
                    onClick={() => setServicesDropdown(false)}
                  >
                    <div className="font-medium text-white">Multi-Family Portfolios</div>
                    <div className="text-xs text-slate-400">Automated systems & scaled returns</div>
                  </a>
                  <a
                    href="#services"
                    className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-[#1E293B] hover:text-[#C59A45] transition-colors"
                    onClick={() => setServicesDropdown(false)}
                  >
                    <div className="font-medium text-white">Desert Landscaping & Maintenance</div>
                    <div className="text-xs text-slate-400">Irrigation, HVAC & 24/7 dispatch</div>
                  </a>
                </div>
              )}
            </div>

            <a href="#why-choose-us" className="text-sm font-medium text-slate-200 hover:text-[#C59A45] transition-colors">
              Why Owners Choose Us
            </a>
            <a href="#process" className="text-sm font-medium text-slate-200 hover:text-[#C59A45] transition-colors">
              Our Process
            </a>
            <a href="#rental-analysis" className="text-sm font-medium text-slate-200 hover:text-[#C59A45] transition-colors">
              Rental Analysis
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-200 hover:text-[#C59A45] transition-colors">
              Contact
            </a>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="hidden xl:flex items-center gap-2 text-sm font-medium text-slate-200 hover:text-white transition-colors py-2 px-3 rounded-md hover:bg-white/5"
            >
              <Phone className="w-4 h-4 text-[#C59A45]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <button
              onClick={onRequestConsultation}
              className="bg-gradient-to-r from-[#C59A45] to-[#B38734] hover:from-[#D4AF37] hover:to-[#C59A45] text-[#0A101C] font-semibold text-sm px-5 py-2.5 rounded-md shadow-md shadow-[#C59A45]/20 hover:shadow-lg hover:shadow-[#C59A45]/30 transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Request Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={onRequestConsultation}
              className="bg-[#C59A45] text-[#0A101C] font-semibold text-xs px-3 py-1.5 rounded sm:hidden"
            >
              Consultation
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white hover:bg-white/10 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#121B2F] border-t border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3">
            <div className="space-y-1">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-[#C59A45] hover:bg-white/5 rounded-md"
              >
                Services
              </a>
              <a
                href="#why-choose-us"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-[#C59A45] hover:bg-white/5 rounded-md"
              >
                Why Owners Choose Us
              </a>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-[#C59A45] hover:bg-white/5 rounded-md"
              >
                How It Works
              </a>
              <a
                href="#rental-analysis"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-[#C59A45] hover:bg-white/5 rounded-md"
              >
                Free Rental Valuation
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-[#C59A45] hover:bg-white/5 rounded-md"
              >
                Contact & Address
              </a>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex justify-between text-xs text-slate-300 px-3">
                <a href={COMPANY_INFO.ownerPortalUrl} target="_blank" rel="noreferrer" className="underline">
                  Owner Portal
                </a>
                <a href={COMPANY_INFO.tenantPortalUrl} target="_blank" rel="noreferrer" className="underline">
                  Tenant Portal
                </a>
              </div>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md bg-white/5 text-white font-medium text-sm border border-white/10"
              >
                <Phone className="w-4 h-4 text-[#C59A45]" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestConsultation();
                }}
                className="w-full bg-[#C59A45] hover:bg-[#D4AF37] text-[#0A101C] font-semibold py-3 px-4 rounded-md text-sm text-center shadow-md flex items-center justify-center gap-2"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
