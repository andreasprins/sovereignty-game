# ⚡ Sovereignty Strike

A fast-paced, cyberpunk-themed quiz game about **digital sovereignty** — built for conference booths (KubeCon, CloudNativeCon, etc.).

Players answer 10 questions in 15 seconds each. **Speed + accuracy = score.** Scores are submitted to a live leaderboard visible on the big display screen.

---

## 🎮 Game Modes

| URL | Purpose |
|-----|---------|
| `/` | **Player mode** — the full game (play on any device, phone or browser) |
| `/?display` | **Display mode** — big screen view with QR code + live leaderboard |

### Booth Setup
1. Open `/?display` on the venue TV/monitor
2. Players scan the QR code on their phones to play
3. Scores appear on the big screen in real time

---

## 🚀 Deploy to GitHub Pages

### 1. Create the repo and push

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/sovereignty-strike.git
git push -u origin main
```

### 2. Enable GitHub Pages

In your repo: **Settings → Pages → Source → GitHub Actions**

### 3. Set secrets (optional but recommended — for shared leaderboard)

In **Settings → Secrets and variables → Actions**, add:

| Secret | Value |
|--------|-------|
| `VITE_SUPABASE_URL` | `https://xxxx.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | `eyJ...` |

In **Settings → Secrets and variables → Variables**, add:

| Variable | Value |
|----------|-------|
| `VITE_BASE_PATH` | `/sovereignty-strike/` (your repo name, with slashes) |

### 4. Push to deploy

Every push to `main` that touches `sovereignty-game/` will trigger a deploy.

---

## 🗄️ Supabase Setup (for shared leaderboard)

> **Without Supabase**, the game works perfectly with a local (per-browser) leaderboard.
> **With Supabase**, all players share a live leaderboard across devices.

### 1. Create a free project at [supabase.com](https://supabase.com)

### 2. Run this SQL in the SQL editor:

```sql
-- Create leaderboard table
create table if not exists public.leaderboard (
  id          uuid    default gen_random_uuid() primary key,
  player_name text    not null,
  score       integer not null,
  correct_answers integer,
  max_streak  integer,
  played_at   timestamptz default now(),
  session_date date   default current_date
);

-- Allow anyone to read and insert (anon key is safe with these policies)
alter table public.leaderboard enable row level security;

create policy "Anyone can read leaderboard"
  on public.leaderboard for select
  using (true);

create policy "Anyone can submit a score"
  on public.leaderboard for insert
  with check (true);

-- Index for fast daily queries
create index leaderboard_date_score on public.leaderboard (session_date, score desc);
```

### 3. Copy your project URL and anon key

**Project Settings → API** → copy `URL` and `anon public` key.

Add them as GitHub Secrets (see above) or in a local `.env` file for development.

---

## 💻 Local Development

```bash
cd sovereignty-game
cp .env.example .env
# Edit .env with your Supabase credentials (optional)
npm install
npm run dev
```

Visit `http://localhost:5173` to play, `http://localhost:5173?display` for the display view.

---

## 📁 Project Structure

```
sovereignty-game/
├── src/
│   ├── App.tsx                 # Main router (play vs display mode)
│   ├── main.tsx                # Entry point
│   ├── supabase.ts             # Supabase client + localStorage fallback
│   ├── types.ts                # TypeScript interfaces
│   ├── data/
│   │   └── questions.ts        # 12 digital sovereignty questions + config
│   ├── hooks/
│   │   ├── useGame.ts          # Game state machine
│   │   └── useLeaderboard.ts   # Leaderboard data fetching
│   ├── components/
│   │   ├── ParticleBackground.tsx   # Canvas particle animation
│   │   ├── TimerRing.tsx            # SVG countdown ring
│   │   ├── IntroScreen.tsx          # Name entry + mini leaderboard
│   │   ├── CountdownScreen.tsx      # 3-2-1-GO!
│   │   ├── QuestionScreen.tsx       # Active question with timer
│   │   ├── RevealScreen.tsx         # Answer reveal + explanation
│   │   ├── FinalScreen.tsx          # Score + rank + breakdown
│   │   ├── LeaderboardScreen.tsx    # Full leaderboard
│   │   └── DisplayMode.tsx          # Big screen: QR + leaderboard
│   └── styles/
│       └── globals.css         # Cyberpunk animations + utilities
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── .env.example
```

---

## 🎨 Design System

- **Font**: Orbitron (headings/scores) + Inter (body)
- **Palette**: Neon cyan `#00f5ff` · Purple `#b347d9` · Green `#39ff14` · Red `#ff0040`
- **Background**: Dark `#050510` + animated particle canvas + CSS grid overlay
- **Animations**: Glitch title, scanline, timer ring, answer shake/flash, score popup

---

## 🏆 Scoring

| Action | Points |
|--------|--------|
| Correct answer (instant) | 1,000 |
| Correct answer (last second) | 500 |
| Wrong answer or timeout | 0 |

**Formula**: `score = 1000 × (0.5 + 0.5 × timeRemaining / totalTime)`

**Rank tiers** (max 10,000 pts):

| Score | Rank |
|-------|------|
| 9,500+ | Digital Sovereign |
| 8,000+ | Sovereignty Master |
| 6,500+ | Digital Champion |
| 4,500+ | Privacy Guardian |
| 2,500+ | Data Defender |
| 0+ | Sovereignty Rookie |

---

## ➕ Adding Questions

Edit `src/data/questions.ts`. Each question needs:

```typescript
{
  id: number,
  category: string,       // shown as a badge
  categoryIcon: string,   // emoji
  question: string,
  options: string[],      // exactly 4 options
  correct: number,        // index of correct option (0-3)
  explanation: string,    // shown after reveal
  difficulty: 'easy' | 'medium' | 'hard',
}
```

10 questions are randomly selected from the pool each game.

---

## 📱 Phone Controller Tips

- The QR code in display mode links directly to the game URL
- Players land on the intro screen, enter their name, and play
- Answers are submitted via tap on the phone
- Keyboard shortcuts also work: `A/B/C/D` or `1/2/3/4`

---

Built with React + Vite + TypeScript + Tailwind CSS + Supabase
