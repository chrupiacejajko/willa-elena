import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image = '/images/hero-1.jpg',
  type = 'website'
}) => {
  const { pathname } = useLocation();
  const siteUrl = 'https://willa-elena.pl'; // Replace with actual domain
  const fullUrl = `${siteUrl}${pathname}`;
  const fullTitle = `${title} | Willa Elena Szklarska Poręba`;

  useEffect(() => {
    // Update Title
    document.title = fullTitle;

    // Helper to update meta tags
    const updateMeta = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard Meta
    updateMeta('description', description);

    // Open Graph
    updateMeta('og:title', fullTitle, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:image', `${siteUrl}${image}`, 'property');
    updateMeta('og:url', fullUrl, 'property');
    updateMeta('og:type', type, 'property');

    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', `${siteUrl}${image}`);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // Schema.org Structured Data (JSON-LD)
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Hotel",
      "name": "Willa Elena",
      "description": description,
      "image": `${siteUrl}${image}`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ul. 1 Maja 28",
        "addressLocality": "Szklarska Poręba",
        "postalCode": "58-580",
        "addressCountry": "PL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "50.8254",
        "longitude": "15.5193"
      },
      "telephone": "+48606649799",
      "priceRange": "80-130 PLN",
      "starRating": {
        "@type": "Rating",
        "ratingValue": "8.8"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "8.8",
        "reviewCount": "250",
        "bestRating": "10",
        "worstRating": "1"
      },
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Parking prywatny" },
        { "@type": "LocationFeatureSpecification", "name": "Bezpłatne Wi-Fi" },
        { "@type": "LocationFeatureSpecification", "name": "Widok na góry" },
        { "@type": "LocationFeatureSpecification", "name": "Balkon" },
        { "@type": "LocationFeatureSpecification", "name": "Grill" },
        { "@type": "LocationFeatureSpecification", "name": "Plac zabaw" }
      ],
      "url": siteUrl,
      "sameAs": [
        "https://www.booking.com/Share-tqV25I"
      ]
    };

    // Inject or update Schema.org script
    let schemaScript = document.querySelector('script[type="application/ld+json"]#hotel-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.setAttribute('id', 'hotel-schema');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schemaData);

  }, [title, description, image, type, fullUrl, fullTitle, siteUrl]);

  return null;
};