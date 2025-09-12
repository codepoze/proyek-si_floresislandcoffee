import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Performance configuration for GSAP
gsap.config({
  force3D: true,
  nullTargetWarn: false
});

// Configure ScrollTrigger for better performance
ScrollTrigger.config({
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
  ignoreMobileResize: true
});

export const useScrollAnimation = () => {
  const ref = useRef();
  const triggerRef = useRef();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Set will-change for performance
    element.style.willChange = 'transform, opacity';

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        fastScrollEnd: true,
        preventOverlaps: true,
      }
    });

    tl.fromTo(element, 
      {
        opacity: 0,
        y: 30, // Reduced from 50
        force3D: true
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8, // Reduced from 1.2
        ease: 'power2.out',
        force3D: true
      }
    );

    triggerRef.current = tl.scrollTrigger;

    return () => {
      element.style.willChange = 'auto';
      if (triggerRef.current) {
        triggerRef.current.kill();
      }
    };
  }, []);

  return ref;
};

export const useFadeInAnimation = (delay = 0) => {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [delay]);

  return ref;
};

export const useStaggerAnimation = () => {
  const ref = useRef();
  const triggerRef = useRef();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const children = Array.from(element.children);
    if (!children.length) return;

    // Set will-change for performance on all children
    children.forEach(child => {
      child.style.willChange = 'transform, opacity';
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
        fastScrollEnd: true,
        preventOverlaps: true,
      }
    });

    tl.fromTo(children,
      {
        opacity: 0,
        y: 20, // Reduced from 40
        force3D: true
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6, // Reduced from 0.8
        stagger: 0.1, // Reduced from 0.2
        ease: 'power2.out',
        force3D: true
      }
    );

    triggerRef.current = tl.scrollTrigger;

    return () => {
      children.forEach(child => {
        child.style.willChange = 'auto';
      });
      if (triggerRef.current) {
        triggerRef.current.kill();
      }
    };
  }, []);

  return ref;
};

export const useParallaxAnimation = () => {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.to(element, {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return ref;
};

export const useHoverAnimation = () => {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseEnter = () => {
      gsap.to(element, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
};