import React from 'react';
import { BookOpen, Bookmark, PlusCircle, Search, Sparkles, Moon, Sun } from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  searchQuery, 
  setSearchQuery, 
  savedCount, 
  onOpenCreateModal,
  isDarkMode,
  onToggleTheme
}) {
  return (
    <header className="sticky top-0 z-40 glass-nav transition-all" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => setActiveTab('all')}
          id="navbar-brand-logo"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              PulseBlog
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md relative hidden md:block">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            id="desktop-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles by title or content..."
            aria-label="Search articles"
            className="w-full pl-10 pr-4 py-2 bg-slate-800/60 text-slate-100 placeholder-slate-400 text-sm rounded-xl border border-slate-700/60 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
          />
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle Button - Enhanced with Mentor Feedback Fixes (aria-label & tooltip) */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
          </button>

          {/* Tab Filter: All Posts */}
          <button
            id="tab-all-posts-btn"
            onClick={() => setActiveTab('all')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'all'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span className="hidden sm:inline">All Articles</span>
          </button>

          {/* Tab Filter: Saved Posts */}
          <button
            id="tab-saved-posts-btn"
            onClick={() => setActiveTab('saved')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all relative ${
              activeTab === 'saved'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span className="hidden sm:inline">Saved</span>
            {savedCount > 0 && (
              <span className="ml-1 px-1.5 py-0.5 text-xs font-bold bg-pink-500 text-white rounded-full">
                {savedCount}
              </span>
            )}
          </button>

          {/* Button: Create New Post */}
          <button
            id="create-new-article-btn"
            onClick={onOpenCreateModal}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:opacity-95 shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <PlusCircle className="w-4 h-4" />
            <span className="hidden sm:inline">New Article</span>
          </button>
        </div>
      </div>
    </header>
  );
}
