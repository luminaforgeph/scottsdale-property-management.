import { useState } from 'react';
import { MANAGEMENT_TRACKS } from '../data/content';
import { Check, ArrowRight, Home, Palmtree, ChevronRight } from 'lucide-react';

interface TwoManagementTracksSectionProps {
  onRequestConsultation: () => void;
}

export const TwoManagementTracksSection = ({
  onRequestConsultation,
}: TwoManagementTracksSectionProps) => {
  const [activeTrackId, setActiveTrackId] = useState<'long-term' | 'short-term'>('long-term');

  const activeTrack = MANAGEMENT_TRACKS.find((t) => t.id === activeTrackId) || MANAGEMENT_TRACKS[0];

  return (
    <section id="management-tracks" className="py-20 lg:py-28 bg-[#F7F5F0] border-b border-sandstone">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-sandstone">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold font-sans">
              Section B &middot; Strategic Alignment
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-desert-charcoal font-medium">
              Two Distinct Ways to Manage Property in Scottsdale
            </h2>
            <p className="text-charcoal-muted font-sans text-sm sm:text-base leading-relaxed">
              We do not use a one-size-fits-all model. We operate dedicated tracks for long-term residential leasing and high-yield short-term vacation rentals.
            </p>
          </div>

          {/* Track Switcher Tabs */}
          <div className="flex bg-sandstone p-1 rounded-xs border border-sandstone">
            <button
              onClick={() => setActiveTrackId('long-term')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xs text-xs font-semibold uppercase tracking-wider transition-editorial ${
                activeTrackId === 'long-term'
                  ? 'bg-desert-charcoal text-sandstone shadow-sm'
                  : 'text-desert-charcoal hover:text-terracotta'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Long-Term Residential</span>
            </button>
            <button
              onClick={() => setActiveTrackId('short-term')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xs text-xs font-semibold uppercase tracking-wider transition-editorial ${
                activeTrackId === 'short-term'
                  ? 'bg-desert-charcoal text-sandstone shadow-sm'
                  : 'text-desert-charcoal hover:text-terracotta'
              }`}
            >
              <Palmtree className="w-4 h-4" />
              <span>Vacation Rentals (Airbnb &amp; Vrbo)</span>
            </button>
          </div>
        </div>

        {/* Selected Track Detailed Editorial Showcase */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Visual Showcase (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="relative rounded-xs overflow-hidden border border-sandstone shadow-lg aspect-[4/3] sm:aspect-[16/11] bg-sandstone">
              <img
                src={activeTrack.heroImage}
                alt={activeTrack.title}
                className="w-full h-full object-cover transition-editorial duration-500"
              />
              <div className="absolute top-4 left-4 bg-desert-charcoal/90 backdrop-blur-sm text-sandstone px-3 py-1.5 rounded-xs text-[11px] uppercase tracking-wider font-sans">
                {activeTrack.id === 'long-term' ? 'Residential Leasing' : 'Vacation Hospitality'}
              </div>
            </div>

            <div className="bg-[#FAF9F6] p-6 rounded-xs border border-sandstone">
              <div className="text-xs uppercase tracking-wider text-desert-sage font-bold font-sans mb-1">
                Ideal Asset Profile
              </div>
              <p className="text-xs text-charcoal-muted leading-relaxed font-sans">
                {activeTrack.idealFor}
              </p>
            </div>
          </div>

          {/* Content Breakdown (7 Cols) */}
          <div className="lg:col-span-7 bg-[#FAF9F6] p-8 sm:p-10 rounded-xs border border-sandstone shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-sans text-terracotta font-semibold uppercase tracking-widest">
                  Track Overview
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-desert-charcoal font-medium mt-1">
                  {activeTrack.title}
                </h3>
                <p className="font-serif italic text-charcoal-muted text-base mt-1">
                  &ldquo;{activeTrack.tagline}&rdquo;
                </p>
              </div>

              <p className="text-sm text-charcoal-muted font-sans leading-relaxed">
                {activeTrack.overview}
              </p>

              {/* Differentiators Grid */}
              <div className="pt-2">
                <div className="text-xs uppercase tracking-widest text-desert-charcoal font-semibold mb-3">
                  Core Management Standards
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeTrack.keyDifferentiators.map((diff, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs text-charcoal-muted">
                      <span className="w-4 h-4 rounded-full bg-sandstone flex items-center justify-center text-desert-sage flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>{diff}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Daily Operating Responsibilities */}
              <div className="pt-2 border-t border-sandstone">
                <div className="text-xs uppercase tracking-widest text-desert-charcoal font-semibold mb-3">
                  Our Daily Operational Scope
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeTrack.responsibilities.map((resp, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs text-charcoal-muted">
                      <ChevronRight className="w-3.5 h-3.5 text-terracotta flex-shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Track Action */}
            <div className="pt-8 mt-6 border-t border-sandstone flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs text-charcoal-muted">
                Need guidance deciding between long-term leasing or STR?
              </div>
              <button
                onClick={onRequestConsultation}
                className="bg-desert-charcoal hover:bg-terracotta text-sandstone px-6 py-3 rounded-xs text-xs font-semibold uppercase tracking-wider transition-editorial flex items-center gap-2"
              >
                <span>Request Custom Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
