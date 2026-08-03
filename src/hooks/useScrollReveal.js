import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Cuando entra a la pantalla, se muestra
          element.classList.add('reveal-visible');
        } else {
          // Cuando sale de la pantalla, se oculta para reanimar al volver
          element.classList.remove('reveal-visible');
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return ref;
}