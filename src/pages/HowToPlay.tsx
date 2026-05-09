import React from 'react';
import { Keyboard, MousePointer2, Smartphone, Apple } from 'lucide-react';

const HowToPlay = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-black mb-12 text-center">How to Play</h1>
      
      <div className="grid gap-8">
        <section className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
              <Keyboard className="text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold">Desktop Controls</h2>
          </div>
          <ul className="space-y-4 text-slate-400">
            <li className="flex justify-between items-center">
              <span>Move Up</span>
              <kbd className="px-3 py-1 bg-slate-800 rounded border border-slate-700 text-slate-200">↑</kbd>
            </li>
            <li className="flex justify-between items-center">
              <span>Move Down</span>
              <kbd className="px-3 py-1 bg-slate-800 rounded border border-slate-700 text-slate-200">↓</kbd>
            </li>
            <li className="flex justify-between items-center">
              <span>Move Left</span>
              <kbd className="px-3 py-1 bg-slate-800 rounded border border-slate-700 text-slate-200">←</kbd>
            </li>
            <li className="flex justify-between items-center">
              <span>Move Right</span>
              <kbd className="px-3 py-1 bg-slate-800 rounded border border-slate-700 text-slate-200">→</kbd>
            </li>
            <li className="flex justify-between items-center pt-4 border-t border-slate-800">
              <span>Pause / Resume</span>
              <kbd className="px-3 py-1 bg-slate-800 rounded border border-slate-700 text-slate-200">Space</kbd>
            </li>
          </ul>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
            <div className="flex items-center gap-4 mb-4">
              <Smartphone className="text-cyan-400" />
              <h2 className="text-xl font-bold">Mobile</h2>
            </div>
            <p className="text-slate-400">
              Use the on-screen directional pad to navigate your snake. Tap the center to pause.
            </p>
          </section>
          
          <section className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
            <div className="flex items-center gap-4 mb-4">
              <Apple className="text-rose-400" />
              <h2 className="text-xl font-bold">Objective</h2>
            </div>
            <p className="text-slate-400">
              Eat the glowing red orbs to grow and increase your score. Avoid hitting walls or your own tail!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;