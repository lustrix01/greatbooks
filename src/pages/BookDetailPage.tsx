import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { VerseQuote } from '../components/common/VerseQuote';
import { DiamondDivider, SectionRubric } from '../components/common/Ornament';
import { BOOKS_SUMMARY } from '../data/odysseyData';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const BookDetailPage: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const num = parseInt(bookId || '1', 10);
  const book = BOOKS_SUMMARY.find((b) => b.number === num);

  if (!book) {
    return (
      <PageContainer folioTitle="Scroll Not Found">
        <div className="text-center py-20 max-w-lg mx-auto space-y-4">
          <h1 className="font-serif text-3xl text-ink-primary font-medium">
            Scroll Not Found in the Library
          </h1>
          <p className="font-body text-ink-secondary">
            The requested rhapsody (Book {bookId}) does not exist within the twenty-four canonical scrolls of the epic.
          </p>
          <div className="pt-4">
            <Link
              to="/books"
              className="inline-flex items-center gap-2 text-sm font-serif text-terracotta hover:text-ink-primary"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to the 24 Books Index</span>
            </Link>
          </div>
        </div>
      </PageContainer>
    );
  }

  const prevBook = BOOKS_SUMMARY.find((b) => b.number === num - 1);
  const nextBook = BOOKS_SUMMARY.find((b) => b.number === num + 1);

  return (
    <PageContainer folioTitle={`Book ${book.romanNumeral} · ${book.tetralogy}`}>
      {/* Breadcrumb Back Link */}
      <div className="mb-6">
        <Link
          to="/books"
          className="inline-flex items-center gap-1.5 text-xs font-serif text-ink-muted hover:text-terracotta transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to all 24 Books</span>
        </Link>
      </div>

      {/* Book Title Plate */}
      <header className="border-b border-parchment-border pb-8 mb-10 max-w-4xl mx-auto text-center">
        <span className="font-display text-xs text-terracotta tracking-widest block mb-2">
          Rhapsody {book.romanNumeral} &bull; {book.tetralogy}
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-ink-primary mb-3">
          Book {book.romanNumeral}: {book.title}
        </h1>
        <p className="font-serif italic text-base sm:text-lg text-ink-muted greek-script">
          {book.greekTitle}
        </p>
      </header>

      {/* Famous Lines Epigraph if present */}
      {book.famousLines && (
        <div className="max-w-3xl mx-auto mb-10">
          <VerseQuote
            greekText={book.famousLines.greek}
            englishText={book.famousLines.english}
            citation={`Homer, Odyssey ${book.famousLines.citation}`}
          />
        </div>
      )}

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
        {/* Left Column: Synopsis & Key Events */}
        <div className="lg:col-span-8 space-y-8">
          {/* Narrative Synopsis */}
          <section className="space-y-4">
            <SectionRubric roman="I" label="Narrative Synopsis" />
            <div className="bg-parchment-surface border border-parchment-border p-6 sm:p-8">
              <p className="font-body text-base text-ink-primary leading-relaxed drop-cap">
                {book.summary}
              </p>
            </div>
          </section>

          {/* Canonical Milestones & Key Events */}
          <section className="space-y-4">
            <SectionRubric roman="II" label="Key Dramatic Moments" />
            <div className="border border-parchment-border bg-parchment-surface/60 p-6">
              <ul className="space-y-3 font-body text-sm text-ink-secondary">
                {book.keyEvents.map((evt, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-antique-gold font-serif text-xs mt-0.5 select-none">
                      {idx + 1}.
                    </span>
                    <span className="leading-relaxed">{evt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Right Column: Characters, Themes, and Scholastic Context */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Dramatis Personae */}
          <div className="border border-parchment-border bg-parchment-surface p-5">
            <h3 className="font-display text-xs text-ink-muted tracking-wider border-b border-parchment-border/70 pb-2 mb-3">
              Prominent Figures
            </h3>
            <ul className="space-y-2 text-sm font-serif">
              {book.prominentCharacters.map((charName) => (
                <li key={charName} className="text-ink-primary flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-terracotta" />
                  <span>{charName}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Significant Themes */}
          <div className="border border-parchment-border bg-parchment-aged/40 p-5">
            <h3 className="font-display text-xs text-ink-muted tracking-wider border-b border-parchment-border/70 pb-2 mb-3">
              Thematic Echoes
            </h3>
            <div className="flex flex-wrap gap-2 text-xs font-serif">
              {book.significantThemes.map((th) => (
                <span
                  key={th}
                  className="px-2.5 py-1 border border-parchment-border bg-parchment-surface text-ink-secondary"
                >
                  {th}
                </span>
              ))}
            </div>
          </div>

          {/* Section Marker */}
          <div className="border border-parchment-border/80 p-5 text-xs font-serif text-ink-muted space-y-2">
            <span className="font-medium text-ink-secondary block">Great Books Study Note:</span>
            <p className="leading-relaxed">
              Examine how Homer develops the central tension between divine will and mortal responsibility in this rhapsody.
            </p>
          </div>
        </aside>
      </div>

      <DiamondDivider className="my-12" />

      {/* Pagination: Previous & Next Books */}
      <nav className="max-w-4xl mx-auto flex items-center justify-between border-t border-b border-parchment-border py-4 font-serif text-sm">
        {prevBook ? (
          <Link
            to={`/books/${prevBook.number}`}
            className="flex items-center gap-2 text-ink-secondary hover:text-terracotta transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Book {prevBook.romanNumeral}: {prevBook.title}</span>
          </Link>
        ) : (
          <span className="text-ink-muted/50 italic">First Book of the Epic</span>
        )}

        {nextBook ? (
          <Link
            to={`/books/${nextBook.number}`}
            className="flex items-center gap-2 text-ink-secondary hover:text-terracotta transition-colors text-right"
          >
            <span>Book {nextBook.romanNumeral}: {nextBook.title}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        ) : (
          <span className="text-ink-muted/50 italic">Final Book of the Epic</span>
        )}
      </nav>
    </PageContainer>
  );
};
