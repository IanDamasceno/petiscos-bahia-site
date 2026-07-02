import { useEffect } from "react";
import { X, Flame, Snowflake, List, MessageCircle } from "lucide-react";
import { GENERIC_INFO } from "../../data/products.js";

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!product) return null;

  const modoPreparo = product.modoPreparo || GENERIC_INFO.modoPreparo;
  const conservacao = product.conservacao || GENERIC_INFO.conservacao;
  const ingredientes = product.ingredientes || GENERIC_INFO.ingredientes;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={product.title}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm animate-modal-fade-in" />
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-preto-2 border border-[#2c2a31] rounded-2xl shadow-2xl animate-modal-scale-in"
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-amarelo hover:text-preto text-creme rounded-full p-2 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="w-full h-56 md:h-72 overflow-hidden bg-[#0d0c0f]">
          <img
            src={`/images/${product.id}.jpg`}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 md:p-8">
          <span className="text-vermelho font-bold text-xs tracking-[2px] uppercase">
            {product.categoria}
          </span>
          <div className="flex items-center gap-3 flex-wrap mt-2 mb-4">
            <h3 className="font-baloo text-2xl md:text-3xl text-amarelo">{product.title}</h3>
            {product.peso && (
              <span className="inline-block bg-vermelho-escuro text-amarelo-2 text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                {product.peso}
              </span>
            )}
          </div>

          <p className="text-creme leading-relaxed mb-6">{product.desc}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-preto border border-[#2c2a31] rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Flame size={17} className="text-vermelho" />
                <h5 className="font-baloo text-sm text-amarelo tracking-wide">Modo de Preparo</h5>
              </div>
              <p className="text-sm text-creme-suave leading-relaxed">{modoPreparo}</p>
            </div>
            <div className="bg-preto border border-[#2c2a31] rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Snowflake size={17} className="text-amarelo" />
                <h5 className="font-baloo text-sm text-amarelo tracking-wide">Conservação</h5>
              </div>
              <p className="text-sm text-creme-suave leading-relaxed">{conservacao}</p>
            </div>
            <div className="bg-preto border border-[#2c2a31] rounded-xl p-4 sm:col-span-2">
              <div className="flex items-center gap-2 mb-2">
                <List size={17} className="text-amarelo" />
                <h5 className="font-baloo text-sm text-amarelo tracking-wide">Ingredientes</h5>
              </div>
              <p className="text-sm text-creme-suave leading-relaxed">{ingredientes}</p>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap mt-7">
            <a
              href={`https://wa.me/5573999129091?text=${encodeURIComponent(
                "Olá! Gostaria de pedir: " + product.title
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-preto font-bold px-5 py-2.5 rounded-full text-sm hover:brightness-110 transition"
            >
              <MessageCircle size={18} /> Pedir pelo WhatsApp
            </a>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 border-2 border-[#2c2a31] text-creme font-semibold px-5 py-2.5 rounded-full text-sm hover:border-amarelo hover:text-amarelo transition"
            >
              Voltar ao cardápio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
