import React, { useEffect, useRef, useState, useCallback } from 'react';

const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  const createObserver = useCallback(() => {
    return new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });
  }, []);

  useEffect(() => {
    const observer = createObserver();
    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, [createObserver]);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
