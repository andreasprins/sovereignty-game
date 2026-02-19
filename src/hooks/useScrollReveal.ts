import { useEffect, useRef, useState, useCallback } from 'react';

export function useScrollReveal() {
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<Set<HTMLElement>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = entry.target.getAttribute('data-reveal') || '';
            setRevealed((prev) => {
              if (prev.has(key)) return prev;
              const next = new Set(prev);
              next.add(key);
              return next;
            });
          }
        });
      },
      { threshold: 0.05 }
    );

    observerRef.current = observer;

    elementsRef.current.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      observerRef.current = null;
    };
  }, []);

  const ref = useCallback((el: HTMLElement | null) => {
    if (!el) return;
    elementsRef.current.add(el);
    if (observerRef.current) {
      observerRef.current.observe(el);
    }
  }, []);

  return { revealed, ref };
}
