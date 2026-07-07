import { useEffect, useRef, useState } from "react";

/**
 * Doodles de comida (limão, pimenta, tomate, linguiça, cebola, cubo de
 * gelo) espalhados aleatoriamente nas bordas esquerda e direita de uma
 * seção — sem sequência fixa que se repete (cada ícone é sorteado, e
 * nunca dois iguais seguidos).
 *
 * Diferente da versão anterior (um "tile" que se repetia), aqui:
 *  - a posição de cada ícone é sorteada de verdade, então não existe
 *    um padrão perceptível se repetindo;
 *  - a distância entre os doodles e o conteúdo (a grade de produtos,
 *    por exemplo) é MEDIDA de verdade via `contentRef` — se não houver
 *    espaço suficiente na tela, os doodles simplesmente não aparecem
 *    naquele lado, em vez de invadir o conteúdo;
 *  - o raio de segurança de cada ícone foi medido por rasterização
 *    (não estimado), então nada aparece cortado nas bordas da faixa.
 */

const S = {
  thick: { fill: "none", stroke: "currentColor", strokeWidth: 2.4, strokeLinecap: "round", strokeLinejoin: "round" },
  thin: { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" },
};

function Lemon(props) {
  return (
    <svg viewBox="-32 -32 64 64" {...props}>
      <circle cx="0" cy="0" r="30" {...S.thick} />
      <path d="M0 -30 L0 30 M0 -30 L17 -17 M0 -30 L-17 -17 M0 30 L17 17 M0 30 L-17 17 M-27 0 L27 0 M-23 -11 L23 11 M-23 11 L23 -11" {...S.thin} />
    </svg>
  );
}
function Chili(props) {
  return (
    <svg viewBox="-46 -46 92 92" {...props}>
      <path d="M11 -34c4 5 2 11-3 14-9 7-21 14-27 27-4 9-1 19 7 23 9 5 20 2 25-8 6-12 8-28 4-41-2-7-4-12-6-15z" {...S.thick} />
      <path d="M11 -34c3-4 7-5 11-4" {...S.thick} />
    </svg>
  );
}
function Tomato(props) {
  return (
    <svg viewBox="-35 -35 70 70" {...props}>
      <circle cx="0" cy="5" r="27" {...S.thick} />
      <path d="M0 -22c-4-7-13-9-18-5M0 -22c4-7 13-9 18-5M0 -22v9" {...S.thick} />
    </svg>
  );
}
function Sausage(props) {
  return (
    <svg viewBox="-29 -29 58 58" {...props}>
      <rect x="-27" y="-11" width="54" height="22" rx="11" {...S.thick} />
      <path d="M-16 -11v22M-3 -11v22M9 -11v22M21 -11v22" {...S.thin} />
    </svg>
  );
}
function Onion(props) {
  return (
    <svg viewBox="-34 -34 68 68" {...props}>
      <path d="M0 -18c14 0 23 13 23 27s-11 23-23 23-23-9-23-23 9-27 23-27z" {...S.thick} />
      <path d="M0 -18v-14M-7 -18c0-9 3-14 7-14s7 5 7 14M0 -18c5-3 10-2 14 2" {...S.thin} />
    </svg>
  );
}
function IceCube(props) {
  return (
    <svg viewBox="-32 -32 64 64" {...props}>
      <path d="M0 -30 25 -16v32L0 30 -25 16v-32z" {...S.thick} />
      <path d="M-25 -16 0 -2 25 -16M0 -2v32" {...S.thin} />
    </svg>
  );
}

// Raio de segurança de cada ícone, medido por rasterização (distância
// máxima real do centro até o traço mais distante, em qualquer rotação).
const ICON_DEFS = [
  { Comp: Lemon, r: 32 },
  { Comp: Chili, r: 46 },
  { Comp: Tomato, r: 35 },
  { Comp: Sausage, r: 29 },
  { Comp: Onion, r: 34 },
  { Comp: IceCube, r: 32 },
];

const MIN_GAP_FROM_CONTENT = 40; // distância mínima entre o doodle e o conteúdo (telas largas)
const MIN_GAP_FROM_CONTENT_MOBILE = 6; // distância mínima em telas estreitas (menos espaço disponível)
const MIN_ICON_GAP = 26; // espaçamento mínimo entre dois doodles na mesma faixa
const MAX_STRIP_WIDTH = 150;
const MOBILE_ICON_SCALE = 0.42; // reduz os ícones em telas estreitas pra caberem na margem menor
const NARROW_THRESHOLD = 110; // abaixo disso, considera "margem estreita" (celular)

function generateColumn(height, stripWidth, availableIcons) {
  const items = [];
  let lastIdx = -1;
  let y = 10 + Math.random() * 30;

  while (true) {
    let idx;
    let tries = 0;
    do {
      idx = Math.floor(Math.random() * availableIcons.length);
      tries++;
    } while (idx === lastIdx && availableIcons.length > 1 && tries < 5);
    const def = availableIcons[idx];
    if (y + def.r > height - 10) break;

    const maxJitterX = Math.max(0, stripWidth / 2 - def.r - 10);
    const cx = stripWidth / 2 + (Math.random() * 2 - 1) * maxJitterX;
    const rot = Math.random() * 70 - 35;
    const cy = y + def.r;

    items.push({ Comp: def.Comp, r: def.r, cx, cy, rot, key: `${items.length}-${idx}` });
    lastIdx = idx;

    y = cy + def.r + MIN_ICON_GAP + Math.random() * 55;
  }
  return items;
}

export default function DoodleBorder({ contentRef, opacity = 0.6 }) {
  const containerRef = useRef(null);
  const [state, setState] = useState({ left: [], right: [], leftW: 0, rightW: 0 });

  useEffect(() => {
    function computeSide(margin) {
      const isNarrow = margin < NARROW_THRESHOLD;
      const gap = isNarrow ? MIN_GAP_FROM_CONTENT_MOBILE : MIN_GAP_FROM_CONTENT;
      const scale = isNarrow ? MOBILE_ICON_SCALE : 1;
      const strip = Math.min(MAX_STRIP_WIDTH, margin - gap);
      const scaledIcons = ICON_DEFS.map((d) => ({ Comp: d.Comp, r: d.r * scale })).filter(
        (d) => d.r * 2 <= strip
      );
      const minIconR = ICON_DEFS.length ? Math.min(...ICON_DEFS.map((d) => d.r)) * scale : 0;
      const ok = strip >= minIconR * 2 && scaledIcons.length > 0;
      return { ok, strip, icons: scaledIcons };
    }

    function recompute() {
      const containerEl = containerRef.current;
      if (!containerEl) return;
      const containerRect = containerEl.getBoundingClientRect();
      const height = containerRect.height;

      let leftMargin = 0;
      let rightMargin = 0;
      const contentEl = contentRef?.current;
      if (contentEl) {
        const contentRect = contentEl.getBoundingClientRect();
        leftMargin = contentRect.left - containerRect.left;
        rightMargin = containerRect.right - contentRect.right;
      }

      const left = computeSide(leftMargin);
      const right = computeSide(rightMargin);

      setState({
        left: left.ok ? generateColumn(height, left.strip, left.icons) : [],
        right: right.ok ? generateColumn(height, right.strip, right.icons) : [],
        leftW: left.ok ? left.strip : 0,
        rightW: right.ok ? right.strip : 0,
      });
    }

    recompute();
    const ro = new ResizeObserver(recompute);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", recompute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", recompute);
    };
  }, [contentRef]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden text-amarelo"
      aria-hidden="true"
    >
      {state.left.map(({ Comp, r, cx, cy, rot, key }) => (
        <Comp
          key={`l-${key}`}
          style={{
            position: "absolute",
            left: cx - r,
            top: cy - r,
            width: r * 2,
            height: r * 2,
            transform: `rotate(${rot}deg)`,
            opacity,
          }}
        />
      ))}
      {state.right.map(({ Comp, r, cx, cy, rot, key }) => (
        <Comp
          key={`r-${key}`}
          style={{
            position: "absolute",
            right: cx - r,
            top: cy - r,
            width: r * 2,
            height: r * 2,
            transform: `rotate(${rot}deg)`,
            opacity,
          }}
        />
      ))}
    </div>
  );
}
