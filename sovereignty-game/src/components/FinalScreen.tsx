import { useEffect, useState } from 'react';
import { GameState } from '../types';
import { Question } from '../types';
import { db } from '../supabase';
import { Trophy, Target, Zap, Flame } from 'lucide-react';

interface FinalScreenProps {
  state: GameState;
  questions: Question[];
  correctCount: number;
  onLeaderboard: () => void;
  onPlayAgain: () => void;
}

const RANKS = [
  { min: 9500, label: 'SUSE CERTIFIED SOVEREIGN', color: '#30ba78', desc: 'Peak digital sovereignty mastery — SUSE would hire you!' },
  { min: 8000, label: 'DIGITAL FREEDOM MASTER',   color: '#fe7c3f', desc: 'Outstanding knowledge. You\'re ready for any sovereignty pathway.' },
  { min: 6500, label: 'OPEN SOURCE GUARDIAN',     color: '#5fd4a0', desc: 'Strong advocate for open infrastructure. Keep learning!' },
  { min: 4500, label: 'SOVEREIGNTY ADVOCATE',     color: '#f5c842', desc: 'Solid grasp of the fundamentals. The journey continues.' },
  { min: 2500, label: 'DATA DEFENDER',            color: '#fe7c3f', desc: 'Learning the path to independence — you\'ve made a start!' },
  { min: 0,    label: 'SOVEREIGNTY ROOKIE',       color: '#8fba9e', desc: 'Every sovereign journey begins with a single question.' },
];

function getRank(score: number) {
  return RANKS.find((r) => score >= r.min) ?? RANKS[RANKS.length - 1];
}

function ScoreTicker({ target }: { target: number }) {
  const [displayed, setDisplayed] = useState(0);
  useEffect(() => {
    if (target === 0) return;
    let current = 0;
    const step = Math.ceil(target / 60);
    const id = setInterval(() => {
      current = Math.min(current + step, target);
      setDisplayed(current);
      if (current >= target) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [target]);
  return <>{displayed.toLocaleString()}</>;
}

export function FinalScreen({ state, questions, correctCount, onLeaderboard, onPlayAgain }: FinalScreenProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const rank = getRank(state.score);
  const avgTime = state.answers.length
    ? Math.round(state.answers.reduce((sum, a) => sum + a.timeMs, 0) / state.answers.length / 100) / 10
    : 0;

  useEffect(() => {
    const t = setTimeout(async () => {
      if (submitted || submitting) return;
      setSubmitting(true);
      try {
        await db.submitScore({
          player_name: state.playerName,
          score: state.score,
          correct_answers: correctCount,
          max_streak: state.maxStreak,
        });
        setSubmitted(true);
      } catch {
        setSubmitted(true);
      } finally {
        setSubmitting(false);
      }
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8 gap-6 max-w-2xl mx-auto w-full screen-enter">
      {/* Header */}
      <div className="text-center">
        <div className="flex justify-center mb-2">
          <span className="suse-pill">POWERED BY SUSE</span>
        </div>
        <p className="font-orbitron text-xs tracking-widest mb-1" style={{ color: '#fe7c3f', textShadow: '0 0 8px #fe7c3f' }}>
          GAME OVER
        </p>
        <h1 className="font-orbitron font-black uppercase" style={{ fontSize: 'clamp(1.8rem, 6vw, 3.5rem)', color: '#30ba78', textShadow: '0 0 20px #30ba78' }}>
          MISSION COMPLETE
        </h1>
      </div>

      {/* Score */}
      <div className="text-center">
        <div
          className="font-orbitron font-black"
          style={{ fontSize: 'clamp(3rem, 12vw, 7rem)', color: rank.color, textShadow: `0 0 20px ${rank.color}, 0 0 40px ${rank.color}`, lineHeight: 1 }}
        >
          <ScoreTicker target={state.score} />
        </div>
        <div className="font-orbitron text-xs tracking-widest mt-1 opacity-50">POINTS</div>
      </div>

      {/* Rank badge */}
      <div
        className="rank-glow rounded-2xl px-6 py-4 text-center glass"
        style={{ border: `2px solid ${rank.color}`, color: rank.color }}
      >
        <div className="font-orbitron font-black text-xl md:text-2xl tracking-widest">{rank.label}</div>
        <div className="text-xs mt-1 opacity-80">{rank.desc}</div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 w-full">
        <div className="glass rounded-xl p-3 text-center neon-border-cyan">
          <Target className="w-5 h-5 mx-auto mb-1" style={{ color: '#30ba78' }} />
          <div className="font-orbitron font-bold text-lg neon-green">{correctCount}/{questions.length}</div>
          <div className="text-xs opacity-50">CORRECT</div>
        </div>
        <div className="glass rounded-xl p-3 text-center neon-border-purple">
          <Zap className="w-5 h-5 mx-auto mb-1" style={{ color: '#fe7c3f' }} />
          <div className="font-orbitron font-bold text-lg neon-orange">{avgTime}s</div>
          <div className="text-xs opacity-50">AVG TIME</div>
        </div>
        <div className="glass rounded-xl p-3 text-center" style={{ border: '1px solid rgba(245,200,66,0.3)' }}>
          <Flame className="w-5 h-5 mx-auto mb-1 neon-yellow" />
          <div className="font-orbitron font-bold text-lg neon-yellow">{state.maxStreak}</div>
          <div className="text-xs opacity-50">BEST STREAK</div>
        </div>
      </div>

      {/* Breakdown */}
      <div className="w-full glass rounded-xl neon-border-cyan overflow-hidden">
        <div className="px-4 py-2 border-b border-white/10">
          <span className="font-orbitron text-xs tracking-widest neon-green">ANSWER BREAKDOWN</span>
        </div>
        <div className="divide-y divide-white/5 max-h-52 overflow-y-auto">
          {state.answers.map((ans, i) => {
            const q = questions[ans.questionIndex];
            return (
              <div key={i} className="flex items-center gap-3 px-4 py-2">
                <span className="font-orbitron text-xs w-4 shrink-0" style={{ color: ans.correct ? '#30ba78' : '#e8274b' }}>
                  {ans.correct ? '✓' : '✗'}
                </span>
                <span className="flex-1 text-xs opacity-70 truncate">{q?.question ?? ''}</span>
                <span className="font-orbitron text-xs shrink-0" style={{ color: ans.correct ? '#30ba78' : '#555' }}>
                  {ans.points > 0 ? `+${ans.points}` : '0'}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {submitting && (
        <p className="font-orbitron text-xs tracking-widest" style={{ color: '#fe7c3f' }}>SUBMITTING SCORE...</p>
      )}
      {submitted && (
        <p className="font-orbitron text-xs tracking-widest" style={{ color: '#30ba78', textShadow: '0 0 8px #30ba78' }}>
          ✓ SCORE RECORDED
        </p>
      )}

      {/* Actions */}
      <div className="flex gap-4 w-full">
        <button
          onClick={onLeaderboard}
          className="flex-1 py-3 rounded-xl font-orbitron text-sm tracking-widest uppercase transition-all"
          style={{ background: 'rgba(254,124,63,0.12)', border: '1px solid rgba(254,124,63,0.5)', color: '#fe7c3f' }}
        >
          <Trophy className="inline-block w-4 h-4 mr-1" />
          RANKINGS
        </button>
        <button
          onClick={onPlayAgain}
          className="flex-1 py-3 rounded-xl font-orbitron text-sm tracking-widest uppercase transition-all"
          style={{ background: 'rgba(48,186,120,0.15)', border: '1px solid rgba(48,186,120,0.5)', color: '#30ba78' }}
        >
          <Zap className="inline-block w-4 h-4 mr-1" />
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
}
