import { useEffect, useState } from "react";

/**
 * Retorna `true` quando a tela é estreita (abaixo do breakpoint `sm`
 * do Tailwind, 640px) e `false` caso contrário — atualiza sozinho se
 * a janela for redimensionada.
 */
export function useIsMobile(breakpointPx = 640) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < breakpointPx
  );

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpointPx - 1}px)`);
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [breakpointPx]);

  return isMobile;
}
