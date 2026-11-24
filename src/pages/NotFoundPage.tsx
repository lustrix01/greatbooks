import React from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { FleuronDivider } from '../components/common/Ornament';
import { Compass, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <PageContainer folioTitle="Folio 404 · Uncharted Waters">
      <div className="py-20 text-center max-w-lg mx-auto space-y-6">
        <div className="w-12 h-12 mx-auto rounded-full border border-parchment-border flex items-center justify-center bg-parchment-surface text-terracotta">
          <Compass className="w-6 h-6 stroke-1" />
        </div>

        <p className="font-display text-xs text-terracotta tracking-widest">
          Error Folio 404
        </p>

        <h1 className="font-serif text-3xl sm:text-4xl font-medium text-ink-primary">
          Lost upon the Wine-Dark Sea
        </h1>

        <p className="font-body text-base text-ink-secondary leading-relaxed">
          The scroll or passage you seek has drifted beyond the charted limits of the Mediterranean. No rowing crew nor gentle zephyr can bring this page ashore.
        </p>

        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-terracotta bg-parchment-surface text-terracotta hover:bg-parchment-aged font-serif text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to the Epic Overview</span>
          </Link>
        </div>
      </div>

      <FleuronDivider />
    </PageContainer>
  );
};
