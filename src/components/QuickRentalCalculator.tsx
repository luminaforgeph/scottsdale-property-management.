import { useState } from 'react';
import { Calculator, ArrowRight, Check } from 'lucide-react';

interface QuickRentalCalculatorProps {
  onOpenConsultationWithEstimate?: (estimate: { rent: number; type: string; area: string }) => void;
}

export const QuickRentalCalculator = ({
  onOpenConsultationWithEstimate,
}: QuickRentalCalculatorProps) => {
  const [propertyType, setPropertyType] = useState<'long-term' | 'str'>('long-term');
  const [bedrooms, setBedrooms] = useState<number>(3);
  const [area, setArea] = useState<string>('North Scottsdale');
  const [hasPool, setHasPool] = useState<boolean>(true);

  // Estimator logic calibrated for Scottsdale's premium rental market
  const calculateEstimatedRent = () => {
    let base = 0;
    if (propertyType === 'long-term') {
      const baseRates: Record<number, number> = { 2: 2400, 3: 3300, 4: 4500, 5: 6200 };
      base = baseRates[bedrooms] || 3300;
      if (area === 'Paradise Valley') base *= 1.45;
      if (area === 'North Scottsdale' || area === 'DC Ranch') base *= 1.18;
      if (area === 'Old Town Scottsdale') base *= 1.05;
      if (hasPool) base += 350;
    } else {
      // Short-Term Rental estimated average monthly gross revenue (Scottsdale STR)
      const baseSTR: Record<number, number> = { 2: 4800, 3: 7200, 4: 9800, 5: 14500 };
      base = baseSTR[bedrooms] || 7200;
      if (area === 'Old Town Scottsdale') base *= 1.25;
      if (area === 'Paradise Valley') base *= 1.35;
      if (area === 'North Scottsdale' || area === 'DC Ranch') base *= 1.15;
      if (hasPool) base *= 1.25;
    }
    return Math.round(base / 50) * 50;
  };

  const estimatedAmount = calculateEstimatedRent();

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-[#F2ECE1] border-b border-sandstone">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Conversion Explanation (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold font-sans">
              Section F &middot; Rental Assessment
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-desert-charcoal font-medium leading-tight">
              How Much Will Your Property Rent For? <br />
              <span className="italic font-normal text-terracotta">We will let you know for FREE.</span>
            </h2>
            <p className="text-charcoal-muted font-sans text-sm sm:text-base leading-relaxed">
              Rental dynamics in Scottsdale differ significantly between long-term leases and short-term vacation rentals (Airbnb &amp; Vrbo). Use our Sonoran market estimator or submit for a complimentary, hands-on CMA prepared by an SPM partner.
            </p>

            <div className="space-y-3 pt-2 text-xs text-charcoal-muted font-sans">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-desert-sage"></span>
                <span>Hyper-local comps from North Scottsdale, Old Town &amp; Paradise Valley</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-desert-sage"></span>
                <span>Seasonal occupancy adjustments for high-demand winter/spring months</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-desert-sage"></span>
                <span>Honest condition &amp; rent-ready upgrade recommendations</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Estimator Card (7 Cols) */}
          <div className="lg:col-span-7 bg-[#FAF9F6] p-8 sm:p-10 rounded-xs border border-sandstone shadow-md">
            <div className="flex items-center justify-between border-b border-sandstone pb-4 mb-6">
              <div className="flex items-center gap-2 text-desert-charcoal font-serif font-medium text-lg">
                <Calculator className="w-5 h-5 text-terracotta" />
                <span>Scottsdale Rental Yield Estimator</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-charcoal-muted font-sans font-semibold">
                Interactive Model
              </span>
            </div>

            {/* Strategy Toggle */}
            <div className="mb-6">
              <label className="text-xs uppercase tracking-wider text-charcoal-muted font-sans font-semibold block mb-2">
                Rental Strategy
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPropertyType('long-term')}
                  className={`py-2.5 px-4 rounded-xs text-xs font-semibold tracking-wider uppercase transition-editorial border ${
                    propertyType === 'long-term'
                      ? 'bg-desert-charcoal text-sandstone border-desert-charcoal'
                      : 'bg-sandstone-light text-desert-charcoal border-sandstone hover:border-terracotta/40'
                  }`}
                >
                  Long-Term Residential
                </button>
                <button
                  type="button"
                  onClick={() => setPropertyType('str')}
                  className={`py-2.5 px-4 rounded-xs text-xs font-semibold tracking-wider uppercase transition-editorial border ${
                    propertyType === 'str'
                      ? 'bg-desert-charcoal text-sandstone border-desert-charcoal'
                      : 'bg-sandstone-light text-desert-charcoal border-sandstone hover:border-terracotta/40'
                  }`}
                >
                  Vacation Rental (STR)
                </button>
              </div>
            </div>

            {/* Bedroom & Submarket Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-xs uppercase tracking-wider text-charcoal-muted font-sans font-semibold block mb-2">
                  Bedrooms
                </label>
                <div className="flex gap-2">
                  {[2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setBedrooms(num)}
                      className={`flex-1 py-2 rounded-xs text-xs font-semibold border transition-editorial ${
                        bedrooms === num
                          ? 'bg-terracotta text-sandstone border-terracotta'
                          : 'bg-sandstone-light text-desert-charcoal border-sandstone hover:border-terracotta/40'
                      }`}
                    >
                      {num === 5 ? '5+ Beds' : `${num} Beds`}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-charcoal-muted font-sans font-semibold block mb-2">
                  Scottsdale Submarket
                </label>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full bg-sandstone-light border border-sandstone rounded-xs py-2 px-3 text-xs font-sans text-desert-charcoal focus:outline-none focus:border-terracotta"
                >
                  <option value="North Scottsdale">North Scottsdale / 85255</option>
                  <option value="Old Town Scottsdale">Old Town / 85251</option>
                  <option value="Paradise Valley">Paradise Valley / 85253</option>
                  <option value="DC Ranch">DC Ranch / Silverleaf</option>
                  <option value="McCormick Ranch">McCormick Ranch / 85258</option>
                </select>
              </div>
            </div>

            {/* Pool Checkbox */}
            <div className="mb-6 flex items-center justify-between p-3 rounded-xs bg-sandstone-light border border-sandstone">
              <span className="text-xs font-sans text-desert-charcoal font-medium">
                Private Desert Pool / Spa Amenity
              </span>
              <button
                type="button"
                onClick={() => setHasPool(!hasPool)}
                className={`w-5 h-5 rounded-xs flex items-center justify-center border transition-editorial ${
                  hasPool ? 'bg-desert-charcoal text-sandstone border-desert-charcoal' : 'bg-white border-sandstone'
                }`}
              >
                {hasPool && <Check className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Calculated Result Box */}
            <div className="p-6 rounded-xs bg-desert-charcoal text-sandstone flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#B5B8BC] font-sans block">
                  {propertyType === 'long-term' ? 'Estimated Monthly Market Rent' : 'Estimated Monthly Gross STR Revenue'}
                </span>
                <span className="font-serif text-3xl sm:text-4xl font-normal text-terracotta mt-1 block">
                  ${estimatedAmount.toLocaleString()}
                  <span className="text-xs font-sans text-[#B5B8BC] font-normal ml-1">/ month</span>
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (onOpenConsultationWithEstimate) {
                    onOpenConsultationWithEstimate({
                      rent: estimatedAmount,
                      type: propertyType === 'long-term' ? 'Long-Term Residential' : 'Vacation Rental (STR)',
                      area,
                    });
                  }
                }}
                className="bg-sandstone hover:bg-white text-desert-charcoal px-5 py-3 rounded-xs text-xs font-semibold uppercase tracking-wider transition-editorial flex items-center gap-2 whitespace-nowrap shadow-sm"
              >
                <span>Get Free Official Analysis</span>
                <ArrowRight className="w-3.5 h-3.5 text-terracotta" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
