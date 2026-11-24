import React from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { FleuronDivider } from '../components/common/Ornament';
import { BOOKS_SUMMARY } from '../data/odysseyData';

const TETRALOGIES = [
  'The Telemachy',
  'The Phaeacian Haven',
  'The Wanderings (Apologue)',
  'The Return in Disguise',
  'The Gathering Storm',
  'The Vengeance & Peace',
] as const;

export const BooksPage: React.FC = () => {
  return (
    <PageContainer folioTitle="The 24 Books · Alexandrian Division">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto pb-10 border-b border-parchment-border">
        <p className="font-display text-xs text-terracotta tracking-widest mb-3">
          Rhapsodiarum Canonicarum Index
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-ink-primary mb-3">
          The Twenty-Four Books of The Odyssey
        </h1>
        <p className="font-body text-base text-ink-secondary leading-relaxed">
          Divided by the Hellenistic scholars of the Library of Alexandria according to the letters of the Greek alphabet (Alpha through Omega). Organized here into six classical tetralogies.
        </p>
      </section>

      {/* Tetralogies and Books */}
      <div className="py-12 space-y-16 max-w-5xl mx-auto">
        {TETRALOGIES.map((tetralogy, idx) => {
          const booksInTetralogy = BOOKS_SUMMARY.filter(
            (b) => b.tetralogy === tetralogy
          );

          if (booksInTetralogy.length === 0) return null;

          return (
            <section key={tetralogy} className="space-y-6">
              <div className="border-b border-parchment-border pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-serif italic text-lg text-terracotta">
                    Section {idx + 1}
                  </span>
                  <span className="text-antique-gold">&bull;</span>
                  <h2 className="font-serif text-2xl font-medium text-ink-primary">
                    {tetralogy}
                  </h2>
                </div>
                <span className="font-serif text-xs italic text-ink-muted">
                  Books {booksInTetralogy[0].romanNumeral} &ndash; {booksInTetralogy[booksInTetralogy.length - 1].romanNumeral}
                </span>
              </div>

              {/* Books List in Tetralogy */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {booksInTetralogy.map((book) => (
                  <article
                    key={book.number}
                    className="border border-parchment-border bg-parchment-surface p-6 flex flex-col justify-between hover:border-antique-gold/70 transition-colors"
                  >
                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="font-serif text-lg font-medium text-terracotta">
                          Book {book.romanNumeral}
                        </span>
                        <span className="font-serif text-xs italic text-ink-muted greek-script">
                          {book.greekTitle}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl font-medium text-ink-primary mb-3">
                        <Link
                          to={`/books/${book.number}`}
                          className="hover:text-terracotta transition-colors"
                        >
                          {book.title}
                        </Link>
                      </h3>

                      <p className="font-body text-sm text-ink-secondary leading-relaxed mb-4">
                        {book.summary}
                      </p>
                    </div>

                    <div className="border-t border-parchment-border/60 pt-4 flex items-center justify-between text-xs font-serif">
                      <div className="text-ink-muted">
                        <span className="font-medium text-ink-secondary">Characters: </span>
                        <span>{book.prominentCharacters.slice(0, 3).join(', ')}</span>
                      </div>
                      <Link
                        to={`/books/${book.number}`}
                        className="text-terracotta hover:text-ink-primary font-medium inline-flex items-center gap-1"
                      >
                        <span>Examine</span>
                        <span>&rarr;</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <FleuronDivider />
    </PageContainer>
  );
};
