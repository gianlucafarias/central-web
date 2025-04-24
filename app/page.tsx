import HeroSection from "../components/HeroSection";
import Sponsors from "../components/Sponsors";
import FiestaDelZapallo from "../components/FiestaDelZapallo";
import Calendar from "../components/Calendar";
import Footer from "../components/Footer";
import SociosSection from "../components/SociosSection";
import NewsSection from "../components/NewsSection";
import Disciplinas from "../components/Disciplinas";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Sponsors />
      <NewsSection />
      <FiestaDelZapallo />
      <Calendar />
      <Disciplinas />

      <SociosSection />
      <Footer />
    </main>
  );
}
