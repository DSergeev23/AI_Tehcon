import React from 'react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

// IMAGES GUIDE:
// - External URLs  → use full URL starting with "http", e.g. "https://images.unsplash.com/..."
// - Local files    → place file in /public/images/ and use path "/images/filename.png"

// Renders an image block — supports both external URLs (http...) and local paths (/images/...)
// Local files must be placed in public/images/ to resolve correctly.
function ImageBlock({ src, alt }) {
  const [errored, setErrored] = React.useState(false);
  const isLocal = src && src.startsWith('/images/');
  const filename = isLocal ? src.split('/').pop() : null;

  if (errored && isLocal) {
    return (
      <div className="my-10 w-full rounded-2xl border border-primary/30 bg-primary/10 flex items-center justify-center py-14 text-sm text-white/75">
        Ожидается файл: <span className="ml-1.5 font-mono text-white">{filename}</span>
      </div>
    );
  }

  return (
    <div className="my-10">
      <img
        src={src}
        alt={alt}
        onError={() => setErrored(true)}
        className="w-full h-auto rounded-2xl border border-white/10 shadow-xl block"
      />
    </div>
  );
}

const markdownComponents = {
  h2: ({ children }) => (
    <h2 className="font-serif text-2xl md:text-3xl text-white tracking-tight leading-tight mt-12 mb-4">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-serif text-xl md:text-2xl text-white tracking-tight leading-tight mt-8 mb-3">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-lg leading-relaxed text-white/80 mb-6">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="text-white font-semibold">{children}</strong>
  ),
  ul: ({ children }) => (
    <ul className="space-y-2 my-5 ml-1">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="space-y-2 my-5 ml-1 list-decimal list-inside">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="flex items-start gap-3 text-white/80 text-base leading-relaxed list-none">
      <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
      <span className="flex-1">{children}</span>
    </li>
  ),
  hr: () => (
    <hr className="my-10 border-white/[0.08]" />
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-primary/45 pl-6 my-8 text-white/80 italic text-lg">{children}</blockquote>
  ),
};

export default function SectionsRenderer({ content, fallbackText }) {
  // Fallback: render fullDescription as markdown if no content array provided
  if (!content || content.length === 0) {
    return (
      <div className="max-w-3xl mb-8 text-lg leading-relaxed text-white/80">
        <ReactMarkdown components={markdownComponents}>{fallbackText || ''}</ReactMarkdown>
      </div>
    );
  }

  return (
    <div>
      {content.map((block, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          {block.type === 'image' ? (
            <ImageBlock src={block.value} alt={block.alt || ''} />
          
          ) : (
            <div className="max-w-3xl mb-8 text-lg leading-relaxed text-white/80">
              <ReactMarkdown components={markdownComponents}>{block.value}</ReactMarkdown>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
