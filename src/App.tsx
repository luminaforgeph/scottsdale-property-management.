import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustValuePropSection } from './components/TrustValuePropSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ProcessSection } from './components/ProcessSection';
import { QuickRentalCalculator } from './components/QuickRentalCalculator';
import { ConsultationCTASection } from './components/ConsultationCTASection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedServiceInterest, setSelectedServiceInterest] = useState<string>('');

  const handleOpenConsultation = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedServiceInterest(serviceTitle);
    }
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#1E293B]">
      {/* 1. Navigation Bar */}
      <Navbar onRequestConsultation={() => handleOpenConsultation()} />

      {/* Main Homepage Flow */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <HeroSection onRequestConsultation={() => handleOpenConsultation()} />

        {/* 3. Trust / Value Proposition Section */}
        <TrustValuePropSection />

        {/* Interactive Scottsdale Rent Yield Estimator Tool */}
        <section className="py-12 bg-[#FAF9F5] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-6">
          <QuickRentalCalculator onOpenConsultation={() => handleOpenConsultation()} />
        </section>

        {/* 4. Property Management Service Cards */}
        <ServicesSection onRequestConsultation={(title) => handleOpenConsultation(title)} />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUsSection onRequestConsultation={() => handleOpenConsultation()} />

        {/* 6. How Our Management Process Works */}
        <ProcessSection onRequestConsultation={() => handleOpenConsultation()} />

        {/* 7. Property Owner Consultation CTA / Free Rental Valuation */}
        <ConsultationCTASection initialService={selectedServiceInterest} />
      </main>

      {/* 8. Professional Footer */}
      <Footer />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceInterest={selectedServiceInterest}
      />
    </div>
  );
}

export default App;
