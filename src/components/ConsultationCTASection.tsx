import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const ConsultationCTASection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyAddress: '',
    propertyType: 'Single-Family Home',
    managementGoal: 'Full-Service Management',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="consultation" className="py-20 lg:py-28 bg-[#F7F5F0] border-b border-sandstone">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Outreach & Verified Contact (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold font-sans">
                Initiate Conversation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-desert-charcoal font-medium leading-tight">
                Request a Thoughtful Rental Consultation.
              </h2>
              <p className="text-charcoal-muted font-sans text-sm sm:text-base leading-relaxed">
                Whether you own a luxury residential property in DC Ranch, an Old Town vacation home, or a multi-family portfolio, we provide honest evaluations and personalized management solutions.
              </p>
            </div>

            <div className="bg-[#FAF9F6] p-6 rounded-xs border border-sandstone space-y-4">
              <div className="font-serif text-base text-desert-charcoal font-semibold">
                Direct Contact Information
              </div>

              <div className="flex items-start gap-3 text-xs text-charcoal-muted">
                <MapPin className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-desert-charcoal block">Scottsdale Office</span>
                  <span>9259 E Raintree Dr ste 2019, Scottsdale, AZ 85260</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-charcoal-muted">
                <Phone className="w-4 h-4 text-desert-sage flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-desert-charcoal block">Phone Direct</span>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-terracotta hover:underline font-medium">
                    (602) 935-6539
                  </a>
                </div>
              </div>
            </div>

            <div className="text-xs text-charcoal-muted font-sans italic border-l-2 border-desert-sage pl-3">
              &ldquo;We reply to all property owner inquiries promptly during Arizona business hours.&rdquo;
            </div>
          </div>

          {/* Right Column: High-Conversion Property Owner Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#FAF9F6] p-8 sm:p-10 rounded-xs border border-sandstone shadow-md">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 bg-desert-sage/10 text-desert-sage rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-desert-charcoal font-medium">
                  Thank You, {formData.name || 'Property Owner'}.
                </h3>
                <p className="text-sm text-charcoal-muted font-sans max-w-md mx-auto">
                  Your inquiry regarding <strong>{formData.propertyAddress || 'your Scottsdale property'}</strong> has been received. Trevor Reeves or Braxton Heise will review comps and follow up directly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold uppercase tracking-wider text-terracotta hover:underline font-sans"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-sandstone pb-4 mb-2">
                  <h3 className="font-serif text-xl text-desert-charcoal font-medium">
                    Complimentary Property Assessment
                  </h3>
                  <p className="text-xs text-charcoal-muted font-sans mt-0.5">
                    No obligation. Confidential analysis of market rent, occupancy and operating costs.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-desert-charcoal font-sans block mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jonathan Vance"
                      className="w-full bg-sandstone-light border border-sandstone rounded-xs py-2.5 px-3 text-xs font-sans text-desert-charcoal focus:outline-none focus:border-terracotta"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-desert-charcoal font-sans block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(602) 000-0000"
                      className="w-full bg-sandstone-light border border-sandstone rounded-xs py-2.5 px-3 text-xs font-sans text-desert-charcoal focus:outline-none focus:border-terracotta"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-desert-charcoal font-sans block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="owner@domain.com"
                      className="w-full bg-sandstone-light border border-sandstone rounded-xs py-2.5 px-3 text-xs font-sans text-desert-charcoal focus:outline-none focus:border-terracotta"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-desert-charcoal font-sans block mb-1">
                      Property Address / Zip Code
                    </label>
                    <input
                      type="text"
                      value={formData.propertyAddress}
                      onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                      placeholder="e.g. 85255 North Scottsdale"
                      className="w-full bg-sandstone-light border border-sandstone rounded-xs py-2.5 px-3 text-xs font-sans text-desert-charcoal focus:outline-none focus:border-terracotta"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-desert-charcoal font-sans block mb-1">
                      Asset Classification
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full bg-sandstone-light border border-sandstone rounded-xs py-2.5 px-3 text-xs font-sans text-desert-charcoal focus:outline-none focus:border-terracotta"
                    >
                      <option value="Single-Family Home">Single-Family Home</option>
                      <option value="Short-Term Vacation Rental (Airbnb/Vrbo)">Short-Term Vacation Rental (Airbnb/Vrbo)</option>
                      <option value="Multi-Family Property">Multi-Family / Multi-Unit</option>
                      <option value="Luxury Estate (Paradise Valley / DC Ranch)">Luxury Estate</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-desert-charcoal font-sans block mb-1">
                      Primary Objective
                    </label>
                    <select
                      value={formData.managementGoal}
                      onChange={(e) => setFormData({ ...formData, managementGoal: e.target.value })}
                      className="w-full bg-sandstone-light border border-sandstone rounded-xs py-2.5 px-3 text-xs font-sans text-desert-charcoal focus:outline-none focus:border-terracotta"
                    >
                      <option value="Full-Service Management">Full-Service Management</option>
                      <option value="Switching From Another Management Co.">Switching From Another Firm</option>
                      <option value="New Rental Purchase Assessment">Purchasing a New Rental</option>
                      <option value="STR Conversion Feasibility">STR Feasibility Study</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-desert-charcoal font-sans block mb-1">
                    Specific Questions or Current Rent Details
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about your property condition, current lease terms, or management concerns..."
                    className="w-full bg-sandstone-light border border-sandstone rounded-xs py-2.5 px-3 text-xs font-sans text-desert-charcoal focus:outline-none focus:border-terracotta resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-desert-charcoal hover:bg-terracotta text-sandstone py-4 rounded-xs text-xs font-medium tracking-wider uppercase transition-editorial flex items-center justify-center gap-2 shadow-sm font-sans"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Owner Consultation &amp; Analysis</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
