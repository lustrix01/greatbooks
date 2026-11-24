import React, { useState } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionRubric, FleuronDivider } from '../components/common/Ornament';
import { VerseQuote } from '../components/common/VerseQuote';
import { SymbolVignette } from '../components/illustrations/SymbolVignette';
import {
  LITERARY_THEMES_DATA,
  HOMERIC_SYMBOLS_DATA,
  CRITICAL_ESSAYS_DATA,
} from '../data/insightsData';
import {
  Sparkles,
  BookOpen,
  Anchor,
  Info,
} from 'lucide-react';

type ActiveTab = 'themes' | 'symbols' | 'essays';

export const ScholarshipPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('themes');
  const [selectedThemeId, setSelectedThemeId] = useState<string>(LITERARY_THEMES_DATA[0].id);
  const [selectedSymbolId, setSelectedSymbolId] = useState<string>(HOMERIC_SYMBOLS_DATA[0].id);
  const [selectedEssayId, setSelectedEssayId] = useState<string>(CRITICAL_ESSAYS_DATA[0].id);

  const selectedTheme =
    LITERARY_THEMES_DATA.find((t) => t.id === selectedThemeId) || LITERARY_THEMES_DATA[0];
  const selectedSymbol =
    HOMERIC_SYMBOLS_DATA.find((s) => s.id === selectedSymbolId) || HOMERIC_SYMBOLS_DATA[0];
  const selectedEssay =
    CRITICAL_ESSAYS_DATA.find((e) => e.id === selectedEssayId) || CRITICAL_ESSAYS_DATA[0];

  return (
    <PageContainer folioTitle="Literary Insights · Hermeneutica & Great Books Scholarship">
      {/* Editorial Title Header */}
      <section className="text-center max-w-3xl mx-auto pb-8 border-b border-parchment-border">
        <p className="font-display text-xs text-terracotta tracking-widest mb-3">
          Hermeneutica & Critica Homerica
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-ink-primary mb-3">
          Literary Insights of The Odyssey
        </h1>
        <p className="font-serif italic text-base sm:text-lg text-antique-gold mb-3">
          An academic study of moral vocabulary, primary symbols, and humanist philosophy.
        </p>
        <p className="font-body text-sm text-ink-secondary leading-relaxed max-w-2xl mx-auto">
          Explore the profound philosophical foundations of Homer&rsquo;s epic. Distinguish explicit narrative events from scholarly interpretation, and examine what Homer reveals about mortal suffering and homecoming.
        </p>
      </section>

      {/* Main Section Navigation Tabs */}
      <div className="my-8 max-w-4xl mx-auto flex items-center justify-center border-b border-parchment-border gap-2 sm:gap-6 font-serif text-sm">
        <button
          type="button"
          onClick={() => setActiveTab('themes')}
          className={`pb-3 px-3 transition-colors relative flex items-center gap-2 ${
            activeTab === 'themes'
              ? 'text-terracotta font-medium border-b-2 border-terracotta -mb-px'
              : 'text-ink-secondary hover:text-ink-primary'
          }`}
        >
          <Sparkles className="w-4 h-4 opacity-75" />
          <span>Core Themes (6)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('symbols')}
          className={`pb-3 px-3 transition-colors relative flex items-center gap-2 ${
            activeTab === 'symbols'
              ? 'text-terracotta font-medium border-b-2 border-terracotta -mb-px'
              : 'text-ink-secondary hover:text-ink-primary'
          }`}
        >
          <Anchor className="w-4 h-4 opacity-75" />
          <span>Homeric Symbols (5)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('essays')}
          className={`pb-3 px-3 transition-colors relative flex items-center gap-2 ${
            activeTab === 'essays'
              ? 'text-terracotta font-medium border-b-2 border-terracotta -mb-px'
              : 'text-ink-secondary hover:text-ink-primary'
          }`}
        >
          <BookOpen className="w-4 h-4 opacity-75" />
          <span>Critical Treatises (4)</span>
        </button>
      </div>

      {/* ======================================================== */}
      {/* TAB 1: CORE LITERARY THEMES                              */}
      {/* ======================================================== */}
      {activeTab === 'themes' && (
        <div className="max-w-6xl mx-auto space-y-10 mb-16">
          {/* Sub-Navigator of 6 Themes */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {LITERARY_THEMES_DATA.map((theme) => {
              const isSelected = theme.id === selectedTheme.id;
              return (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => setSelectedThemeId(theme.id)}
                  className={`px-3.5 py-2 border rounded-xs transition-colors font-serif text-xs ${
                    isSelected
                      ? 'border-terracotta bg-parchment-aged text-terracotta font-medium shadow-2xs'
                      : 'border-parchment-border bg-parchment-surface text-ink-secondary hover:border-antique-gold hover:text-ink-primary'
                  }`}
                >
                  <span className="block font-medium">{theme.title}</span>
                  <span className="italic text-[10px] text-ink-muted greek-script block">
                    {theme.greekTerm}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Theme Detailed Dossier */}
          <article className="border border-parchment-border bg-parchment-surface p-6 sm:p-10 shadow-xs space-y-8">
            {/* Header Plate */}
            <div className="border-b border-parchment-border pb-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <span className="font-display text-xs text-terracotta tracking-wider">
                  Thematic Pillar &bull; {selectedTheme.transliteration}
                </span>
                <span className="font-serif italic text-xs text-ink-muted">
                  Canonical Citations: {selectedTheme.bookReferences}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-ink-primary">
                  {selectedTheme.title}
                </h2>
                <span className="font-serif italic text-2xl text-ink-muted greek-script">
                  {selectedTheme.greekTerm}
                </span>
              </div>

              <p className="font-serif italic text-base text-antique-gold mt-2">
                &ldquo;{selectedTheme.definition}&rdquo;
              </p>
            </div>

            {/* Canonical Verse Quote */}
            <VerseQuote
              greekText={selectedTheme.quote.greek}
              englishText={selectedTheme.quote.english}
              citation={selectedTheme.quote.citation}
              speaker={selectedTheme.quote.speaker}
            />

            {/* Explanation with Drop Cap */}
            <div className="space-y-3">
              <SectionRubric roman="I" label="Philosophical & Narrative Explanation" />
              <div className="border border-parchment-border bg-parchment-base/40 p-5 sm:p-6">
                <p className="font-body text-base text-ink-primary leading-relaxed drop-cap">
                  {selectedTheme.explanation}
                </p>
              </div>
            </div>

            {/* Connection to Specific Events & Characters Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Specific Events */}
              <div className="md:col-span-8 border border-parchment-border bg-parchment-surface p-5 space-y-3">
                <h3 className="font-display text-xs text-ink-muted tracking-wider border-b border-parchment-border pb-2">
                  Manifestation in Specific Epic Events
                </h3>
                <ul className="space-y-2.5 font-body text-xs sm:text-sm text-ink-secondary">
                  {selectedTheme.connectionToEvents.map((evt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-antique-gold font-serif text-xs mt-0.5 select-none">
                        {idx + 1}.
                      </span>
                      <span className="leading-relaxed">{evt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Relevant Characters */}
              <div className="md:col-span-4 border border-parchment-border bg-parchment-aged/40 p-5 space-y-3">
                <h3 className="font-display text-xs text-ink-muted tracking-wider border-b border-parchment-border pb-2">
                  Dramatis Personae Involved
                </h3>
                <ul className="space-y-1.5 font-serif text-xs text-ink-primary">
                  {selectedTheme.relevantCharacters.map((charName) => (
                    <li key={charName} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                      <span>{charName}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Explicit Epic Fact vs. Scholarly Interpretation Box */}
            <div className="border border-parchment-darkborder bg-[#FAF6EC] p-5 sm:p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-display text-terracotta tracking-wider">
                <Info className="w-4 h-4" />
                <span>Textual Evidence vs. Scholarly Hermeneutics</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2 text-xs font-serif divide-y md:divide-y-0 md:divide-x divide-parchment-border">
                <div className="space-y-1 md:pr-4">
                  <span className="font-medium text-ink-primary block">
                    What Homer Explicitly Narrates:
                  </span>
                  <p className="text-ink-secondary leading-relaxed">
                    {selectedTheme.explicitEventVsInterpretation.explicitText}
                  </p>
                </div>

                <div className="pt-3 md:pt-0 md:pl-4 space-y-1">
                  <span className="font-medium text-antique-gold block">
                    Critical / Scholarly Interpretation:
                  </span>
                  <p className="text-ink-secondary leading-relaxed">
                    {selectedTheme.explicitEventVsInterpretation.scholarlyInterpretation}
                  </p>
                </div>
              </div>
            </div>

            {/* Why It Matters to the Overall Story */}
            <div className="border-t border-parchment-border pt-6 space-y-2">
              <SectionRubric roman="II" label="Why It Matters to the Epic's Meaning" />
              <div className="border-l-2 border-antique-gold/70 pl-4 py-1">
                <p className="font-body text-sm sm:text-base text-ink-secondary leading-relaxed">
                  {selectedTheme.whyItMatters}
                </p>
              </div>
            </div>
          </article>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 2: HOMERIC SYMBOLS                                   */}
      {/* ======================================================== */}
      {activeTab === 'symbols' && (
        <div className="max-w-6xl mx-auto space-y-10 mb-16">
          {/* Sub-Navigator of 5 Symbols */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {HOMERIC_SYMBOLS_DATA.map((sym) => {
              const isSelected = sym.id === selectedSymbol.id;
              return (
                <button
                  key={sym.id}
                  type="button"
                  onClick={() => setSelectedSymbolId(sym.id)}
                  className={`px-4 py-2 border rounded-xs transition-colors font-serif text-xs ${
                    isSelected
                      ? 'border-terracotta bg-parchment-aged text-terracotta font-medium shadow-2xs'
                      : 'border-parchment-border bg-parchment-surface text-ink-secondary hover:border-antique-gold hover:text-ink-primary'
                  }`}
                >
                  <span className="block font-medium">{sym.name}</span>
                  <span className="italic text-[10px] text-ink-muted greek-script block">
                    {sym.greekName}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Symbol Detailed Dossier */}
          <article className="border border-parchment-border bg-parchment-surface p-6 sm:p-10 shadow-xs space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-parchment-border pb-8">
              {/* Left: Custom SVG Symbol Vignette */}
              <div className="md:col-span-5">
                <SymbolVignette symbolId={selectedSymbol.id} name={selectedSymbol.name} />
              </div>

              {/* Right: Symbol Name, Meaning, Physical Form */}
              <div className="md:col-span-7 space-y-3">
                <div className="flex justify-between items-baseline">
                  <span className="font-display text-xs text-terracotta tracking-wider">
                    Homeric Symbol &bull; {selectedSymbol.bookReferences}
                  </span>
                  <span className="font-serif italic text-base text-ink-muted greek-script">
                    {selectedSymbol.greekName}
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-ink-primary">
                  {selectedSymbol.name}
                </h2>

                <p className="font-serif italic text-base text-antique-gold">
                  {selectedSymbol.symbolicMeaning}
                </p>

                <div className="pt-2 space-y-2 text-xs font-serif text-ink-secondary border-t border-parchment-border/70">
                  <div>
                    <strong className="text-ink-primary font-medium block">Physical Manifestation:</strong>
                    <span>{selectedSymbol.physicalManifestation}</span>
                  </div>
                  <div>
                    <strong className="text-ink-primary font-medium block">Narrative Function:</strong>
                    <span>{selectedSymbol.narrativeFunction}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Attributed Quote */}
            <VerseQuote
              greekText={selectedSymbol.quote.greek}
              englishText={selectedSymbol.quote.english}
              citation={selectedSymbol.quote.citation}
            />

            {/* Connection to Events & Characters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-parchment-border bg-parchment-base/40 p-5 space-y-2">
                <h3 className="font-display text-xs text-ink-muted tracking-wider border-b border-parchment-border pb-1.5">
                  Connection to Specific Narrative Events
                </h3>
                <p className="font-body text-xs sm:text-sm text-ink-secondary leading-relaxed">
                  {selectedSymbol.connectionToEvents}
                </p>
              </div>

              <div className="border border-parchment-border bg-parchment-aged/40 p-5 space-y-2">
                <h3 className="font-display text-xs text-ink-muted tracking-wider border-b border-parchment-border pb-1.5">
                  Relevant Figures & Characters
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-serif pt-1">
                  {selectedSymbol.relevantCharacters.map((cName) => (
                    <span
                      key={cName}
                      className="px-2.5 py-1 border border-parchment-border bg-parchment-surface text-ink-primary"
                    >
                      {cName}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Textual Fact vs Critical Interpretation */}
            <div className="border border-parchment-darkborder bg-[#FAF6EC] p-5 sm:p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-display text-terracotta tracking-wider">
                <Info className="w-4 h-4" />
                <span>Textual Evidence vs. Symbolic Hermeneutics</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2 text-xs font-serif divide-y md:divide-y-0 md:divide-x divide-parchment-border">
                <div className="space-y-1 md:pr-4">
                  <span className="font-medium text-ink-primary block">
                    What Homer Explicitly Narrates:
                  </span>
                  <p className="text-ink-secondary leading-relaxed">
                    {selectedSymbol.explicitEventVsInterpretation.explicitText}
                  </p>
                </div>

                <div className="pt-3 md:pt-0 md:pl-4 space-y-1">
                  <span className="font-medium text-antique-gold block">
                    Scholarly Symbolic Reading:
                  </span>
                  <p className="text-ink-secondary leading-relaxed">
                    {selectedSymbol.explicitEventVsInterpretation.scholarlyInterpretation}
                  </p>
                </div>
              </div>
            </div>

            {/* Why It Matters */}
            <div className="border-t border-parchment-border pt-6 space-y-2">
              <SectionRubric roman="II" label="Why It Matters to the Epic" />
              <div className="border-l-2 border-antique-gold/70 pl-4 py-1">
                <p className="font-body text-sm sm:text-base text-ink-secondary leading-relaxed">
                  {selectedSymbol.whyItMatters}
                </p>
              </div>
            </div>
          </article>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 3: CRITICAL TREATISES & SEMINARS                     */}
      {/* ======================================================== */}
      {activeTab === 'essays' && (
        <div className="max-w-6xl mx-auto space-y-10 mb-16">
          {/* Sub-Navigator of 4 Essays */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {CRITICAL_ESSAYS_DATA.map((essay) => {
              const isSelected = essay.id === selectedEssay.id;
              return (
                <button
                  key={essay.id}
                  type="button"
                  onClick={() => setSelectedEssayId(essay.id)}
                  className={`p-3.5 border rounded-xs transition-colors text-left flex flex-col justify-between ${
                    isSelected
                      ? 'border-terracotta bg-parchment-aged text-terracotta font-medium shadow-2xs'
                      : 'border-parchment-border bg-parchment-surface text-ink-secondary hover:border-antique-gold hover:text-ink-primary'
                  }`}
                >
                  <div>
                    <span className="font-serif italic text-[11px] text-ink-muted greek-script block mb-0.5">
                      {essay.greekRubric}
                    </span>
                    <h3 className="font-serif text-base font-medium text-ink-primary leading-snug">
                      {essay.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-display text-ink-muted tracking-wider block mt-2">
                    Examine Treatise &rarr;
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Essay Treatise Article */}
          <article className="border border-parchment-border bg-parchment-surface p-6 sm:p-10 shadow-xs space-y-8">
            {/* Header Plate */}
            <div className="border-b border-parchment-border pb-6 space-y-2">
              <span className="font-serif italic text-xs text-terracotta greek-script block">
                {selectedEssay.greekRubric} &bull; Academic Monograph
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-ink-primary">
                {selectedEssay.title}
              </h2>
              <p className="font-serif italic text-base text-antique-gold">
                {selectedEssay.subtitle}
              </p>
              <div className="border-t border-parchment-border/70 pt-3">
                <p className="font-body text-sm text-ink-secondary leading-relaxed">
                  <strong className="text-ink-primary font-medium">Abstract: </strong>
                  {selectedEssay.abstract}
                </p>
              </div>
            </div>

            {/* Classical Epigraph Quote */}
            <VerseQuote
              greekText={selectedEssay.quote.greek}
              englishText={selectedEssay.quote.english}
              citation={selectedEssay.quote.citation}
            />

            {/* Essay Subsections with Structured Typography */}
            <div className="space-y-6">
              {selectedEssay.sections.map((sec, idx) => (
                <div key={idx} className="space-y-2 border-b border-parchment-border/60 pb-5 last:border-b-0">
                  <h3 className="font-serif text-xl font-medium text-ink-primary">
                    {sec.subheading}
                  </h3>
                  <p className="font-body text-base text-ink-secondary leading-relaxed">
                    {sec.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Connections & Seminar Reflections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-parchment-border pt-6 text-xs font-serif">
              <div className="space-y-1">
                <span className="font-medium text-ink-primary block">Textual Anchors & Citations:</span>
                <p className="text-ink-secondary leading-relaxed">
                  {selectedEssay.connectionToEvents} ({selectedEssay.bookReferences})
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-medium text-terracotta block">Why This Informs the Odyssey:</span>
                <p className="text-ink-secondary leading-relaxed">
                  {selectedEssay.whyItMatters}
                </p>
              </div>
            </div>
          </article>
        </div>
      )}

      <FleuronDivider />
    </PageContainer>
  );
};
