import { VERIFIED_TEAM, COMPANY_INFO } from '../data/content';
import { MapPin, Phone } from 'lucide-react';

interface TeamSectionProps {
  onRequestConsultation: () => void;
}

export const TeamSection = ({ onRequestConsultation }: TeamSectionProps) => {
  return (
    <section id="team" className="py-20 lg:py-28 bg-[#F2ECE1] border-b border-sandstone">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-sandstone pb-8">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold font-sans">
              Section E &middot; Leadership &amp; Field Operations
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-desert-charcoal font-medium">
              Meet the People Behind the Management
            </h2>
            <p className="text-charcoal-muted font-sans text-sm sm:text-base leading-relaxed">
              Real people, local roots, and authentic hands-on accountability. Our verified leadership and operations staff work directly from our Raintree Drive office in Scottsdale.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-sans text-charcoal-muted">
            <MapPin className="w-4 h-4 text-terracotta flex-shrink-0" />
            <span>9259 E Raintree Dr ste 2019, Scottsdale, AZ</span>
          </div>
        </div>

        {/* 4 Verified Team Member Editorial Profiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {VERIFIED_TEAM.map((member, idx) => (
            <div
              key={idx}
              className="bg-[#FAF9F6] rounded-xs border border-sandstone overflow-hidden flex flex-col justify-between group hover:border-terracotta/50 transition-editorial"
            >
              <div>
                {/* Photo with natural editorial tone */}
                <div className="aspect-[4/4.5] overflow-hidden bg-sandstone relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-103 transition-editorial duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 bg-[#FAF9F6]/90 backdrop-blur-sm text-[10px] uppercase font-bold tracking-wider px-2 py-1 text-desert-charcoal rounded-xs font-sans">
                    {member.role}
                  </div>
                </div>

                {/* Team member text info */}
                <div className="p-5 space-y-2">
                  <h3 className="font-serif text-lg font-semibold text-desert-charcoal">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-terracotta font-sans uppercase tracking-wider">
                    {member.focus}
                  </div>
                  <p className="text-xs text-charcoal-muted font-sans leading-relaxed pt-1">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-sandstone/60">
                <span className="text-[10px] text-desert-sage font-sans uppercase tracking-widest font-semibold block pt-3">
                  Scottsdale Team
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 bg-[#FAF9F6] p-6 sm:p-8 rounded-xs border border-sandstone flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-serif text-lg text-desert-charcoal font-medium">
              Want to speak with Trevor or Braxton directly about your property?
            </h4>
            <p className="text-xs text-charcoal-muted font-sans">
              Our partners are accessible directly by phone or via a scheduled consultation.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="bg-desert-charcoal hover:bg-terracotta text-sandstone px-5 py-3 rounded-xs text-xs font-medium uppercase tracking-wider transition-editorial flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(602) 935-6539</span>
            </a>
            <button
              onClick={onRequestConsultation}
              className="border border-desert-charcoal hover:bg-sandstone text-desert-charcoal px-5 py-3 rounded-xs text-xs font-medium uppercase tracking-wider transition-editorial"
            >
              Book Meeting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
