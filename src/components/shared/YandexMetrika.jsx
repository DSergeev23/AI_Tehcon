import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const YM_ID = 109517533;

export default function YandexMetrika() {
  const location = useLocation();
  const prevPath = useRef(null);

  useEffect(() => {
    const currentPath = location.pathname + location.search;
    if (prevPath.current !== null && prevPath.current !== currentPath) {
      if (window.ym) {
        window.ym(YM_ID, 'hit', window.location.href);
      }
    }
    prevPath.current = currentPath;
  }, [location]);

  return null;
}