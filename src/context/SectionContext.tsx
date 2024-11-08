import React, { createContext, useContext, useRef, useEffect, useState, ReactNode } from 'react';

type SectionContextType = {
  section: number;
  prevSection: number;
  setSection: (newSection: number) => void;
};

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const SectionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [section, setSectionState] = useState(1); 
  const prevSection = useRef(section);

  useEffect(() => {
    prevSection.current = section;
  }, [section]);

  const setSection = (newSection: number) => {
    setSectionState(newSection);
  };

  return (
    <SectionContext.Provider value={{ section, prevSection: prevSection.current, setSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = (): SectionContextType => {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error('useSection must be used within a SectionProvider');
  }
  return context;
};
