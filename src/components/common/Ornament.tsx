import React from 'react';

/**
 * Classical Fleuron / Leaf ornamental divider
 */
export const FleuronDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-3 py-6 text-parchment-darkborder ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-parchment-border" />
      <span className="text-antique-gold font-serif text-sm select-none">❦</span>
      <span className="h-px w-16 bg-parchment-border" />
    </div>
  );
};

/**
 * Classical Diamond Rule Divider
 */
export const DiamondDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-2 py-4 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 max-w-[120px] bg-parchment-border" />
      <span className="text-antique-gold text-[10px] select-none">◆</span>
      <span className="h-px flex-1 max-w-[120px] bg-parchment-border" />
    </div>
  );
};

/**
 * Greek Meander / Key pattern subtle border
 */
export const MeanderBorder: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden opacity-30 select-none py-1 ${className}`} aria-hidden="true">
      <svg
        className="w-full h-3 text-ink-muted"
        viewBox="0 0 400 12"
        preserveAspectRatio="repeat-x"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <pattern id="meander-pattern" width="24" height="12" patternUnits="userSpaceOnUse">
          <path d="M0 11 H10 V1 H2 V7 H6 V4" />
          <path d="M12 11 H22 V1 H14 V7 H18 V4" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#meander-pattern)" />
      </svg>
    </div>
  );
};

/**
 * Scholarly Section Rubric with delicate book numeral
 */
export const SectionRubric: React.FC<{
  roman: string;
  label: string;
  className?: string;
}> = ({ roman, label, className = '' }) => {
  return (
    <div className={`flex items-center gap-3 text-xs tracking-normal text-ink-muted font-sans ${className}`}>
      <span className="text-terracotta font-serif text-sm italic">{roman}</span>
      <span className="w-1.5 h-1.5 rounded-full bg-antique-gold/60 inline-block" />
      <span className="text-ink-secondary font-medium">{label}</span>
    </div>
  );
};
