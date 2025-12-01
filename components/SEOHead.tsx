import React from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string;
  schema?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical,
  ogImage = '/Logo-kinews24-white.png',
  keywords,
  schema
}) => {
  React.useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta description
    updateMetaTag('name', 'description', description);

    // Update keywords if provided
    if (keywords) {
      updateMetaTag('name', 'keywords', keywords);
    }

    // Open Graph tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:type', 'website');
    updateMetaTag('property', 'og:url', canonical || window.location.href);
    updateMetaTag('property', 'og:image', ogImage);
    updateMetaTag('property', 'og:locale', 'de_DE');
    updateMetaTag('property', 'og:site_name', 'KINEWS24-Academy');

    // Twitter Card tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', ogImage);

    // Canonical URL
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical);
    }

    // Schema.org structured data
    if (schema) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]#page-schema');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'application/ld+json');
        scriptTag.setAttribute('id', 'page-schema');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    }
  }, [title, description, canonical, ogImage, keywords, schema]);

  return null;
};

function updateMetaTag(attr: string, attrValue: string, content: string) {
  let tag = document.querySelector(`meta[${attr}="${attrValue}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, attrValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export default SEOHead;
