import React from 'react';
import { Layers, BookmarkCheck, Users, Compass, Tag, Star } from 'lucide-react';

export default function Header({ totalPosts, savedCount, totalUsers, isDarkMode }) {
  return (
    <section 
      aria-labelledby="hero-main-title" 
      className={`relative overflow-hidden rounded-3xl p-6 sm:p-10 md:p-12 mb-10 transition-all ${
        isDarkMode 
          ? 'bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 border border-slate-800 shadow-2xl' 
          : 'bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 border border-indigo-700 shadow-2xl text-white'
      }`}
    >
      {/* Background Decorative Glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-400/20 text-indigo-200 text-xs font-bold border border-indigo-400/30 backdrop-blur-md mb-4 select-none">
          <Compass className="w-3.5 h-3.5" />
          <span>Curated Knowledge & Insights Hub</span>
        </div>

        {/* H1 SEO Main Heading - Mobile-First Responsive Typography */}
        <h1 id="hero-main-title" className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Explore Thoughtful Articles <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
            & Ideas Shaping The Future
          </span>
        </h1>

        <p className="text-indigo-100 text-sm sm:text-base md:text-lg mb-8 leading-relaxed font-normal">
          Discover compelling stories, filter articles in real-time, and bookmark your favorite reads for quick access anytime.
        </p>

        {/* Responsive Topic Badges - Mobile-First */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-indigo-200 flex items-center gap-1 font-medium">
              <Tag className="w-3 h-3 text-indigo-300" /> Trending Topics:
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-white/10 text-white border border-white/20 font-medium cursor-pointer hover:bg-white/20 transition-colors">#Technology</span>
            <span className="px-2.5 py-1 rounded-lg bg-white/10 text-white border border-white/20 font-medium cursor-pointer hover:bg-white/20 transition-colors">#WebDesign</span>
            <span className="px-2.5 py-1 rounded-lg bg-white/10 text-white border border-white/20 font-medium cursor-pointer hover:bg-white/20 transition-colors">#Insights</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-400/20 text-amber-200 border border-amber-400/30 font-semibold backdrop-blur-md self-start sm:self-auto cursor-pointer hover:bg-amber-400/30 transition-colors">
            <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <span>Rating: 4.9/5 (1,250+ Reviews)</span>
          </div>
        </div>

        {/* Stats Grid - 3 Breakpoints (1 col mobile, 3 col sm+) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/15">
          <div className="flex flex-col">
            <span className="flex items-center gap-1.5 text-xs font-medium text-indigo-200 mb-1">
              <Layers className="w-3.5 h-3.5 text-indigo-300" /> Total Articles
            </span>
            <span className="text-2xl font-extrabold text-white">{totalPosts}</span>
          </div>

          <div className="flex flex-col">
            <span className="flex items-center gap-1.5 text-xs font-medium text-indigo-200 mb-1">
              <BookmarkCheck className="w-3.5 h-3.5 text-purple-300" /> Saved Articles
            </span>
            <span className="text-2xl font-extrabold text-white">{savedCount}</span>
          </div>

          <div className="flex flex-col">
            <span className="flex items-center gap-1.5 text-xs font-medium text-indigo-200 mb-1">
              <Users className="w-3.5 h-3.5 text-pink-300" /> Active Authors
            </span>
            <span className="text-2xl font-extrabold text-white">{totalUsers}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
