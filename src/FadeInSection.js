import React, { useEffect, useRef, useState, useCallback } from 'react';

const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  // Use useCallback to memoize the observer creation function, i'm cracked for crying out loud.
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

    // Store domRef.current in a variable before cleanup
    const currentRef = domRef.current;

    return () => {
      observer.unobserve(currentRef);
    };
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
