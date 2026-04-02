import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsCounter from "@/components/StatsCounter";
import CriteresSection from "@/components/CriteresSection";
import CeremonieSection from "@/components/CeremonieSection";
import MissionSection from "@/components/MissionSection";
import LeadersSection from "@/components/LeadersSection";
import PartenairesSection from "@/components/PartenairesSection";
import FooterSection from "@/components/FooterSection";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => (
  <main className="overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <StatsCounter />
    <CriteresSection />
    <CeremonieSection />
    <MissionSection />
    <LeadersSection />
    <PartenairesSection />
    <FooterSection />
    <ScrollToTop />
  </main>
);

export default Index;
