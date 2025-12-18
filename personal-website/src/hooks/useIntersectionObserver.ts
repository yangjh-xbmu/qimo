import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = <T extends HTMLElement = HTMLDivElement>(options = {}) => {
  const elementRef = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(currentElement);
      }
    }, {
      threshold: 0.1,
      ...options,
    });

    observer.observe(currentElement);

    return () => {
      observer.unobserve(currentElement);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  return { elementRef, isVisible };
};
