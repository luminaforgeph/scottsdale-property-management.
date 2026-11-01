import { useState, useEffect } from 'react';
import { Phone, ChevronDown, Menu, X, ArrowUpRight, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  onRequestConsultation: () => void;
}

export const Navbar = ({ onRequestConsultation }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-editorial">
      {/* Editorial Top Status Bar */}
      <div className="bg-desert-charcoal-deep text-[#B5B8BC] text-xs font-sans tracking-wide py-2 px-4 sm:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-sandstone">
              <MapPin className="w-3.5 h-3.5 text-terracotta" />
              <span>Scottsdale, AZ &middot; 9259 E Raintree Dr</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-[#8E939A]">
              <span className="w-1.5 h-1.5 rounded-full bg-desert-sage inline-block"></span>
              Scottsdale &bull; Paradise Valley &bull; Maricopa County
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-[#F7F5F0] hover:text-terracotta transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-terracotta" />
              <span>Direct: {COMPANY_INFO.phone}</span>
            </a>
            <div className="h-3 w-[1px] bg-white/20 hidden sm:block"></div>
            <a
              href={COMPANY_INFO.ownerPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D3D6DC] hover:text-white flex items-center gap-1 text-[11px] uppercase tracking-wider"
            >
              Owner Portal <ArrowUpRight className="w-2.5 h-2.5" />
            </a>
            <a
              href={COMPANY_INFO.tenantPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9FA4AD] hover:text-white flex items-center gap-1 text-[11px] uppercase tracking-wider hidden lg:flex"
            >
              Tenant Portal <ArrowUpRight className="w-2.5 h-2.5" />
            </a>
            <span className="bg-terracotta/20 text-[#E5A88B] text-[10px] px-2 py-0.5 rounded border border-terracotta/30 uppercase tracking-widest hidden sm:inline-block">
              Sales Concept
            </span>
          </div>
        </div>
      </div>

      {/* Main Sonoran Modern Navigation */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F5F0]/95 backdrop-blur-md shadow-sm border-b border-sandstone py-3.5'
            : 'bg-[#F7F5F0] border-b border-sandstone/70 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo / Brand Signature */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 bg-desert-charcoal flex items-center justify-center rounded-sm text-sandstone font-serif text-lg tracking-wider border border-sandstone/30 group-hover:bg-terracotta transition-colors">
              SPM
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-tight font-semibold text-desert-charcoal leading-none">
                SCOTTSDALE
              </span>
              <span className="font-sans text-[10px] tracking-[0.22em] text-charcoal-muted uppercase mt-0.5 font-medium">
                Property Management
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-7 text-sm font-medium text-desert-charcoal">
            {/* Philosophy Link */}
            <button
              onClick={() => scrollTo('philosophy')}
              className="hover:text-terracotta transition-colors tracking-wide py-2"
            >
              Philosophy
            </button>

            {/* Management Tracks Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 hover:text-terracotta transition-colors tracking-wide py-2"
              >
                <span>Two Management Tracks</span>
                <ChevronDown className="w-3.5 h-3.5 text-charcoal-muted group-hover:text-terracotta transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute top-full left-0 w-80 bg-[#FAF9F6] border border-sandstone shadow-xl rounded-sm p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="text-[10px] font-sans uppercase tracking-widest text-desert-sage font-semibold mb-2">
                  Tailored Operations
                </div>
                <button
                  onClick={() => scrollTo('management-tracks')}
                  className="w-full text-left p-2.5 rounded hover:bg-sandstone-light transition-colors block group/item"
                >
                  <div className="font-serif font-medium text-desert-charcoal text-sm group-hover/item:text-terracotta">
                    Long-Term Residential
                  </div>
                  <div className="text-xs text-charcoal-muted mt-0.5">
                    Single-family &amp; multi-family properties with vetted long-term tenants.
                  </div>
                </button>
                <button
                  onClick={() => scrollTo('management-tracks')}
                  className="w-full text-left p-2.5 rounded hover:bg-sandstone-light transition-colors block group/item mt-1"
                >
                  <div className="font-serif font-medium text-desert-charcoal text-sm group-hover/item:text-terracotta">
                    Vacation Rentals (Airbnb / Vrbo)
                  </div>
                  <div className="text-xs text-charcoal-muted mt-0.5">
                    High-yield short-term rental management with 24/7 guest hospitality.
                  </div>
                </button>
                <div className="border-t border-sandstone/60 my-2 pt-2">
                  <button
                    onClick={() => scrollTo('operations')}
                    className="text-xs text-terracotta font-medium hover:underline flex items-center justify-between w-full"
                  >
                    <span>Explore field operations &amp; irrigation &rarr;</span>
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => scrollTo('operations')}
              className="hover:text-terracotta transition-colors tracking-wide py-2"
            >
              Operations &amp; Maintenance
            </button>

            <button
              onClick={() => scrollTo('technology')}
              className="hover:text-terracotta transition-colors tracking-wide py-2"
            >
              Owner Portal
            </button>

            <button
              onClick={() => scrollTo('team')}
              className="hover:text-terracotta transition-colors tracking-wide py-2"
            >
              Our Team
            </button>

            <button
              onClick={() => scrollTo('calculator')}
              className="hover:text-terracotta transition-colors tracking-wide py-2"
            >
              Rental Assessment
            </button>
          </div>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="text-xs font-semibold text-desert-charcoal tracking-wide hover:text-terracotta transition-colors hidden xl:inline-block"
            >
              {COMPANY_INFO.phone}
            </a>
            <button
              onClick={onRequestConsultation}
              className="bg-desert-charcoal text-sandstone hover:bg-terracotta transition-editorial text-xs font-medium tracking-wider uppercase px-5 py-3 rounded-xs border border-desert-charcoal hover:border-terracotta flex items-center gap-2 shadow-sm"
            >
              <span>Consultation</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sandstone"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={onRequestConsultation}
              className="bg-desert-charcoal text-sandstone text-xs font-medium uppercase tracking-wider px-3 py-2 rounded-xs"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-desert-charcoal hover:text-terracotta"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF9F6] border-b border-sandstone px-6 py-6 space-y-4 shadow-lg animate-fadeIn">
            <div className="text-xs uppercase tracking-widest text-desert-sage font-semibold mb-2">
              Navigation
            </div>
            <button
              onClick={() => scrollTo('philosophy')}
              className="block w-full text-left font-serif text-base text-desert-charcoal hover:text-terracotta py-1"
            >
              The SPM Philosophy
            </button>
            <button
              onClick={() => scrollTo('management-tracks')}
              className="block w-full text-left font-serif text-base text-desert-charcoal hover:text-terracotta py-1"
            >
              Two Management Tracks (LTR &amp; STR)
            </button>
            <button
              onClick={() => scrollTo('operations')}
              className="block w-full text-left font-serif text-base text-desert-charcoal hover:text-terracotta py-1"
            >
              Operational Capabilities &amp; Landscaping
            </button>
            <button
              onClick={() => scrollTo('technology')}
              className="block w-full text-left font-serif text-base text-desert-charcoal hover:text-terracotta py-1"
            >
              Tech-Enabled Owner Experience
            </button>
            <button
              onClick={() => scrollTo('team')}
              className="block w-full text-left font-serif text-base text-desert-charcoal hover:text-terracotta py-1"
            >
              Meet the SPM Team
            </button>
            <button
              onClick={() => scrollTo('calculator')}
              className="block w-full text-left font-serif text-base text-desert-charcoal hover:text-terracotta py-1"
            >
              Scottsdale Rental Assessment
            </button>
            <button
              onClick={() => scrollTo('testimonials')}
              className="block w-full text-left font-serif text-base text-desert-charcoal hover:text-terracotta py-1"
            >
              Genuine Owner Reviews
            </button>

            <div className="pt-4 border-t border-sandstone flex flex-col gap-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-2 text-sm font-semibold text-desert-charcoal"
              >
                <Phone className="w-4 h-4 text-terracotta" />
                <span>Direct: {COMPANY_INFO.phone}</span>
              </a>
              <div className="flex gap-4 text-xs text-charcoal-muted pt-2">
                <a
                  href={COMPANY_INFO.ownerPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  Propertyware Portal <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={COMPANY_INFO.tenantPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  ClickPay Portal <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
