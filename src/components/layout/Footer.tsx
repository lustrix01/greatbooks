import React from 'react';
import { Link } from 'react-router-dom';
import { FleuronDivider, MeanderBorder } from '../common/Ornament';

export const Footer: React.FC = () => {
  return (
    <footer id="about" className="mt-24 border-t border-parchment-border bg-parchment-surface/75">
      <MeanderBorder className="mb-6 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
        {/* Main Colophon Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Col 1: Academic Edition Identity & Overview */}
          <div className="md:col-span-5 space-y-4 pr-0 md:pr-6">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-xs border border-parchment-darkborder flex items-center justify-center font-serif text-sm text-terracotta bg-parchment-base">
                Ω
              </span>
              <h2 className="font-serif text-xl font-medium text-ink-primary tracking-normal">
                The Odyssey · An academic literary companion
              </h2>
            </div>
            <p className="font-serif text-sm text-ink-secondary leading-relaxed">
              Curated for university seminars, Great Books programs, and independent humanities research. This digital edition investigates Homer&rsquo;s twenty-four rhapsodies, examining the poetic structure of the Homeric epic, the archaeology of the archaic Mediterranean, and the moral tensions between mortal autonomy and divine retribution.
            </p>
            <p className="font-serif italic text-xs text-ink-muted">
              Division: The traditional Alexandrian canon of twenty-four books, standardized by Zenodotus of Ephesus and Aristarchus of Samothrace at the Great Library of Alexandria.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-sans text-xs font-semibold text-ink-muted tracking-wider">
              Sections of the edition
            </h3>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <Link to="/" className="text-ink-secondary hover:text-terracotta transition-colors">
                  Home (Frontispiece & proem)
                </Link>
              </li>
              <li>
                <Link to="/journey" className="text-ink-secondary hover:text-terracotta transition-colors">
                  The journey (14 waypoints)
                </Link>
              </li>
              <li>
                <Link to="/characters" className="text-ink-secondary hover:text-terracotta transition-colors">
                  Characters & dramatis personae
                </Link>
              </li>
              <li>
                <Link to="/encounters" className="text-ink-secondary hover:text-terracotta transition-colors">
                  Mythical encounters
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-ink-secondary hover:text-terracotta transition-colors">
                  Literary insights & themes
                </Link>
              </li>
              <li>
                <Link to="/trial" className="text-ink-secondary hover:text-terracotta transition-colors">
                  The knowledge trial (Quiz)
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-ink-secondary hover:text-terracotta transition-colors">
                  About the epic & scholarship
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Translation References & Scholarship */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-sans text-xs font-semibold text-ink-muted tracking-wider">
              Academic translations & references
            </h3>
            <ul className="space-y-2.5 text-xs font-serif text-ink-secondary leading-relaxed">
              <li>
                <strong className="text-ink-primary font-medium">Richmond Lattimore:</strong> <em>The Odyssey of Homer</em> (Harper & Row, 1967). Renowned for adhering strictly to the line-by-line syntax of the original Greek hexameter.
              </li>
              <li>
                <strong className="text-ink-primary font-medium">Robert Fagles:</strong> <em>The Odyssey</em> (Penguin Classics, 1996). Introduction and notes by Bernard Knox; esteemed for dramatic lyrical cadence.
              </li>
              <li>
                <strong className="text-ink-primary font-medium">Emily Wilson:</strong> <em>The Odyssey</em> (W. W. Norton, 2017). The first complete translation into English by a woman; composed in strict iambic pentameter.
              </li>
              <li>
                <strong className="text-ink-primary font-medium">A. T. Murray & George E. Dimock:</strong> <em>Homer: Odyssey</em> (Loeb Classical Library, Harvard University Press, 1919/1995).
              </li>
            </ul>
          </div>
        </div>

        <FleuronDivider className="py-2" />

        {/* Colophon Typography & Academic Notice */}
        <div className="pt-6 border-t border-parchment-border/70 text-center space-y-2">
          <p className="font-serif italic text-xs text-ink-muted">
            Typeset in Lora, Inter, and Cinzel on digital warm parchment.
          </p>
          <p className="text-xs text-ink-muted font-sans">
            Non-commercial open educational publication for classical humanities study. Passages rendered in the public domain and under academic fair-use guidelines.
          </p>
        </div>
      </div>
    </footer>
  );
};
