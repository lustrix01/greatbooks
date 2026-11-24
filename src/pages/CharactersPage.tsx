import React, { useState, useMemo, useRef } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { CharacterMedallion } from '../components/illustrations/CharacterMedallion';
import { SectionRubric, FleuronDivider } from '../components/common/Ornament';
import { VerseQuote } from '../components/common/VerseQuote';
import { CHARACTERS_DATA } from '../data/charactersData';
import type { CharacterProfile } from '../types/odyssey';
import {
  Search,
  Users,
  ArrowLeft,
  ArrowRight,
  Shield,
} from 'lucide-react';

type FilterCategory = 'all' | 'mortal' | 'deity' | 'mythical-being' | 'shade';

const CATEGORIES: { key: FilterCategory; label: string; count: number }[] = [
  { key: 'all', label: 'All Figures', count: CHARACTERS_DATA.length },
  {
    key: 'mortal',
    label: 'Mortals of Ithaca',
    count: CHARACTERS_DATA.filter((c) => c.category === 'mortal').length,
  },
  {
    key: 'deity',
    label: 'Olympian Deities',
    count: CHARACTERS_DATA.filter((c) => c.category === 'deity').length,
  },
  {
    key: 'mythical-being',
    label: 'Mythic Beings & Monsters',
    count: CHARACTERS_DATA.filter((c) => c.category === 'mythical-being').length,
  },
  {
    key: 'shade',
    label: 'Shades of the Underworld',
    count: CHARACTERS_DATA.filter((c) => c.category === 'shade').length,
  },
];

export const CharactersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');
  const [selectedCharacterId, setSelectedCharacterId] = useState<string>(CHARACTERS_DATA[0].id);

  const dossierRef = useRef<HTMLDivElement>(null);

  // Filtered characters based on search query and category
  const filteredCharacters = useMemo(() => {
    return CHARACTERS_DATA.filter((char) => {
      const matchesCategory =
        selectedCategory === 'all' || char.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        char.name.toLowerCase().includes(q) ||
        char.greekName.toLowerCase().includes(q) ||
        char.epithet.toLowerCase().includes(q) ||
        (char.roleInEpic && char.roleInEpic.toLowerCase().includes(q)) ||
        (char.role && char.role.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Selected character object
  const selectedCharacter =
    CHARACTERS_DATA.find((c) => c.id === selectedCharacterId) || CHARACTERS_DATA[0];

  // Resolve related characters
  const relatedCharacters = useMemo(() => {
    return (selectedCharacter.relatedCharacterIds || [])
      .map((id) => CHARACTERS_DATA.find((c) => c.id === id))
      .filter((c): c is CharacterProfile => Boolean(c));
  }, [selectedCharacter]);

  // Previous and next character in current filtered list
  const currentIndex = filteredCharacters.findIndex((c) => c.id === selectedCharacter.id);
  const prevCharacter = currentIndex > 0 ? filteredCharacters[currentIndex - 1] : null;
  const nextCharacter =
    currentIndex >= 0 && currentIndex < filteredCharacters.length - 1
      ? filteredCharacters[currentIndex + 1]
      : null;

  const handleSelectCharacter = (char: CharacterProfile) => {
    setSelectedCharacterId(char.id);
    if (window.innerWidth < 1024 && dossierRef.current) {
      dossierRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <PageContainer folioTitle="Dramatis Personae · The Figures of The Odyssey">
      {/* Title Header */}
      <section className="text-center max-w-3xl mx-auto pb-8 border-b border-parchment-border">
        <p className="font-display text-xs text-terracotta tracking-widest mb-3">
          Catalogus Personarum Homericarum
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-ink-primary mb-3">
          Dramatis Personae
        </h1>
        <p className="font-serif italic text-base sm:text-lg text-antique-gold mb-3">
          A scholarly encyclopedia of the mortals, Olympians, monsters, and shades.
        </p>
        <p className="font-body text-sm text-ink-secondary leading-relaxed max-w-2xl mx-auto">
          Examine the psychology, heroic epithets, and philosophical roles of the figures who populate Homer&rsquo;s epic universe.
        </p>
      </section>

      {/* Search & Category Filter Bar */}
      <div className="my-8 max-w-6xl mx-auto space-y-4">
        {/* Search Input styled like an antique catalog index */}
        <div className="relative max-w-xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ink-muted">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search characters by name, epithet, or Greek title..."
            className="w-full pl-10 pr-4 py-2.5 bg-parchment-surface border border-parchment-darkborder text-sm font-serif text-ink-primary placeholder:text-ink-muted/70 focus:outline-hidden focus:border-antique-gold transition-colors shadow-2xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs font-serif text-ink-muted hover:text-terracotta"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs font-serif">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3 py-1.5 border transition-colors rounded-xs ${
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
      </div>

      {/* ======================================================== */}
      {/* MAIN ENCYCLOPEDIA LAYOUT: MASTER-DETAIL EDITORIAL        */}
      {/* ======================================================== */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* LEFT COLUMN: The Character Library Roll (4 Cols) */}
        <aside className="lg:col-span-4 border border-parchment-border bg-parchment-surface">
          <div className="p-3.5 border-b border-parchment-border bg-parchment-aged/50 flex items-center justify-between">
            <span className="font-display text-xs text-ink-muted tracking-wider">
              Encyclopedia Roll
            </span>
            <span className="font-serif text-xs italic text-ink-muted">
              {filteredCharacters.length} {filteredCharacters.length === 1 ? 'Figure' : 'Figures'}
            </span>
          </div>

          <div className="divide-y divide-parchment-border/70 max-h-[680px] overflow-y-auto">
            {filteredCharacters.length === 0 ? (
              <div className="p-8 text-center text-xs font-serif text-ink-muted italic space-y-2">
                <p>No figures match your inquiry.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="text-terracotta hover:underline not-italic font-medium"
                >
                  Reset catalog filters
                </button>
              </div>
            ) : (
              filteredCharacters.map((char) => {
                const isSelected = char.id === selectedCharacter.id;
                return (
                  <button
                    key={char.id}
                    type="button"
                    onClick={() => handleSelectCharacter(char)}
                    className={`w-full text-left p-3.5 transition-colors flex items-center gap-3.5 ${
                      isSelected
                        ? 'bg-parchment-aged/80 border-l-3 border-terracotta'
                        : 'hover:bg-parchment-aged/40'
                    }`}
                  >
                    <CharacterMedallion
                      characterId={char.id}
                      name={char.name}
                      size="sm"
                      className="shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-1">
                        <h3 className="font-serif text-base font-medium text-ink-primary truncate">
                          {char.name}
                        </h3>
                        <span className="font-serif italic text-xs text-ink-muted greek-script shrink-0">
                          {char.greekName}
                        </span>
                      </div>
                      <p className="font-serif italic text-[11px] text-terracotta truncate">
                        {char.epithet}
                      </p>
                      <span className="font-display text-[10px] text-ink-muted tracking-wider block mt-0.5">
                        {char.categoryLabel}
                      </span>
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </aside>

        {/* RIGHT COLUMN: The Scholarly Manuscript Dossier (8 Cols) */}
        <article
          ref={dossierRef}
          className="lg:col-span-8 border border-parchment-border bg-parchment-surface p-6 sm:p-9 shadow-xs space-y-8"
        >
          {/* Header Plate: Medallion, Name, Category & Epithet */}
          <div className="border-b border-parchment-border pb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <CharacterMedallion
                characterId={selectedCharacter.id}
                name={selectedCharacter.name}
                size="lg"
              />

              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 border border-antique-gold/60 bg-parchment-aged text-[11px] font-display text-terracotta tracking-wider">
                    {selectedCharacter.categoryLabel}
                  </span>
                  <span className="font-serif italic text-xs text-ink-muted">
                    Homeric Personage
                  </span>
                </div>

                <div className="flex flex-wrap items-baseline gap-2.5">
                  <h2 className="font-serif text-3xl sm:text-4xl font-medium text-ink-primary">
                    {selectedCharacter.name}
                  </h2>
                  <span className="font-serif italic text-xl text-ink-muted greek-script">
                    {selectedCharacter.greekName}
                  </span>
                </div>

                <p className="font-serif italic text-sm text-antique-gold leading-snug">
                  &ldquo;{selectedCharacter.epithet}&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Famous Homeric Line / Quote */}
          {selectedCharacter.quote && (
            <VerseQuote
              greekText={selectedCharacter.quote.greek}
              englishText={selectedCharacter.quote.english}
              citation={selectedCharacter.quote.citation}
              speaker={selectedCharacter.name}
            />
          )}

          {/* Section 1: Background & Origin */}
          <div className="space-y-2.5">
            <SectionRubric roman="I" label="Lineage & Mythic Background" />
            <div className="border border-parchment-border bg-parchment-base/40 p-5">
              <p className="font-body text-base text-ink-primary leading-relaxed drop-cap">
                {selectedCharacter.background}
              </p>
            </div>
          </div>

          {/* Section 2: Role in the Epic & Relationship to Odysseus */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Role in Epic */}
            <div className="border border-parchment-border bg-parchment-surface p-4 sm:p-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-display text-ink-muted tracking-wider border-b border-parchment-border pb-1.5">
                <Shield className="w-3.5 h-3.5 text-terracotta" />
                <span>Role in the Epic</span>
              </div>
              <p className="font-body text-xs sm:text-sm text-ink-secondary leading-relaxed">
                {selectedCharacter.roleInEpic}
              </p>
            </div>

            {/* Relationship to Odysseus */}
            <div className="border border-parchment-border bg-parchment-aged/40 p-4 sm:p-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-display text-ink-muted tracking-wider border-b border-parchment-border pb-1.5">
                <Users className="w-3.5 h-3.5 text-antique-gold" />
                <span>Relation to Odysseus</span>
              </div>
              <p className="font-body text-xs sm:text-sm text-ink-secondary leading-relaxed">
                {selectedCharacter.relationshipToOdysseus}
              </p>
            </div>
          </div>

          {/* Section 3: Important Canonical Appearances */}
          <div className="space-y-3">
            <SectionRubric roman="II" label="Key Rhapsodies & Canonical Appearances" />
            <div className="border border-parchment-border bg-parchment-surface p-5">
              <ul className="space-y-2.5 font-body text-xs sm:text-sm text-ink-secondary divide-y divide-parchment-border/60">
                {(selectedCharacter.importantAppearances || []).map((app, idx) => (
                  <li key={idx} className="pt-2 first:pt-0 flex items-start gap-2.5">
                    <span className="text-antique-gold font-serif text-xs mt-0.5 select-none shrink-0">
                      {idx + 1}.
                    </span>
                    <span className="leading-relaxed">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 4: Literary & Great Books Significance */}
          <div className="space-y-3 border-t border-parchment-border pt-6">
            <SectionRubric roman="III" label="Literary & Philosophical Significance" />
            <div className="border-l-2 border-antique-gold/70 pl-4 py-1">
              <p className="font-body text-sm sm:text-base text-ink-secondary leading-relaxed">
                {selectedCharacter.literarySignificance}
              </p>
            </div>
          </div>

          {/* Section 5: Connected Figures / Related Characters */}
          {relatedCharacters.length > 0 && (
            <div className="border-t border-parchment-border pt-6 space-y-3">
              <h4 className="font-display text-xs text-ink-muted tracking-wider">
                Related Figures & Dramatis Personae
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {relatedCharacters.map((relChar) => (
                  <button
                    key={relChar.id}
                    type="button"
                    onClick={() => handleSelectCharacter(relChar)}
                    className="inline-flex items-center gap-2 px-3 py-1.5 border border-parchment-border bg-parchment-surface hover:border-antique-gold hover:bg-parchment-aged transition-colors text-xs font-serif text-ink-primary shadow-2xs"
                  >
                    <CharacterMedallion
                      characterId={relChar.id}
                      name={relChar.name}
                      size="sm"
                      className="w-5 h-5"
                    />
                    <span>{relChar.name}</span>
                    <span className="text-ink-muted italic greek-script text-[11px]">
                      ({relChar.greekName})
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Previous / Next Character Navigator */}
          <div className="border-t border-b border-parchment-border py-4 flex flex-col sm:flex-row items-center justify-between gap-3 font-serif text-xs sm:text-sm">
            {prevCharacter ? (
              <button
                type="button"
                onClick={() => handleSelectCharacter(prevCharacter)}
                className="flex items-center gap-1.5 text-ink-secondary hover:text-terracotta transition-colors group"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>
                  Previous: <strong className="font-medium text-ink-primary">{prevCharacter.name}</strong>
                </span>
              </button>
            ) : (
              <span className="text-ink-muted/50 italic text-xs">
                First Figure in Roll
              </span>
            )}

            <span className="text-ink-muted text-xs font-display hidden sm:inline">
              ❦
            </span>

            {nextCharacter ? (
              <button
                type="button"
                onClick={() => handleSelectCharacter(nextCharacter)}
                className="flex items-center gap-1.5 text-ink-secondary hover:text-terracotta transition-colors group text-right"
              >
                <span>
                  Next: <strong className="font-medium text-ink-primary">{nextCharacter.name}</strong>
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <span className="text-ink-muted/50 italic text-xs">
                Final Figure in Roll
              </span>
            )}
          </div>
        </article>
      </div>

      <FleuronDivider />
    </PageContainer>
  );
};
