import React, { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

interface HeroAddressBarProps {
  onAnalyze: (address: string, propertyType: string) => void;
}

export const HeroAddressBar: React.FC<HeroAddressBarProps> = ({ onAnalyze }) => {
  const [address, setAddress] = useState('');
  const [propType, setPropType] = useState('Single-Family');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAnalyze(address || 'Scottsdale Property', propType);
  };

  return (
    <div className="w-full bg-[#FAF9F6] p-2.5 sm:p-3 rounded-xs border border-sandstone shadow-lg">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-2.5">
        {/* Address Input */}
        <div className="relative flex-grow flex items-center">
          <MapPin className="w-4 h-4 text-terracotta absolute left-3.5 flex-shrink-0" />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter Scottsdale or Paradise Valley property address..."
            className="w-full pl-10 pr-3 py-3 text-xs sm:text-sm font-sans bg-sandstone-light border border-sandstone rounded-xs text-desert-charcoal placeholder-charcoal-muted/60 focus:outline-none focus:border-terracotta"
          />
        </div>

        {/* Type select */}
        <div className="sm:w-48">
          <select
            value={propType}
            onChange={(e) => setPropType(e.target.value)}
            className="w-full py-3 px-3 text-xs sm:text-sm font-sans bg-sandstone-light border border-sandstone rounded-xs text-desert-charcoal focus:outline-none focus:border-terracotta h-full"
          >
            <option value="Single-Family">Single-Family Home</option>
            <option value="Vacation-Rental">Vacation Rental (STR)</option>
            <option value="Multi-Family">Multi-Family Asset</option>
            <option value="Luxury-Estate">Luxury Estate</option>
          </select>
        </div>

        {/* Action Button */}
        <button
          type="submit"
          className="bg-desert-charcoal hover:bg-terracotta text-sandstone px-6 py-3 rounded-xs text-xs font-semibold uppercase tracking-wider transition-editorial flex items-center justify-center gap-2 whitespace-nowrap shadow-sm"
        >
          <span>Calculate Yield</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </form>
      <div className="flex items-center justify-between pt-2 px-1 text-[11px] text-charcoal-muted font-sans">
        <span>Instant free rental analysis &bull; Zero spam guarantee</span>
        <span className="hidden md:inline text-desert-sage font-medium">9259 E Raintree Dr &middot; Scottsdale</span>
      </div>
    </div>
  );
};
