import React, { useState } from 'react';
import type { JourneyLocation } from '../../types/odyssey';

interface AncientMediterraneanMapProps {
  locations: JourneyLocation[];
  selectedLocation: JourneyLocation;
  onSelectLocation: (loc: JourneyLocation) => void;
  className?: string;
}

export const AncientMediterraneanMap: React.FC<AncientMediterraneanMapProps> = ({
  locations,
  selectedLocation,
  onSelectLocation,
  className = '',
}) => {
  const [hoveredLocation, setHoveredLocation] = useState<JourneyLocation | null>(null);

  // SVG coordinate path tracing the chronological wanderings of Odysseus
  const routePoints = [
    { x: 825, y: 195 }, // 1. Troy
    { x: 770, y: 155 }, // 2. Ismarus
    { x: 675, y: 440 }, // Cape Malea storm deflection
    { x: 280, y: 520 }, // 3. Lotus-Eaters
    { x: 330, y: 375 }, // 4. Cyclopes
    { x: 380, y: 340 }, // 5. Aeolia
    { x: 550, y: 360 }, // Near miss at Ithaca's watchfires
    { x: 380, y: 340 }, // Gale blows back to Aeolia
    { x: 270, y: 220 }, // 6. Laestrygonians
    { x: 350, y: 240 }, // 7. Aeaea (Circe)
    { x: 95, y: 160 },  // 8. The Underworld (Oceanus)
    { x: 350, y: 240 }, // Return to Aeaea (bury Elpenor)
    { x: 395, y: 275 }, // 9. Island of the Sirens
    { x: 420, y: 360 }, // 10. Scylla and Charybdis
    { x: 435, y: 405 }, // 11. Thrinacia (Cattle of Helios)
    { x: 370, y: 460 }, // 12. Ogygia (Calypso)
    { x: 545, y: 300 }, // 13. Scheria (Phaeacians)
    { x: 575, y: 365 }, // 14. Ithaca
  ];

  const routePathD = routePoints.reduce(
    (acc, pt, i) => (i === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`),
    ''
  );

  return (
    <div className={`relative border border-parchment-border bg-parchment-surface p-2 sm:p-4 shadow-sm ${className}`}>
      {/* Outer Antiquarian Map Frame */}
      <div className="relative border border-parchment-darkborder/80 bg-[#FAF6EC] overflow-hidden select-none">
        {/* Subtle Map Coordinates Border Scale */}
        <div className="absolute top-1 left-2 right-2 flex justify-between text-[9px] font-serif text-ink-muted/70 tracking-widest pointer-events-none z-10">
          <span>36° N · OCEANVS OCCIDENTALIS</span>
          <span>MARE INTERNVM · RHODVS</span>
          <span>42° N · HELLESPONTVS</span>
        </div>

        <svg
          viewBox="0 0 960 580"
          className="w-full h-auto block text-ink-primary"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Antique Mediterranean map illustrating the fourteen journey encounters of Odysseus"
          role="img"
        >
          <defs>
            {/* Parchment Ocean Texture Gradient */}
            <radialGradient id="mapParchmentWash" cx="50%" cy="45%" r="65%">
              <stop offset="0%" stopColor="#FAF5E8" />
              <stop offset="60%" stopColor="#F3ECD8" />
              <stop offset="100%" stopColor="#E5DBBF" />
            </radialGradient>

            {/* Landmass aged tint */}
            <linearGradient id="landFill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EDE5D1" />
              <stop offset="100%" stopColor="#E2D7BE" />
            </linearGradient>

            {/* Coastline stippling / hachure pattern */}
            <pattern id="landHatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="8" stroke="#D3C7AC" strokeWidth="0.75" />
            </pattern>

            {/* Portolan Rhumb Line pattern */}
            <pattern id="rhumbGrid" width="160" height="160" patternUnits="userSpaceOnUse">
              <circle cx="80" cy="80" r="78" fill="none" stroke="#DCD1B7" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.6" />
              <line x1="0" y1="80" x2="160" y2="80" stroke="#DCD1B7" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.4" />
              <line x1="80" y1="0" x2="80" y2="160" stroke="#DCD1B7" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.4" />
            </pattern>
          </defs>

          {/* Sea / Parchment Background */}
          <rect x="0" y="0" width="960" height="580" fill="url(#mapParchmentWash)" />

          {/* Subtle Nautical Rhumb Lines */}
          <rect x="0" y="0" width="960" height="580" fill="url(#rhumbGrid)" opacity="0.65" />

          {/* Ancient Navigational Rhumb Ray Rays */}
          <g stroke="#CBBFA5" strokeWidth="0.6" strokeDasharray="4 6" opacity="0.55">
            <line x1="200" y1="180" x2="850" y2="480" />
            <line x1="200" y1="180" x2="850" y2="100" />
            <line x1="200" y1="180" x2="200" y2="580" />
            <line x1="750" y1="360" x2="100" y2="360" />
            <line x1="750" y1="360" x2="300" y2="50" />
            <line x1="750" y1="360" x2="450" y2="580" />
          </g>

          {/* ======================================================== */}
          {/* HAND-DRAWN MEDITERRANEAN COASTLINES                      */}
          {/* ======================================================== */}

          {/* Western Continental Edge / Iberian Coast (Top Left) */}
          <path
            d="M 0 0 L 0 110 Q 40 100 80 120 Q 120 145 150 140 Q 180 120 210 110 L 210 0 Z"
            fill="url(#landFill)"
            stroke="#9E9179"
            strokeWidth="1.2"
          />

          {/* Italian Peninsula & Southern Europe */}
          {/* Liguria down through Tuscany, Rome, Campania, Calabria, and Apulia */}
          <path
            d="M 230 0 C 250 50 280 80 300 110 Q 330 150 350 190 Q 370 230 380 260 Q 410 290 425 330 Q 435 365 425 380 L 415 375 Q 400 350 385 320 Q 360 280 340 240 Q 315 200 295 160 Q 270 120 250 80 L 250 0 Z"
            fill="url(#landFill)"
            stroke="#9E9179"
            strokeWidth="1.2"
          />
          {/* Apulia (The Heel of Italy) */}
          <path
            d="M 405 235 Q 440 255 480 270 Q 500 290 505 315 Q 485 330 460 310 Q 440 290 410 270 Z"
            fill="url(#landFill)"
            stroke="#9E9179"
            strokeWidth="1.1"
          />

          {/* Corsica and Sardinia */}
          <path
            d="M 265 170 C 275 165 285 175 280 195 C 275 210 265 215 260 205 C 255 195 255 180 265 170 Z"
            fill="url(#landFill)"
            stroke="#9E9179"
            strokeWidth="1.1"
          />
          <path
            d="M 260 225 C 275 220 285 235 285 265 C 280 290 265 295 255 285 C 245 265 250 235 260 225 Z"
            fill="url(#landFill)"
            stroke="#9E9179"
            strokeWidth="1.1"
          />

          {/* Sicily (Trinacria) - Distinct Three-Pointed Island */}
          <path
            d="M 330 360 C 370 350 410 355 435 370 Q 445 395 440 425 Q 400 420 370 410 Q 330 400 320 385 C 315 375 320 365 330 360 Z"
            fill="url(#landFill)"
            stroke="#9E9179"
            strokeWidth="1.3"
          />

          {/* Northern Greece, Thrace, and Balkans */}
          <path
            d="M 500 0 L 520 80 Q 560 120 620 135 Q 690 140 750 145 Q 800 135 840 120 L 960 120 L 960 0 Z"
            fill="url(#landFill)"
            stroke="#9E9179"
            strokeWidth="1.2"
          />

          {/* Greek Peninsula, Peloponnese, and Attica */}
          <path
            d="M 535 150 C 560 180 575 230 590 270 Q 615 290 635 290 Q 655 310 630 330 Q 600 350 580 330 Q 560 300 550 260 Q 535 210 535 150 Z"
            fill="url(#landFill)"
            stroke="#9E9179"
            strokeWidth="1.2"
          />
          {/* Peloponnese Hand Shape */}
          <path
            d="M 590 270 C 625 270 655 295 650 330 Q 640 375 625 390 Q 600 395 585 365 Q 570 340 575 305 Z"
            fill="url(#landFill)"
            stroke="#9E9179"
            strokeWidth="1.2"
          />

          {/* Ionian Archipelago (Corcyra, Leucas, Ithaca, Cephalonia, Zakynthos) */}
          <ellipse cx="545" cy="295" rx="5" ry="12" fill="#D8CCA8" stroke="#8C7D64" strokeWidth="0.8" />
          <ellipse cx="568" cy="340" rx="3" ry="7" fill="#D8CCA8" stroke="#8C7D64" strokeWidth="0.8" />
          <ellipse cx="575" cy="365" rx="4" ry="8" fill="#B3523E" stroke="#231C16" strokeWidth="1" />
          <ellipse cx="560" cy="370" rx="6" ry="12" fill="#D8CCA8" stroke="#8C7D64" strokeWidth="0.8" />
          <ellipse cx="570" cy="400" rx="4" ry="7" fill="#D8CCA8" stroke="#8C7D64" strokeWidth="0.8" />

          {/* Crete (Long Southern Barrier) */}
          <path
            d="M 680 460 Q 750 450 820 465 Q 780 480 720 478 Q 675 475 680 460 Z"
            fill="url(#landFill)"
            stroke="#9E9179"
            strokeWidth="1.1"
          />

          {/* Asia Minor / Anatolia (Troy & Ionia) */}
          <path
            d="M 830 145 C 840 180 820 220 835 260 Q 860 310 885 350 Q 920 380 960 400 L 960 145 Z"
            fill="url(#landFill)"
            stroke="#9E9179"
            strokeWidth="1.2"
          />

          {/* Aegean Islands Clusters (Cyclades, Sporades, Rhodes) */}
          <circle cx="680" cy="310" r="3.5" fill="#D8CCA8" stroke="#8C7D64" strokeWidth="0.7" />
          <circle cx="705" cy="325" r="4" fill="#D8CCA8" stroke="#8C7D64" strokeWidth="0.7" />
          <circle cx="735" cy="315" r="3" fill="#D8CCA8" stroke="#8C7D64" strokeWidth="0.7" />
          <circle cx="715" cy="355" r="4.5" fill="#D8CCA8" stroke="#8C7D64" strokeWidth="0.7" />
          <circle cx="750" cy="365" r="3" fill="#D8CCA8" stroke="#8C7D64" strokeWidth="0.7" />
          <circle cx="850" cy="410" r="5" fill="#D8CCA8" stroke="#8C7D64" strokeWidth="0.7" />

          {/* North African Shoreline (Egypt, Cyrenaica, Tripolitania, Djerba) */}
          <path
            d="M 0 580 L 0 530 Q 80 540 170 550 Q 250 535 300 540 Q 370 560 460 565 Q 560 550 670 565 Q 770 580 960 580 Z"
            fill="url(#landFill)"
            stroke="#9E9179"
            strokeWidth="1.3"
          />

          {/* Coastline Double Waterlines (Traditional Copperplate Engraving) */}
          <g stroke="#D0C4A8" strokeWidth="0.6" fill="none" opacity="0.65">
            <path d="M 335 352 Q 380 345 440 365 Q 448 400 445 432" />
            <path d="M 530 145 C 555 175 570 225 585 265" />
            <path d="M 822 140 C 832 175 812 215 828 255" />
          </g>

          {/* ======================================================== */}
          {/* ANTIQUE SEA & REGIONAL LABELS                            */}
          {/* ======================================================== */}
          <g fontStyle="italic" fontFamily="serif" fontSize="12" fill="#786B58" opacity="0.8" letterSpacing="0.1em">
            <text x="310" y="275" transform="rotate(-15 310 275)">MARE TYRRHENVM</text>
            <text x="465" y="380" transform="rotate(-40 465 380)">MARE IONIVM</text>
            <text x="690" y="240" transform="rotate(10 690 240)">PONTVS AEGAEVS</text>
            <text x="350" y="440">MARE SICVLVM</text>
            <text x="50" y="220" transform="rotate(-25 50 220)">OCEANVS PROFVNDVS</text>
            <text x="600" y="210" fontSize="10" fill="#96743A">GRAECIA</text>
            <text x="880" y="230" fontSize="10" fill="#96743A">ASIA MINOR</text>
            <text x="320" y="150" fontSize="10" fill="#96743A">ITALIA</text>
            <text x="400" y="550" fontSize="10" fill="#96743A">AFRICA / LIBYA</text>
          </g>

          {/* ======================================================== */}
          {/* ANTIQUE CARTOGRAPHIC EMBELLISHMENTS                      */}
          {/* ======================================================== */}

          {/* 1. Compass Rose (Rosa Ventorum) in the Western Mediterranean */}
          <g transform="translate(160, 390)">
            {/* Outer rings */}
            <circle cx="0" cy="0" r="42" fill="#FAF5E8" stroke="#96743A" strokeWidth="1" />
            <circle cx="0" cy="0" r="38" fill="none" stroke="#96743A" strokeWidth="0.6" strokeDasharray="2 2" />
            {/* Compass points */}
            {/* North (Boreas) with Fleur-de-lis tip */}
            <polygon points="0,0 -6,-10 0,-42 6,-10" fill="#8C4738" stroke="#231C16" strokeWidth="0.6" />
            <polygon points="0,0 0,-42 6,-10" fill="#6A2E22" />
            {/* South (Notos) */}
            <polygon points="0,0 -5,10 0,38 5,10" fill="#96743A" stroke="#231C16" strokeWidth="0.6" />
            {/* East (Apeliotes / Eurus) */}
            <polygon points="0,0 10,-5 38,0 10,5" fill="#96743A" stroke="#231C16" strokeWidth="0.6" />
            {/* West (Zephyrus) */}
            <polygon points="0,0 -10,-5 -38,0 -10,5" fill="#96743A" stroke="#231C16" strokeWidth="0.6" />
            {/* Intercardinal diamonds */}
            <polygon points="0,0 8,-22 25,-25 22,-8" fill="#DDD0B5" stroke="#96743A" strokeWidth="0.5" />
            <polygon points="0,0 -8,-22 -25,-25 -22,-8" fill="#DDD0B5" stroke="#96743A" strokeWidth="0.5" />
            <polygon points="0,0 8,22 25,25 22,8" fill="#DDD0B5" stroke="#96743A" strokeWidth="0.5" />
            <polygon points="0,0 -8,22 -25,25 -22,8" fill="#DDD0B5" stroke="#96743A" strokeWidth="0.5" />
            {/* Center Boss */}
            <circle cx="0" cy="0" r="4.5" fill="#96743A" stroke="#231C16" strokeWidth="0.8" />
            <circle cx="0" cy="0" r="2" fill="#FAF5E8" />
            {/* Cardinal Letters */}
            <text x="-4" y="-46" fontFamily="serif" fontSize="9" fill="#8C4738" fontWeight="bold">N</text>
            <text x="43" y="3" fontFamily="serif" fontSize="8" fill="#786B58">E</text>
            <text x="-3" y="50" fontFamily="serif" fontSize="8" fill="#786B58">S</text>
            <text x="-52" y="3" fontFamily="serif" fontSize="8" fill="#786B58">W</text>
          </g>

          {/* 2. Classical Sea Monster (Ketos) in the Central Sea */}
          <g transform="translate(480, 470)" opacity="0.45" stroke="#4A5661" strokeWidth="0.9" fill="none">
            <path d="M 0 0 C 15 -18 35 -10 45 5 C 55 20 75 18 90 2 C 105 -12 120 5 130 18" />
            <path d="M 2 5 C 18 -12 33 -5 42 8 C 50 20 68 18 82 5" />
            {/* Monster spine and tail */}
            <path d="M 115 5 C 130 -8 140 2 135 15 C 130 25 142 30 150 22 C 155 15 148 5 140 -2" />
            {/* Little water spout */}
            <path d="M 8 -5 Q 6 -16 12 -20 Q 16 -14 10 -5" />
            <text x="25" y="24" fontFamily="serif" fontStyle="italic" fontSize="7" fill="#4A5661">Ketos Marinus</text>
          </g>

          {/* 3. Homeric Bireme Skimming the Aegean Sea */}
          <g transform="translate(730, 260) scale(0.65)" opacity="0.6">
            <path d="M 0 15 Q 25 10 50 15 Q 55 5 45 0 Q 25 2 0 15 Z" fill="#423831" stroke="#231C16" strokeWidth="0.8" />
            <line x1="25" y1="12" x2="25" y2="-15" stroke="#231C16" strokeWidth="1.2" />
            <polygon points="12,-12 25,-14 38,-12 32,5 18,5" fill="#FAF5E8" stroke="#231C16" strokeWidth="0.7" />
          </g>

          {/* ======================================================== */}
          {/* THE GOLDEN VOYAGE TRAIL (1 TO 14)                        */}
          {/* ======================================================== */}
          {/* Shadow line */}
          <path
            d={routePathD}
            fill="none"
            stroke="#C0A97E"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.5"
          />
          {/* Main dashed voyage trail */}
          <path
            d={routePathD}
            fill="none"
            stroke="#8C4738"
            strokeWidth="1.6"
            strokeDasharray="4 3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Highlighted path from previous to current selected location */}
          {selectedLocation.step > 1 && (
            <path
              d={`M ${locations[selectedLocation.step - 2].coordinates.x} ${locations[selectedLocation.step - 2].coordinates.y} L ${selectedLocation.coordinates.x} ${selectedLocation.coordinates.y}`}
              fill="none"
              stroke="#96743A"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          )}

          {/* ======================================================== */}
          {/* INTERACTIVE WAYPOINT MARKERS (1 TO 14)                   */}
          {/* ======================================================== */}
          {locations.map((loc) => {
            const isSelected = loc.id === selectedLocation.id;
            const isHovered = hoveredLocation?.id === loc.id;
            const isIthaca = loc.id === 'ithaca';

            return (
              <g
                key={loc.id}
                transform={`translate(${loc.coordinates.x}, ${loc.coordinates.y})`}
                onClick={() => onSelectLocation(loc)}
                onMouseEnter={() => setHoveredLocation(loc)}
                onMouseLeave={() => setHoveredLocation(null)}
                className="cursor-pointer transition-transform duration-200"
                role="button"
                tabIndex={0}
                aria-label={`Waypoint ${loc.step}: ${loc.name}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onSelectLocation(loc);
                  }
                }}
              >
                {/* Active Outer Pulsing Halo */}
                {isSelected && (
                  <>
                    <circle
                      cx="0"
                      cy="0"
                      r="16"
                      fill="none"
                      stroke="#96743A"
                      strokeWidth="1.2"
                      opacity="0.8"
                      strokeDasharray="3 2"
                      className="animate-spin-slow"
                    />
                    <circle
                      cx="0"
                      cy="0"
                      r="20"
                      fill="#8C4738"
                      opacity="0.15"
                    />
                  </>
                )}

                {/* Marker Outer Ring */}
                <circle
                  cx="0"
                  cy="0"
                  r={isSelected ? 10.5 : isHovered ? 9.5 : 8}
                  fill={
                    isSelected
                      ? '#8C4738'
                      : isIthaca
                      ? '#96743A'
                      : '#FAF6EC'
                  }
                  stroke={isSelected ? '#FAF6EC' : '#231C16'}
                  strokeWidth={isSelected ? 1.8 : 1.2}
                  className="transition-all duration-200 shadow-sm"
                />

                {/* Inner Marker Dot / Number */}
                <text
                  x="0"
                  y="3.2"
                  textAnchor="middle"
                  fontFamily="serif"
                  fontSize={isSelected ? '9' : '8'}
                  fontWeight="600"
                  fill={isSelected ? '#FAF6EC' : '#231C16'}
                  className="pointer-events-none select-none"
                >
                  {loc.step}
                </text>

                {/* Permanent Name Label for Key Hubs or Selected */}
                {(isSelected || isHovered || isIthaca || loc.step === 1) && (
                  <g transform="translate(0, -14)" className="pointer-events-none select-none">
                    <rect
                      x="-42"
                      y="-12"
                      width="84"
                      height="15"
                      fill="#FAF6EC"
                      stroke="#9E9179"
                      strokeWidth="0.75"
                      rx="1"
                    />
                    <text
                      x="0"
                      y="-2"
                      textAnchor="middle"
                      fontFamily="serif"
                      fontSize="9"
                      fontWeight={isSelected ? 'bold' : 'normal'}
                      fill={isSelected ? '#8C4738' : '#231C16'}
                    >
                      {loc.name}
                    </text>
                  </g>
                )}
              </g>
            );
          })}

          {/* ======================================================== */}
          {/* ORNATE MAP CARTOUCHE (TITLE PLATE)                       */}
          {/* ======================================================== */}
          <g transform="translate(685, 480)">
            <rect
              x="0"
              y="0"
              width="240"
              height="75"
              fill="#FAF6EC"
              stroke="#9E9179"
              strokeWidth="1.2"
              rx="2"
            />
            {/* Inner cartouche rule */}
            <rect
              x="3"
              y="3"
              width="234"
              height="69"
              fill="none"
              stroke="#D8CFBC"
              strokeWidth="0.8"
            />
            <text x="120" y="20" textAnchor="middle" fontFamily="serif" fontSize="11" fontWeight="bold" fill="#231C16">
              PERIPLVS HOMERICVS
            </text>
            <text x="120" y="34" textAnchor="middle" fontFamily="serif" fontStyle="italic" fontSize="9" fill="#8C4738">
              The Fourteen Encounters of Odysseus
            </text>
            <line x1="30" y1="41" x2="210" y2="41" stroke="#96743A" strokeWidth="0.6" />
            <text x="120" y="53" textAnchor="middle" fontFamily="sans-serif" fontSize="7.5" fill="#786B58">
              Mythopoetic Geography of the Odyssey
            </text>
            <text x="120" y="64" textAnchor="middle" fontFamily="serif" fontStyle="italic" fontSize="7.5" fill="#9E9179">
              Ex Officina Academica · c. 750 BCE
            </text>
          </g>
        </svg>

        {/* Bottom Folio Notation */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] font-serif text-ink-muted italic px-3 py-2 bg-parchment-aged/50 border-t border-parchment-border gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-terracotta inline-block" />
            <span>Interactive Map: Click any circular numbered marker to inspect that encounter</span>
          </div>
          <span>Currently selected: Stage {selectedLocation.step} of 14 ({selectedLocation.name})</span>
        </div>
      </div>
    </div>
  );
};
