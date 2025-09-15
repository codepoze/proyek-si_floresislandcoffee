import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { gsap } from 'gsap';
import SEOHead from './components/SEOHead';
import ValueCard from './components/ValueCard';
import ProductCard from './components/ProductCard';
import NewsCard from './components/NewsCard';
import SpecialtyCard from './components/SpecialtyCard';
import { valuesData } from './data/valuesData';
import { productsData } from './data/productsData';
import { newsData } from './data/newsData';
import { specialtyData } from './data/specialtyData';
import { useScrollAnimation, useStaggerAnimation } from './hooks/useGSAP';
import heroImage from './assets/hero.png';
import logoCoffee from './assets/logoCoffee.png';
import banner from './assets/banner.jpg';
import coffeeHarvest from './assets/coffee-farm.png';
import NTTMap from './components/NTTMap';
import 'leaflet/dist/leaflet.css';


function Home() {
  const heroRef = useRef();
  const heroContentRef = useRef();
  const valuesRef = useStaggerAnimation();
  const sustainabilityRef = useScrollAnimation();
  const productsRef = useStaggerAnimation();
  const newsRef = useStaggerAnimation();

  useEffect(() => {
    const heroElement = heroRef.current;
    const heroContentElement = heroContentRef.current;
    
    // Set will-change for performance
    if (heroElement) {
      heroElement.style.willChange = 'opacity';
    }
    if (heroContentElement) {
      Array.from(heroContentElement.children).forEach(child => {
        child.style.willChange = 'transform, opacity';
      });
    }

    // Hero entrance animation - reduced duration and complexity
    const tl = gsap.timeline();
    
    tl.fromTo(heroElement, 
      { opacity: 0, force3D: true },
      { opacity: 1, duration: 0.8, ease: 'power2.out' }
    )
    .fromTo(heroContentElement?.children,
      { opacity: 0, y: 30, force3D: true },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out', force3D: true },
      0.3
    );

    // Cleanup function
    return () => {
      if (heroElement) {
        heroElement.style.willChange = 'auto';
      }
      if (heroContentElement) {
        Array.from(heroContentElement.children).forEach(child => {
          child.style.willChange = 'auto';
        });
      }
    };
  }, []);

  return (
    <>
      <SEOHead 
        title="Flores Island Coffee - Premium Indonesian Coffee Beans & Export"
        description="Discover premium single-origin coffee beans from Flores Island, Indonesia. Sustainable coffee farming, specialty roasting, wholesale export worldwide. Authentic Indonesian coffee experience from farm to cup."
        keywords="flores island coffee, indonesian coffee export, premium coffee beans, specialty coffee roasting, sustainable coffee farming, coffee wholesale indonesia, single origin coffee, arabica coffee beans, indonesian coffee supplier, coffee bean export, volcanic soil coffee, flores coffee plantation, organic coffee indonesia, fair trade coffee"
      />
      <div className="min-h-screen">
      {/* Hero Section with Coffee Farmers */}
      <section 
        ref={heroRef}
        className="relative h-screen bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImage})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div ref={heroContentRef} className="max-w-4xl px-6">
            {/* Coffee Bean Icon */}
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <img src={logoCoffee} alt="Flores Island Coffee Logo - Premium Indonesian Coffee" />
              </div>
            </div>
            <h1 className="text-xl md:text-4xl lg:text-4xl font-bold mb-6 tracking-tight font-heading leading-tight">
              Premium Flores Island Coffee - The richness echoes the depth of emerald hills and ocean skies
            </h1>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-sm lg:text-xl font-medium tracking-wide text-flores-primary uppercase mb-2 font-body">
              Our Coffee Values
            </h2>
            <p className="text-base md:text-2xl font-semibold text-flores-primary leading-relaxed font-heading">
              Innovation in specialty coffee farming, <br />
              rooted in the volcanic soil of Flores Island.
            </p>
          </div>

          {/* Value Cards */}
          <div ref={valuesRef} className="grid grid-cols-3 gap-2 md:gap-3">
            {valuesData.map((value) => (
              <ValueCard
                key={value.id}
                type={value.type}
                icon={value.icon}
                title={value.title}
                image={value.image}
                alt={value.alt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-gradient-to-br from-flores-separator to-flores-light/30">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={sustainabilityRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className='text-3xl mb-4 font-semibold'>COFFEE ORIGIN</h1>
              <h2 className="text-5xl font-bold text-flores-primary mb-8 font-heading">Born in Flores,
                Shared with the World</h2>
              <p className="text-xl text-flores-primary/80 mb-8 leading-relaxed font-body">
                Hand-picked and processed with care — using wet-hulled
                and natural methods — Flores coffee reflects the craft and
                commitment of smallholder farmers.
              </p>
              <button className="bg-flores-primary hover:bg-flores-primary/90 text-white px-8 py-4 rounded-full font-medium transition-colors duration-300 font-body">
                Learn More
              </button>
            </div>
            <div className="relative">
              <img src={banner} alt="Flores Island landscape" className="w-full h-80 object-cover rounded-3xl shadow-2xl" loading="lazy" />
              {/* <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                <p className="text-sm font-medium text-flores-primary font-body">Kelimutu National Park</p>
                <p className="text-xs text-flores-primary/70 font-body">Flores Island, Indonesia</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Cultivation Story */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          {/* Title */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-flores-primary mb-8 md:mb-16 leading-snug font-heading">
            From Flores highlands, each bean carries <br className="hidden sm:block" />
            a story of tradition and dedication.
          </h2>

          {/* Interactive Map - Desktop and Tablet */}
          <div className="hidden md:block w-full max-w-5xl mx-auto">
            <NTTMap className="rounded-lg shadow-lg" />
          </div>

          {/* Interactive Map - Mobile Version */}
          <div className="md:hidden">
            <NTTMap className="rounded-lg shadow-lg mb-6" />
          </div>

          {/* Map Description */}
          <div className="text-center mt-8">
            <p className="text-flores-primary/80 font-body max-w-2xl mx-auto">
              Explore our coffee locations across Nusa Tenggara Timur. Click on the markers to learn more about each location and our coffee cultivation process.
            </p>
          </div>
        </div>
      </section>


      {/* Coffee Harvest Section */}
      <section
        className="min-h-[80vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5), transparent), url(${coffeeHarvest})`
        }}
      >
        {/* This container re-centers your content area to align with the rest of the page */}
        <div className="w-full max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold font-serif max-w-2xl text-white">
            The best product <br />
            from Flores Island Coffee
          </h2>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-10">
          <div ref={productsRef} className="grid grid-cols-3 gap-3 md:gap-4">
            {productsData.map((product) => (
              <ProductCard
                key={product.id}
                type={product.type}
                title={product.title}
                subtitle={product.subtitle}
                image={product.image}
                backgroundImg={product.backgroundImg}
                alt={product.alt}
                className="h-48 md:h-56"
              />
            ))}
          </div>
        </div>
      </section>


      {/* Botanical Recipes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          {/* Title */}
          <h2 className="text-5xl font-bold text-flores-primary mb-4 font-heading">
            Signature Flores Roasted Beans
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-flores-primary/80 font-body">
            Available for B2B inquiries and custom Houseblend requests.
          </p>
        </div>

        <div className="grid grid-cols-2">
          {specialtyData.map((specialty) => (
            <SpecialtyCard
              key={specialty.id}
              image={specialty.image}
              alt={specialty.alt}
              title={specialty.title}
              buttonText={specialty.buttonText}
            />
          ))}
        </div>
      </section>


      {/* Coffee News Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-flores-primary mb-16 text-center font-heading">Coffee News</h2>

          <div ref={newsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsData
              .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
              .slice(0, 3)
              .map((news) => (
              <NewsCard
                key={news.id}
                image={news.image}
                alt={news.alt}
                category={news.category}
                title={news.title}
                description={news.description}
                href={news.href}
              />
            ))}
          </div>
          
          {/* See More Button */}
          <div className="text-center mt-12">
            <Link 
              to="/news"
              className="inline-flex items-center bg-flores-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-flores-primary/90 transition-colors duration-300 font-body"
            >
              See More News
              <svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Story Upfront Section */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-flores-primary mb-4 font-serif">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-10 mx-auto">
            Subscribe to our newsletter to be in the know about latest updates from Flores Island Coffee
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-flores-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-gray-700 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      </div>
    </>
  );
}

export default Home;