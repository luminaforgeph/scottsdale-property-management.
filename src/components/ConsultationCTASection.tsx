import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface ConsultationSectionProps {
  initialService?: string;
}

export const ConsultationCTASection: React.FC<ConsultationSectionProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    propertyType: initialService || 'Single-Family Home',
    bedrooms: '3-4 Beds',
    currentStatus: 'Currently Vacant',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="rental-analysis" className="py-24 bg-[#F4F1EA] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-[#0E1626] rounded-2xl overflow-hidden shadow-2xl border border-white/10 grid grid-cols-1 lg:grid-cols-12">

          {/* Left Column: Value Pitch for Free Rental Analysis */}
          <div className="lg:col-span-5 p-8 sm:p-12 text-white flex flex-col justify-between relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C59A45]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#E6CA85] mb-4">
                <span>Free Landlord Service</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight mb-4">
                How Much Will Your Scottsdale Property Rent For?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Request a complimentary, no-obligation comprehensive rental analysis. We'll evaluate fair market rent, seasonal yield potential, and actionable recommendations to maximize net return.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C59A45]/20 text-[#E6CA85] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-sm text-slate-300">
                    <strong className="text-white">Comparative Market Analysis (CMA):</strong> Real-time lease rates in your exact neighborhood.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C59A45]/20 text-[#E6CA85] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-sm text-slate-300">
                    <strong className="text-white">Long-Term vs STR Comparison:</strong> Insights on whether long-term or vacation rental yields more.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C59A45]/20 text-[#E6CA85] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-sm text-slate-300">
                    <strong className="text-white">Rent-Ready Recommendations:</strong> Cost-effective suggestions that raise monthly rent.
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-xs text-slate-400 mb-2">Prefer to talk directly right now?</div>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 text-white hover:text-[#E6CA85] font-semibold text-lg transition-colors"
              >
                <Phone className="w-5 h-5 text-[#C59A45]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C59A45]" />
                <span>9259 E Raintree Dr, Scottsdale, AZ 85260</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7 bg-[#FAF9F5] p-8 sm:p-12 flex flex-col justify-center">
            {submitted ? (
              <div className="text-center py-12 px-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-[#0E1626] text-[#E6CA85] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0E1626] mb-3">
                  Consultation Request Received
                </h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed mb-6">
                  Thank you, <strong className="text-[#0E1626]">{formData.fullName || 'Property Owner'}</strong>. One of our dedicated Scottsdale property managers will review comps for <span className="italic">{formData.propertyAddress || 'your property'}</span> and reach out shortly at <strong>{formData.phone || COMPANY_INFO.phone}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#0E1626] uppercase tracking-wider hover:text-[#C59A45] cursor-pointer"
                >
                  Submit another property inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0E1626] mb-1">
                    Request Property Consultation
                  </h3>
                  <p className="text-xs text-slate-600 mb-6">
                    Fill out the form below. We will analyze your address and provide a clear, honest revenue projection.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white border border-[#D5CFBF] rounded-md px-3.5 py-2.5 text-sm text-[#0E1626] focus:outline-none focus:border-[#C59A45] focus:ring-1 focus:ring-[#C59A45]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(602) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-[#D5CFBF] rounded-md px-3.5 py-2.5 text-sm text-[#0E1626] focus:outline-none focus:border-[#C59A45] focus:ring-1 focus:ring-[#C59A45]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="owner@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-[#D5CFBF] rounded-md px-3.5 py-2.5 text-sm text-[#0E1626] focus:outline-none focus:border-[#C59A45] focus:ring-1 focus:ring-[#C59A45]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Property Address or Area *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 85255 North Scottsdale"
                      value={formData.propertyAddress}
                      onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                      className="w-full bg-white border border-[#D5CFBF] rounded-md px-3.5 py-2.5 text-sm text-[#0E1626] focus:outline-none focus:border-[#C59A45] focus:ring-1 focus:ring-[#C59A45]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Management Type
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full bg-white border border-[#D5CFBF] rounded-md px-3.5 py-2.5 text-sm text-[#0E1626] focus:outline-none focus:border-[#C59A45]"
                    >
                      <option value="Single-Family Home">Single-Family Long-Term</option>
                      <option value="Vacation Rental (Airbnb/Vrbo)">Vacation Rental (Airbnb / Vrbo)</option>
                      <option value="Multi-Family Property">Multi-Family / Units</option>
                      <option value="Landscaping & Maintenance">Irrigation & Maintenance Only</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Current Property Status
                    </label>
                    <select
                      value={formData.currentStatus}
                      onChange={(e) => setFormData({ ...formData, currentStatus: e.target.value })}
                      className="w-full bg-white border border-[#D5CFBF] rounded-md px-3.5 py-2.5 text-sm text-[#0E1626] focus:outline-none focus:border-[#C59A45]"
                    >
                      <option value="Currently Vacant">Currently Vacant</option>
                      <option value="Currently Tenant Occupied">Currently Tenant Occupied</option>
                      <option value="Currently Self-Managing">Currently Self-Managing</option>
                      <option value="Under Contract / Buying">Under Contract / In Escrow</option>
                      <option value="Switching Property Managers">Switching From Another PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Questions or Specific Goals
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us about your expectations, timeline, or current challenges..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-white border border-[#D5CFBF] rounded-md px-3.5 py-2 text-sm text-[#0E1626] focus:outline-none focus:border-[#C59A45]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0E1626] hover:bg-[#1A2642] text-white font-bold py-3.5 px-6 rounded-md shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  {loading ? (
                    <span>Preparing Analysis...</span>
                  ) : (
                    <>
                      <span>Get My Free Rental Report & Consultation</span>
                      <Send className="w-4 h-4 text-[#C59A45]" />
                    </>
                  )}
                </button>

                <div className="text-[11px] text-slate-500 text-center pt-2">
                  🔒 Strictly confidential. We respect your privacy and never sell or share owner information.
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
