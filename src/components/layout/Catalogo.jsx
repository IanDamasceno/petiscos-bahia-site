import { useRef } from "react";
import DoodleBorder from "../ui/DoodleBorder.jsx";

const PAGINAS = [
  { n: "03", h: 1965, alt: "Camafeu de Camarão, Bolinho de Salmão e Bolinho de Bacalhau" },
  { n: "04", h: 1840, alt: "Pastel de Camarão, Pastel de Carne com Queijo, Croqueta de Cupim e Pimenta Recheada com Carne" },
  { n: "05", h: 1839, alt: "Quibe Recheado, Disquinho de Costela com Cheddar e Bacon, Bolinho de Costela com Queijo e Bolinho BBQ" },
  { n: "06", h: 1839, alt: "Bolinho de Mandioca com Carne Seca, Bolinho Lampião, Bolinho Caipira e Dadinho de Tapioca" },
  { n: "07", h: 1839, alt: "Palitinho Mineiro, Asa Desossada Recheada com Queijo e Presunto, Moela de Frango e Panceta Rústica" },
  { n: "08", h: 1938, alt: "Torresmo Pururuca, Petit Gateau, Farinha Panko e Farinha Panko Fina Romariz" },
  { n: "09", h: 1914, alt: "Ligante Romariz, Batata Desidratada Romariz, Creme de Pimenta Mexicana e Pimenta Carolina Reaper" },
  { n: "10", h: 1861, alt: "Tabela de preços" },
];

export default function Catalogo() {
  const contentRef = useRef(null);

  return (
    <section id="cardapio" aria-label="Catálogo de produtos" className="relative lg:px-28">
      <DoodleBorder contentRef={contentRef} />
      <div ref={contentRef} className="relative z-10">
        {PAGINAS.map((p, i) => (
          <img
            key={p.n}
            src={`/images/catalogo/pagina-${p.n}.webp`}
            alt={p.alt}
            width={1486}
            height={p.h}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            className="block w-full h-auto"
          />
        ))}
      </div>
    </section>
  );
}
