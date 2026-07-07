import { useRef, useState } from "react";
// import Header from "./components/layout/Header.jsx"; // navbar desativada por enquanto
import Hero from "./components/layout/Hero.jsx";
import Footer from "./components/layout/Footer.jsx";
import ContactSection from "./components/layout/ContactSection.jsx";
import Card from "./components/menu/Card.jsx";
import ProductModal from "./components/menu/ProductModal.jsx";
import BackToTop from "./components/ui/BackToTop.jsx";
import Reveal from "./components/ui/Reveal.jsx";
import DoodleBorder from "./components/ui/DoodleBorder.jsx";
import { PRODUCTS } from "./data/products.js";

export default function App() {
  const gridRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [originRect, setOriginRect] = useState(null);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openProduct = (product, rect) => {
    setOriginRect(rect || null);
    setSelectedProduct(product);
  };

  const closeProduct = () => {
    setSelectedProduct(null);
    setOriginRect(null);
  };

  return (
    <div className="min-h-screen bg-preto text-creme scroll-smooth">
      {/* <Header onNavigate={scrollTo} /> */}
      <Hero onNavigate={scrollTo} />

      <div className="relative">
        <DoodleBorder contentRef={gridRef} />
        <main id="cardapio" className="relative z-10 max-w-[1100px] mx-auto px-10 sm:px-6 pt-14">
          <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 items-start">
            {PRODUCTS.map((p, i) => (
              <Card key={p.id} product={p} delay={(i % 6) * 60} onOpen={openProduct} />
            ))}
          </div>

          <Reveal className="my-16">
            <div className="bg-gradient-to-br from-[#1c1810] to-[#2e2313] border-2 border-amarelo rounded-2xl px-8 py-11 flex flex-col md:flex-row items-center justify-center gap-7 text-center md:text-left">
              <img
                src="/images/logo_petiscoscia.png"
                alt="Logo Petiscos & Cia Alimentos"
                className="w-[150px] md:w-[170px] shrink-0 drop-shadow-[0_10px_20px_rgba(0,0,0,0.35)]"
              />
              <div>
                <h3 className="font-baloo text-2xl md:text-3xl text-amarelo mb-2.5">
                  A Pioneira da Verdadeira Comida de Boteco
                </h3>
                <p className="max-w-lg text-creme">
                  Do freezer direto para a fritadeira: praticidade sem abrir mão do sabor autêntico.
                </p>
              </div>
            </div>
          </Reveal>
        </main>
      </div>

      <ContactSection />

      <Footer />
      <BackToTop />

      {selectedProduct && (
        <ProductModal product={selectedProduct} originRect={originRect} onClose={closeProduct} />
      )}
    </div>
  );
}
