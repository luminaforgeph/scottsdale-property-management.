import React, { useState } from 'react';
import { X, CheckCircle2, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceInterest?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  serviceInterest = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: serviceInterest || 'Residential Single-Family',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FAF9F5] border border-[#E2DDD2] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-[#0E1626] p-1 rounded-full hover:bg-slate-200/50 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 bg-[#0E1626] text-[#E6CA85] rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#0E1626] mb-2">
              Consultation Requested
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Thank you, <strong className="text-[#0E1626]">{formData.name || 'Property Owner'}</strong>. A Scottsdale property management representative will review your inquiry and connect with you directly.
            </p>
            <div className="bg-[#F3EFE6] p-4 rounded-lg text-xs text-slate-700 mb-6">
              Need immediate answers? Call us directly: <br />
              <strong className="text-sm text-[#0E1626]">{COMPANY_INFO.phone}</strong>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-[#0E1626] text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-[#1A2642] transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] uppercase tracking-wider text-[#C59A45] font-bold">
                Scottsdale Property Management
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0E1626] mt-1">
                Request Owner Consultation
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Direct consultation for landlords, vacation rental hosts, and multi-family investors.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Robert Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border border-[#D5CFBF] rounded-md px-3 py-2 text-sm text-[#0E1626] focus:outline-none focus:border-[#C59A45]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(602) 555-0123"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-[#D5CFBF] rounded-md px-3 py-2 text-sm text-[#0E1626] focus:outline-none focus:border-[#C59A45]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-[#D5CFBF] rounded-md px-3 py-2 text-sm text-[#0E1626] focus:outline-none focus:border-[#C59A45]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Property Address or City *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 10450 E Desert Trail, Scottsdale"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-white border border-[#D5CFBF] rounded-md px-3 py-2 text-sm text-[#0E1626] focus:outline-none focus:border-[#C59A45]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Management Interest
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-white border border-[#D5CFBF] rounded-md px-3 py-2 text-sm text-[#0E1626] focus:outline-none focus:border-[#C59A45]"
                >
                  <option value="Residential Single-Family">Single-Family Long-Term Rental</option>
                  <option value="Vacation Rental (Airbnb & Vrbo)">Vacation Rental (Airbnb / Vrbo)</option>
                  <option value="Multi-Family Properties">Multi-Family / Multi-Unit Complex</option>
                  <option value="Irrigation & Landscape Maintenance">Desert Landscaping & Maintenance</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0E1626] hover:bg-[#1A2642] text-white font-bold py-3 px-4 rounded-md shadow-md text-sm transition-all duration-150 flex items-center justify-center gap-2 mt-4 cursor-pointer"
              >
                {loading ? 'Submitting...' : 'Submit Consultation Request'}
                <Send className="w-4 h-4 text-[#C59A45]" />
              </button>

              <div className="text-[11px] text-center text-slate-500 pt-1">
                You can also call us directly anytime at <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-semibold text-[#0E1626] underline">{COMPANY_INFO.phone}</a>.
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
