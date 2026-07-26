import React from 'react';
import { Layers, BookmarkCheck, Users, Compass, Tag } from 'lucide-react';

export default function Header({ totalPosts, savedCount, totalUsers }) {
  return (
    <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 border border-slate-800 p-8 sm:p-12 mb-10 shadow-2xl">
      {/* Background Decorative Glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold border border-indigo-500/20 mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>Curated Knowledge & Insights Hub</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Explore Thoughtful Articles <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            & Ideas Shaping The Future
          </span>
        </h1>

        <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
          Discover compelling stories, filter articles in real-time, and bookmark your favorite reads for quick access anytime.
        </p>

        {/* Feature Branch 1: Trending Topics */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400 flex items-center gap-1 font-medium">
            <Tag className="w-3 h-3 text-indigo-400" /> Trending Topics:
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">#Technology</span>
          <span className="px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/20">#WebDesign</span>
          <span className="px-2.5 py-1 rounded-lg bg-pink-500/10 text-pink-300 border border-pink-500/20">#Insights</span>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
          <div className="flex flex-col">
            <span className="flex items-center gap-1.5 text-xs font-medium text-slate-400 mb-1">
              <Layers className="w-3.5 h-3.5 text-indigo-400" /> Total Articles
            </span>
            <span className="text-2xl font-bold text-white">{totalPosts}</span>
          </div>

          <div className="flex flex-col">
            <span className="flex items-center gap-1.5 text-xs font-medium text-slate-400 mb-1">
              <BookmarkCheck className="w-3.5 h-3.5 text-purple-400" /> Saved Articles
            </span>
            <span className="text-2xl font-bold text-white">{savedCount}</span>
          </div>

          <div className="flex flex-col">
            <span className="flex items-center gap-1.5 text-xs font-medium text-slate-400 mb-1">
              <Users className="w-3.5 h-3.5 text-pink-400" /> Active Authors
            </span>
            <span className="text-2xl font-bold text-white">{totalUsers}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
