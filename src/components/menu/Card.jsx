import { useRef } from "react";
import Reveal from "../ui/Reveal.jsx";
import { useIsMobile } from "../../hooks/useIsMobile.js";

export default function Card({ product, delay, onOpen }) {
  const cardRef = useRef(null);
  const isMobile = useIsMobile();

  const handleClick = () => {
    if (!isMobile) return;
    const rect = cardRef.current?.getBoundingClientRect();
    onOpen(product, rect);
  };

  const content = (
    <>
      <div className="w-full aspect-[4/3] bg-preto-2 flex items-center justify-center overflow-hidden">
        <img
          src={`/images/${product.id}.jpg`}
          alt={product.title}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="p-3 sm:p-5">
        {product.peso && (
          <span className="inline-block bg-vermelho-escuro text-amarelo-2 text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full mb-1.5 sm:mb-2.5 tracking-wide">
            {product.peso}
          </span>
        )}
        <h4 className="font-baloo text-creme text-sm sm:text-lg leading-tight mb-1 sm:mb-1.5">
          {product.title}
        </h4>
        <p className="hidden sm:block text-sm text-creme-suave leading-relaxed">{product.desc}</p>
        <p className="sm:hidden text-xs font-semibold text-amarelo uppercase tracking-wide">
          Ver detalhes
        </p>
      </div>
    </>
  );

  if (isMobile) {
    return (
      <Reveal delay={delay} className="h-full">
        <button
          ref={cardRef}
          onClick={handleClick}
          className="flex flex-col text-left bg-preto-2 border border-[#2c2a31] rounded-xl overflow-hidden h-full w-full cursor-pointer hover:border-amarelo transition-colors"
        >
          {content}
        </button>
      </Reveal>
    );
  }

  return (
    <Reveal delay={delay} className="h-full">
      <div
        ref={cardRef}
        className="flex flex-col bg-preto-2 border border-[#2c2a31] rounded-xl overflow-hidden h-full w-full"
      >
        {content}
      </div>
    </Reveal>
  );
}
