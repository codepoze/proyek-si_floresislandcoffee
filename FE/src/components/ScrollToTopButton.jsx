import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [buttonRef, setButtonRef] = useState(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    if (!buttonRef) return;

    if (isVisible) {
      gsap.to(buttonRef, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'back.out(1.7)',
        pointerEvents: 'auto'
      });
    } else {
      gsap.to(buttonRef, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: 'power2.out',
        pointerEvents: 'none'
      });
    }
  }, [isVisible, buttonRef]);

  const scrollToTop = () => {
    // Add a little bounce animation on click
    if (buttonRef) {
      gsap.to(buttonRef, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut'
      });
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      ref={setButtonRef}
      onClick={scrollToTop}
      className="fixed right-6 bottom-6 z-40 w-14 h-14 bg-flores-primary hover:bg-flores-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      style={{ 
        opacity: 0, 
        transform: 'scale(0.8)',
        pointerEvents: 'none'
      }}
      aria-label="Scroll to top"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-flores-primary rounded-full opacity-0 group-hover:opacity-20 scale-150 transition-all duration-500"></div>
      
      {/* Icon */}
      <ChevronUpIcon className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-200" />
      
      {/* Ripple effect on hover */}
      <div className="absolute inset-0 rounded-full border-2 border-flores-primary opacity-0 group-hover:opacity-30 group-hover:scale-125 transition-all duration-300"></div>
    </button>
  );
}

export default ScrollToTopButton;