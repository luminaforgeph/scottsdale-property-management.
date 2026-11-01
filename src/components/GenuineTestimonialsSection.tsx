import { VERIFIED_TESTIMONIALS } from '../data/content';
import { Quote, CheckCircle2 } from 'lucide-react';

export const GenuineTestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#F7F5F0] border-b border-sandstone">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold font-sans">
            Section G &middot; Genuine Client Experiences
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-desert-charcoal font-medium">
            Verified Words From Real Property Owners
          </h2>
          <p className="text-charcoal-muted font-sans text-sm sm:text-base leading-relaxed">
            We do not manufacture anonymous accolades. These are genuine reviews published by actual property owners who partner with Scottsdale Property Management.
          </p>
        </div>

        {/* 3 Real Testimonials with Distinct Typography & Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VERIFIED_TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF9F6] p-8 rounded-xs border border-sandstone flex flex-col justify-between shadow-sm relative group hover:border-terracotta/40 transition-editorial"
            >
              <div className="space-y-6">
                <Quote className="w-8 h-8 text-terracotta/40 stroke-[1.5]" />
                <p className="font-serif text-base sm:text-lg text-desert-charcoal leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-sandstone">
                <div className="font-sans font-bold text-sm text-desert-charcoal flex items-center gap-1.5">
                  <span>{item.author}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-desert-sage" />
                </div>
                <div className="text-xs text-charcoal-muted font-sans mt-0.5">
                  {item.context}
                </div>
                <div className="text-[10px] text-terracotta font-sans uppercase tracking-widest mt-2 font-medium">
                  {item.propertyType}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-8 text-center text-xs text-charcoal-muted font-sans">
          All client quotations directly reflect public testimonials on scottsdalepropmanagement.com.
        </div>
      </div>
    </section>
  );
};
