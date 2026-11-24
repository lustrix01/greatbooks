import React from 'react';

interface VerseQuoteProps {
  greekText?: string;
  englishText: string;
  citation: string;
  speaker?: string;
  className?: string;
}

export const VerseQuote: React.FC<VerseQuoteProps> = ({
  greekText,
  englishText,
  citation,
  speaker,
  className = ''
}) => {
  return (
    <figure className={`border-l-2 border-antique-gold/50 pl-5 pr-4 py-3 my-6 bg-parchment-aged/35 ${className}`}>
      {speaker && (
        <figcaption className="text-xs tracking-wider text-ink-muted font-display mb-2">
          {speaker}
        </figcaption>
      )}

      {greekText && (
        <blockquote className="font-serif italic text-base text-ink-secondary leading-relaxed mb-3 whitespace-pre-line tracking-wide">
          {greekText}
        </blockquote>
      )}

      <blockquote className="font-body text-base text-ink-primary leading-relaxed whitespace-pre-line">
        &ldquo;{englishText}&rdquo;
      </blockquote>

      <cite className="block text-right text-xs font-serif italic text-ink-muted mt-2">
        — {citation}
      </cite>
    </figure>
  );
};
