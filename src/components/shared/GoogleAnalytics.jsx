import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const GA_ID = 'G-EQ7DS6JBPM';

export default function GoogleAnalytics() {
  const location = useLocation();
  const prevPath = useRef(null);

  useEffect(() => {
    const currentPath = location.pathname + location.search;

    if (prevPath.current !== null && prevPath.current !== currentPath) {
      if (window.gtag) {
        window.gtag('config', GA_ID, {
          page_path: currentPath,
          page_location: window.location.href,
          page_title: document.title,
        });
      }
    }

    prevPath.current = currentPath;
  }, [location]);

  return null;
}