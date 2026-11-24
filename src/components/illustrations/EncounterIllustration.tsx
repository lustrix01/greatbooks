import React from 'react';

interface EncounterIllustrationProps {
  encounterId: string;
  name: string;
  className?: string;
}

export const EncounterIllustration: React.FC<EncounterIllustrationProps> = ({
  encounterId,
  name,
  className = '',
}) => {
  return (
    <figure className={`border border-parchment-border bg-parchment-surface p-2.5 sm:p-4 shadow-2xs ${className}`}>
      {/* Decorative Engraving Frame */}
      <div className="relative border border-parchment-darkborder/75 bg-[#FAF6EC] overflow-hidden p-2 select-none">
        {/* Corner plate marks */}
        <div className="absolute top-1 left-1 text-[9px] text-antique-gold select-none font-serif leading-none" aria-hidden="true">╔</div>
        <div className="absolute top-1 right-1 text-[9px] text-antique-gold select-none font-serif leading-none" aria-hidden="true">╗</div>
        <div className="absolute bottom-1 left-1 text-[9px] text-antique-gold select-none font-serif leading-none" aria-hidden="true">╚</div>
        <div className="absolute bottom-1 right-1 text-[9px] text-antique-gold select-none font-serif leading-none" aria-hidden="true">╝</div>

        <svg
          viewBox="0 0 600 340"
          className="w-full h-auto text-ink-primary block"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label={`Antique woodcut engraving of ${name}`}
          role="img"
        >
          <defs>
            <radialGradient id={`encBg-${encounterId}`} cx="50%" cy="45%" r="65%">
              <stop offset="0%" stopColor="#FAF5E8" />
              <stop offset="65%" stopColor="#F4EDE0" />
              <stop offset="100%" stopColor="#E6DCBF" />
            </radialGradient>

            <pattern id="encHatch" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="6" stroke="#D3C7AB" strokeWidth="0.75" />
            </pattern>
          </defs>

          {/* Background Wash */}
          <rect x="0" y="0" width="600" height="340" fill={`url(#encBg-${encounterId})`} />
          <rect x="0" y="0" width="600" height="130" fill="url(#encHatch)" opacity="0.3" />

          {/* ======================================================== */}
          {/* 1. THE LOTUS-EATERS: TRANQUIL SHORE & NARCOTIC FLOWERS   */}
          {/* ======================================================== */}
          {encounterId === 'lotus-eaters' && (
            <g stroke="#231C16" strokeLinecap="round" strokeLinejoin="round">
              {/* Serene North African Palm & Shoreline */}
              <path d="M 0 240 Q 180 230 350 245 Q 480 255 600 240 L 600 340 L 0 340 Z" fill="#E8DECA" stroke="#9E9179" strokeWidth="1.2" />
              {/* Distant palm tree */}
              <path d="M 80 240 Q 90 160 85 110" stroke="#7E602E" strokeWidth="3" fill="none" />
              <path d="M 85 110 Q 50 90 20 100" stroke="#8A9A65" strokeWidth="2" fill="none" />
              <path d="M 85 110 Q 110 80 145 90" stroke="#8A9A65" strokeWidth="2" fill="none" />
              <path d="M 85 110 Q 90 70 85 50" stroke="#8A9A65" strokeWidth="2" fill="none" />
              {/* Giant Lotus Flowers in Foreground */}
              <g transform="translate(430, 210) scale(1.2)">
                <path d="M 20 30 C 10 10 30 -5 40 10 C 50 -5 70 10 60 30 Z" fill="#FAF5E8" stroke="#8C4738" strokeWidth="1.5" />
                <path d="M 30 30 C 25 15 35 5 40 15 C 45 5 55 15 50 30 Z" fill="#EADBC0" stroke="#8C4738" strokeWidth="1" />
                <circle cx="40" cy="20" r="3" fill="#96743A" />
                <line x1="40" y1="30" x2="40" y2="70" stroke="#5E6D41" strokeWidth="2.5" />
                <path d="M 40 45 Q 60 40 70 50 Q 55 60 40 52" fill="#8A9A65" stroke="#5E6D41" strokeWidth="1" />
              </g>
              {/* Peaceful seated indigenous figure extending a flowering bowl */}
              <g transform="translate(240, 215)">
                <ellipse cx="20" cy="18" rx="8" ry="10" fill="#D5C5A8" stroke="#231C16" strokeWidth="1" />
                <path d="M 12 28 C 10 45 6 60 2 75 L 45 75 C 40 55 35 40 28 28 Z" fill="#FAF5E8" stroke="#231C16" strokeWidth="1.2" />
                {/* Offering bowl */}
                <path d="M 35 48 Q 50 48 55 56 Q 40 60 35 48" fill="#96743A" stroke="#231C16" strokeWidth="1" />
              </g>
              {/* Greek Galley at anchor in the calm turquoise bay */}
              <g transform="translate(140, 160) scale(0.7)">
                <path d="M 0 20 Q 30 15 60 20 Q 65 10 55 5 Q 30 8 0 20 Z" fill="#423831" stroke="#231C16" strokeWidth="1" />
                <line x1="30" y1="18" x2="30" y2="-15" stroke="#231C16" strokeWidth="1.5" />
                <path d="M 15 -10 Q 30 -5 45 -10" stroke="#9E9184" strokeWidth="1" fill="none" />
              </g>
              {/* Gentle ripples */}
              <path d="M 20 280 Q 40 275 60 280" stroke="#786B58" strokeWidth="0.8" fill="none" />
              <path d="M 180 290 Q 210 285 240 290" stroke="#786B58" strokeWidth="0.8" fill="none" />
            </g>
          )}

          {/* ======================================================== */}
          {/* 2. POLYPHEMUS: THE CAVE & THE BURNING OLIVE STAKE        */}
          {/* ======================================================== */}
          {encounterId === 'polyphemus' && (
            <g stroke="#231C16" strokeLinecap="round" strokeLinejoin="round">
              {/* Massive Jagged Cave Arch */}
              <path
                d="M 0 0 L 0 340 L 120 340 C 130 250 160 140 260 90 C 370 40 500 80 520 180 C 530 240 550 300 600 340 L 600 0 Z"
                fill="#362C24"
                stroke="#1C1714"
                strokeWidth="2"
              />
              {/* Inside Cave Shadow */}
              <ellipse cx="360" cy="200" rx="140" ry="100" fill="#201A16" />
              {/* Polyphemus Reclining in Stupor */}
              <g transform="translate(320, 140)">
                <path d="M 30 20 C 20 -5 70 -15 85 15 C 95 35 80 60 65 65 Z" fill="#6B5947" stroke="#1C1714" strokeWidth="1.5" />
                {/* The single closed / blinded eye */}
                <ellipse cx="58" cy="18" rx="8" ry="5" fill="#8C4738" stroke="#1C1714" strokeWidth="1.2" />
                <line x1="50" y1="18" x2="66" y2="18" stroke="#FAF5E8" strokeWidth="2" />
                {/* Giant beard */}
                <path d="M 45 35 Q 60 65 75 40" fill="#201A16" />
              </g>
              {/* The Burning Olive Stake held by Odysseus and companions */}
              <g transform="translate(180, 200) rotate(-15)">
                <line x1="0" y1="0" x2="180" y2="0" stroke="#7E602E" strokeWidth="5" strokeLinecap="square" />
                {/* Burning glowing tip */}
                <polygon points="180,-4 205,0 180,4" fill="#8C4738" stroke="#96743A" strokeWidth="1" />
                {/* Glowing ember sparks */}
                <circle cx="210" cy="-6" r="2" fill="#96743A" />
                <circle cx="215" cy="4" r="1.5" fill="#8C4738" />
                <circle cx="195" cy="-8" r="1.5" fill="#96743A" />
              </g>
              {/* The giant ram with thick wool */}
              <g transform="translate(140, 240) scale(0.9)">
                <ellipse cx="40" cy="30" rx="28" ry="20" fill="#D5C5A8" stroke="#1C1714" strokeWidth="1.5" />
                <circle cx="18" cy="22" r="10" fill="#BDB095" stroke="#1C1714" strokeWidth="1.2" />
                {/* Curved ram horn */}
                <path d="M 18 18 C 12 12 8 20 12 26" stroke="#7E602E" strokeWidth="2.5" fill="none" />
                <line x1="25" y1="50" x2="25" y2="70" stroke="#1C1714" strokeWidth="2" />
                <line x1="55" y1="50" x2="55" y2="70" stroke="#1C1714" strokeWidth="2" />
              </g>
            </g>
          )}

          {/* ======================================================== */}
          {/* 3. THE LAESTRYGONIANS: CLIFF AMBUSH & CRUSHED SHIPS      */}
          {/* ======================================================== */}
          {encounterId === 'laestrygonians' && (
            <g stroke="#231C16" strokeLinecap="round" strokeLinejoin="round">
              {/* Towering sheer vertical fjord cliffs on both sides */}
              <path d="M 0 0 L 0 340 L 160 340 L 130 180 L 170 80 L 140 0 Z" fill="#52473D" stroke="#231C16" strokeWidth="1.5" />
              <path d="M 440 0 L 460 70 L 430 170 L 470 340 L 600 340 L 600 0 Z" fill="#52473D" stroke="#231C16" strokeWidth="1.5" />
              {/* Enclosed mirror-flat harbor water */}
              <rect x="130" y="240" width="340" height="100" fill="#3D4B54" />
              {/* Giant silhouette on left cliff hurling boulder */}
              <g transform="translate(120, 60) scale(0.9)">
                <circle cx="20" cy="18" r="9" fill="#201A16" />
                <path d="M 12 28 L 26 28 L 22 65 L 14 65 Z" fill="#201A16" />
                <line x1="25" y1="35" x2="45" y2="15" stroke="#201A16" strokeWidth="3" />
                {/* The massive boulder poised to drop */}
                <ellipse cx="54" cy="10" rx="14" ry="11" fill="#786B58" stroke="#1C1714" strokeWidth="1.5" />
              </g>
              {/* Falling boulders in mid-air */}
              <ellipse cx="280" cy="120" rx="12" ry="10" fill="#786B58" stroke="#1C1714" strokeWidth="1.2" />
              <ellipse cx="360" cy="170" rx="15" ry="12" fill="#786B58" stroke="#1C1714" strokeWidth="1.2" />
              {/* Splintered Ithacan ships in the harbor */}
              <g transform="translate(250, 260) scale(0.9)">
                {/* Fracturing hull */}
                <path d="M 0 20 L 35 15 L 45 28 L 10 32 Z" fill="#2A201A" stroke="#1C1714" strokeWidth="1.2" />
                <path d="M 40 18 L 80 20 L 70 34 L 38 28 Z" fill="#2A201A" stroke="#1C1714" strokeWidth="1.2" />
                {/* Snapped mast */}
                <line x1="38" y1="16" x2="55" y2="-5" stroke="#7E602E" strokeWidth="2" />
                <line x1="42" y1="12" x2="68" y2="8" stroke="#7E602E" strokeWidth="1.8" />
                {/* Water splash */}
                <path d="M 30 18 Q 40 5 45 18" stroke="#FAF5E8" strokeWidth="1.5" fill="none" />
              </g>
              {/* Giant spear reaching into the water */}
              <line x1="420" y1="180" x2="340" y2="290" stroke="#8C4738" strokeWidth="2.5" />
            </g>
          )}

          {/* ======================================================== */}
          {/* 4. THE SIRENS: WINGED BIRD-MAIDENS ON THE BONE MEADOW   */}
          {/* ======================================================== */}
          {encounterId === 'sirens' && (
            <g stroke="#231C16" strokeLinecap="round" strokeLinejoin="round">
              {/* Glass-calm sea */}
              <rect x="0" y="240" width="600" height="100" fill="#3D4B54" />
              {/* Flowery Meadow Rock with Bones */}
              <path d="M 320 340 C 350 250 420 180 520 180 C 560 180 580 240 600 270 L 600 340 Z" fill="#C9BFA8" stroke="#231C16" strokeWidth="1.5" />
              {/* Human bones and skulls in the grass */}
              <circle cx="480" cy="270" r="5" fill="#FAF5E8" stroke="#231C16" strokeWidth="0.8" />
              <line x1="465" y1="285" x2="495" y2="280" stroke="#FAF5E8" strokeWidth="2" />
              <line x1="510" y1="290" x2="535" y2="285" stroke="#FAF5E8" strokeWidth="2" />
              {/* Siren 1: Winged Bird-Woman perched on crag */}
              <g transform="translate(420, 130) scale(1.1)">
                {/* Woman's head with flowing hair */}
                <circle cx="20" cy="18" r="8" fill="#E8DEC4" stroke="#231C16" strokeWidth="1" />
                <path d="M 14 14 Q 24 6 28 16 Q 30 24 24 28" fill="#8C4738" />
                {/* Open mouth singing */}
                <ellipse cx="25" cy="20" rx="2" ry="3" fill="#231C16" />
                {/* Bird body with feathered wings */}
                <path d="M 12 26 C 2 35 -15 50 -25 45 C -20 35 0 25 15 24 Z" fill="#96743A" stroke="#231C16" strokeWidth="1" />
                <path d="M 22 26 C 30 35 45 45 55 42 C 45 35 30 25 20 24 Z" fill="#7E602E" stroke="#231C16" strokeWidth="1" />
                {/* Bird claws gripping rock */}
                <line x1="14" y1="48" x2="12" y2="58" stroke="#231C16" strokeWidth="1.5" />
                <line x1="22" y1="48" x2="25" y2="58" stroke="#231C16" strokeWidth="1.5" />
              </g>
              {/* Odysseus's ship passing: Mast with Odysseus lashed securely */}
              <g transform="translate(100, 160)">
                <path d="M 0 75 Q 60 65 120 75 L 115 95 L 10 95 Z" fill="#423831" stroke="#231C16" strokeWidth="1.5" />
                {/* Stout mast */}
                <line x1="60" y1="85" x2="60" y2="-20" stroke="#231C16" strokeWidth="4" />
                {/* Odysseus lashed upright to mast */}
                <rect x="54" y="10" width="12" height="42" fill="#8C4738" stroke="#231C16" strokeWidth="1" rx="2" />
                <circle cx="60" cy="4" r="5" fill="#E8DEC4" stroke="#231C16" strokeWidth="0.8" />
                {/* Heavy ship ropes wrapping him */}
                <line x1="50" y1="20" x2="70" y2="20" stroke="#FAF5E8" strokeWidth="1.5" />
                <line x1="50" y1="30" x2="70" y2="30" stroke="#FAF5E8" strokeWidth="1.5" />
                <line x1="50" y1="40" x2="70" y2="40" stroke="#FAF5E8" strokeWidth="1.5" />
              </g>
            </g>
          )}

          {/* ======================================================== */}
          {/* 5. SCYLLA: THE SIX-HEADED CRAG-MONSTER                   */}
          {/* ======================================================== */}
          {encounterId === 'scylla' && (
            <g stroke="#231C16" strokeLinecap="round" strokeLinejoin="round">
              {/* The high cloud-shrouded basalt cliff */}
              <path d="M 400 0 L 420 80 L 380 180 L 430 340 L 600 340 L 600 0 Z" fill="#2D241E" stroke="#1C1714" strokeWidth="2" />
              {/* The dark cave halfway up */}
              <ellipse cx="430" cy="140" rx="35" ry="25" fill="#140E0A" />
              {/* Six serpentine necks darting down to the water */}
              <g stroke="#5A4738" strokeWidth="3.5" fill="none">
                <path d="M 430 140 Q 350 120 280 200" />
                <path d="M 430 140 Q 320 150 250 220" />
                <path d="M 430 140 Q 360 170 300 240" />
                <path d="M 430 140 Q 380 190 320 260" />
                <path d="M 430 140 Q 390 220 340 280" />
                <path d="M 430 140 Q 400 240 360 295" />
              </g>
              {/* Six ravenous serpent heads with fangs */}
              <g fill="#3D3026" stroke="#1C1714" strokeWidth="1.2">
                <polygon points="280,200 265,190 265,210" />
                <polygon points="250,220 235,210 235,230" />
                <polygon points="300,240 285,230 285,250" />
                <polygon points="320,260 305,250 305,270" />
                <polygon points="340,280 325,270 325,290" />
                <polygon points="360,295 345,285 345,305" />
              </g>
              {/* Captive sailor writhing in the jaws */}
              <g transform="translate(245, 205) rotate(25)">
                <ellipse cx="0" cy="0" rx="4" ry="10" fill="#FAF5E8" stroke="#8C4738" strokeWidth="1" />
                <line x1="0" y1="8" x2="6" y2="18" stroke="#8C4738" strokeWidth="1.2" />
                <line x1="0" y1="8" x2="-6" y2="18" stroke="#8C4738" strokeWidth="1.2" />
              </g>
              {/* The Greek Galley rowing beneath the crag */}
              <g transform="translate(100, 260) scale(0.95)">
                <path d="M 0 35 L 140 30 L 130 50 L 10 50 Z" fill="#423831" stroke="#231C16" strokeWidth="1.5" />
                <line x1="40" y1="42" x2="25" y2="65" stroke="#231C16" strokeWidth="1.5" />
                <line x1="60" y1="42" x2="45" y2="65" stroke="#231C16" strokeWidth="1.5" />
                <line x1="80" y1="42" x2="65" y2="65" stroke="#231C16" strokeWidth="1.5" />
                <line x1="100" y1="42" x2="85" y2="65" stroke="#231C16" strokeWidth="1.5" />
              </g>
            </g>
          )}

          {/* ======================================================== */}
          {/* 6. CHARYBDIS: THE BOILING VORTEX & THE WILD FIG TREE     */}
          {/* ======================================================== */}
          {encounterId === 'charybdis' && (
            <g stroke="#231C16" strokeLinecap="round" strokeLinejoin="round">
              {/* Low rocky headland on left */}
              <path d="M 0 0 L 0 200 L 160 220 L 140 0 Z" fill="#4A3F35" stroke="#231C16" strokeWidth="1.5" />
              {/* The Great Wild Fig Tree (Erineos) hanging out over the abyss */}
              <g transform="translate(120, 150)">
                {/* Gnarly trunk extending out */}
                <path d="M 0 50 Q 40 20 80 30 Q 110 40 140 35" stroke="#7E602E" strokeWidth="5" fill="none" strokeLinecap="round" />
                <path d="M 60 25 Q 90 0 120 5" stroke="#7E602E" strokeWidth="3" fill="none" />
                {/* Thick lush fig foliage */}
                <ellipse cx="140" cy="35" rx="30" ry="20" fill="#5E6D41" stroke="#374127" strokeWidth="1.2" />
                <ellipse cx="115" cy="10" rx="25" ry="16" fill="#8A9A65" stroke="#374127" strokeWidth="1" />
                {/* Odysseus clinging suspended by hands and feet like a bat */}
                <g transform="translate(130, 48)">
                  <line x1="0" y1="0" x2="0" y2="20" stroke="#8C4738" strokeWidth="2.5" />
                  <circle cx="0" cy="5" r="3" fill="#FAF5E8" />
                  <line x1="-5" y1="0" x2="5" y2="0" stroke="#8C4738" strokeWidth="1.5" />
                </g>
              </g>
              {/* The Massive Churning Chthonic Whirlpool (Vortex) */}
              <g transform="translate(360, 250)">
                {/* Concentric spiral suction rings */}
                <ellipse cx="0" cy="0" rx="180" ry="60" fill="#202A30" stroke="#3D4B54" strokeWidth="2" />
                <ellipse cx="0" cy="0" rx="130" ry="42" fill="#182226" stroke="#4A5661" strokeWidth="1.5" />
                <ellipse cx="0" cy="0" rx="80" ry="26" fill="#10171A" stroke="#786B58" strokeWidth="1.2" />
                <ellipse cx="0" cy="0" rx="35" ry="12" fill="#05080A" stroke="#FAF5E8" strokeWidth="1" />
                {/* Spiral foam curls */}
                <path d="M -150 -10 Q -80 -40 20 -35 Q 120 -30 140 10 Q 120 45 -20 40 Q -100 35 -110 5" stroke="#DCD1B8" strokeWidth="1.5" fill="none" />
                <path d="M -90 -5 Q -40 -25 30 -20 Q 90 -15 80 15 Q 50 30 -30 25" stroke="#FAF5E8" strokeWidth="1.2" fill="none" />
              </g>
              {/* Ship timbers caught in suction */}
              <line x1="280" y1="230" x2="310" y2="245" stroke="#96743A" strokeWidth="2" />
              <line x1="390" y1="270" x2="420" y2="260" stroke="#96743A" strokeWidth="2" />
            </g>
          )}

          {/* Engraving Plate Inscription */}
          <g transform="translate(20, 325)">
            <text x="0" y="0" fontFamily="serif" fontStyle="italic" fontSize="9" fill="#786B58">
              Mythologia Homerica · {name}
            </text>
          </g>
        </svg>
      </div>
    </figure>
  );
};
