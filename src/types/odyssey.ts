export interface BookSynopsis {
  number: number;
  romanNumeral: string;
  title: string;
  greekTitle: string;
  tetralogy: 'The Telemachy' | 'The Phaeacian Haven' | 'The Wanderings (Apologue)' | 'The Return in Disguise' | 'The Gathering Storm' | 'The Vengeance & Peace';
  summary: string;
  keyEvents: string[];
  prominentCharacters: string[];
  significantThemes: string[];
  famousLines?: {
    greek: string;
    english: string;
    citation: string;
  };
}

export interface CharacterProfile {
  id: string;
  name: string;
  greekName: string;
  epithet: string;
  category: 'mortal' | 'deity' | 'mythical-being' | 'shade' | 'mortal-ithaca' | 'encounter-monster' | 'ally-monarch';
  categoryLabel?: string;
  background?: string;
  roleInEpic?: string;
  role?: string;
  description?: string;
  relationshipToOdysseus?: string;
  importantAppearances?: string[];
  literarySignificance?: string;
  relatedCharacterIds?: string[];
  prominentBooks?: number[];
  associatedTheme?: string;
  quote?: {
    greek?: string;
    english: string;
    citation: string;
  };
}

export interface MythicalEncounter {
  id: string;
  name: string;
  greekName: string;
  classification: string;
  category: 'people-tribe' | 'sea-monster' | 'mythic-being';
  categoryLabel: string;
  description: string;
  location: string;
  encounterWithOdysseus: string;
  howOdysseusResponded: string;
  literarySignificance: string;
  bookReferences: string;
  quote?: {
    greek?: string;
    english: string;
    citation: string;
  };
  attributes: {
    perilType: string;
    crewLosses: string;
    virtueTested: string;
  };
}

export interface JourneyLocation {
  id: string;
  step: number;
  romanNumeral: string;
  name: string;
  greekName: string;
  traditionalGeography: string;
  narrativeMode: string;
  bookReferences: string;
  whatHappened: string;
  charactersInvolved: string[];
  mainChallenge: string;
  literarySignificance: string;
  famousPassage?: {
    greek: string;
    english: string;
    citation: string;
  };
  coordinates: {
    x: number;
    y: number;
  };
}

export interface VoyageWaypoint {
  id: string;
  step: number;
  name: string;
  ancientGreekName: string;
  mythicalSignificance: string;
  supposedLocation: string;
  bookNumbers: string;
  narrativeSummary: string;
  perilEncountered: string;
  fateOfCrew: string;
}

export interface HomericTheme {
  id: string;
  greekTerm: string;
  transliteration: string;
  englishDefinition: string;
  academicOverview: string;
  keyPassages: string[];
}

export interface LiteraryThemeDetail {
  id: string;
  title: string;
  greekTerm: string;
  transliteration: string;
  definition: string;
  explanation: string;
  connectionToEvents: string[];
  relevantCharacters: string[];
  bookReferences: string;
  whyItMatters: string;
  explicitEventVsInterpretation: {
    explicitText: string;
    scholarlyInterpretation: string;
  };
  quote: {
    greek?: string;
    english: string;
    citation: string;
    speaker?: string;
  };
}

export interface HomericSymbolDetail {
  id: string;
  name: string;
  greekName: string;
  symbolicMeaning: string;
  physicalManifestation: string;
  narrativeFunction: string;
  connectionToEvents: string;
  relevantCharacters: string[];
  bookReferences: string;
  whyItMatters: string;
  explicitEventVsInterpretation: {
    explicitText: string;
    scholarlyInterpretation: string;
  };
  quote: {
    greek?: string;
    english: string;
    citation: string;
  };
}

export interface CriticalEssayDetail {
  id: string;
  title: string;
  greekRubric: string;
  subtitle: string;
  abstract: string;
  sections: {
    subheading: string;
    text: string;
  }[];
  connectionToEvents: string;
  relevantCharacters: string[];
  bookReferences: string;
  whyItMatters: string;
  quote: {
    greek?: string;
    english: string;
    citation: string;
  };
}
