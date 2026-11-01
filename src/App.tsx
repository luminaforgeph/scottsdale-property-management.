import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { TwoManagementTracksSection } from './components/TwoManagementTracksSection';
import { OperationalCapabilitiesSection } from './components/OperationalCapabilitiesSection';
import { TechOwnerExperienceSection } from './components/TechOwnerExperienceSection';
import { TeamSection } from './components/TeamSection';
import { QuickRentalCalculator } from './components/QuickRentalCalculator';
import { GenuineTestimonialsSection } from './components/GenuineTestimonialsSection';
import { ConsultationCTASection } from './components/ConsultationCTASection';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [estimateData, setEstimateData] = useState<{ rent: number; type: string; area: string } | null>(null);

  const handleOpenConsultation = () => {
    setEstimateData(null);
    setModalOpen(true);
  };

  const handleOpenConsultationWithEstimate = (estimate: { rent: number; type: string; area: string }) => {
    setEstimateData(estimate);
    setModalOpen(true);
  };

  const scrollToTracks = () => {
    const el = document.getElementById('management-tracks');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#181A1D] selection:bg-terracotta selection:text-white flex flex-col font-sans">
      {/* 1. Sonoran Modern Sticky Header */}
      <Navbar onRequestConsultation={handleOpenConsultation} />

      <main className="flex-grow">
        {/* 2. Hero Section: Editorial Asymmetry & Intentional Positioning */}
        <HeroSection
          onRequestConsultation={handleOpenConsultation}
          onExploreTracks={scrollToTracks}
        />

        {/* 3. Section A: The SPM Philosophy (We Think Like Landlords) */}
        <PhilosophySection onRequestConsultation={handleOpenConsultation} />

        {/* 4. Section B: Two Ways to Manage Property (LTR vs Vacation Rentals / STR) */}
        <TwoManagementTracksSection onRequestConsultation={handleOpenConsultation} />

        {/* 5. Section C: Beyond Rent Collection (Maintenance, Landscaping & Irrigation) */}
        <OperationalCapabilitiesSection onRequestConsultation={handleOpenConsultation} />

        {/* 6. Section D: A More Informed Ownership Experience (Technology & Portals) */}
        <TechOwnerExperienceSection onRequestConsultation={handleOpenConsultation} />

        {/* 7. Section E: Meet the People Behind the Management (Verified Leadership & Staff) */}
        <TeamSection onRequestConsultation={handleOpenConsultation} />

        {/* 8. Section F: Rental Assessment & Interactive Scottsdale Yield Estimator */}
        <QuickRentalCalculator onOpenConsultationWithEstimate={handleOpenConsultationWithEstimate} />

        {/* 9. Section G: Genuine Testimonials (Verified Client Quotations) */}
        <GenuineTestimonialsSection />

        {/* 10. Consultation Inquiry Form */}
        <ConsultationCTASection />
      </main>

      {/* 11. Sonoran Modern Professional Footer */}
      <Footer />

      {/* Interactive Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        prefilledEstimate={estimateData}
      />
    </div>
  );
}

export default App;
