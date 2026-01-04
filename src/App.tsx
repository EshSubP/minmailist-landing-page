import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import Marquee from "./components/Marquee";
import PillarsSection from "./components/PillarsSection";
import ManifestoSection from "./components/ManifestoSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-brand-light">
      <Hero />
      <Marquee />
      <FeaturesSection />
      <PillarsSection />
      <ManifestoSection />
      <Footer />
    </div>
  );
}

export default App;
