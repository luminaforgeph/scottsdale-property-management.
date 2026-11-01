import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TypographicStatRibbon } from './components/TypographicStatRibbon';
import { PhilosophySection } from './components/PhilosophySection';
import { TwoManagementTracksSection } from './components/TwoManagementTracksSection';
import { ComparisonMatrixSection } from './components/ComparisonMatrixSection';
import { InteractiveLifecycleSection } from './components/InteractiveLifecycleSection';
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

  const handleHeroAddressAnalyze = (address: string, propertyType: string) => {
    // Scrolls to calculator and pre-sets an estimate or opens modal
    const calcEl = document.getElementById('calculator');
    if (calcEl) {
      calcEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setEstimateData({ rent: 3800, type: propertyType, area: address });
      setModalOpen(true);
    }
  };

  const scrollToTracks = () => {
    const el = document.getElementById('management-tracks');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#181A1D] selection:bg-terracotta selection:text-white flex flex-col font-sans">
      {/* 1. Sonoran Modern Sticky Header */}
      <Navbar onRequestConsultation={handleOpenConsultation} />

      <main className="flex-grow">
        {/* 2. Hero Section: Editorial Asymmetry & High-Intent Address Search */}
        <HeroSection
          onRequestConsultation={handleOpenConsultation}
          onExploreTracks={scrollToTracks}
          onAddressAnalyze={handleHeroAddressAnalyze}
        />

        {/* 3. Urban Group-Inspired Typographic Stat & Credibility Ribbon */}
        <TypographicStatRibbon />

        {/* 4. Section A: The SPM Philosophy (We Think Like Landlords) */}
        <PhilosophySection onRequestConsultation={handleOpenConsultation} />

        {/* 5. Section B: Two Ways to Manage Property (LTR vs Vacation Rentals / STR) */}
        <TwoManagementTracksSection onRequestConsultation={handleOpenConsultation} />

        {/* 6. Section C: Belong-Inspired Objective Comparison Matrix (Self vs Volume vs SPM) */}
        <ComparisonMatrixSection onRequestConsultation={handleOpenConsultation} />

        {/* 7. Section D: Interactive 4-Step Management Lifecycle */}
        <InteractiveLifecycleSection onRequestConsultation={handleOpenConsultation} />

        {/* 8. Section E: Beyond Rent Collection (Maintenance, Landscaping & Irrigation) */}
        <OperationalCapabilitiesSection onRequestConsultation={handleOpenConsultation} />

        {/* 9. Section F: A More Informed Ownership Experience (Technology & Portals) */}
        <TechOwnerExperienceSection onRequestConsultation={handleOpenConsultation} />

        {/* 10. Section G: Meet the People Behind the Management (Verified Leadership & Staff) */}
        <TeamSection onRequestConsultation={handleOpenConsultation} />

        {/* 11. Section H: Rental Assessment & Interactive Scottsdale Yield Estimator */}
        <QuickRentalCalculator onOpenConsultationWithEstimate={handleOpenConsultationWithEstimate} />

        {/* 12. Section I: Genuine Testimonials (Verified Client Quotations) */}
        <GenuineTestimonialsSection />

        {/* 13. Consultation Inquiry Form */}
        <ConsultationCTASection />
      </main>

      {/* 14. Sonoran Modern Professional Footer */}
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
