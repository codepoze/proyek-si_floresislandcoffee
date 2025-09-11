import { Helmet } from 'react-helmet-async';

function SEOHead({
  title = "Flores Island Coffee - Premium Indonesian Coffee Beans Export",
  description = "Premium coffee beans from Flores Island, Indonesia. Sustainable coffee farming, wholesale export, and specialty coffee roasting. Direct from farm to cup with authentic Indonesian coffee experience.",
  keywords = "flores island coffee, indonesian coffee, coffee export, premium coffee beans, specialty coffee, coffee wholesale, sustainable coffee farming, coffee roasting, indonesian coffee export, coffee bean supplier, single origin coffee, arabica coffee indonesia, flores coffee beans, coffee trading company, organic coffee indonesia",
  canonical,
  ogTitle,
  ogDescription,
  ogImage = "/og-image.jpg",
  ogType = "website",
  structuredData
}) {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://floresislandcoffee.com/#organization",
        "name": "Flores Island Coffee",
        "description": "Premium Indonesian coffee producer and exporter specializing in high-quality coffee beans from Flores Island",
        "url": "https://floresislandcoffee.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://floresislandcoffee.com/logo.png"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+62-123-456-7890",
          "contactType": "Business",
          "email": "admin@flores.coffee",
          "areaServed": "Worldwide",
          "availableLanguage": ["English", "Indonesian"]
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Maumere",
          "addressRegion": "East Nusa Tenggara",
          "addressCountry": "Indonesia"
        },
        "sameAs": [
          "https://facebook.com/floresislandcoffee",
          "https://instagram.com/floresislandcoffee"
        ]
      },
      {
        "@type": "Product",
        "name": "Flores Island Coffee Beans",
        "description": "Premium single-origin coffee beans from the volcanic soils of Flores Island, Indonesia",
        "brand": {
          "@type": "Brand",
          "name": "Flores Island Coffee"
        },
        "category": "Coffee Beans",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "businessFunction": "https://schema.org/Sell"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://floresislandcoffee.com/#website",
        "url": "https://floresislandcoffee.com",
        "name": "Flores Island Coffee",
        "description": "Premium Indonesian coffee beans export and wholesale",
        "publisher": {
          "@id": "https://floresislandcoffee.com/#organization"
        },
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Flores Island Coffee" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Flores Island Coffee" />
      <meta name="publisher" content="Flores Island Coffee" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="ID-NT" />
      <meta name="geo.placename" content="Flores Island, Indonesia" />
      <meta name="geo.position" content="-8.6573;120.3037" />
      <meta name="ICBM" content="-8.6573, 120.3037" />
      
      {/* Business-specific meta tags */}
      <meta name="classification" content="Business" />
      <meta name="category" content="Coffee Export, Agriculture, Food & Beverage" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
}

export default SEOHead;