import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-8 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} NEONSNAKE. All rights reserved.
        </div>
        <div className="flex gap-8 text-sm text-slate-500">
          <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;