/**
 * Ícones decorativos (doodles) inspirados nas ilustrações que aparecem
 * ao redor do catálogo original: limão, pimenta, tomate, linguiça,
 * cebola e cubo de gelo. Usados como padrão de fundo pelo componente
 * <DoodleBackground />.
 */

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function LemonDoodle(props) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <circle cx="50" cy="50" r="34" {...common} />
      <path d="M50 20 L50 80 M50 20 L69 31 M50 20 L31 31 M50 80 L69 69 M50 80 L31 69 M20 50 L80 50 M24 38 L76 62 M24 62 L76 38" {...common} strokeWidth="1" />
    </svg>
  );
}

export function ChiliDoodle(props) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <path
        d="M62 12c4 6 2 12-3 16-10 8-24 16-30 30-4 10-1 21 8 26 10 6 22 2 28-9 7-13 9-31 5-46-2-8-5-13-8-17z"
        {...common}
      />
      <path d="M62 12c3-4 8-6 12-4" {...common} />
    </svg>
  );
}

export function TomatoDoodle(props) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <circle cx="50" cy="56" r="30" {...common} />
      <path d="M50 26c-4-8-14-10-20-6M50 26c4-8 14-10 20-6M50 26v10" {...common} />
    </svg>
  );
}

export function SausageDoodle(props) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <rect x="20" y="38" width="60" height="24" rx="12" {...common} />
      <path d="M32 38v24M46 38v24M60 38v24M74 38v24" {...common} strokeWidth="1" />
    </svg>
  );
}

export function OnionDoodle(props) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <path d="M50 30c16 0 26 14 26 30s-12 26-26 26-26-10-26-26 10-30 26-30z" {...common} />
      <path d="M50 30V14M42 30c0-10 4-16 8-16s8 6 8 16M50 30c6-3 12-2 16 2" {...common} strokeWidth="1" />
    </svg>
  );
}

export function IceCubeDoodle(props) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <path d="M50 16 78 32v36L50 84 22 68V32z" {...common} />
      <path d="M22 32 50 48 78 32M50 48v36" {...common} strokeWidth="1" />
    </svg>
  );
}

export const DOODLE_ICONS = [
  LemonDoodle,
  ChiliDoodle,
  TomatoDoodle,
  SausageDoodle,
  OnionDoodle,
  IceCubeDoodle,
];
