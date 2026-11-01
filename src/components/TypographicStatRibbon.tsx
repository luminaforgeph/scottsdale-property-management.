import React from 'react';
import { ShieldCheck, MapPin, Building, Clock } from 'lucide-react';

export const TypographicStatRibbon: React.FC = () => {
  const metrics = [
    {
      stat: 'Maricopa',
      label: 'County Licensing & ARMLS',
      subtext: 'Trevor Reeves & Local SPM Brokerage',
      icon: ShieldCheck,
    },
    {
      stat: '9259 E',
      label: 'Raintree Dr · Suite 2019',
      subtext: 'In-Person Scottsdale HQ & Dispatch',
      icon: MapPin,
    },
    {
      stat: 'Dual-Track',
      label: 'Specialized Operations',
      subtext: 'Long-Term Residential & Luxury STR',
      icon: Building,
    },
    {
      stat: '24/7/365',
      label: 'In-House Emergency Dispatch',
      subtext: 'Led by Partner Braxton Heise',
      icon: Clock,
    },
  ];

  return (
    <div className="bg-[#181A1D] text-[#FAF8F5] border-y border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`pt-4 sm:pt-0 ${
                  idx > 0 ? 'sm:pl-8' : ''
                } flex flex-col justify-between`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-terracotta" />
                  <span className="text-[10px] uppercase tracking-widest text-[#B5B8BC] font-sans font-semibold">
                    Scottsdale Metric
                  </span>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#FAF9F6]">
                    {item.stat}
                  </div>
                  <div className="text-xs font-semibold text-terracotta font-sans mt-0.5">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-[#A6ABB3] font-sans mt-1">
                    {item.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
