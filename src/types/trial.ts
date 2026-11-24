export type QuestionCategory =
  | 'general-knowledge'
  | 'characters-relationships'
  | 'journey-encounters'
  | 'greek-mythology'
  | 'themes-symbolism';

export interface QuizQuestion {
  id: string;
  category: QuestionCategory;
  categoryLabel: string;
  question: string;
  homericCitation?: string;
  options: [string, string, string, string];
  correctOptionIndex: number;
  explanation: string;
  scholarlyContext?: string;
}
