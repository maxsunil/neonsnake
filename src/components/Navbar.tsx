import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Gamepad2, Trophy, Info } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Gamepad2 className="text-slate-950 w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            NEONSNAKE
          </span>
        </Link>
        
        <div className="flex gap-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => `flex items-center gap-1.5 text-sm font-medium transition-colors ${isActive ? 'text-emerald-400' : 'text-slate-400 hover:text-slate-100'}`}
          >
            Play
          </NavLink>
          <NavLink 
            to="/leaderboard" 
            className={({ isActive }) => `flex items-center gap-1.5 text-sm font-medium transition-colors ${isActive ? 'text-emerald-400' : 'text-slate-400 hover:text-slate-100'}`}
          >
            <Trophy className="w-4 h-4" />
            Leaderboard
          </NavLink>
          <NavLink 
            to="/how-to-play" 
            className={({ isActive }) => `flex items-center gap-1.5 text-sm font-medium transition-colors ${isActive ? 'text-emerald-400' : 'text-slate-400 hover:text-slate-100'}`}
          >
            <Info className="w-4 h-4" />
            How to Play
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;