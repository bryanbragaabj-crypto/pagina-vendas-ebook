import Hero from './components/HeroSection/HeroSection.jsx'
import { AudienceSection, AudiobookSection, AuthorSection, BookPreviewSection, CommercialFooter, FAQSection, FinalCTA, FoundationsSection, GuaranteeSection, HeaderOffer, MethodSection, MobileCTA, OfferSection, PerspectiveAndBenefits, ProblemSection, ReceiveSection, TestimonialsSection, TrustBar } from './components/SalesPage/SalesPage.jsx'
import './App.css'

export default function App() {
  return <main>
    <HeaderOffer />
    <Hero />
    <TrustBar />
    <ProblemSection />
    <PerspectiveAndBenefits />
    <MethodSection />
    <FoundationsSection />
    <BookPreviewSection />
    <AudiobookSection />
    <AudienceSection />
    <AuthorSection />
    <TestimonialsSection />
    <ReceiveSection />
    <OfferSection />
    <GuaranteeSection />
    <FAQSection />
    <FinalCTA />
    <CommercialFooter />
    <MobileCTA />
  </main>
}
