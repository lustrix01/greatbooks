import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BookOpen, Compass, Users, Sparkles, Feather, Info, Menu, X, Award } from 'lucide-react';

const NAV_ITEMS = [
  { to: '/', label: 'Home', icon: BookOpen },
  { to: '/journey', label: 'The journey', icon: Compass },
  { to: '/characters', label: 'Characters', icon: Users },
  { to: '/encounters', label: 'Mythical encounters', icon: Feather },
  { to: '/insights', label: 'Literary insights', icon: Sparkles },
  { to: '/trial', label: 'Knowledge trial', icon: Award },
  { to: '/about', label: 'About the epic', icon: Info },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-parchment-base/95 backdrop-blur-xs border-b border-parchment-border">
      {/* Editorial running top bar */}
      <div className="border-b border-parchment-border/60 py-1.5 px-4 sm:px-8 text-xs text-ink-muted flex justify-between items-center font-sans">
        <span>Great Books Academic Edition · Classical Greek literature</span>
        <span className="hidden sm:inline italic font-serif">Homer &bull; Ὅμηρος &bull; c. late 8th century BCE</span>
      </div>

      {/* Main Masthead Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Title & Colophon Monogram */}
        <Link to="/" className="group flex items-center gap-3.5 focus:outline-hidden">
          <div className="w-9 h-9 rounded-xs border border-parchment-darkborder/70 flex items-center justify-center bg-parchment-surface text-terracotta group-hover:border-antique-gold transition-colors">
            <span className="font-serif text-xl font-medium select-none">Ω</span>
          </div>
          <div>
            <h1 className="font-serif text-2xl tracking-normal text-ink-primary font-medium leading-none">
              The Odyssey
            </h1>
            <p className="font-serif text-xs italic text-ink-muted mt-0.5">
              A journey beyond Ithaca
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-1.5 text-xs sm:text-sm font-sans font-medium transition-colors relative flex items-center gap-1.5 ${
                    isActive
                      ? 'text-terracotta'
                      : 'text-ink-secondary hover:text-ink-primary hover:bg-parchment-aged/50 rounded-xs'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon className="w-3.5 h-3.5 opacity-70" strokeWidth={1.5} />
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-terracotta" />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-ink-secondary hover:text-ink-primary rounded-xs border border-parchment-border bg-parchment-surface"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-parchment-border bg-parchment-surface px-4 py-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 text-sm font-sans font-medium rounded-xs ${
                    isActive
                      ? 'bg-parchment-aged text-terracotta border-l-2 border-terracotta'
                      : 'text-ink-secondary hover:bg-parchment-aged/60'
                  }`
                }
              >
                <Icon className="w-4 h-4 opacity-75" strokeWidth={1.5} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      )}
    </header>
  );
};
