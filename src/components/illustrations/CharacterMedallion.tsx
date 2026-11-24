import React from 'react';

interface CharacterMedallionProps {
  characterId: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const CharacterMedallion: React.FC<CharacterMedallionProps> = ({
  characterId,
  name,
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24 sm:w-28 sm:h-28',
    lg: 'w-32 h-32 sm:w-40 sm:h-40',
  };

  return (
    <div
      className={`relative rounded-full border-2 border-antique-gold/70 bg-[#FAF5E8] p-1.5 shadow-xs shrink-0 select-none ${sizeClasses[size]} ${className}`}
    >
      {/* Antique Coin Rim Texture */}
      <div className="w-full h-full rounded-full border border-parchment-darkborder bg-[#F5EFE0] flex items-center justify-center overflow-hidden relative">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-ink-primary"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label={`Antique cameo portrait of ${name}`}
          role="img"
        >
          <defs>
            <radialGradient id={`cameoGrad-${characterId}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FAF6EB" />
              <stop offset="75%" stopColor="#ECE3CD" />
              <stop offset="100%" stopColor="#DFD2B4" />
            </radialGradient>
          </defs>

          {/* Background Medallion Disc */}
          <circle cx="50" cy="50" r="48" fill={`url(#cameoGrad-${characterId})`} />
          <circle cx="50" cy="50" r="45" stroke="#C9BEA2" strokeWidth="0.8" strokeDasharray="2 2" />

          {/* ======================================================== */}
          {/* INDIVIDUAL VECTOR MEDALLION ICONOGRAPHY                  */}
          {/* ======================================================== */}

          {characterId === 'odysseus' && (
            <g stroke="#231C16" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
              {/* Traveler's Pilos Cap */}
              <path d="M 32 36 Q 50 16 68 36 Z" fill="#8C4738" />
              {/* Face & Head Profile */}
              <path d="M 40 36 C 45 36 60 36 60 48 Q 62 55 58 64 C 52 75 42 75 38 66 Z" fill="#E8DEC4" />
              {/* Weathered Beard */}
              <path d="M 42 62 Q 52 78 62 65 Q 65 60 62 55" fill="#52473D" />
              {/* Bow of Eurytus Arc */}
              <path d="M 20 20 Q 12 50 20 80" stroke="#96743A" strokeWidth="2" />
              <line x1="20" y1="20" x2="20" y2="80" stroke="#786B58" strokeWidth="0.6" strokeDasharray="2 2" />
              {/* Wine-Dark Wave below */}
              <path d="M 22 84 Q 35 78 48 84 Q 62 90 75 84 Q 82 80 88 84" stroke="#343E48" strokeWidth="1.5" />
            </g>
          )}

          {characterId === 'penelope' && (
            <g stroke="#231C16" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
              {/* Classical Bridal Veil */}
              <path d="M 32 30 C 35 18 65 18 68 30 C 72 45 76 75 72 82 C 60 84 40 84 28 82 C 26 65 28 45 32 30 Z" fill="#EFE8D6" />
              {/* Profile & Chignon hair */}
              <ellipse cx="50" cy="42" rx="14" ry="18" fill="#E8DEC4" />
              <path d="M 40 38 Q 48 30 58 35 Q 64 42 60 50" fill="#423831" />
              {/* The Weaving Shuttle (Kerkis) */}
              <g transform="translate(48, 70) rotate(-25)">
                <path d="M -16 0 C -8 -4 8 -4 16 0 C 8 4 -8 4 -16 0 Z" fill="#96743A" stroke="#231C16" strokeWidth="1" />
                <circle cx="0" cy="0" r="2.5" fill="#8C4738" />
              </g>
              {/* Olive leaf motif */}
              <path d="M 24 45 Q 18 35 25 28 Q 30 36 24 45 Z" fill="#8A9A65" stroke="#5E6D41" strokeWidth="0.8" />
            </g>
          )}

          {characterId === 'telemachus' && (
            <g stroke="#231C16" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
              {/* Young warrior clean jaw profile */}
              <circle cx="48" cy="42" r="16" fill="#E8DEC4" />
              {/* Youthful curly hair */}
              <path d="M 36 34 C 40 22 62 22 64 34 C 66 40 60 46 64 52" fill="#52473D" />
              {/* Spear shaft */}
              <line x1="28" y1="88" x2="68" y2="15" stroke="#96743A" strokeWidth="2" />
              <polygon points="68,15 64,22 75,17" fill="#8C4738" />
              {/* Rising eagle wing motif */}
              <path d="M 25 72 Q 40 60 55 68" stroke="#8C4738" strokeWidth="1.2" />
            </g>
          )}

          {characterId === 'athena' && (
            <g stroke="#231C16" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
              {/* Crested Corinthian Helmet */}
              <path d="M 30 45 C 30 26 70 26 70 45 L 68 55 L 56 55 L 54 44 L 46 44 L 44 55 L 32 55 Z" fill="#96743A" />
              {/* Horsehair crest flowing */}
              <path d="M 50 25 Q 52 10 72 12 Q 78 20 72 32" stroke="#8C4738" strokeWidth="2.5" />
              {/* Flashing Owl Eye */}
              <circle cx="42" cy="47" r="3" fill="#8C4738" stroke="#FAF5E8" strokeWidth="0.8" />
              <circle cx="58" cy="47" r="3" fill="#8C4738" stroke="#FAF5E8" strokeWidth="0.8" />
              {/* Little Owl of Wisdom Silhouette */}
              <g transform="translate(68, 62) scale(0.6)">
                <ellipse cx="12" cy="15" rx="8" ry="12" fill="#423831" />
                <circle cx="9" cy="10" r="2.5" fill="#FAF5E8" />
                <circle cx="15" cy="10" r="2.5" fill="#FAF5E8" />
              </g>
            </g>
          )}

          {characterId === 'poseidon' && (
            <g stroke="#231C16" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
              {/* Great Dark Beard and Hair */}
              <circle cx="48" cy="42" r="16" fill="#3D3028" />
              <path d="M 38 48 C 36 68 56 75 58 60 Q 64 68 52 76" fill="#2A201A" />
              {/* Trident of Bronze */}
              <g stroke="#8C4738" strokeWidth="2" strokeLinecap="round">
                <line x1="68" y1="85" x2="68" y2="15" />
                <path d="M 56 26 L 56 16 L 68 22 L 80 16 L 80 26" fill="none" />
                <line x1="68" y1="12" x2="68" y2="24" />
              </g>
              {/* Breaking Cresting Wave */}
              <path d="M 18 78 Q 30 68 42 78 Q 54 88 66 78" stroke="#343E48" strokeWidth="2" />
            </g>
          )}

          {characterId === 'zeus' && (
            <g stroke="#231C16" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
              {/* Majestic Olympian Crown & Beard */}
              <circle cx="50" cy="44" r="17" fill="#E8DEC4" />
              <path d="M 34 38 Q 50 20 66 38" fill="#96743A" stroke="#7E602E" strokeWidth="1.5" />
              <path d="M 40 50 Q 50 78 60 50" fill="#423831" />
              {/* Forked Lightning Bolt */}
              <polygon points="72,18 64,36 74,36 60,65 66,42 56,42" fill="#96743A" stroke="#231C16" strokeWidth="1" />
              {/* Royal eagle wing flourish */}
              <path d="M 22 55 Q 32 35 40 45" stroke="#8C4738" strokeWidth="1.5" />
            </g>
          )}

          {characterId === 'circe' && (
            <g stroke="#231C16" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
              {/* Flowing Radiant Hair of the Titan Sun-line */}
              <path d="M 35 30 Q 50 12 65 30 C 75 50 72 75 62 82 C 50 84 38 78 35 65 Z" fill="#96743A" opacity="0.8" />
              <circle cx="50" cy="42" r="13" fill="#E8DEC4" />
              {/* Magic Wand / Staff */}
              <line x1="24" y1="82" x2="42" y2="28" stroke="#8C4738" strokeWidth="1.8" />
              <polygon points="42,28 40,24 46,26" fill="#96743A" />
              {/* Potion Chalice with Magical Vapor */}
              <g transform="translate(62, 58)">
                <path d="M 4 8 L 16 8 L 14 18 Q 10 24 6 18 Z" fill="#8C4738" />
                <line x1="10" y1="22" x2="10" y2="28" stroke="#8C4738" strokeWidth="1.5" />
                <line x1="5" y1="28" x2="15" y2="28" stroke="#8C4738" strokeWidth="1.5" />
                <path d="M 8 5 Q 12 1 8 -3" stroke="#96743A" strokeWidth="0.8" />
              </g>
            </g>
          )}

          {characterId === 'calypso' && (
            <g stroke="#231C16" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
              {/* Nymph with cascading braided locks */}
              <path d="M 34 32 C 38 18 64 18 68 32 C 75 55 68 85 50 84 C 34 82 28 60 34 32 Z" fill="#D3C3A2" />
              <circle cx="50" cy="42" r="13" fill="#E8DEC4" />
              {/* Flowering Cedar Vine Garland */}
              <path d="M 36 34 Q 50 26 64 34" stroke="#8A9A65" strokeWidth="1.5" />
              <circle cx="45" cy="28" r="2" fill="#8C4738" />
              <circle cx="55" cy="28" r="2" fill="#8C4738" />
              {/* Remote island sea waves */}
              <path d="M 20 80 Q 35 74 50 80 Q 65 86 80 80" stroke="#343E48" strokeWidth="1.5" />
            </g>
          )}

          {characterId === 'polyphemus' && (
            <g stroke="#231C16" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
              {/* Massive Rugged Giant Head */}
              <path d="M 28 42 C 26 22 74 22 72 42 C 72 65 65 82 50 82 C 35 82 28 65 28 42 Z" fill="#D5C5A8" />
              {/* Wild Tangled Hair & Beard */}
              <path d="M 26 38 Q 50 18 74 38" fill="#52473D" />
              <path d="M 32 60 Q 50 85 68 60" fill="#3D3028" />
              {/* The Solitary Central Eye on Forehead */}
              <ellipse cx="50" cy="40" rx="9" ry="6" fill="#FAF5E8" stroke="#8C4738" strokeWidth="1.6" />
              <circle cx="50" cy="40" r="3.5" fill="#8C4738" />
              {/* Pine tree shepherd staff */}
              <line x1="78" y1="15" x2="72" y2="85" stroke="#7E602E" strokeWidth="2.5" />
            </g>
          )}

          {characterId === 'tiresias' && (
            <g stroke="#231C16" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
              {/* Blind Seer with Veil/Hood of the Underworld */}
              <path d="M 30 35 C 32 18 68 18 70 35 L 75 80 L 25 80 Z" fill="#3D3028" />
              <circle cx="50" cy="44" r="14" fill="#E8DEC4" />
              {/* Blindfolded or White Clouded Sightless Gaze */}
              <line x1="40" y1="42" x2="60" y2="42" stroke="#9E9184" strokeWidth="3" />
              {/* Golden Scepter of the Dead */}
              <line x1="32" y1="85" x2="32" y2="20" stroke="#96743A" strokeWidth="2" />
              <circle cx="32" cy="18" r="3.5" fill="#96743A" />
              {/* Chthonic blood trench smoke */}
              <path d="M 55 76 Q 60 68 56 60 Q 52 52 58 46" stroke="#8C4738" strokeWidth="1" strokeDasharray="2 2" />
            </g>
          )}

          {characterId === 'eumaeus' && (
            <g stroke="#231C16" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
              {/* Swineherd's Woolen Hood and Cloak */}
              <path d="M 32 38 C 34 22 66 22 68 38 L 74 84 L 26 84 Z" fill="#786B58" />
              <circle cx="50" cy="44" r="14" fill="#E8DEC4" />
              {/* Rustic Shepherd's Crook */}
              <path d="M 72 85 L 72 25 C 72 16 62 16 62 25" stroke="#96743A" strokeWidth="2" fill="none" />
              {/* Faithful Watchdog Silhouette */}
              <g transform="translate(24, 60) scale(0.65)">
                <path d="M 0 16 L 8 6 L 16 8 L 18 20 Z" fill="#3D3028" />
                <polygon points="6,6 8,1 11,5" fill="#3D3028" />
              </g>
            </g>
          )}

          {characterId === 'antinous' && (
            <g stroke="#231C16" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
              {/* Aristocratic Youth Headband / Fillet */}
              <circle cx="50" cy="42" r="15" fill="#E8DEC4" />
              <path d="M 36 32 Q 50 20 64 32" stroke="#96743A" strokeWidth="2.5" fill="none" />
              {/* Arrogant upturned profile */}
              <path d="M 44 48 L 56 46 L 50 56 Z" fill="#52473D" />
              {/* The Golden Two-Handled Wine Chalice (Book XXII) */}
              <g transform="translate(62, 54)">
                <path d="M 2 4 L 18 4 L 15 16 Q 10 22 5 16 Z" fill="#96743A" stroke="#7E602E" strokeWidth="1" />
                <path d="M 2 6 C -3 8 -3 14 3 15" stroke="#96743A" strokeWidth="1.2" />
                <path d="M 18 6 C 23 8 23 14 17 15" stroke="#96743A" strokeWidth="1.2" />
              </g>
              {/* Fatal Arrow Motif through the neck */}
              <line x1="20" y1="58" x2="52" y2="58" stroke="#8C4738" strokeWidth="1.5" />
              <polygon points="52,58 46,55 46,61" fill="#8C4738" />
            </g>
          )}

          {/* Medallion Rim Coin Rim Border */}
          <circle cx="50" cy="50" r="48" stroke="#96743A" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
};
