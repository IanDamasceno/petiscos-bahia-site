import { useRef } from "react";
import DoodleBorder from "../ui/DoodleBorder.jsx";

const PRODUTOS = [
  { n: "01", h: 776, alt: "Camafeu de Camarão (400g)" },
  { n: "02", h: 738, alt: "Bolinho de Salmão (350g)" },
  { n: "03", h: 774, alt: "Bolinho de Bacalhau 1kg" },
  { n: "04", h: 728, alt: "Pastel de Camarão (350g)" },
  { n: "05", h: 788, alt: "Pastel de Carne com Queijo (350g)" },
  { n: "06", h: 782, alt: "Croqueta de Cupim (350g)" },
  { n: "07", h: 789, alt: "Pimenta Recheada com Carne (350g)" },
  { n: "08", h: 774, alt: "Quibe Recheado (350g)" },
  { n: "09", h: 836, alt: "Disquinho de Costela com Cheddar e Bacon (350g)" },
  { n: "10", h: 782, alt: "Bolinho de Costela com Queijo (350g)" },
  { n: "11", h: 790, alt: "Bolinho BBQ (350g)" },
  { n: "12", h: 815, alt: "Bolinho de Mandioca com Carne Seca (350g)" },
  { n: "13", h: 827, alt: "Bolinho Lampião (350g)" },
  { n: "14", h: 774, alt: "Bolinho Caipira (350g)" },
  { n: "15", h: 826, alt: "Dadinho de Tapioca (350g)" },
  { n: "16", h: 768, alt: "Palitinho Mineiro (350g)" },
  { n: "17", h: 827, alt: "Asa Desossada Recheada com Queijo e Presunto (650g)" },
  { n: "18", h: 821, alt: "Moela de Frango (450g)" },
  { n: "19", h: 877, alt: "Panceta Rústica (450g)" },
  { n: "20", h: 815, alt: "Torresmo Pururuca 1kg" },
  { n: "21", h: 875, alt: "Petit Gateau (100g)" },
  { n: "22", h: 749, alt: "Farinha Panko (1kg)" },
  { n: "23", h: 1020, alt: "Farinha Panko Fina Romariz (1kg)" },
  { n: "24", h: 1036, alt: "Ligante Romariz 1kg" },
  { n: "25", h: 929, alt: "Batata Desidratada Romariz 1kg" },
  { n: "26", h: 892, alt: "Creme de Pimenta Mexicana (150ml)" },
  { n: "27", h: 845, alt: "Pimenta Carolina Reaper (150ml)" },
];

const DIR = "/images/catalogo-grade";

export default function Catalogo() {
  const contentRef = useRef(null);

  return (
    <section id="cardapio" aria-label="Catálogo de produtos" className="relative px-4 md:px-6 lg:px-28 pt-10 pb-16">
      <DoodleBorder contentRef={contentRef} />
      <div ref={contentRef} className="relative z-10">
        <img
          src={`${DIR}/cabecalho.webp`}
          alt="Petiscos & Cia Alimentos"
          width={1305}
          height={372}
          className="block w-full max-w-[520px] h-auto mx-auto mb-10"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-8 gap-y-10 items-start">
          {PRODUTOS.map((p) => (
            <img
              key={p.n}
              src={`${DIR}/produto-${p.n}.webp`}
              alt={p.alt}
              width={900}
              height={p.h}
              loading="lazy"
              decoding="async"
              className="block w-full h-auto"
            />
          ))}
        </div>
        <img
          src={`${DIR}/tabela.webp`}
          alt="Tabela de preços"
          width={1680}
          height={2196}
          loading="lazy"
          decoding="async"
          className="block w-full max-w-[900px] h-auto mx-auto mt-16"
        />
      </div>
    </section>
  );
}
