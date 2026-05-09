import React from 'react';
import { Trophy, Medal } from 'lucide-react';

const MOCK_LEADERS = [
  { name: 'CyberViper', score: 4520, rank: 1 },
  { name: 'NeonGhost', score: 4100, rank: 2 },
  { name: 'PixelHunter', score: 3850, rank: 3 },
  { name: 'SnakeMaster99', score: 3200, rank: 4 },
  { name: 'RetroGamer', score: 2950, rank: 5 },
  { name: 'BitChaser', score: 2800, rank: 6 },
  { name: 'GridRunner', score: 2450, rank: 7 },
];

const Leaderboard = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <Trophy className="w-12 h-12 text-amber-400 mx-auto mb-4" />
        <h1 className="text-4xl font-black mb-2">Hall of Fame</h1>
        <p className="text-slate-400">The top neon hunters of all time</p>
      </div>

      <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
        <div className="grid grid-cols-12 p-6 border-b border-slate-800 text-xs font-bold text-slate-500 uppercase tracking-widest">
          <div className="col-span-2">Rank</div>
          <div className="col-span-7">Player</div>
          <div className="col-span-3 text-right">Score</div>
        </div>
        
        {MOCK_LEADERS.map((player) => (
          <div 
            key={player.rank} 
            className="grid grid-cols-12 p-6 items-center border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors"
          >
            <div className="col-span-2">
              {player.rank <= 3 ? (
                <Medal className={`w-6 h-6 ${player.rank === 1 ? 'text-amber-400' : player.rank === 2 ? 'text-slate-300' : 'text-amber-700'}`} />
              ) : (
                <span className="text-slate-500 font-mono">#{player.rank}</span>
              )}
            </div>
            <div className="col-span-7 font-bold text-slate-200">{player.name}</div>
            <div className="col-span-3 text-right font-mono text-emerald-400 font-bold">{player.score.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;