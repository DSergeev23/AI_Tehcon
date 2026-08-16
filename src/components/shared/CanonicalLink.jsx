import React from 'react';
import { Link } from 'react-router-dom';
import { toCanonicalPath } from '../../lib/seoConfig';

/** Keeps every internal navigation link aligned with the site's canonical URL format. */
export default function CanonicalLink({ to, ...props }) {
  const canonicalTo = typeof to === 'string' && to.startsWith('/')
    ? toCanonicalPath(to)
    : to;

  return <Link to={canonicalTo} {...props} />;
}
