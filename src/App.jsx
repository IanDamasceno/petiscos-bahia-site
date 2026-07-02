import { useEffect, useState } from "react";

import Header from "./components/layout/Header.jsx";
import Hero from "./components/layout/Hero.jsx";
import Footer from "./components/layout/Footer.jsx";
import ContactSection from "./components/layout/ContactSection.jsx";
import MenuSection from "./components/menu/MenuSection.jsx";
import ProductModal from "./components/menu/ProductModal.jsx";
import BackToTop from "./components/ui/BackToTop.jsx";
import Reveal from "./components/ui/Reveal.jsx";
import { PRODUCTS } from "./data/products.js";
import { CATEGORY_META } from "./components/icons/categoryIcons.js";

function byCategory(categoria) {
  return PRODUCTS.filter((p) => p.categoria === categoria);
}

export default function App() {
  const [selectedId, setSelectedId] = useState(null);

  // Permite abrir um item direto por URL: #produto/<id> (link compartilhável)
  useEffect(() => {
    const applyHash = () => {
      const match = window.location.hash.match(/^#produto\/(.+)$/);
      if (match && PRODUCTS.some((p) => p.id === match[1])) {
        setSelectedId(match[1]);
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openProduct = (product) => {
    setSelectedId(product.id);
    window.history.pushState(null, "", `#produto/${product.id}`);
  };

  const closeProduct = () => {
    setSelectedId(null);
    window.history.pushState(null, "", window.location.pathname + window.location.search);
  };

  const selectedProduct = PRODUCTS.find((p) => p.id === selectedId) || null;

  return (
    <div className="min-h-screen bg-preto text-creme scroll-smooth">
      <Header onNavigate={scrollTo} />
      <Hero onNavigate={scrollTo} />

      <main className="max-w-[1100px] mx-auto px-6">
        <div className="pt-14">
          <MenuSection
            id="frutosdomar"
            title="Frutos do Mar"
            icon={CATEGORY_META["Frutos do Mar"].icon}
            products={byCategory("Frutos do Mar")}
            columns={4}
            onOpenProduct={openProduct}
          />
        </div>

        <MenuSection
          id="bolinhos"
          title="Bolinhos & Croquetas"
          icon={CATEGORY_META["Bolinhos & Croquetas"].icon}
          products={byCategory("Bolinhos & Croquetas")}
          onOpenProduct={openProduct}
        />

        <MenuSection
          id="carnes"
          title="Carnes, Aves & Especiais"
          icon={CATEGORY_META["Carnes, Aves & Especiais"].icon}
          products={byCategory("Carnes, Aves & Especiais")}
          onOpenProduct={openProduct}
        />

        <Reveal className="my-16">
          <div className="bg-gradient-to-br from-vermelho-escuro to-vermelho rounded-2xl px-8 py-11 text-center">
            <h3 className="font-baloo text-2xl md:text-3xl text-amarelo-2 mb-2.5">
              A Pioneira da Verdadeira Comida de Boteco
            </h3>
            <p className="max-w-lg mx-auto text-creme">
              Do freezer direto para a fritadeira: praticidade sem abrir mão do sabor autêntico.
            </p>
          </div>
        </Reveal>

        <MenuSection
          id="sobremesa"
          title="Sobremesa"
          icon={CATEGORY_META["Sobremesa"].icon}
          products={byCategory("Sobremesa")}
          onOpenProduct={openProduct}
        />

        <MenuSection
          id="panko"
          title="Farinha Panko"
          icon={CATEGORY_META["Farinha Panko"].icon}
          products={byCategory("Farinha Panko")}
          onOpenProduct={openProduct}
        />

        <ContactSection />
      </main>

      <Footer />
      <BackToTop />

      {selectedProduct && <ProductModal product={selectedProduct} onClose={closeProduct} />}
    </div>
  );
}
