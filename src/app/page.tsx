import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MoviesSection from "@/components/MoviesSection";
import ReasonsSection from "@/components/ReasonsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      {/* ! Header section */}
      <Header />
      {/* 🔥 Hero section */}
      <HeroSection />
      {/* 🔥 Movies section */}
      <MoviesSection />
      {/* 🔥 Reasons section */}
      <ReasonsSection />
      {/* 🔥 FAQ section */}
      <FAQSection />
      {/* ! Footer section */}
      <Footer />
    </div>
  );
}
