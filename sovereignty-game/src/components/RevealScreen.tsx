import { useEffect, useState } from 'react';
import { GameAnswer } from '../types';
import { Question } from '../types';
import { CheckCircle2, XCircle, Clock } from 'lucide-react';

interface RevealScreenProps {
  question: Question;
  answer: GameAnswer;
  questionNumber: number;
  totalQuestions: number;
  score: number;
  onNext: () => void;
}

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

export function RevealScreen({ question, answer, questionNumber, totalQuestions, score, onNext }: RevealScreenProps) {
  const [showPoints, setShowPoints] = useState(false);
  const [countdown, setCountdown] = useState(6);

  useEffect(() => {
    const t1 = setTimeout(() => setShowPoints(true), 200);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) { clearInterval(id); onNext(); return 0; }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [onNext]);

  const isCorrect = answer.correct;
  const isTimeout = answer.chosen === -1;

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8 gap-5 max-w-3xl mx-auto w-full screen-enter">
      {/* Result badge */}
      <div className="text-center">
        {isTimeout ? (
          <div className="flex flex-col items-center gap-2">
            <Clock className="w-16 h-16" style={{ color: '#f5c842', filter: 'drop-shadow(0 0 12px #f5c842)' }} />
            <h2 className="font-orbitron font-black text-2xl md:text-4xl neon-yellow">TIME'S UP!</h2>
          </div>
        ) : isCorrect ? (
          <div className="flex flex-col items-center gap-2">
            <CheckCircle2 className="w-16 h-16" style={{ color: '#30ba78', filter: 'drop-shadow(0 0 12px #30ba78)' }} />
            <h2 className="font-orbitron font-black text-2xl md:text-4xl neon-green">CORRECT!</h2>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <XCircle className="w-16 h-16" style={{ color: '#e8274b', filter: 'drop-shadow(0 0 12px #e8274b)' }} />
            <h2 className="font-orbitron font-black text-2xl md:text-4xl neon-red">WRONG!</h2>
          </div>
        )}
      </div>

      {/* Points earned */}
      {showPoints && answer.points > 0 && (
        <div className="font-orbitron font-black text-3xl md:text-5xl neon-green screen-enter">
          +{answer.points.toLocaleString()} pts
        </div>
      )}

      {/* Question + options revealed */}
      <div className="w-full glass rounded-xl neon-border-cyan p-5 space-y-4">
        <p className="font-orbitron text-sm font-semibold text-center" style={{ color: '#d6f0e5' }}>
          {question.question}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {question.options.map((opt, idx) => {
            const isTheCorrect = idx === question.correct;
            const isTheChosen = idx === answer.chosen;
            let bg = 'rgba(255,255,255,0.03)';
            let border = 'rgba(255,255,255,0.08)';
            let textColor = 'rgba(214,240,229,0.4)';
            if (isTheCorrect) {
              bg = 'rgba(48,186,120,0.15)';
              border = '#30ba78';
              textColor = '#d6f0e5';
            } else if (isTheChosen && !isTheCorrect) {
              bg = 'rgba(232,39,75,0.15)';
              border = '#e8274b';
              textColor = '#d6f0e5';
            }
            return (
              <div key={idx} className="flex items-start gap-2 rounded-lg px-3 py-2" style={{ background: bg, border: `1px solid ${border}` }}>
                <span className="font-orbitron font-bold text-xs w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5" style={{ background: border, color: '#061a16' }}>
                  {OPTION_LABELS[idx]}
                </span>
                <span className="flex-1 text-xs leading-snug" style={{ color: textColor }}>{opt}</span>
                {isTheCorrect && (
                  <span className="font-orbitron text-xs font-bold shrink-0" style={{ color: '#30ba78' }}>✓ CORRECT</span>
                )}
                {isTheChosen && !isTheCorrect && (
                  <span className="font-orbitron text-xs font-bold shrink-0" style={{ color: '#e8274b' }}>✗ WRONG</span>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* Score + Next countdown */}
      <div className="flex items-center justify-between w-full">
        <div>
          <span className="font-orbitron text-xs tracking-widest" style={{ color: '#fe7c3f' }}>SCORE </span>
          <span className="font-orbitron font-bold text-xl neon-green">{score.toLocaleString()}</span>
        </div>
        <button
          onClick={onNext}
          className="font-orbitron text-xs px-4 py-2 rounded-lg transition-all"
          style={{ background: 'rgba(48,186,120,0.1)', border: '1px solid rgba(48,186,120,0.4)', color: '#30ba78' }}
        >
          {questionNumber < totalQuestions ? `NEXT (${countdown})` : `FINISH (${countdown})`}
        </button>
      </div>
    </div>
  );
}
