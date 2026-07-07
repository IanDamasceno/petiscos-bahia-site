import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { X } from "lucide-react";

/**
 * Modal de detalhes do produto.
 *
 * - Mostra só a imagem em cima e as MESMAS informações que já aparecem
 *   no card (peso, título, descrição) — nada de campos extras/inventados.
 * - Abre com uma animação de "crescer a partir do próprio card": o
 *   painel nasce exatamente no tamanho/posição do card clicado (usando
 *   o rect que veio do Card) e anima até o tamanho final centralizado.
 *   Fechar faz o caminho inverso, encolhendo de volta pro card.
 */
export default function ProductModal({ product, originRect, onClose }) {
  const panelRef = useRef(null);
  const [closing, setClosing] = useState(false);

  const applyTransformFromOrigin = (panel) => {
    if (!originRect) return null;
    const finalRect = panel.getBoundingClientRect();
    const scaleX = originRect.width / finalRect.width;
    const scaleY = originRect.height / finalRect.height;
    const originCenterX = originRect.left + originRect.width / 2;
    const originCenterY = originRect.top + originRect.height / 2;
    const finalCenterX = finalRect.left + finalRect.width / 2;
    const finalCenterY = finalRect.top + finalRect.height / 2;
    const translateX = originCenterX - finalCenterX;
    const translateY = originCenterY - finalCenterY;
    return `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`;
  };

  useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    if (!originRect) {
      panel.style.opacity = "1";
      return;
    }

    const startTransform = applyTransformFromOrigin(panel);
    panel.style.transition = "none";
    panel.style.transform = startTransform;
    panel.style.opacity = "0.5";
    // força o navegador a aplicar o estado inicial antes de animar
    panel.getBoundingClientRect();

    requestAnimationFrame(() => {
      panel.style.transition = "transform 0.38s cubic-bezier(0.22,0.9,0.3,1), opacity 0.28s ease-out";
      panel.style.transform = "translate(0px, 0px) scale(1, 1)";
      panel.style.opacity = "1";
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    const panel = panelRef.current;
    if (panel && originRect && !closing) {
      setClosing(true);
      const backTransform = applyTransformFromOrigin(panel);
      panel.style.transition = "transform 0.3s cubic-bezier(0.4,0,0.6,1), opacity 0.25s ease-in";
      panel.style.transform = backTransform;
      panel.style.opacity = "0.4";
      setTimeout(onClose, 260);
    } else {
      onClose();
    }
  };

  if (!product) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 transition-opacity duration-300 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label={product.title}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
      <div
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md max-h-[85vh] overflow-y-auto bg-preto-2 border border-[#2c2a31] rounded-2xl shadow-2xl"
        style={{ willChange: "transform, opacity" }}
      >
        <button
          onClick={handleClose}
          aria-label="Fechar"
          className="absolute top-3 right-3 z-10 bg-black/50 hover:bg-amarelo hover:text-preto text-creme rounded-full p-2 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="w-full aspect-[4/3] bg-preto-2 flex items-center justify-center overflow-hidden">
          <img
            src={`/images/${product.id}.jpg`}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="p-6">
          {product.peso && (
            <span className="inline-block bg-vermelho-escuro text-amarelo-2 text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wide">
              {product.peso}
            </span>
          )}
          <h3 className="font-baloo text-2xl text-amarelo mb-3">{product.title}</h3>
          <p className="text-creme-suave leading-relaxed">{product.desc}</p>
        </div>
      </div>
    </div>
  );
}
