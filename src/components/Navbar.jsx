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
    <nav className={`sticky top-0 z-40 transition-all duration-500 ease-in-out ${
      isDarkMode ? 'glass-nav-dark' : 'glass-nav-light'
    }`} aria-label="Primary Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group select-none" 
          onClick={() => setActiveTab('all')}
          id="navbar-brand-logo"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className={`text-xl font-bold bg-clip-text text-transparent transition-all duration-500 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-white via-slate-200 to-slate-400' 
                : 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800'
            }`}>
              PulseBlog
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md relative hidden md:block">
          <Search className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-500 ${
            isDarkMode ? 'text-slate-400' : 'text-slate-500'
          }`} />
          <input
            id="desktop-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles by title or content..."
            aria-label="Search articles"
            className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border transition-all duration-500 ${
              isDarkMode 
                ? 'bg-slate-900/80 text-slate-100 placeholder-slate-400 border-slate-700/80 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20' 
                : 'bg-slate-100/90 text-slate-900 placeholder-slate-500 border-slate-300 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 shadow-inner'
            }`}
          />
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle Button - Ultra-Smooth Rotation Micro-animation */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className={`p-2.5 rounded-xl border cursor-pointer theme-icon-spin transition-all duration-500 ${
              isDarkMode
                ? 'bg-slate-900 text-amber-400 border-slate-700 hover:bg-slate-800 hover:border-slate-600 shadow-md'
                : 'bg-amber-50 text-amber-600 border-amber-200 hover:bg-amber-100 shadow-sm'
            }`}
          >
            {isDarkMode ? <Sun className="w-4.5 h-4.5 transition-transform duration-500 rotate-0 hover:rotate-45" /> : <Moon className="w-4.5 h-4.5 transition-transform duration-500 -rotate-12 hover:rotate-0" />}
          </button>

          {/* Tab Filter: All Posts */}
          <button
            id="tab-all-posts-btn"
            type="button"
            onClick={() => setActiveTab('all')}
            className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-500 cursor-pointer ${
              activeTab === 'all'
                ? isDarkMode
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                : isDarkMode
                  ? 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  : 'text-slate-700 hover:bg-slate-200/80 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span className="hidden sm:inline">All Articles</span>
          </button>

          {/* Tab Filter: Saved Posts */}
          <button
            id="tab-saved-posts-btn"
            type="button"
            onClick={() => setActiveTab('saved')}
            className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-500 relative cursor-pointer ${
              activeTab === 'saved'
                ? isDarkMode
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-purple-600 text-white shadow-md shadow-purple-600/25'
                : isDarkMode
                  ? 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  : 'text-slate-700 hover:bg-slate-200/80 hover:text-slate-900'
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
            type="button"
            onClick={onOpenCreateModal}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-95 shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            <span className="hidden sm:inline">New Article</span>
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="px-4 pb-3 md:hidden">
        <div className="relative">
          <Search className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-500 ${
            isDarkMode ? 'text-slate-400' : 'text-slate-500'
          }`} />
          <input
            id="mobile-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            aria-label="Search articles mobile"
            className={`w-full pl-10 pr-4 py-2 text-sm rounded-xl border transition-all duration-500 ${
              isDarkMode 
                ? 'bg-slate-900 text-slate-100 border-slate-700' 
                : 'bg-slate-100 text-slate-900 border-slate-300'
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
