import { DOODLE_ICONS } from "../icons/FoodDoodles.jsx";

/**
 * Camada de fundo com os doodles de comida (limão, pimenta, tomate,
 * linguiça, cebola, cubo de gelo) espalhados pela tela, no mesmo
 * espírito das ilustrações que decoram o catálogo original em PDF.
 *
 * Usado de forma "escopada": um dentro do Hero, outro dentro do bloco
 * do cardápio — por isso é `position:absolute` (preenche o container
 * pai, que precisa ter `position:relative`), e não aparece no
 * cabeçalho nem no rodapé.
 */

// Layout usado dentro do Hero (seção mais curta)
export const HERO_LAYOUT = [
  { top: "4%", left: "3%", size: 95, rotate: -12, opacity: 0.36 },
  { top: "8%", left: "89%", size: 80, rotate: 18, opacity: 0.34 },
  { top: "26%", left: "10%", size: 55, rotate: 24, opacity: 0.3 },
  { top: "30%", left: "96%", size: 60, rotate: -22, opacity: 0.3 },
  { top: "42%", left: "1%", size: 60, rotate: 8, opacity: 0.3 },
  { top: "42%", left: "95%", size: 65, rotate: -6, opacity: 0.32 },
  { top: "58%", left: "8%", size: 55, rotate: 16, opacity: 0.28 },
  { top: "60%", left: "90%", size: 50, rotate: -14, opacity: 0.28 },
  { top: "74%", left: "5%", size: 90, rotate: 10, opacity: 0.34 },
  { top: "78%", left: "91%", size: 78, rotate: -16, opacity: 0.34 },
  { top: "86%", left: "12%", size: 50, rotate: -8, opacity: 0.26 },
  { top: "86%", left: "84%", size: 55, rotate: 20, opacity: 0.26 },
];

// Layout usado atrás do cardápio (bloco bem mais alto, doodles repetidos ao longo dele)
export const MENU_LAYOUT = [
  { top: "0.0%", left: "6%", size: 55, rotate: -8, opacity: 0.26 },
  { top: "2.6%", left: "95%", size: 50, rotate: -16, opacity: 0.34 },
  { top: "5.3%", left: "12%", size: 88, rotate: 14, opacity: 0.24 },
  { top: "7.9%", left: "98%", size: 55, rotate: -18, opacity: 0.26 },
  { top: "10.5%", left: "12%", size: 65, rotate: -24, opacity: 0.32 },
  { top: "13.2%", left: "95%", size: 88, rotate: 22, opacity: 0.3 },
  { top: "15.8%", left: "12%", size: 65, rotate: -6, opacity: 0.36 },
  { top: "18.4%", left: "98%", size: 85, rotate: -12, opacity: 0.34 },
  { top: "21.1%", left: "6%", size: 80, rotate: -14, opacity: 0.26 },
  { top: "23.7%", left: "92%", size: 75, rotate: -16, opacity: 0.24 },
  { top: "26.3%", left: "6%", size: 80, rotate: 10, opacity: 0.32 },
  { top: "28.9%", left: "92%", size: 55, rotate: -20, opacity: 0.34 },
  { top: "31.6%", left: "2%", size: 85, rotate: 12, opacity: 0.24 },
  { top: "34.2%", left: "86%", size: 88, rotate: 6, opacity: 0.36 },
  { top: "36.8%", left: "2%", size: 75, rotate: -20, opacity: 0.34 },
  { top: "39.5%", left: "95%", size: 65, rotate: 6, opacity: 0.24 },
  { top: "42.1%", left: "9%", size: 65, rotate: -6, opacity: 0.3 },
  { top: "44.7%", left: "92%", size: 55, rotate: -12, opacity: 0.28 },
  { top: "47.4%", left: "6%", size: 75, rotate: -18, opacity: 0.32 },
  { top: "50.0%", left: "95%", size: 65, rotate: 22, opacity: 0.34 },
  { top: "52.6%", left: "9%", size: 65, rotate: 12, opacity: 0.28 },
  { top: "55.3%", left: "86%", size: 60, rotate: -8, opacity: 0.34 },
  { top: "57.9%", left: "4%", size: 75, rotate: -20, opacity: 0.36 },
  { top: "60.5%", left: "92%", size: 50, rotate: 12, opacity: 0.28 },
  { top: "63.2%", left: "12%", size: 55, rotate: 8, opacity: 0.26 },
  { top: "65.8%", left: "89%", size: 65, rotate: 12, opacity: 0.34 },
  { top: "68.4%", left: "6%", size: 85, rotate: -14, opacity: 0.26 },
  { top: "71.1%", left: "86%", size: 60, rotate: 22, opacity: 0.28 },
  { top: "73.7%", left: "6%", size: 80, rotate: -8, opacity: 0.26 },
  { top: "76.3%", left: "86%", size: 80, rotate: 18, opacity: 0.24 },
  { top: "78.9%", left: "4%", size: 50, rotate: -12, opacity: 0.36 },
  { top: "81.6%", left: "89%", size: 55, rotate: -18, opacity: 0.3 },
  { top: "84.2%", left: "12%", size: 80, rotate: -6, opacity: 0.32 },
  { top: "86.8%", left: "98%", size: 85, rotate: -16, opacity: 0.34 },
  { top: "89.5%", left: "6%", size: 88, rotate: -16, opacity: 0.28 },
  { top: "90.5%", left: "89%", size: 60, rotate: -12, opacity: 0.3 },
  { top: "92.5%", left: "12%", size: 50, rotate: -12, opacity: 0.32 },
  { top: "91.5%", left: "97%", size: 55, rotate: 6, opacity: 0.36 },
  { top: "93.5%", left: "5%", size: 55, rotate: 10, opacity: 0.36 },
  { top: "93%", left: "90%", size: 50, rotate: 22, opacity: 0.36 },
];

// Layout usado atrás da seção de contato
export const CONTACT_LAYOUT = [
  { top: "2%", left: "3%", size: 80, rotate: -12, opacity: 0.3 },
  { top: "8%", left: "92%", size: 65, rotate: 18, opacity: 0.28 },
  { top: "35%", left: "8%", size: 55, rotate: 10, opacity: 0.24 },
  { top: "38%", left: "88%", size: 60, rotate: -18, opacity: 0.26 },
  { top: "62%", left: "4%", size: 70, rotate: -8, opacity: 0.28 },
  { top: "65%", left: "94%", size: 58, rotate: 14, opacity: 0.26 },
  { top: "76%", left: "10%", size: 60, rotate: 20, opacity: 0.26 },
  { top: "75%", left: "86%", size: 65, rotate: -16, opacity: 0.28 },
];

export default function DoodleBackground({ layout = MENU_LAYOUT }) {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden text-amarelo"
      aria-hidden="true"
    >
      {layout.map((item, i) => {
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

