import React from 'react';

interface SymbolVignetteProps {
  symbolId: string;
  name: string;
  className?: string;
}

export const SymbolVignette: React.FC<SymbolVignetteProps> = ({
  symbolId,
  name,
  className = '',
}) => {
  return (
    <div
      className={`border border-parchment-border bg-parchment-surface p-2 sm:p-3 shadow-2xs select-none ${className}`}
    >
      <div className="relative border border-parchment-darkborder/75 bg-[#FAF6EC] p-2 overflow-hidden">
        {/* Corner Marks */}
        <div className="absolute top-1 left-1 text-[8px] text-antique-gold select-none font-serif leading-none" aria-hidden="true">╔</div>
        <div className="absolute top-1 right-1 text-[8px] text-antique-gold select-none font-serif leading-none" aria-hidden="true">╗</div>
        <div className="absolute bottom-1 left-1 text-[8px] text-antique-gold select-none font-serif leading-none" aria-hidden="true">╚</div>
        <div className="absolute bottom-1 right-1 text-[8px] text-antique-gold select-none font-serif leading-none" aria-hidden="true">╝</div>

        <svg
          viewBox="0 0 240 160"
          className="w-full h-auto text-ink-primary block"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label={`Antique engraving symbol vignette of ${name}`}
          role="img"
        >
          <defs>
            <radialGradient id={`symGrad-${symbolId}`} cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#FAF5E8" />
              <stop offset="70%" stopColor="#ECE3CD" />
              <stop offset="100%" stopColor="#DFD2B4" />
            </radialGradient>
          </defs>

          {/* Background Plate */}
          <rect x="0" y="0" width="240" height="160" fill={`url(#symGrad-${symbolId})`} />
          <rect x="6" y="6" width="228" height="148" stroke="#D3C7AB" strokeWidth="0.8" strokeDasharray="3 3" />

          {/* ======================================================== */}
          {/* 1. THE SEA (WINE-DARK SWELLS & TRIDENT)                  */}
          {/* ======================================================== */}
          {symbolId === 'the-sea' && (
            <g stroke="#231C16" strokeLinecap="round" strokeLinejoin="round">
              {/* Deep ocean waves */}
              <path d="M 10 110 Q 50 85 90 105 Q 130 125 170 100 Q 210 80 230 105 L 230 150 L 10 150 Z" fill="#3D4B54" stroke="#231C16" strokeWidth="1.2" />
              <path d="M 10 125 Q 60 105 120 125 Q 180 145 230 125 L 230 150 L 10 150 Z" fill="#252F36" />
              {/* Wave crests */}
              <path d="M 40 100 Q 65 90 90 105" stroke="#FAF5E8" strokeWidth="1.5" />
              <path d="M 140 98 Q 165 88 190 102" stroke="#FAF5E8" strokeWidth="1.5" />
              {/* Poseidon's bronze trident rising from the surf */}
              <g transform="translate(120, 30)">
                <line x1="0" y1="8" x2="0" y2="90" stroke="#8C4738" strokeWidth="2.5" />
                <path d="M -16 25 L -16 8 L 0 16 L 16 8 L 16 25" stroke="#8C4738" strokeWidth="2" fill="none" />
                <line x1="0" y1="0" x2="0" y2="18" stroke="#8C4738" strokeWidth="2" />
                <circle cx="0" cy="0" r="2" fill="#96743A" />
              </g>
            </g>
          )}

          {/* ======================================================== */}
          {/* 2. ITHACA (RUGGED CRAGS & ANCIENT ROOTED OLIVE TREE)     */}
          {/* ======================================================== */}
          {symbolId === 'ithaca' && (
            <g stroke="#231C16" strokeLinecap="round" strokeLinejoin="round">
              {/* Rocky Island Cliffs */}
              <path d="M 20 145 L 60 90 L 110 110 L 150 70 L 190 100 L 220 145 Z" fill="#C9BFA8" stroke="#231C16" strokeWidth="1.5" />
              {/* Ancient rooted olive tree on the rock */}
              <g transform="translate(110, 35)">
                {/* Thick living olive trunk */}
                <path d="M 10 55 C 5 40 15 25 10 15 C 20 20 25 35 25 55 Z" fill="#7E602E" stroke="#231C16" strokeWidth="1.2" />
                {/* Olive foliage */}
                <ellipse cx="12" cy="12" rx="28" ry="16" fill="#8A9A65" stroke="#3D4B54" strokeWidth="1" />
                <ellipse cx="24" cy="5" rx="18" ry="12" fill="#5E6D41" stroke="#3D4B54" strokeWidth="0.8" />
                {/* Root anchoring into the rock */}
                <path d="M 8 55 Q -8 68 -20 70" stroke="#7E602E" strokeWidth="2" fill="none" />
                <path d="M 22 55 Q 35 65 45 70" stroke="#7E602E" strokeWidth="2" fill="none" />
              </g>
              {/* Sea surf around the island */}
              <line x1="10" y1="145" x2="230" y2="145" stroke="#3D4B54" strokeWidth="2" />
            </g>
          )}

          {/* ======================================================== */}
          {/* 3. THE JOURNEY (HOMERIC GALLEY & STEERING CELESTIAL RAY) */}
          {/* ======================================================== */}
          {symbolId === 'the-journey' && (
            <g stroke="#231C16" strokeLinecap="round" strokeLinejoin="round">
              {/* The Galley under full sail */}
              <g transform="translate(60, 45)">
                {/* Hull */}
                <path d="M 0 55 Q 55 45 110 55 L 105 70 L 8 70 Z" fill="#423831" stroke="#231C16" strokeWidth="1.5" />
                {/* Mast */}
                <line x1="55" y1="58" x2="55" y2="-15" stroke="#231C16" strokeWidth="3" />
                {/* Square sail billowing */}
                <path d="M 20 -5 Q 55 12 90 -8 L 85 40 Q 55 45 25 40 Z" fill="#FAF5E8" stroke="#231C16" strokeWidth="1.2" />
                {/* Dipping oars */}
                <line x1="30" y1="65" x2="15" y2="82" stroke="#231C16" strokeWidth="1.5" />
                <line x1="50" y1="65" x2="35" y2="82" stroke="#231C16" strokeWidth="1.5" />
                <line x1="70" y1="65" x2="55" y2="82" stroke="#231C16" strokeWidth="1.5" />
                <line x1="90" y1="65" x2="75" y2="82" stroke="#231C16" strokeWidth="1.5" />
              </g>
              {/* Guiding star in the sky */}
              <circle cx="190" cy="25" r="2.5" fill="#96743A" />
              <line x1="190" y1="18" x2="190" y2="32" stroke="#96743A" strokeWidth="0.8" />
              <line x1="183" y1="25" x2="197" y2="25" stroke="#96743A" strokeWidth="0.8" />
              {/* Sea line */}
              <path d="M 15 135 Q 70 128 120 135 Q 170 142 225 135" stroke="#3D4B54" strokeWidth="1.2" fill="none" />
            </g>
          )}

          {/* ======================================================== */}
          {/* 4. ODYSSEUS'S BOW & THE TWELVE AXES                      */}
          {/* ======================================================== */}
          {symbolId === 'odysseus-bow' && (
            <g stroke="#231C16" strokeLinecap="round" strokeLinejoin="round">
              {/* The Curved Composite Horn Bow */}
              <g transform="translate(45, 15)">
                {/* Double recurve arch of horn */}
                <path d="M 0 10 Q 35 65 0 120" stroke="#7E602E" strokeWidth="4.5" fill="none" />
                {/* Taut string */}
                <line x1="0" y1="10" x2="0" y2="120" stroke="#96743A" strokeWidth="1.2" />
                {/* The notched arrow ready on string */}
                <line x1="-5" y1="65" x2="140" y2="65" stroke="#8C4738" strokeWidth="2" />
                <polygon points="140,65 130,60 130,70" fill="#8C4738" />
              </g>
              {/* The Iron Axe Rings aligned in row */}
              <g transform="translate(100, 72) scale(0.85)">
                <rect x="0" y="0" width="8" height="24" fill="#52473D" stroke="#231C16" strokeWidth="1" />
                <circle cx="4" cy="12" r="3" fill="#FAF5E8" />
                <rect x="25" y="0" width="8" height="24" fill="#52473D" stroke="#231C16" strokeWidth="1" />
                <circle cx="29" cy="12" r="3" fill="#FAF5E8" />
                <rect x="50" y="0" width="8" height="24" fill="#52473D" stroke="#231C16" strokeWidth="1" />
                <circle cx="54" cy="12" r="3" fill="#FAF5E8" />
                <rect x="75" y="0" width="8" height="24" fill="#52473D" stroke="#231C16" strokeWidth="1" />
                <circle cx="79" cy="12" r="3" fill="#FAF5E8" />
                <rect x="100" y="0" width="8" height="24" fill="#52473D" stroke="#231C16" strokeWidth="1" />
                <circle cx="104" cy="12" r="3" fill="#FAF5E8" />
              </g>
            </g>
          )}

          {/* ======================================================== */}
          {/* 5. THE SIRENS' SONG (LYRE, BONES & VESTIGE OF SONG)      */}
          {/* ======================================================== */}
          {symbolId === 'sirens-song' && (
            <g stroke="#231C16" strokeLinecap="round" strokeLinejoin="round">
              {/* Archaic Lyre (Chelys) */}
              <g transform="translate(75, 25)">
                {/* Tortoise-shell soundbox */}
                <ellipse cx="40" cy="85" rx="25" ry="18" fill="#7E602E" stroke="#231C16" strokeWidth="1.5" />
                {/* Side arms */}
                <path d="M 20 80 Q 15 35 30 15" stroke="#96743A" strokeWidth="2.5" fill="none" />
                <path d="M 60 80 Q 65 35 50 15" stroke="#96743A" strokeWidth="2.5" fill="none" />
                {/* Crossbar */}
                <line x1="26" y1="15" x2="54" y2="15" stroke="#96743A" strokeWidth="3" />
                {/* Strings */}
                <line x1="32" y1="16" x2="32" y2="85" stroke="#C9BEA2" strokeWidth="0.8" />
                <line x1="36" y1="16" x2="36" y2="85" stroke="#C9BEA2" strokeWidth="0.8" />
                <line x1="40" y1="16" x2="40" y2="85" stroke="#C9BEA2" strokeWidth="0.8" />
                <line x1="44" y1="16" x2="44" y2="85" stroke="#C9BEA2" strokeWidth="0.8" />
                <line x1="48" y1="16" x2="48" y2="85" stroke="#C9BEA2" strokeWidth="0.8" />
              </g>
              {/* Feathered Siren wing motif in background */}
              <path d="M 155 30 C 185 20 215 45 220 85 C 200 80 175 65 155 50 Z" fill="#D3C3A2" stroke="#8C4738" strokeWidth="1" />
              {/* Bones upon the rock */}
              <ellipse cx="50" cy="135" rx="5" ry="4" fill="#FAF5E8" stroke="#231C16" strokeWidth="0.8" />
              <line x1="40" y1="140" x2="65" y2="135" stroke="#FAF5E8" strokeWidth="1.8" />
            </g>
          )}

          {/* Engraving Caption */}
          <text x="120" y="152" textAnchor="middle" fontFamily="serif" fontStyle="italic" fontSize="8" fill="#786B58">
            Symbolum Homericum · {name}
          </text>
        </svg>
      </div>
    </div>
  );
};
