import React, { useState, useMemo, useRef } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { EncounterIllustration } from '../components/illustrations/EncounterIllustration';
import { SectionRubric, FleuronDivider } from '../components/common/Ornament';
import { VerseQuote } from '../components/common/VerseQuote';
import { MYTHICAL_ENCOUNTERS_DATA } from '../data/encountersData';
import type { MythicalEncounter } from '../types/odyssey';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  AlertTriangle,
  Skull,
  ShieldCheck,
} from 'lucide-react';

type FilterCategory = 'all' | 'people-tribe' | 'sea-monster' | 'mythic-being';

const CATEGORIES: { key: FilterCategory; label: string; count: number }[] = [
  { key: 'all', label: 'All Encounters', count: MYTHICAL_ENCOUNTERS_DATA.length },
  {
    key: 'people-tribe',
    label: 'Mythic Peoples & Tribes',
    count: MYTHICAL_ENCOUNTERS_DATA.filter((e) => e.category === 'people-tribe').length,
  },
  {
    key: 'sea-monster',
    label: 'Sea Monsters & Vortexes',
    count: MYTHICAL_ENCOUNTERS_DATA.filter((e) => e.category === 'sea-monster').length,
  },
  {
    key: 'mythic-being',
    label: 'Monstrous Beings & Giants',
    count: MYTHICAL_ENCOUNTERS_DATA.filter((e) => e.category === 'mythic-being').length,
  },
];

export const EncountersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');
  const [selectedEncounterId, setSelectedEncounterId] = useState<string>(
    MYTHICAL_ENCOUNTERS_DATA[0].id
  );

  const dossierRef = useRef<HTMLDivElement>(null);

  const filteredEncounters = useMemo(() => {
    if (selectedCategory === 'all') return MYTHICAL_ENCOUNTERS_DATA;
    return MYTHICAL_ENCOUNTERS_DATA.filter((e) => e.category === selectedCategory);
  }, [selectedCategory]);

  const selectedEncounter =
    MYTHICAL_ENCOUNTERS_DATA.find((e) => e.id === selectedEncounterId) ||
    MYTHICAL_ENCOUNTERS_DATA[0];

  const currentIndex = filteredEncounters.findIndex((e) => e.id === selectedEncounter.id);
  const prevEncounter = currentIndex > 0 ? filteredEncounters[currentIndex - 1] : null;
  const nextEncounter =
    currentIndex >= 0 && currentIndex < filteredEncounters.length - 1
      ? filteredEncounters[currentIndex + 1]
      : null;

  const handleSelectEncounter = (enc: MythicalEncounter) => {
    setSelectedEncounterId(enc.id);
    if (window.innerWidth < 1024 && dossierRef.current) {
      dossierRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <PageContainer folioTitle="Mythical Encounters · Terrors, Tribes & Chthonic Wonders">
      {/* Editorial Title Plate */}
      <section className="text-center max-w-3xl mx-auto pb-8 border-b border-parchment-border">
        <p className="font-display text-xs text-terracotta tracking-widest mb-3">
          Bestiarium & Gentes Paradoxae
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-ink-primary mb-3">
          Mythical Encounters of The Odyssey
        </h1>
        <p className="font-serif italic text-base sm:text-lg text-antique-gold mb-3">
          An illustrated encyclopedia of the extraordinary peoples, monsters, and marine vortexes.
        </p>
        <p className="font-body text-sm text-ink-secondary leading-relaxed max-w-2xl mx-auto">
          From the narcotic meadows of the Lotus-Eaters to the boiling vortex of Charybdis. Examine each peril, the tactical response of Odysseus, and its philosophical resonance in archaic thought.
        </p>
      </section>

      {/* Category Filter Tabs */}
      <div className="my-8 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-serif">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            type="button"
            onClick={() => {
              setSelectedCategory(cat.key);
              // If current selection is not in filtered category, switch to first available
              const inCat = MYTHICAL_ENCOUNTERS_DATA.filter(
                (e) => cat.key === 'all' || e.category === cat.key
              );
              if (!inCat.some((e) => e.id === selectedEncounter.id) && inCat.length > 0) {
                setSelectedEncounterId(inCat[0].id);
              }
            }}
            className={`px-3.5 py-1.5 border transition-colors rounded-xs ${
              selectedCategory === cat.key
                ? 'border-terracotta bg-parchment-aged text-terracotta font-medium shadow-2xs'
                : 'border-parchment-border bg-parchment-surface text-ink-secondary hover:text-ink-primary hover:border-antique-gold/70'
            }`}
          >
            <span>{cat.label}</span>
            <span className="ml-1.5 text-[11px] opacity-60">({cat.count})</span>
          </button>
        ))}
      </div>

      {/* ======================================================== */}
      {/* MAIN ENCOUNTER ENCYCLOPEDIA LAYOUT                       */}
      {/* ======================================================== */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* LEFT COLUMN: The Encounters Index Roll (4 Cols) */}
        <aside className="lg:col-span-4 border border-parchment-border bg-parchment-surface">
          <div className="p-3.5 border-b border-parchment-border bg-parchment-aged/50 flex items-center justify-between">
            <span className="font-display text-xs text-ink-muted tracking-wider">
              Encounter Entries
            </span>
            <span className="font-serif text-xs italic text-ink-muted">
              {filteredEncounters.length} {filteredEncounters.length === 1 ? 'Entry' : 'Entries'}
            </span>
          </div>

          <div className="divide-y divide-parchment-border/70 max-h-[660px] overflow-y-auto">
            {filteredEncounters.map((enc, idx) => {
              const isSelected = enc.id === selectedEncounter.id;
              return (
                <button
                  key={enc.id}
                  type="button"
                  onClick={() => handleSelectEncounter(enc)}
                  className={`w-full text-left p-4 transition-colors flex flex-col gap-1.5 ${
                    isSelected
                      ? 'bg-parchment-aged/80 border-l-3 border-terracotta'
                      : 'hover:bg-parchment-aged/40'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-xs text-antique-gold font-medium">
                        0{idx + 1}.
                      </span>
                      <h3 className="font-serif text-base font-medium text-ink-primary">
                        {enc.name}
                      </h3>
                    </div>
                    <span className="font-serif italic text-xs text-ink-muted greek-script">
                      {enc.greekName}
                    </span>
                  </div>

                  <p className="font-display text-[11px] text-terracotta tracking-wider">
                    {enc.classification}
                  </p>

                  <div className="flex items-center justify-between text-[11px] font-serif text-ink-muted pt-1">
                    <span>{enc.categoryLabel}</span>
                    <span className="italic">{enc.bookReferences.split(',')[0]}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* RIGHT COLUMN: The Detailed Encounter Dossier (8 Cols) */}
        <article
          ref={dossierRef}
          className="lg:col-span-8 border border-parchment-border bg-parchment-surface p-6 sm:p-9 shadow-xs space-y-8"
        >
          {/* Large Custom Vector Engraving */}
          <EncounterIllustration
            encounterId={selectedEncounter.id}
            name={selectedEncounter.name}
          />

          {/* Dossier Header: Name, Greek, Classification & Category */}
          <div className="border-b border-parchment-border pb-6 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-display text-ink-muted">
              <span className="px-2.5 py-0.5 border border-terracotta/40 bg-parchment-aged text-terracotta font-serif font-medium">
                {selectedEncounter.categoryLabel}
              </span>
              <span className="font-serif italic text-ink-muted">
                {selectedEncounter.bookReferences}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-ink-primary">
                {selectedEncounter.name}
              </h2>
              <span className="font-serif italic text-xl text-ink-muted greek-script">
                {selectedEncounter.greekName}
              </span>
            </div>

            <p className="font-serif italic text-base text-antique-gold font-normal">
              Classification: {selectedEncounter.classification}
            </p>

            <div className="flex items-start gap-2 pt-2 text-xs font-serif text-ink-muted">
              <MapPin className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
              <span>
                <strong className="text-ink-secondary font-medium">Traditional Mediterranean Location: </strong>
                {selectedEncounter.location}
              </span>
            </div>
          </div>

          {/* Canonical Greek & English Verse Excerpt */}
          {selectedEncounter.quote && (
            <VerseQuote
              greekText={selectedEncounter.quote.greek}
              englishText={selectedEncounter.quote.english}
              citation={selectedEncounter.quote.citation}
            />
          )}

          {/* Attributes Matrix: Peril, Casualties, Virtue */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border border-parchment-border bg-parchment-aged/35 p-4 text-xs font-serif">
            <div className="space-y-1">
              <span className="text-terracotta flex items-center gap-1.5 font-medium">
                <AlertTriangle className="w-3.5 h-3.5" />
                Peril Confronted:
              </span>
              <p className="text-ink-secondary leading-relaxed">
                {selectedEncounter.attributes.perilType}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-ink-primary flex items-center gap-1.5 font-medium">
                <Skull className="w-3.5 h-3.5 text-ink-muted" />
                Crew Casualties:
              </span>
              <p className="text-ink-secondary leading-relaxed">
                {selectedEncounter.attributes.crewLosses}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-antique-gold flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                Virtue Tested:
              </span>
              <p className="text-ink-secondary leading-relaxed">
                {selectedEncounter.attributes.virtueTested}
              </p>
            </div>
          </div>

          {/* Section 1: Nature & Description */}
          <div className="space-y-2.5">
            <SectionRubric roman="I" label="Mythic Nature & Description" />
            <div className="border border-parchment-border bg-parchment-base/40 p-5">
              <p className="font-body text-base text-ink-primary leading-relaxed drop-cap">
                {selectedEncounter.description}
              </p>
            </div>
          </div>

          {/* Section 2: The Encounter with Odysseus */}
          <div className="space-y-2.5">
            <SectionRubric roman="II" label="The Encounter with Odysseus" />
            <div className="border border-parchment-border bg-parchment-surface p-5">
              <p className="font-body text-sm sm:text-base text-ink-secondary leading-relaxed">
                {selectedEncounter.encounterWithOdysseus}
              </p>
            </div>
          </div>

          {/* Section 3: How Odysseus Responded */}
          <div className="space-y-2.5 border-t border-parchment-border pt-6">
            <SectionRubric roman="III" label="How Odysseus Responded · Tactical & Moral Action" />
            <div className="border-l-2 border-terracotta pl-4 py-1">
              <p className="font-body text-sm sm:text-base text-ink-primary leading-relaxed">
                {selectedEncounter.howOdysseusResponded}
              </p>
            </div>
          </div>

          {/* Section 4: Literary & Great Books Significance */}
          <div className="space-y-2.5 border-t border-parchment-border pt-6">
            <SectionRubric roman="IV" label="Literary & Great Books Significance" />
            <div className="border-l-2 border-antique-gold/70 pl-4 py-1">
              <p className="font-body text-sm sm:text-base text-ink-secondary leading-relaxed">
                {selectedEncounter.literarySignificance}
              </p>
            </div>
          </div>

          {/* Sequential Navigator: Previous / Next Encounter */}
          <div className="border-t border-b border-parchment-border py-4 flex flex-col sm:flex-row items-center justify-between gap-3 font-serif text-xs sm:text-sm">
            {prevEncounter ? (
              <button
                type="button"
                onClick={() => handleSelectEncounter(prevEncounter)}
                className="flex items-center gap-1.5 text-ink-secondary hover:text-terracotta transition-colors group"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>
                  Previous: <strong className="font-medium text-ink-primary">{prevEncounter.name}</strong>
                </span>
              </button>
            ) : (
              <span className="text-ink-muted/50 italic text-xs">
                First Encounter in Record
              </span>
            )}

            <span className="text-ink-muted text-xs font-display hidden sm:inline">
              ❦
            </span>

            {nextEncounter ? (
              <button
                type="button"
                onClick={() => handleSelectEncounter(nextEncounter)}
                className="flex items-center gap-1.5 text-ink-secondary hover:text-terracotta transition-colors group text-right"
              >
                <span>
                  Next: <strong className="font-medium text-ink-primary">{nextEncounter.name}</strong>
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <span className="text-ink-muted/50 italic text-xs">
                Final Encounter in Record
              </span>
            )}
          </div>
        </article>
      </div>

      <FleuronDivider />
    </PageContainer>
  );
};
