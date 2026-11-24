import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface SimplifyContextProps {
  simpleMode: boolean;
  toggleSimpleMode: () => void;
}

const SimplifyContext = createContext<SimplifyContextProps | undefined>(undefined);

export const SimplifyProvider = ({ children }: { children: ReactNode }) => {
  const [simpleMode, setSimpleMode] = useState(false);
  const toggleSimpleMode = () => setSimpleMode((prev) => !prev);
  return (
    <SimplifyContext.Provider value={{ simpleMode, toggleSimpleMode }}>
      {children}
    </SimplifyContext.Provider>
  );
};

export const useSimplify = (): SimplifyContextProps => {
  const ctx = useContext(SimplifyContext);
  if (!ctx) {
    throw new Error('useSimplify must be used within a SimplifyProvider');
  }
  return ctx;
};
