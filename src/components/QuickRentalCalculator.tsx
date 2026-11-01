import { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, DollarSign } from 'lucide-react';

interface QuickRentalCalculatorProps {
  onOpenConsultation: () => void;
}

export const QuickRentalCalculator = ({ onOpenConsultation }: QuickRentalCalculatorProps) => {
  const [beds, setBeds] = useState(3);
  const [propertyType, setPropertyType] = useState<'long-term' | 'str'>('long-term');
  const [submarket, setSubmarket] = useState<'north' | 'old-town' | 'gainey' | 'paradise-valley'>('north');
  const [pool, setPool] = useState(true);

  // Approximate fair baseline estimates for Scottsdale micro-markets
  const getEstimatedRent = () => {
    let base = 2400;
    if (beds === 2) base = 2200;
    if (beds === 3) base = 3200;
    if (beds === 4) base = 4400;
    if (beds >= 5) base = 6200;

    if (submarket === 'paradise-valley') base *= 1.55;
    else if (submarket === 'gainey') base *= 1.25;
    else if (submarket === 'old-town' && propertyType === 'str') base *= 1.35;

    if (pool) base += 350;

    if (propertyType === 'str') {
      // Short term rental gross revenue monthly equivalent in high/mid season
      return Math.round(base * 1.65);
    }
    return Math.round(base);
  };

  const estimatedMonthly = getEstimatedRent();

  return (
    <div className="bg-[#FAF9F5] border border-[#E2DDD2] rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-[#0E1626] text-[#E6CA85] flex items-center justify-center shrink-0">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-serif text-xl font-bold text-[#0E1626]">Quick Scottsdale Rental Yield Estimator</h3>
          <p className="text-xs text-slate-500">Benchmark your rental or short-term vacation potential</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {/* Strategy */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Strategy</label>
          <div className="flex rounded-md border border-[#D5CFBF] p-0.5 bg-white">
            <button
              type="button"
              onClick={() => setPropertyType('long-term')}
              className={`flex-1 py-1.5 text-xs font-semibold rounded ${propertyType === 'long-term' ? 'bg-[#0E1626] text-white' : 'text-slate-600 hover:text-black'}`}
            >
              Long-Term
            </button>
            <button
              type="button"
              onClick={() => setPropertyType('str')}
              className={`flex-1 py-1.5 text-xs font-semibold rounded ${propertyType === 'str' ? 'bg-[#0E1626] text-white' : 'text-slate-600 hover:text-black'}`}
            >
              Airbnb / STR
            </button>
          </div>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Bedrooms</label>
          <select
            value={beds}
            onChange={(e) => setBeds(Number(e.target.value))}
            className="w-full bg-white border border-[#D5CFBF] rounded-md px-3 py-2 text-xs text-[#0E1626] focus:outline-none focus:border-[#C59A45]"
          >
            <option value={2}>2 Bedrooms</option>
            <option value={3}>3 Bedrooms</option>
            <option value={4}>4 Bedrooms</option>
            <option value={5}>5+ Bedrooms Luxury Estate</option>
          </select>
        </div>

        {/* Submarket */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Scottsdale Micro-Market</label>
          <select
            value={submarket}
            onChange={(e) => setSubmarket(e.target.value as any)}
            className="w-full bg-white border border-[#D5CFBF] rounded-md px-3 py-2 text-xs text-[#0E1626] focus:outline-none focus:border-[#C59A45]"
          >
            <option value="north">North Scottsdale (85255 / 85260)</option>
            <option value="old-town">Old Town / South Scottsdale</option>
            <option value="gainey">Gainey Ranch / McCormick</option>
            <option value="paradise-valley">Paradise Valley Area</option>
          </select>
        </div>

        {/* Private Pool */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Private Pool / Spa</label>
          <div className="flex rounded-md border border-[#D5CFBF] p-0.5 bg-white">
            <button
              type="button"
              onClick={() => setPool(true)}
              className={`flex-1 py-1.5 text-xs font-semibold rounded ${pool ? 'bg-[#0E1626] text-white' : 'text-slate-600'}`}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => setPool(false)}
              className={`flex-1 py-1.5 text-xs font-semibold rounded ${!pool ? 'bg-[#0E1626] text-white' : 'text-slate-600'}`}
            >
              No
            </button>
          </div>
        </div>
      </div>

      {/* Result strip */}
      <div className="bg-[#0E1626] text-white rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#C59A45]/20 text-[#E6CA85] flex items-center justify-center shrink-0">
            <DollarSign className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-300">Estimated Projected Gross Revenue</div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#E6CA85]">
              ${estimatedMonthly.toLocaleString()} <span className="text-sm font-sans font-normal text-slate-300">/ month avg</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenConsultation}
            className="bg-[#C59A45] hover:bg-[#D4AF37] text-[#0A101C] font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-md shadow-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Get Official CMA Comps</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="mt-3 text-[11px] text-slate-500 flex items-center gap-2">
        <ShieldCheck className="w-3.5 h-3.5 text-[#C59A45]" />
        <span>Estimates based on regional Scottsdale MLS & short-term occupancy trends. For a binding appraisal or precise analysis, request our detailed report.</span>
      </div>
    </div>
  );
};
