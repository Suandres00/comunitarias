import { useState, useCallback, useEffect } from 'react';

export function useScrollReveal() {
  const [element, setElement] = useState(null);

  const ref = useCallback((node) => {
    if (node) {
      setElement(node);
    }
  }, []);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('reveal-visible');
          observer.unobserve(element);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [element]);

  return ref;
}