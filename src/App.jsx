import Hero from "./components/layout/Hero.jsx";
import Catalogo from "./components/layout/Catalogo.jsx";
import ContactSection from "./components/layout/ContactSection.jsx";
import Footer from "./components/layout/Footer.jsx";
import BackToTop from "./components/ui/BackToTop.jsx";

export default function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-preto text-creme scroll-smooth">
      <Hero onNavigate={scrollTo} />
      <Catalogo />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
}
