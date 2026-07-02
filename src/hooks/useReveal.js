import { useEffect, useRef, useState } from "react";

/**
 * Hook que retorna [ref, visible]. Anexe `ref` a um elemento e `visible`
 * vira `true` assim que o elemento entra na tela (usa IntersectionObserver).
 * Usado para as animações de "revelar ao rolar a página".
 */
export function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}
