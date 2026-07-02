import { DOODLE_ICONS } from "../icons/FoodDoodles.jsx";

/**
 * Camada de fundo com os doodles de comida (limão, pimenta, tomate,
 * linguiça, cebola, cubo de gelo) espalhados pela tela, no mesmo
 * espírito das ilustrações que decoram o catálogo original em PDF.
 *
 * É "fixed" (fica parado atrás do conteúdo enquanto rola a página) e
 * não interfere no clique (pointer-events-none), então é só decoração.
 */
const LAYOUT = [
  { top: "4%", left: "3%", size: 70, rotate: -12, opacity: 0.16 },
  { top: "10%", left: "90%", size: 60, rotate: 18, opacity: 0.14 },
  { top: "24%", left: "8%", size: 50, rotate: 8, opacity: 0.12 },
  { top: "30%", left: "94%", size: 80, rotate: -20, opacity: 0.15 },
  { top: "46%", left: "2%", size: 65, rotate: 15, opacity: 0.13 },
  { top: "55%", left: "92%", size: 55, rotate: -8, opacity: 0.14 },
  { top: "68%", left: "6%", size: 75, rotate: -18, opacity: 0.12 },
  { top: "76%", left: "90%", size: 60, rotate: 10, opacity: 0.15 },
  { top: "88%", left: "4%", size: 55, rotate: 22, opacity: 0.13 },
  { top: "94%", left: "88%", size: 70, rotate: -14, opacity: 0.14 },
  { top: "62%", left: "50%", size: 45, rotate: 6, opacity: 0.08 },
  { top: "16%", left: "50%", size: 40, rotate: -10, opacity: 0.08 },
];

export default function DoodleBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden text-amarelo"
      aria-hidden="true"
    >
      {LAYOUT.map((item, i) => {
        const Icon = DOODLE_ICONS[i % DOODLE_ICONS.length];
        return (
          <Icon
            key={i}
            style={{
              position: "absolute",
              top: item.top,
              left: item.left,
              width: item.size,
              height: item.size,
              opacity: item.opacity,
              transform: `rotate(${item.rotate}deg)`,
            }}
          />
        );
      })}
    </div>
  );
}
