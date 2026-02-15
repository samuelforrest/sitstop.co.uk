import { NavigationBar } from "@/components/NavigationBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { HistorySection } from "@/components/sections/HistorySection";
import { LogoSection } from "@/components/sections/LogoSection";
import { JoinSection } from "@/components/sections/JoinSection";
import { FAQsSection } from "@/components/sections/FAQsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <NavigationBar />

      <div className="w-full flex justify-center px-5 md:px-10 lg:px-16 xl:px-20 my-8 pt-20">
        <main id="main-content" className="w-full max-w-7xl">
          <HeroSection />
          <AboutSection />
          <HistorySection />
          <LogoSection />
          <JoinSection />
          <FAQsSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
