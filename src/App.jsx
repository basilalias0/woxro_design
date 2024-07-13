
import Header from "./components/EpicGames/Header";
import HeroSection from "./components/EpicGames/HeroSection";
import FeatureSection from "./components/EpicGames/FeatureSection";
import ContributionSection from "./components/EpicGames/ContributionSection";
import ContactSection from "./components/EpicGames/ContactSection";
import Footer from "./components/EpicGames/Footer";
import './App.css'

function App() {
  return (
    <main className="flex flex-col pt-14 pb-8 pr-10 pl-20 bg-black max-md:px-5">
      <Header />
      <HeroSection />
      <FeatureSection />
      <ContributionSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;