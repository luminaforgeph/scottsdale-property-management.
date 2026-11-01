import { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledEstimate?: { rent: number; type: string; area: string } | null;
}

export const ConsultationModal = ({
  isOpen,
  onClose,
  prefilledEstimate,
}: ConsultationModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [propertyType, setPropertyType] = useState(() => prefilledEstimate?.type || 'Single-Family Long-Term');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-[#FAF9F6] w-full max-w-lg rounded-xs border border-sandstone shadow-2xl p-6 sm:p-8 animate-fadeIn">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-charcoal-muted hover:text-desert-charcoal transition-colors p-1"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 bg-desert-charcoal text-terracotta rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl text-desert-charcoal font-medium">
              Consultation Requested
            </h3>
            <p className="text-xs text-charcoal-muted font-sans leading-relaxed">
              Thank you, <strong>{name}</strong>. A Scottsdale property management representative will review your inquiry and connect with you directly.
            </p>
            <div className="p-3 bg-sandstone rounded-xs text-xs font-sans text-desert-charcoal">
              Need immediate answers? Call us directly: <br />
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-bold text-terracotta hover:underline">
                {COMPANY_INFO.phone}
              </a>
            </div>
            <button
              onClick={handleClose}
              className="mt-4 bg-desert-charcoal text-sandstone px-6 py-2.5 rounded-xs text-xs uppercase font-medium tracking-wider hover:bg-terracotta transition-editorial font-sans"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="border-b border-sandstone pb-4 mb-5">
              <div className="text-[10px] uppercase tracking-widest text-terracotta font-semibold font-sans mb-1">
                Scottsdale Property Management
              </div>
              <h3 className="font-serif text-2xl text-desert-charcoal font-medium">
                Request a Consultation
              </h3>
              <p className="text-xs text-charcoal-muted font-sans mt-1">
                {prefilledEstimate
                  ? `Based on estimated yield of $${prefilledEstimate.rent.toLocaleString()}/mo in ${prefilledEstimate.area}`
                  : 'Discuss your rental asset with an SPM partner.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[11px] uppercase tracking-wider text-desert-charcoal font-sans font-semibold block mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Jonathan Vance"
                  className="w-full bg-sandstone-light border border-sandstone rounded-xs py-2 px-3 text-xs font-sans text-desert-charcoal focus:outline-none focus:border-terracotta"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-desert-charcoal font-sans font-semibold block mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(602) 000-0000"
                    className="w-full bg-sandstone-light border border-sandstone rounded-xs py-2 px-3 text-xs font-sans text-desert-charcoal focus:outline-none focus:border-terracotta"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-desert-charcoal font-sans font-semibold block mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="owner@domain.com"
                    className="w-full bg-sandstone-light border border-sandstone rounded-xs py-2 px-3 text-xs font-sans text-desert-charcoal focus:outline-none focus:border-terracotta"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-desert-charcoal font-sans font-semibold block mb-1">
                  Property Address or Submarket
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. 9259 E Raintree Dr, Scottsdale, AZ"
                  className="w-full bg-sandstone-light border border-sandstone rounded-xs py-2 px-3 text-xs font-sans text-desert-charcoal focus:outline-none focus:border-terracotta"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-desert-charcoal font-sans font-semibold block mb-1">
                  Property Classification
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-sandstone-light border border-sandstone rounded-xs py-2 px-3 text-xs font-sans text-desert-charcoal focus:outline-none focus:border-terracotta"
                >
                  <option value="Single-Family Long-Term">Single-Family Long-Term</option>
                  <option value="Vacation Rental (Airbnb & Vrbo)">Vacation Rental (Airbnb &amp; Vrbo)</option>
                  <option value="Multi-Family Property">Multi-Family / Scaled Portfolio</option>
                  <option value="Desert Landscaping & Maintenance Only">Desert Landscaping &amp; Maintenance</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-desert-charcoal hover:bg-terracotta text-sandstone py-3.5 rounded-xs text-xs font-medium uppercase tracking-wider transition-editorial flex items-center justify-center gap-2 shadow-sm font-sans"
              >
                <span>Submit Request</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
