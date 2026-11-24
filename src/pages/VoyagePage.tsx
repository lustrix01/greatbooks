import React, { useState, useRef } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { AncientMediterraneanMap } from '../components/illustrations/AncientMediterraneanMap';
import { FleuronDivider, SectionRubric } from '../components/common/Ornament';
import { VerseQuote } from '../components/common/VerseQuote';
import { JOURNEY_LOCATIONS } from '../data/journeyData';
import type { JourneyLocation } from '../types/odyssey';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Users,
  AlertTriangle,
  Info,
  ChevronDown,
  BookOpen,
} from 'lucide-react';

export const VoyagePage: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<JourneyLocation>(JOURNEY_LOCATIONS[0]);
  const dossierRef = useRef<HTMLDivElement>(null);

  const currentIndex = JOURNEY_LOCATIONS.findIndex((l) => l.id === selectedLocation.id);
  const prevLocation = currentIndex > 0 ? JOURNEY_LOCATIONS[currentIndex - 1] : null;
  const nextLocation =
    currentIndex < JOURNEY_LOCATIONS.length - 1 ? JOURNEY_LOCATIONS[currentIndex + 1] : null;

  const handleSelectLocation = (loc: JourneyLocation) => {
    setSelectedLocation(loc);
    if (window.innerWidth < 1024 && dossierRef.current) {
      dossierRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <PageContainer folioTitle="The voyage & geography · Periplus Homericus">
      {/* Editorial Header */}
      <section className="text-center max-w-3xl mx-auto pb-8 border-b border-parchment-border">
        <p className="font-sans text-xs text-terracotta tracking-normal mb-3 font-medium">
          Periplus & mythic geography
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-ink-primary mb-3">
          The journey of Odysseus
        </h1>
        <p className="font-serif italic text-base sm:text-lg text-antique-gold mb-3">
          Fourteen encounters across the wine-dark Mediterranean, from the ashes of Troy to the rugged rock of Ithaca.
        </p>
        <p className="font-serif text-sm text-ink-secondary leading-relaxed max-w-2xl mx-auto">
          Trace the ten-year wanderings of the King of Ithaca. Explore each mythic waypoint, from the pastoral cavern of Polyphemus to the mist-wrapped borders of the Underworld.
        </p>
      </section>

      {/* Scholarly Map Disclaimer Banner */}
      <div className="my-6 max-w-5xl mx-auto border border-parchment-border bg-parchment-aged/50 p-4 sm:p-5 flex items-start gap-3 text-xs font-serif">
        <Info className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-sans font-semibold text-ink-primary block text-[11px]">
            Cartographic & scholarly notice:
          </span>
          <p className="text-ink-secondary leading-relaxed">
            This map is an illustrative literary interpretation of Homeric mythopoetic geography, not a verified historical chart. The epic presents the adventures from Ismarus through Thrinacia retrospectively through Odysseus&rsquo;s own narration to King Alcinous in the Phaeacian court (Books IX–XII). The geographical placements correspond to traditional ancient identifications recorded by Hellenistic geographers (Strabo, Thucydides, and Victor B&eacute;rard).
          </p>
        </div>
      </div>

      {/* The Antique Mediterranean Map */}
      <section className="max-w-5xl mx-auto mb-10">
        <AncientMediterraneanMap
          locations={JOURNEY_LOCATIONS}
          selectedLocation={selectedLocation}
          onSelectLocation={handleSelectLocation}
        />
      </section>

      {/* Antiquarian Stepping Stones / Chronicle Ribbon */}
      <section className="max-w-5xl mx-auto mb-12">
        <div className="border border-parchment-border bg-parchment-surface p-3 sm:p-4">
          <div className="flex items-center justify-between text-xs font-sans text-ink-muted border-b border-parchment-border pb-2.5 mb-3 px-1">
            <span className="font-medium">Itinerary sequence (I &ndash; XIV)</span>
            <span className="font-serif italic">Select any waypoint to examine its record</span>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {JOURNEY_LOCATIONS.map((loc) => {
              const isSelected = loc.id === selectedLocation.id;
              return (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => handleSelectLocation(loc)}
                  className={`px-3 py-2 shrink-0 border text-left transition-all rounded-xs font-sans ${
                    isSelected
                      ? 'border-terracotta bg-parchment-aged text-terracotta font-medium shadow-2xs'
                      : 'border-parchment-border/80 bg-parchment-base/60 text-ink-secondary hover:border-antique-gold hover:text-ink-primary'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="text-[11px] text-antique-gold font-medium">{loc.romanNumeral}.</span>
                    <span className="truncate max-w-[110px] text-xs font-medium">{loc.name}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* DETAILED ENCOUNTER MANUSCRIPT DOSSIER                    */}
      {/* ======================================================== */}
      <article
        ref={dossierRef}
        className="max-w-5xl mx-auto border border-parchment-border bg-parchment-surface p-6 sm:p-10 shadow-xs space-y-8"
      >
        {/* Dossier Header */}
        <div className="border-b border-parchment-border pb-6">
          {/* Top metadata tags */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-ink-muted mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 border border-parchment-border bg-parchment-aged text-terracotta font-sans font-medium text-xs">
                Stage {selectedLocation.step} of 14 &bull; Encounter {selectedLocation.romanNumeral}
              </span>
              <span className="text-parchment-darkborder">&bull;</span>
              <span className="font-serif italic text-ink-secondary">
                {selectedLocation.bookReferences}
              </span>
            </div>

            {/* Narrative Mode Badge (Retrospective vs Present) */}
            <span className="px-2.5 py-0.5 border border-antique-gold/50 text-antique-gold bg-parchment-base font-sans text-xs">
              {selectedLocation.narrativeMode}
            </span>
          </div>

          {/* Title and Greek name */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-ink-primary">
              {selectedLocation.name}
            </h2>
            <span className="font-serif italic text-lg sm:text-xl text-ink-muted greek-script">
              {selectedLocation.greekName}
            </span>
          </div>

          {/* Traditional Geography */}
          <div className="mt-3 flex items-start gap-2 text-xs font-serif text-ink-muted">
            <MapPin className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
            <span>
              <strong className="text-ink-secondary font-medium font-sans">Traditional Mediterranean coordinate: </strong>
              {selectedLocation.traditionalGeography}
            </span>
          </div>
        </div>

        {/* Short, Digestible Introduction First */}
        <div className="bg-parchment-aged/30 border border-parchment-border p-5 space-y-2">
          <div className="flex items-center gap-2 text-xs font-sans font-medium text-terracotta">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Essential summary</span>
          </div>
          <p className="font-serif text-base text-ink-primary leading-relaxed">
            {selectedLocation.whatHappened.split('.')[0]}. {selectedLocation.whatHappened.split('.')[1]}.
          </p>
        </div>

        {/* Two-Column Dossier: Main Challenge & Characters Involved */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Main Challenge */}
          <div className="md:col-span-7 border border-parchment-border bg-parchment-aged/30 p-5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-sans font-semibold text-terracotta">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>The central peril & trial</span>
            </div>
            <p className="font-serif text-sm sm:text-base text-ink-secondary leading-relaxed">
              {selectedLocation.mainChallenge}
            </p>
          </div>

          {/* Characters Involved */}
          <div className="md:col-span-5 border border-parchment-border bg-parchment-surface p-5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-sans font-semibold text-ink-muted">
              <Users className="w-3.5 h-3.5 text-antique-gold" />
              <span>Dramatis personae</span>
            </div>
            <ul className="space-y-1 text-xs font-serif text-ink-primary">
              {selectedLocation.charactersInvolved.map((charName) => (
                <li key={charName} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-antique-gold" />
                  <span>{charName}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Progressive Disclosure: Deep Scholarly Analysis & Full Account */}
        <details open className="group border border-parchment-border bg-parchment-surface p-5 space-y-6">
          <summary className="cursor-pointer font-sans text-xs font-semibold text-ink-primary select-none flex items-center justify-between pb-2 border-b border-parchment-border/60">
            <span className="flex items-center gap-2">
              <span className="text-terracotta">§</span>
              <span>Full narrative account & literary significance</span>
            </span>
            <span className="text-xs text-ink-muted flex items-center gap-1">
              <span className="group-open:hidden">Expand details</span>
              <span className="hidden group-open:inline">Collapse</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform group-open:rotate-180" />
            </span>
          </summary>

          <div className="pt-4 space-y-6">
            {/* What Happened Section */}
            <div className="space-y-3">
              <SectionRubric roman="A" label="The narrative account · What transpired" />
              <div className="border border-parchment-border bg-parchment-base/40 p-5 sm:p-7">
                <p className="font-serif text-base text-ink-primary leading-relaxed drop-cap">
                  {selectedLocation.whatHappened}
                </p>
              </div>
            </div>

            {/* Famous Passage Quote if present */}
            {selectedLocation.famousPassage && (
              <VerseQuote
                greekText={selectedLocation.famousPassage.greek}
                englishText={selectedLocation.famousPassage.english}
                citation={selectedLocation.famousPassage.citation}
              />
            )}

            {/* Literary & Philosophical Significance */}
            <div className="space-y-3">
              <SectionRubric roman="B" label="Literary & Great Books significance" />
              <div className="border-l-2 border-antique-gold/70 pl-4 py-1">
                <p className="font-serif text-sm sm:text-base text-ink-secondary leading-relaxed">
                  {selectedLocation.literarySignificance}
                </p>
              </div>
            </div>
          </div>
        </details>

        {/* Previous and Next Navigation Bar */}
        <div className="border-t border-b border-parchment-border py-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs sm:text-sm">
          {prevLocation ? (
            <button
              type="button"
              onClick={() => handleSelectLocation(prevLocation)}
              className="flex items-center gap-2 text-ink-secondary hover:text-terracotta transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>
                Previous: <strong className="font-medium text-ink-primary">{prevLocation.name}</strong> ({prevLocation.romanNumeral})
              </span>
            </button>
          ) : (
            <span className="text-ink-muted/50 italic text-xs font-serif">
              Departure point of the Odyssey
            </span>
          )}

          <div className="text-xs text-ink-muted tracking-widest hidden sm:inline select-none">
            ❦
          </div>

          {nextLocation ? (
            <button
              type="button"
              onClick={() => handleSelectLocation(nextLocation)}
              className="flex items-center gap-2 text-ink-secondary hover:text-terracotta transition-colors group text-right"
            >
              <span>
                Next: <strong className="font-medium text-ink-primary">{nextLocation.name}</strong> ({nextLocation.romanNumeral})
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <span className="text-ink-muted/50 italic text-xs font-serif">
              The journey reaches Ithaca
            </span>
          )}
        </div>
      </article>

      <FleuronDivider />
    </PageContainer>
  );
};
