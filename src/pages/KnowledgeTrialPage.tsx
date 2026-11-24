import React, { useState } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { FleuronDivider } from '../components/common/Ornament';
import { TRIAL_QUESTIONS_POOL } from '../data/trialQuestionsData';
import type { QuizQuestion, QuestionCategory } from '../types/trial';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Award,
  Scroll,
} from 'lucide-react';

// Fisher-Yates shuffle algorithm
function getRandomSubset<T>(array: T[], count: number): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
}

interface UserAnswerRecord {
  question: QuizQuestion;
  selectedOptionIndex: number;
  isCorrect: boolean;
}

export const KnowledgeTrialPage: React.FC = () => {
  const [trialQuestions, setTrialQuestions] = useState<QuizQuestion[]>(() =>
    getRandomSubset(TRIAL_QUESTIONS_POOL, 10)
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [answersHistory, setAnswersHistory] = useState<UserAnswerRecord[]>([]);
  const [trialState, setTrialState] = useState<'intro' | 'active' | 'results'>('intro');

  // Initialize a randomized 10-question trial
  const startNewTrial = () => {
    const selected = getRandomSubset(TRIAL_QUESTIONS_POOL, 10);
    setTrialQuestions(selected);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setAnswersHistory([]);
    setTrialState('active');
  };

  const currentQuestion = trialQuestions[currentQuestionIndex];

  // Handle user selecting an option
  const handleSelectOption = (index: number) => {
    if (hasAnswered) return; // Prevent changing after submission
    setSelectedOption(index);
    setHasAnswered(true);

    const isCorrect = index === currentQuestion.correctOptionIndex;
    setAnswersHistory((prev) => [
      ...prev,
      {
        question: currentQuestion,
        selectedOptionIndex: index,
        isCorrect,
      },
    ]);
  };

  // Move to next question or complete trial
  const handleNextQuestion = () => {
    if (currentQuestionIndex < trialQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
    } else {
      setTrialState('results');
    }
  };

  // Calculate score and rank
  const correctCount = answersHistory.filter((a) => a.isCorrect).length;
  const scorePercentage = Math.round((correctCount / trialQuestions.length) * 100);

  const getHomericRank = (score: number) => {
    if (score === 10) {
      return {
        title: 'Polymētis · Master of Homeric Wisdom',
        greek: 'Πολύμητις Ἀθηναίης',
        epithet: 'Like Odysseus in counsel and Athena in strategic clarity.',
        description:
          'A flawless triumph across all ten inquiries. You possess an intimate command of Homeric verse, heroic genealogy, and classical poetic architecture.',
      };
    }
    if (score >= 8) {
      return {
        title: 'Pepnymenos · Prudent Scholar of the Epic',
        greek: 'Πεπνυμένος Ἑταῖρος',
        epithet: 'Prudent and clear-sighted like young Telemachus upon his return.',
        description:
          'An exemplary performance demonstrating deep familiarity with the Alexandrian canon, moral vocabulary, and Mediterranean mythic geography.',
      };
    }
    if (score >= 6) {
      return {
        title: 'Naus · Seasoned Mariner of the Wine-Dark Sea',
        greek: 'Ναυτίλος τοῦ Πόντου',
        epithet: 'Seasoned by storm and wave, navigating the paths of the sea.',
        description:
          'A commendable passage. You weathered the major trials and understand the essential tensions between mortal hubris and divine law.',
      };
    }
    if (score >= 4) {
      return {
        title: 'Novice of the Hall of Alcinous',
        greek: 'Φαιήκων Ἀκροατής',
        epithet: 'A listener at the feast captivated by the songs of Demodocus.',
        description:
          'A promising beginning. You recognize the great figures and perils, but deeper study of the 24 books will sharpen your understanding.',
      };
    }
    return {
      title: 'Wanderer in the Mist of Oceanus',
      greek: 'Πλαγχθεὶς ἐν Ὀμίχλῃ',
      epithet: 'Like Odysseus disoriented in Athena’s morning mist on Ithaca’s beach.',
      description:
        'The journey of learning begins in the fog. Review the 24 Books, characters, and voyage itinerary before embarking once more.',
    };
  };

  const rank = getHomericRank(correctCount);

  // Category performance breakdown
  const categoryStats = React.useMemo(() => {
    const stats: Record<QuestionCategory, { label: string; total: number; correct: number }> = {
      'general-knowledge': { label: 'General Knowledge', total: 0, correct: 0 },
      'characters-relationships': { label: 'Characters & Relationships', total: 0, correct: 0 },
      'journey-encounters': { label: 'Journey & Encounters', total: 0, correct: 0 },
      'greek-mythology': { label: 'Greek Mythology', total: 0, correct: 0 },
      'themes-symbolism': { label: 'Themes & Symbolism', total: 0, correct: 0 },
    };

    answersHistory.forEach((ans) => {
      const cat = ans.question.category;
      if (stats[cat]) {
        stats[cat].total += 1;
        if (ans.isCorrect) stats[cat].correct += 1;
      }
    });

    return Object.entries(stats).filter(([, data]) => data.total > 0);
  }, [answersHistory]);

  return (
    <PageContainer folioTitle="Knowledge Trial · Agōn Sapientiae Homericae">
      {/* ======================================================== */}
      {/* 1. INTRO / WELCOME FRONTISPIECE SCREEN                   */}
      {/* ======================================================== */}
      {trialState === 'intro' && (
        <div className="max-w-3xl mx-auto py-10 space-y-8 text-center">
          <header className="space-y-3 pb-8 border-b border-parchment-border">
            <span className="font-display text-xs text-terracotta tracking-widest block">
              Agōn Sapientiae Homericae
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-ink-primary">
              The Knowledge Trial of The Odyssey
            </h1>
            <p className="font-serif italic text-lg sm:text-xl text-antique-gold">
              Ten randomized inquiries testing your mastery of Homeric poetics, mythic geography, and heroic moral philosophy.
            </p>
          </header>

          {/* Trial Overview Box */}
          <div className="border border-parchment-border bg-parchment-surface p-6 sm:p-8 text-left space-y-5 shadow-xs">
            <div className="flex items-center gap-2 border-b border-parchment-border pb-3">
              <Scroll className="w-4 h-4 text-terracotta" />
              <h2 className="font-serif text-lg font-medium text-ink-primary">
                Protocol of the Literary Challenge
              </h2>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm font-serif text-ink-secondary leading-relaxed divide-y divide-parchment-border/60">
              <li className="pt-2 first:pt-0 flex items-start gap-2.5">
                <span className="text-antique-gold font-serif text-xs mt-0.5 select-none font-bold">I.</span>
                <span>Each attempt selects <strong>ten randomized inquiries</strong> from an academic repository of twenty-five verified Homeric problems.</span>
              </li>
              <li className="pt-2 flex items-start gap-2.5">
                <span className="text-antique-gold font-serif text-xs mt-0.5 select-none font-bold">II.</span>
                <span>Inquiries span five canonical disciplines: <em>General Knowledge</em>, <em>Characters & Relationships</em>, <em>Journey & Encounters</em>, <em>Greek Mythology</em>, and <em>Themes & Symbolism</em>.</span>
              </li>
              <li className="pt-2 flex items-start gap-2.5">
                <span className="text-antique-gold font-serif text-xs mt-0.5 select-none font-bold">III.</span>
                <span>Upon choosing one of four options, <strong>immediate scholarly feedback</strong> reveals the textual citation, historical grammar, and literary context.</span>
              </li>
              <li className="pt-2 flex items-start gap-2.5">
                <span className="text-antique-gold font-serif text-xs mt-0.5 select-none font-bold">IV.</span>
                <span>Upon conclusion, you will receive an academic evaluation rank, category performance breakdown, and option to re-attempt with a fresh randomized selection.</span>
              </li>
            </ul>
          </div>

          {/* Start CTA */}
          <div className="pt-4">
            <button
              type="button"
              onClick={startNewTrial}
              className="px-8 py-3.5 border-2 border-terracotta bg-parchment-surface text-terracotta hover:bg-parchment-aged font-serif text-lg font-medium transition-all shadow-sm inline-flex items-center gap-2.5 group cursor-pointer"
            >
              <span>Commence the Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 2. ACTIVE QUIZ IN-PROGRESS SCREEN                        */}
      {/* ======================================================== */}
      {trialState === 'active' && currentQuestion && (
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {/* Progress & Category Top Bar */}
          <div className="border border-parchment-border bg-parchment-surface p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-serif">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-1 border border-parchment-border bg-parchment-aged text-terracotta font-medium">
                Inquiry {currentQuestionIndex + 1} of 10
              </span>
              <span className="text-parchment-darkborder">&bull;</span>
              <span className="text-ink-secondary font-medium">
                {currentQuestion.categoryLabel}
              </span>
            </div>

            {/* Visual Step Dots */}
            <div className="flex items-center gap-1.5">
              {trialQuestions.map((_, idx) => {
                const isPassed = idx < currentQuestionIndex;
                const isCurrent = idx === currentQuestionIndex;
                return (
                  <span
                    key={idx}
                    className={`w-2.5 h-2.5 rounded-full border transition-all ${
                      isCurrent
                        ? 'bg-terracotta border-terracotta scale-125'
                        : isPassed
                        ? 'bg-antique-gold border-antique-gold'
                        : 'bg-parchment-surface border-parchment-darkborder'
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* The Question Card */}
          <article className="border border-parchment-border bg-parchment-surface p-6 sm:p-10 shadow-xs space-y-8">
            {/* Question Text */}
            <div className="space-y-3">
              <div className="flex justify-between items-baseline text-xs font-display text-ink-muted">
                <span>Problem {currentQuestion.id.toUpperCase()}</span>
                {currentQuestion.homericCitation && (
                  <span className="font-serif italic text-antique-gold">
                    Source: {currentQuestion.homericCitation}
                  </span>
                )}
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-ink-primary leading-snug">
                {currentQuestion.question}
              </h2>
            </div>

            {/* The Four Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((optionText, optIndex) => {
                const optionLetter = ['A', 'B', 'C', 'D'][optIndex];
                const isSelected = selectedOption === optIndex;
                const isCorrect = optIndex === currentQuestion.correctOptionIndex;

                let optionStyle =
                  'border-parchment-border bg-parchment-base/50 text-ink-primary hover:border-antique-gold hover:bg-parchment-aged/60';

                if (hasAnswered) {
                  if (isCorrect) {
                    optionStyle =
                      'border-emerald-700/80 bg-emerald-50/70 text-emerald-950 font-medium';
                  } else if (isSelected && !isCorrect) {
                    optionStyle =
                      'border-terracotta bg-red-50/60 text-red-950';
                  } else {
                    optionStyle =
                      'border-parchment-border/60 opacity-60 bg-parchment-base/20 text-ink-muted';
                  }
                }

                return (
                  <button
                    key={optIndex}
                    type="button"
                    disabled={hasAnswered}
                    onClick={() => handleSelectOption(optIndex)}
                    className={`w-full p-4 text-left border rounded-xs transition-all font-serif flex items-start gap-3.5 cursor-pointer disabled:cursor-default ${optionStyle}`}
                  >
                    <span
                      className={`w-6 h-6 rounded-xs border flex items-center justify-center text-xs font-serif shrink-0 font-medium select-none ${
                        hasAnswered && isCorrect
                          ? 'border-emerald-700 bg-emerald-700 text-white'
                          : hasAnswered && isSelected && !isCorrect
                          ? 'border-terracotta bg-terracotta text-white'
                          : 'border-parchment-darkborder bg-parchment-surface text-ink-secondary'
                      }`}
                    >
                      {hasAnswered && isCorrect ? (
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      ) : hasAnswered && isSelected && !isCorrect ? (
                        <XCircle className="w-3.5 h-3.5" />
                      ) : (
                        optionLetter
                      )}
                    </span>

                    <span className="text-sm sm:text-base leading-relaxed flex-1">
                      {optionText}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Immediate Feedback Dossier (Appears once answered) */}
            {hasAnswered && (
              <div className="pt-6 border-t border-parchment-border space-y-4">
                <div
                  className={`p-4 sm:p-5 border text-xs sm:text-sm font-serif leading-relaxed ${
                    selectedOption === currentQuestion.correctOptionIndex
                      ? 'border-emerald-700/60 bg-emerald-50/40 text-emerald-950'
                      : 'border-terracotta/60 bg-red-50/30 text-ink-primary'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2 font-display text-xs tracking-wider">
                    {selectedOption === currentQuestion.correctOptionIndex ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                        <span className="text-emerald-800 font-semibold">Exact Homeric Understanding</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-terracotta" />
                        <span className="text-terracotta font-semibold">Inaccurate Resolution</span>
                      </>
                    )}
                  </div>

                  <p className="mb-2">
                    <strong className="font-semibold block mb-0.5">Canonical Explanation:</strong>
                    {currentQuestion.explanation}
                  </p>

                  {currentQuestion.scholarlyContext && (
                    <p className="pt-2 border-t border-parchment-border/60 text-xs italic opacity-90">
                      <strong className="not-italic font-medium">Scholastic Note: </strong>
                      {currentQuestion.scholarlyContext}
                    </p>
                  )}
                </div>

                {/* Continue Button */}
                <div className="flex justify-end pt-2">
                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    className="px-6 py-2.5 border border-terracotta bg-parchment-surface text-terracotta hover:bg-parchment-aged font-serif text-sm font-medium transition-colors flex items-center gap-2 shadow-2xs cursor-pointer"
                  >
                    <span>
                      {currentQuestionIndex < trialQuestions.length - 1
                        ? 'Proceed to Next Problem'
                        : 'Review Trial Results'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </article>
        </div>
      )}

      {/* ======================================================== */}
      {/* 3. RESULTS & EVALUATION SCREEN                           */}
      {/* ======================================================== */}
      {trialState === 'results' && (
        <div className="max-w-4xl mx-auto space-y-10 py-6 mb-16">
          {/* Main Results Certificate Plate */}
          <article className="border-2 border-antique-gold/80 bg-parchment-surface p-6 sm:p-10 shadow-xs space-y-6 text-center relative overflow-hidden">
            {/* Top Rubric */}
            <div className="flex items-center justify-center gap-2 text-xs font-display text-terracotta tracking-widest">
              <span>Homeric Trial Evaluation</span>
              <span>&bull;</span>
              <span>Final Academic Assessment</span>
            </div>

            {/* Score Ring / Number */}
            <div className="space-y-2">
              <div className="w-24 h-24 mx-auto rounded-full border-2 border-antique-gold flex flex-col items-center justify-center bg-parchment-aged/50">
                <span className="font-serif text-3xl font-medium text-terracotta leading-none">
                  {correctCount}
                </span>
                <span className="font-display text-[10px] text-ink-muted tracking-wider mt-0.5">
                  OUT OF 10
                </span>
              </div>
              <p className="font-display text-xs text-ink-muted tracking-wider">
                Accuracy Rating: {scorePercentage}%
              </p>
            </div>

            {/* Classical Title & Epithet */}
            <div className="space-y-1 max-w-lg mx-auto">
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-ink-primary">
                {rank.title}
              </h2>
              <span className="font-serif italic text-base text-ink-muted greek-script block">
                {rank.greek}
              </span>
              <p className="font-serif italic text-sm text-antique-gold pt-1">
                &ldquo;{rank.epithet}&rdquo;
              </p>
              <p className="font-body text-xs sm:text-sm text-ink-secondary leading-relaxed pt-2">
                {rank.description}
              </p>
            </div>

            {/* Action Buttons: Retry or Explore More */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={startNewTrial}
                className="px-6 py-2.5 border border-terracotta bg-parchment-surface text-terracotta hover:bg-parchment-aged font-serif text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer shadow-2xs"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Embark on a New Trial (Randomized 10)</span>
              </button>
            </div>
          </article>

          {/* Category Breakdown Matrix */}
          <div className="border border-parchment-border bg-parchment-surface p-5 sm:p-6 space-y-4">
            <h3 className="font-serif text-lg font-medium text-ink-primary border-b border-parchment-border pb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-antique-gold" />
              <span>Performance by Epic Discipline</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-serif">
              {categoryStats.map(([catKey, data]) => {
                const catPercent = Math.round((data.correct / data.total) * 100);
                return (
                  <div
                    key={catKey}
                    className="p-3 border border-parchment-border/80 bg-parchment-base/40 flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-medium text-ink-primary block mb-0.5">
                        {data.label}
                      </span>
                      <span className="text-ink-muted text-[11px]">
                        Resolved: {data.correct} of {data.total}
                      </span>
                    </div>
                    <div className="mt-2 text-right font-display text-xs text-terracotta font-medium">
                      {catPercent}%
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Full Review of the 10 Attempted Inquiries */}
          <section className="space-y-4">
            <h3 className="font-serif text-xl font-medium text-ink-primary">
              Detailed Examination of Attempted Inquiries
            </h3>

            <div className="divide-y divide-parchment-border border border-parchment-border bg-parchment-surface">
              {answersHistory.map((rec, i) => (
                <div key={i} className="p-5 space-y-2 text-xs sm:text-sm font-serif">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-display text-ink-muted">
                      Inquiry {i + 1} &bull; {rec.question.categoryLabel}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-xs text-[11px] font-medium flex items-center gap-1 ${
                        rec.isCorrect
                          ? 'text-emerald-800 bg-emerald-50'
                          : 'text-red-800 bg-red-50'
                      }`}
                    >
                      {rec.isCorrect ? (
                        <>
                          <CheckCircle2 className="w-3 h-3" /> Correct
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3 h-3" /> Missed
                        </>
                      )}
                    </span>
                  </div>

                  <h4 className="font-medium text-ink-primary text-sm sm:text-base">
                    {rec.question.question}
                  </h4>

                  <div className="space-y-1 text-xs pt-1">
                    <p className="text-ink-muted">
                      Your response:{' '}
                      <span
                        className={
                          rec.isCorrect ? 'text-emerald-900 font-medium' : 'text-terracotta'
                        }
                      >
                        {rec.question.options[rec.selectedOptionIndex]}
                      </span>
                    </p>
                    {!rec.isCorrect && (
                      <p className="text-emerald-900 font-medium">
                        Canonical answer:{' '}
                        {rec.question.options[rec.question.correctOptionIndex]}
                      </p>
                    )}
                    <p className="text-ink-secondary pt-1 leading-relaxed border-t border-parchment-border/60 mt-1">
                      {rec.question.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      <FleuronDivider />
    </PageContainer>
  );
};
