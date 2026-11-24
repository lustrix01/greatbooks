import React from 'react';

interface GreekShipIllustrationProps {
  className?: string;
  showCaption?: boolean;
}

export const GreekShipIllustration: React.FC<GreekShipIllustrationProps> = ({
  className = '',
  showCaption = true,
}) => {
  return (
    <figure className={`border border-parchment-border bg-parchment-surface p-3 sm:p-5 shadow-xs ${className}`}>
      {/* Decorative Engraving Outer Border */}
      <div className="relative border border-parchment-darkborder/70 p-2 sm:p-3 overflow-hidden bg-[#FAF7F0]">
        {/* Subtle corner engravings */}
        <div className="absolute top-1 left-1 text-[10px] text-antique-gold select-none font-serif leading-none" aria-hidden="true">╔</div>
        <div className="absolute top-1 right-1 text-[10px] text-antique-gold select-none font-serif leading-none" aria-hidden="true">╗</div>
        <div className="absolute bottom-1 left-1 text-[10px] text-antique-gold select-none font-serif leading-none" aria-hidden="true">╚</div>
        <div className="absolute bottom-1 right-1 text-[10px] text-antique-gold select-none font-serif leading-none" aria-hidden="true">╝</div>

        {/* The SVG Illustration */}
        <svg
          viewBox="0 0 920 440"
          className="w-full h-auto text-ink-primary select-none block"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Illustration of an ancient Greek pentekonter galley sailing across the wine-dark sea under billowing sails"
          role="img"
        >
          <defs>
            {/* Sky parchment tint */}
            <linearGradient id="skyWash" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FAF5E8" stopOpacity="0.8" />
              <stop offset="65%" stopColor="#F5EFE0" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ECE3CF" stopOpacity="0.9" />
            </linearGradient>

            {/* Sea depth gradient */}
            <linearGradient id="wineDarkSea" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4A5661" stopOpacity="0.45" />
              <stop offset="40%" stopColor="#37434D" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#252F36" stopOpacity="0.92" />
            </linearGradient>

            {/* Sail parchment shading */}
            <linearGradient id="sailTexture" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFDF9" />
              <stop offset="45%" stopColor="#F4EDE0" />
              <stop offset="100%" stopColor="#E5DCB8" />
            </linearGradient>

            {/* Classical hatching pattern for distant clouds / shading */}
            <pattern id="hatchLines" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="6" stroke="#C9BFA8" strokeWidth="0.6" />
            </pattern>
          </defs>

          {/* Sky Canvas with soft wash */}
          <rect x="0" y="0" width="920" height="310" fill="url(#skyWash)" />

          {/* Background Shading / Engraved Sky Crosshatching */}
          <rect x="0" y="0" width="920" height="150" fill="url(#hatchLines)" opacity="0.3" />

          {/* Celestial Guide / Subtle North Star & Orion Constellation */}
          <g opacity="0.45" stroke="#96743A" strokeWidth="0.8">
            {/* Arcturus / Polaris star burst */}
            <circle cx="760" cy="55" r="2.5" fill="#96743A" />
            <line x1="760" y1="45" x2="760" y2="65" />
            <line x1="750" y1="55" x2="770" y2="55" />
            <circle cx="795" cy="72" r="1.5" fill="#96743A" />
            <circle cx="815" cy="95" r="1.5" fill="#96743A" />
            <circle cx="778" cy="110" r="1.8" fill="#96743A" />
            <circle cx="750" cy="98" r="1.5" fill="#96743A" />
            <text x="750" y="42" fontFamily="serif" fontStyle="italic" fontSize="9" fill="#7E602E">
              Arcturus · Orion
            </text>
          </g>

          {/* Classical Zephyr / Wind Spirit Breath */}
          <g opacity="0.4" stroke="#8C4738" strokeWidth="0.75" fill="none">
            <path d="M 60 70 Q 140 60 210 75 Q 260 85 300 80" />
            <path d="M 50 82 Q 130 72 200 88 Q 250 96 290 92" />
            <path d="M 75 94 Q 155 86 215 98 Q 255 104 285 102" />
            <text x="50" y="62" fontFamily="serif" fontStyle="italic" fontSize="9" fill="#8C4738">
              Zephyrus Aura (Ζέφυρος)
            </text>
          </g>

          {/* Distant Mythic Headlands (Cape Malea / Phaeacian Crags) */}
          <path
            d="M 0 280 L 0 245 Q 60 220 130 238 Q 190 252 260 230 Q 320 210 400 242 Q 470 270 540 282 L 0 282 Z"
            fill="#DED6C3"
            opacity="0.85"
            stroke="#BDB29B"
            strokeWidth="0.75"
          />
          {/* Headland hatching */}
          <path
            d="M 680 282 Q 740 240 810 235 Q 870 230 920 255 L 920 282 Z"
            fill="#DED6C3"
            opacity="0.75"
            stroke="#BDB29B"
            strokeWidth="0.75"
          />

          {/* Sea Base Layer */}
          <rect x="0" y="278" width="920" height="162" fill="url(#wineDarkSea)" />

          {/* Distant Sea Horizon Line */}
          <line x1="0" y1="278" x2="920" y2="278" stroke="#343E48" strokeWidth="1.2" />

          {/* Distant Wave Crests */}
          <g stroke="#C2B79E" strokeWidth="0.8" opacity="0.6">
            <path d="M 20 290 Q 35 285 50 290 Q 65 295 80 290 Q 95 285 110 290" />
            <path d="M 160 292 Q 180 287 200 292 Q 220 297 240 292" />
            <path d="M 720 288 Q 740 283 760 288 Q 780 293 800 288" />
            <path d="M 830 294 Q 850 289 870 294 Q 890 299 910 294" />
          </g>

          {/* ======================================================== */}
          {/* THE HOMERIC SHIP (Pentekonter Bireme Galley)              */}
          {/* ======================================================== */}
          <g id="homeric-galley">
            {/* The Main Mast (Histos) */}
            <line x1="470" y1="70" x2="470" y2="305" stroke="#231C16" strokeWidth="4.5" strokeLinecap="round" />
            {/* Mast top finial / pennant */}
            <polygon points="470,68 470,52 505,60" fill="#8C4738" stroke="#231C16" strokeWidth="0.8" />
            <circle cx="470" cy="50" r="3" fill="#96743A" stroke="#231C16" strokeWidth="0.8" />

            {/* Standing Rigging & Stays (Forestay and Backstay) */}
            <g stroke="#423831" strokeWidth="1.1" opacity="0.85">
              <line x1="470" y1="85" x2="280" y2="280" />
              <line x1="470" y1="85" x2="295" y2="282" />
              <line x1="470" y1="85" x2="680" y2="278" />
              <line x1="470" y1="85" x2="665" y2="279" />
              <line x1="470" y1="135" x2="350" y2="285" />
              <line x1="470" y1="135" x2="610" y2="283" />
            </g>

            {/* The Great Yardarm (Keraia) - Angled under full wind */}
            <line x1="330" y1="108" x2="615" y2="102" stroke="#2B241F" strokeWidth="3.5" strokeLinecap="round" />

            {/* The Billowing Square Linen Sail (Histion) */}
            {/* Shadow behind sail */}
            <path
              d="M 335 110 Q 420 185 470 195 Q 535 185 610 104 Q 560 170 470 180 Q 380 170 335 110 Z"
              fill="#D4C8AD"
              opacity="0.6"
            />
            {/* Main Sail Body */}
            <path
              d="M 335 110 C 370 160 380 230 470 235 C 560 230 575 160 610 104 C 555 116 480 120 470 120 C 450 120 380 116 335 110 Z"
              fill="url(#sailTexture)"
              stroke="#2B241F"
              strokeWidth="1.6"
            />

            {/* Vertical Sail Seams & Reefing Brails (Homeric linen weave) */}
            <g stroke="#9E9184" strokeWidth="0.75" strokeDasharray="3 2" opacity="0.8">
              <path d="M 370 114 C 390 155 395 195 410 228" />
              <path d="M 410 118 C 425 155 430 195 440 232" />
              <path d="M 470 120 C 470 160 470 200 470 235" />
              <path d="M 530 118 C 515 155 510 195 500 232" />
              <path d="M 570 114 C 550 155 545 195 530 228" />
            </g>

            {/* Brail lines hanging from the yardarm */}
            <g stroke="#5C5046" strokeWidth="0.8" opacity="0.75">
              <line x1="365" y1="112" x2="465" y2="280" />
              <line x1="420" y1="117" x2="470" y2="280" />
              <line x1="520" y1="117" x2="475" y2="280" />
              <line x1="575" y1="112" x2="480" y2="280" />
            </g>

            {/* Lower Hull (The Keel, Timber Planking, and Frame) */}
            {/* The sweeping hull shape from high stern to low ram */}
            <path
              d="M 240 250 C 255 235 270 260 280 275 L 340 285 L 560 287 L 690 283 C 715 281 740 275 755 286 C 735 292 710 296 680 297 L 340 298 C 290 298 260 288 240 250 Z"
              fill="#231C16"
              stroke="#1C1714"
              strokeWidth="2"
            />

            {/* Bulwark Planking & Upper Deck Timber */}
            <path
              d="M 270 274 L 690 274 C 705 274 720 270 730 265 L 725 272 L 685 280 L 285 280 Z"
              fill="#423831"
              stroke="#1C1714"
              strokeWidth="1"
            />

            {/* The High Curved Stern (Aphlaston / Goose-Neck Stern) */}
            <path
              d="M 240 250 C 230 230 220 205 225 185 C 230 170 245 170 248 185 C 250 205 245 235 258 260 Z"
              fill="#231C16"
              stroke="#96743A"
              strokeWidth="1.2"
            />
            {/* Decorative stern ornament */}
            <circle cx="230" cy="180" r="4.5" fill="#96743A" stroke="#1C1714" strokeWidth="1" />

            {/* The Prow (Prōra) & Bronze Ram (Embolos) */}
            {/* Powerful ram extending at the waterline */}
            <path
              d="M 685 282 L 755 286 L 765 298 L 730 298 L 680 296 Z"
              fill="#7E602E"
              stroke="#231C16"
              strokeWidth="1.2"
            />
            {/* Rising prow post (Akrostolion) */}
            <path
              d="M 715 275 C 735 260 745 235 750 215 C 752 205 758 205 758 215 C 756 240 745 270 730 282 Z"
              fill="#231C16"
              stroke="#1C1714"
              strokeWidth="1.2"
            />

            {/* The Apotropaic Eye of the Ship (Ophthalmos) on the Prow */}
            <g transform="translate(712, 276)">
              <ellipse cx="0" cy="0" rx="9" ry="5.5" fill="#FAF5E8" stroke="#1C1714" strokeWidth="1.2" />
              <circle cx="0" cy="0" r="3.2" fill="#8C4738" stroke="#1C1714" strokeWidth="0.8" />
              <circle cx="0" cy="0" r="1.5" fill="#1C1714" />
            </g>

            {/* Shields Hung Along the Bulwark (Aspides) */}
            <g fill="#8C4738" stroke="#231C16" strokeWidth="1">
              <circle cx="340" cy="278" r="6" />
              <circle cx="340" cy="278" r="3" fill="#96743A" />
              <circle cx="370" cy="278" r="6" />
              <circle cx="370" cy="278" r="3" fill="#96743A" />
              <circle cx="400" cy="278" r="6" />
              <circle cx="400" cy="278" r="3" fill="#96743A" />
              <circle cx="430" cy="278" r="6" />
              <circle cx="430" cy="278" r="3" fill="#96743A" />
              <circle cx="460" cy="278" r="6" />
              <circle cx="460" cy="278" r="3" fill="#96743A" />
              <circle cx="490" cy="278" r="6" />
              <circle cx="490" cy="278" r="3" fill="#96743A" />
              <circle cx="520" cy="278" r="6" />
              <circle cx="520" cy="278" r="3" fill="#96743A" />
              <circle cx="550" cy="278" r="6" />
              <circle cx="550" cy="278" r="3" fill="#96743A" />
              <circle cx="580" cy="278" r="6" />
              <circle cx="580" cy="278" r="3" fill="#96743A" />
              <circle cx="610" cy="278" r="6" />
              <circle cx="610" cy="278" r="3" fill="#96743A" />
              <circle cx="640" cy="278" r="6" />
              <circle cx="640" cy="278" r="3" fill="#96743A" />
            </g>

            {/* Steering Oars / Rudders (Pēdalia) at the Stern */}
            <g stroke="#231C16" strokeWidth="2.5" strokeLinecap="round">
              <line x1="265" y1="275" x2="225" y2="335" />
              <polygon points="225,335 215,348 230,345" fill="#3D3028" />
            </g>

            {/* Bank of Long Rowing Oars (Kōpai) Dipping Into the Wine-Dark Waves */}
            <g stroke="#372A22" strokeWidth="1.6" strokeLinecap="round" opacity="0.95">
              <line x1="320" y1="288" x2="275" y2="335" />
              <line x1="345" y1="288" x2="305" y2="335" />
              <line x1="370" y1="289" x2="335" y2="336" />
              <line x1="395" y1="289" x2="365" y2="336" />
              <line x1="420" y1="290" x2="395" y2="337" />
              <line x1="445" y1="290" x2="425" y2="337" />
              <line x1="470" y1="290" x2="455" y2="338" />
              <line x1="495" y1="290" x2="485" y2="338" />
              <line x1="520" y1="290" x2="515" y2="338" />
              <line x1="545" y1="290" x2="545" y2="338" />
              <line x1="570" y1="289" x2="575" y2="337" />
              <line x1="595" y1="289" x2="605" y2="337" />
              <line x1="620" y1="288" x2="635" y2="336" />
              <line x1="645" y1="288" x2="665" y2="335" />
            </g>

            {/* Oar Blades (Pterygia) Creating Foam in the Sea */}
            <g fill="#231C16" stroke="#231C16" strokeWidth="0.8">
              <polygon points="275,335 265,345 272,347" />
              <polygon points="305,335 295,345 302,347" />
              <polygon points="335,336 325,346 332,348" />
              <polygon points="365,336 355,346 362,348" />
              <polygon points="395,337 385,347 392,349" />
              <polygon points="425,337 415,347 422,349" />
              <polygon points="455,338 445,348 452,350" />
              <polygon points="485,338 478,349 485,350" />
              <polygon points="515,338 510,349 517,350" />
              <polygon points="545,338 543,349 550,350" />
              <polygon points="575,337 576,348 583,349" />
              <polygon points="605,337 608,348 615,348" />
              <polygon points="635,336 640,347 647,347" />
              <polygon points="665,335 672,346 678,345" />
            </g>

            {/* Odysseus standing on the aft deck */}
            <g transform="translate(268, 246)">
              {/* Cloak and torso */}
              <path d="M 0 14 L 6 12 L 10 26 L -3 27 Z" fill="#8C4738" stroke="#1C1714" strokeWidth="0.8" />
              {/* Head and warrior's cap (pilos) */}
              <circle cx="3" cy="8" r="3.2" fill="#FAF5E8" stroke="#1C1714" strokeWidth="0.8" />
              <path d="M 0 6 C 2 3 5 3 7 6 Z" fill="#7E602E" />
              {/* Arm pointing forward toward the horizon */}
              <line x1="6" y1="14" x2="16" y2="10" stroke="#1C1714" strokeWidth="1.2" strokeLinecap="round" />
            </g>
          </g>

          {/* ======================================================== */}
          {/* THE WINE-DARK SEA FOREGROUND WAVES (Oinops Pontos)       */}
          {/* ======================================================== */}
          {/* Midground swelling waves */}
          <path
            d="M 0 325 Q 70 305 150 322 Q 230 338 310 320 Q 390 302 470 322 Q 550 340 630 318 Q 710 298 790 322 Q 860 342 920 320 L 920 440 L 0 440 Z"
            fill="#2D3840"
            opacity="0.8"
          />

          {/* Wave crest highlights (Classical sea spray & foam) */}
          <g stroke="#FAF5E8" strokeWidth="1.2" fill="none" opacity="0.65">
            <path d="M 120 320 Q 145 312 170 322" />
            <path d="M 280 322 Q 305 314 330 323" />
            <path d="M 440 320 Q 465 312 490 322" />
            <path d="M 600 318 Q 625 310 650 320" />
            <path d="M 760 320 Q 785 312 810 322" />
          </g>

          {/* Foreground Deep Cresting Waves */}
          <path
            d="M 0 365 Q 80 340 170 362 Q 260 382 350 358 Q 440 334 530 360 Q 620 384 710 356 Q 800 330 920 365 L 920 440 L 0 440 Z"
            fill="#1F282E"
          />

          {/* Stylized Classical Foam Scrolls / Spirals */}
          <g stroke="#D4CBBA" strokeWidth="1.1" fill="none" opacity="0.75">
            <path d="M 40 380 Q 75 365 110 376 Q 130 382 145 378" />
            <path d="M 220 382 Q 255 367 290 378 Q 315 385 335 379" />
            <path d="M 400 376 Q 440 358 480 374 Q 505 382 525 377" />
            <path d="M 590 380 Q 625 364 660 376 Q 685 384 710 378" />
            <path d="M 780 375 Q 820 358 860 372 Q 885 380 910 376" />
          </g>

          {/* Deep Foreground Waters */}
          <rect x="0" y="410" width="920" height="30" fill="#182025" />

          {/* Classical Wave Border Finial at Bottom */}
          <g stroke="#96743A" strokeWidth="0.8" opacity="0.5">
            <line x1="20" y1="428" x2="900" y2="428" />
            <circle cx="460" cy="428" r="2.5" fill="#96743A" />
          </g>
        </svg>

        {/* Historical Plate Folio Notation inside border */}
        <div className="flex justify-between items-center text-[10px] font-serif text-ink-muted italic px-2 pt-2 border-t border-parchment-border/60">
          <span>Plate I &bull; Navis Ithacensis</span>
          <span>οἶνοψ πόντος &bull; The Wine-Dark Sea</span>
          <span>Ex Typographia Academica</span>
        </div>
      </div>

      {/* Caption Below Illustration */}
      {showCaption && (
        <figcaption className="text-center mt-3 space-y-1">
          <p className="font-serif italic text-sm text-ink-secondary">
            &ldquo;They stepped the mast, and spread the white sail to the wind; and the breeze blew full into the belly of the sail, and the dark wave sang loud around the keel as the ship sped on.&rdquo;
          </p>
          <cite className="font-display text-[11px] text-ink-muted tracking-wider block">
            Homer &bull; Odyssey, Book II, Lines 427–434
          </cite>
        </figcaption>
      )}
    </figure>
  );
};
