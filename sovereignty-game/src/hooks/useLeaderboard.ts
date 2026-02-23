import { useState, useEffect, useCallback } from 'react';
import { LeaderboardEntry } from '../types';
import { db } from '../supabase';

export function useLeaderboard(scope: 'today' | 'alltime' = 'today', autoRefresh = false) {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(false);

  const fetch = useCallback(async () => {
    setLoading(true);
    try {
      const data =
        scope === 'today'
          ? await db.getTodayLeaderboard(20)
          : await db.getAllTimeLeaderboard(20);
      setEntries(data);
    } finally {
      setLoading(false);
    }
  }, [scope]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  useEffect(() => {
    if (!autoRefresh) return;
    const id = setInterval(fetch, 10_000);
    return () => clearInterval(id);
  }, [autoRefresh, fetch]);

  return { entries, loading, refresh: fetch };
}
