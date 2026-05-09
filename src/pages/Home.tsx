import React from 'react';
import SnakeGame from '../components/SnakeGame';
import { Zap, Shield, Sparkles } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3 h-3" />
            New Season Live
          </div>
          <h1 className="text-6xl font-black leading-tight">
            Master the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Neon Grid
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-md">
            Experience the classic arcade game reimagined for the modern web. Smooth controls, dynamic difficulty, and global competition.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
              <Zap className="w-6 h-6 text-emerald-400 mb-2" />
              <h3 className="font-bold">Ultra Smooth</h3>
              <p className="text-sm text-slate-500">60FPS performance on all devices.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
              <Shield className="w-6 h-6 text-cyan-400 mb-2" />
              <h3 className="font-bold">Fair Play</h3>
              <p className="text-sm text-slate-500">Anti-cheat leaderboard protection.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <SnakeGame />
        </div>
      </div>
    </div>
  );
};

export default Home;