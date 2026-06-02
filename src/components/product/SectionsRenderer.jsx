import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function SectionsRenderer({ sections, fallbackText }) {
  // If no sections array, fall back to rendering fullDescription as markdown
  if (!sections || sections.length === 0) {
    return (
      <div className="prose-content">
        <ReactMarkdown components={markdownComponents}>{fallbackText || ''}</ReactMarkdown>
      </div>
    );
  }

  return (
    <div>
      {sections.map((section, i) => {
        if (section.type === 'image') {
          return (
            <div key={i} className="my-12 flex justify-center">
              <div className="w-full rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-white/[0.02]">
                <img
                  src={section.value}
                  alt={section.alt || ''}
                  className="w-full h-auto block"
                />
              </div>
            </div>
          );
        }

        // type === 'text'
        return (
          <div key={i} className="mb-8 text-lg leading-relaxed text-white/70">
            <ReactMarkdown components={markdownComponents}>{section.value}</ReactMarkdown>
          </div>
        );
      })}
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
    <p className="text-lg leading-relaxed text-white/70 mb-6">{children}</p>
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
    <li className="flex items-start gap-3 text-white/65 text-base leading-relaxed list-none">
      <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
      <span className="flex-1">{children}</span>
    </li>
  ),
  hr: () => (
    <hr className="my-10 border-white/[0.08]" />
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-white/20 pl-6 my-8 text-white/50 italic text-lg">{children}</blockquote>
  ),
};