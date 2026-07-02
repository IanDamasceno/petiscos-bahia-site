import Reveal from "../ui/Reveal.jsx";

export default function Card({ product, delay, onOpen }) {
  return (
    <Reveal delay={delay}>
      <button
        onClick={() => onOpen(product)}
        className="group relative bg-preto-2 border border-[#2c2a31] rounded-xl overflow-hidden h-full w-full text-left hover:-translate-y-1.5 hover:border-amarelo hover:shadow-[0_14px_30px_rgba(0,0,0,0.4)] transition-all duration-300 cursor-pointer"
      >
        <div className="w-full h-40 overflow-hidden bg-[#0d0c0f] relative">
          <img
            src={`/images/${product.id}.jpg`}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <span className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 text-amarelo text-xs font-bold tracking-wide uppercase bg-black/60 px-3 py-1.5 rounded-full">
              Ver detalhes
            </span>
          </span>
        </div>
        <div className="p-5">
          {product.peso && (
            <span className="inline-block bg-vermelho-escuro text-amarelo-2 text-[11px] font-bold px-2.5 py-1 rounded-full mb-2.5 tracking-wide">
              {product.peso}
            </span>
          )}
          <h4 className="font-baloo text-creme text-lg leading-tight mb-1.5 group-hover:text-amarelo transition-colors">
            {product.title}
          </h4>
          <p className="text-sm text-creme-suave leading-relaxed">{product.desc}</p>
        </div>
      </button>
    </Reveal>
  );
}
