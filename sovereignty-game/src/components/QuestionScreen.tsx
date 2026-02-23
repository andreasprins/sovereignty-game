import { useEffect, useState, useRef } from 'react';
import { Question } from '../types';
import { GAME_CONFIG } from '../data/questions';
import { TimerRing } from './TimerRing';
import { Flame } from 'lucide-react';

interface QuestionScreenProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  score: number;
  streak: number;
  onAnswer: (index: number) => void;
  onTimeout: () => void;
}

const OPTION_LABELS = ['A', 'B', 'C', 'D'];
// SUSE palette: green, orange, teal, deep green
const OPTION_COLORS = [
  { bg: 'rgba(48,186,120,0.12)',  border: 'rgba(48,186,120,0.5)',  hover: '#30ba78' },
  { bg: 'rgba(254,124,63,0.12)', border: 'rgba(254,124,63,0.5)', hover: '#fe7c3f' },
  { bg: 'rgba(20,180,160,0.12)', border: 'rgba(20,180,160,0.5)', hover: '#14b4a0' },
  { bg: 'rgba(95,212,160,0.10)', border: 'rgba(95,212,160,0.4)', hover: '#5fd4a0' },
];

export function QuestionScreen({
  question,
  questionNumber,
  totalQuestions,
  score,
  streak,
  onAnswer,
  onTimeout,
}: QuestionScreenProps) {
  const [timeLeft, setTimeLeft] = useState(GAME_CONFIG.timePerQuestion);
  const [selected, setSelected] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setTimeLeft(GAME_CONFIG.timePerQuestion);
    setSelected(null);
    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 0.05) {
          clearInterval(intervalRef.current!);
          onTimeout();
          return 0;
        }
        return t - 0.05;
      });
    }, 50);
    return () => clearInterval(intervalRef.current!);
  }, [question.id, onTimeout]);

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    clearInterval(intervalRef.current!);
    setSelected(idx);
    onAnswer(idx);
  };

  const progress = questionNumber / totalQuestions;

  return (
    <div className="relative z-10 flex flex-col min-h-screen px-4 py-4 md:py-6 gap-4 max-w-4xl mx-auto w-full">
      {/* Header bar */}
      <div className="flex items-center justify-between glass rounded-xl px-4 py-3 neon-border-cyan">
        {/* Question progress */}
        <div className="flex flex-col gap-1">
          <span className="font-orbitron text-xs tracking-widest" style={{ color: '#fe7c3f' }}>
            QUESTION
          </span>
          <span className="font-orbitron font-bold text-lg md:text-2xl neon-green">
            {questionNumber} / {totalQuestions}
          </span>
          <div className="w-24 h-1 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{ width: `${progress * 100}%`, background: 'linear-gradient(90deg, #30ba78, #fe7c3f)' }}
            />
          </div>
        </div>

        {/* Timer */}
        <TimerRing seconds={timeLeft} total={GAME_CONFIG.timePerQuestion} size={80} />

        {/* Score + streak */}
        <div className="flex flex-col items-end gap-1">
          <span className="font-orbitron text-xs tracking-widest" style={{ color: '#fe7c3f' }}>SCORE</span>
          <span className="font-orbitron font-bold text-lg md:text-2xl neon-green">
            {score.toLocaleString()}
          </span>
          {streak >= 2 && (
            <div className="streak-badge flex items-center gap-1 text-xs font-orbitron" style={{ color: '#f5c842', textShadow: '0 0 8px #f5c842' }}>
              <Flame className="w-3 h-3" />
              {streak}x STREAK
            </div>
          )}
        </div>
      </div>

      {/* Category badge */}
      <div className="text-center">
        <span
          className="inline-block font-orbitron text-xs tracking-widest px-3 py-1 rounded-full"
          style={{
            background: 'rgba(254,124,63,0.12)',
            border: '1px solid rgba(254,124,63,0.4)',
            color: '#fe7c3f',
          }}
        >
          {question.categoryIcon} {question.category.toUpperCase()}
        </span>
      </div>

      {/* Question text */}
      <div className="glass rounded-xl px-5 py-5 neon-border-cyan text-center flex-shrink-0">
        <p
          className="font-orbitron font-semibold leading-snug"
          style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.4rem)', color: '#d6f0e5' }}
        >
          {question.question}
        </p>
      </div>

      {/* Answer grid */}
      <div className="grid grid-cols-2 gap-2 flex-1">
        {question.options.map((option, idx) => {
          const col = OPTION_COLORS[idx];
          return (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              disabled={selected !== null}
              className="answer-btn rounded-lg px-3 py-2 text-left flex items-center gap-2 transition-all"
              style={{
                background: col.bg,
                border: `1px solid ${col.border}`,
              }}
            >
              <span
                className="font-orbitron font-bold text-xs shrink-0 w-5 h-5 rounded flex items-center justify-center"
                style={{ background: col.border, color: '#061a16' }}
              >
                {OPTION_LABELS[idx]}
              </span>
              <span
                className="font-medium text-xs leading-snug"
                style={{ color: '#d6f0e5' }}
              >
                {option}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
