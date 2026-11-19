import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEO component for dynamic head management, metadata, Open Graph,
 * canonical URLs, and structured JSON-LD schema injection.
 */
const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = 'https://akshardigitalmarketing.com/logo.jpeg',
  schema
}) => {
  const location = useLocation();
  const siteUrl = 'https://akshardigitalmarketing.com';
  const fullCanonical = canonical || `${siteUrl}${location.pathname}`;

  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // 2. Helper to set or create meta tag
    const setMetaTag = (attrName, attrValue, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 3. Set standard meta tags
    if (description) {
      setMetaTag('name', 'description', description);
      setMetaTag('property', 'og:description', description);
      setMetaTag('name', 'twitter:description', description);
    }

    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    if (title) {
      setMetaTag('property', 'og:title', title);
      setMetaTag('name', 'twitter:title', title);
    }

    setMetaTag('property', 'og:url', fullCanonical);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:site_name', 'Akshar Digital Marketing');
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:image', ogImage);
    setMetaTag('name', 'robots', 'index, follow');

    // 4. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonical);

    // 5. Inject Structured JSON-LD Schema
    const scriptId = 'page-jsonld-schema';
    let scriptEl = document.getElementById(scriptId);

    if (schema) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = scriptId;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(schema);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    return () => {
      // Clean up dynamic schema when unmounting if needed
    };
  }, [title, description, keywords, fullCanonical, ogType, ogImage, schema]);

  return null;
};

export default SEO;
