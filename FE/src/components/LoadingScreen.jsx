/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import logoAlt from '../assets/loadingLogo.png';
import heroImage from '../assets/hero.png';
import coffeeHarvest from '../assets/coffee-farm.png';
import banner from '../assets/banner.jpg';
import pourCoffee from '../assets/pour-coffee.png';

function LoadingScreen({ onLoadingComplete }) {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const loadingRef = useRef();
  const logoRef = useRef();

  useEffect(() => {
    // Preload critical assets
    const preloadAssets = () => {
      const images = [
        heroImage,
        coffeeHarvest,
        banner,
        pourCoffee,
        logoAlt
      ];

      let loadedCount = 0;
      const totalAssets = images.length;

      const imagePromises = images.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            loadedCount++;
            resolve();
          };
          img.onerror = () => {
            loadedCount++;
            resolve(); // Still resolve to not block the loading
          };
          img.src = src;
        });
      });

      // Wait for all images to load or timeout after 3 seconds
      const timeoutPromise = new Promise((resolve) => {
        setTimeout(() => resolve(), 3000);
      });

      Promise.race([
        Promise.all(imagePromises),
        timeoutPromise
      ]).then(() => {
        setAssetsLoaded(true);
      });
    };

    // Start preloading
    preloadAssets();

    // Logo animation
    const logoAnimation = gsap.timeline({ repeat: -1, yoyo: true });
    logoAnimation.to(logoRef.current, {
      scale: 1.1,
      duration: 1.5,
      ease: 'power2.inOut'
    });

    return () => {
      logoAnimation.kill();
    };
  }, []);

  useEffect(() => {
    if (assetsLoaded) {
      // Wait a moment to ensure smooth transition
      setTimeout(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            onLoadingComplete();
          }
        });

        tl.to(logoRef.current, {
          scale: 0.8,
          opacity: 0.7,
          duration: 0.5,
          ease: 'power2.inOut'
        })
        .to(loadingRef.current, {
          scaleY: 0,
          duration: 0.8,
          ease: 'power2.inOut',
          transformOrigin: 'bottom'
        });
      }, 500);
    }
  }, [assetsLoaded, onLoadingComplete]);

  return (
    <div
      ref={loadingRef}
      className="fixed inset-0 bg-flores-primary z-50 flex items-center justify-center"
    >
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <img
            ref={logoRef}
            src={logoAlt}
            alt="Flores Island Coffee"
            className="w-32 h-32 mx-auto object-contain"
          />
        </div>

        {/* Loading indicator */}
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>

        {/* Loading text */}
        <p className="text-white text-lg font-medium mt-6 font-body">
          Brewing your experience...
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;