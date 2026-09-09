import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { contactDestination } from '../../lib/leadContext';
import { toCanonicalPath } from '../../lib/seoConfig';

/** Keeps every internal navigation link aligned with the site's canonical URL format. */
export default function CanonicalLink({ to, ...props }) {
  const location = useLocation();
  if ((to === '/contacts' || to === '/contacts/') && !location.pathname.startsWith('/contacts')) {
    return <Link to={contactDestination(location.pathname)} {...props} />;
  }
  const canonicalTo = typeof to === 'string' && to.startsWith('/')
    ? (() => {
      const [path, hash] = to.split('#', 2);
      return `${toCanonicalPath(path)}${hash === undefined ? '' : `#${hash}`}`;
    })()
    : to;

  return <Link to={canonicalTo} {...props} />;
}
