import React from 'react';
import { imageVariants } from '../../lib/imageVariants.generated';

function createSrcSet(variants = []) {
  return variants.map(({ src, width }) => `${src} ${width}w`).join(', ');
}

export function getOptimizedImageUrl(src, preferredWidth = 960, format = 'avif') {
  const image = imageVariants[src];
  const variants = image?.[format] || [];
  if (variants.length === 0) return src;

  return (variants.find(({ width }) => width >= preferredWidth) || variants.at(-1)).src;
}

export default function ResponsiveImage({
  src,
  alt,
  sizes = '100vw',
  loading = /** @type {'lazy' | 'eager'} */ ('lazy'),
  decoding = /** @type {'async' | 'sync' | 'auto'} */ ('async'),
  className = '',
  pictureClassName = undefined,
  ...imageProps
}) {
  const image = imageVariants[src];
  if (!image) {
    return (
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        className={className}
        {...imageProps}
      />
    );
  }

  const fallback = image.webp.at(-1)?.src || src;

  return (
    <picture className={pictureClassName}>
      <source type="image/avif" srcSet={createSrcSet(image.avif)} sizes={sizes} />
      <source type="image/webp" srcSet={createSrcSet(image.webp)} sizes={sizes} />
      <img
        src={fallback}
        alt={alt}
        width={image.width}
        height={image.height}
        loading={loading}
        decoding={decoding}
        className={className}
        {...imageProps}
      />
    </picture>
  );
}
