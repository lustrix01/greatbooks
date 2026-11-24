import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface PageContainerProps {
  children: React.ReactNode;
  folioTitle?: string;
  className?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  folioTitle,
  className = ''
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EB] parchment-texture text-[#231C16]">
      <Navbar />

      {/* Optional Running Folio Indicator */}
      {folioTitle && (
        <div className="border-b border-parchment-border/70 bg-parchment-surface/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2 flex items-center justify-between text-xs text-ink-muted font-display">
            <span className="text-terracotta tracking-wider">{folioTitle}</span>
            <span className="font-serif italic text-ink-faint hidden sm:inline">
              Homer&rsquo;s Odyssey · Study Companion
            </span>
          </div>
        </div>
      )}

      {/* Main Content Area with subtle entrance */}
      <motion.main
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 sm:py-12 ${className}`}
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  );
};
