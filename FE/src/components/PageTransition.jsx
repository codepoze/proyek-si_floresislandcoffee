import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { gsap } from 'gsap';
import LoadingScreen from './LoadingScreen';

function PageTransition({ children }) {
  const location = useLocation();
  const containerRef = useRef();
  const overlayRef = useRef();
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [showLoading, setShowLoading] = useState(true);

  // Handle initial loading screen
  const handleLoadingComplete = () => {
    setShowLoading(false);
    setIsInitialLoad(false);
    
    // Start page entrance animation after loading screen
    setTimeout(() => {
      const container = containerRef.current;
      if (!container) return;

      gsap.fromTo(container, 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: 'power2.out' 
        }
      );
    }, 100);
  };

  // Handle subsequent page transitions
  useEffect(() => {
    // Skip transition animation on initial load
    if (isInitialLoad) return;

    const container = containerRef.current;
    const overlay = overlayRef.current;
    
    if (!container || !overlay) return;

    // Page transition animation for route changes
    const tl = gsap.timeline();
    
    // Start with page hidden
    gsap.set(container, { opacity: 0, y: 20 });
    gsap.set(overlay, { scaleY: 1, transformOrigin: 'top' });
    
    // Animate overlay out and page in
    tl.to(overlay, {
      scaleY: 0,
      duration: 0.6,
      ease: 'power2.inOut',
    })
    .to(container, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
    }, '-=0.3');

  }, [location.pathname, isInitialLoad]);

  // Show loading screen only on initial load
  if (isInitialLoad && showLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="relative">
      {/* Page transition overlay (only for subsequent navigations) */}
      {!isInitialLoad && (
        <div 
          ref={overlayRef}
          className="fixed inset-0 bg-flores-primary z-50 pointer-events-none"
          style={{ scaleY: 0 }}
        />
      )}
      
      {/* Page content */}
      <div ref={containerRef}>
        {children}
      </div>
    </div>
  );
}

export default PageTransition;