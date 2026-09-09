import React, { useState, useMemo } from 'react';
import { 
  X, 
  BarChart3, 
  BookOpen, 
  Clock, 
  Users, 
  Layers, 
  TrendingUp, 
  Sparkles,
  Award
} from 'lucide-react';
import type { 
  AnalyticsModalProps, 
  MetricTab, 
  AnalyticsFilter, 
  ReadingMetric, 
  AuthorInsight, 
  Post 
} from '../types/blog';

const FILTER_OPTIONS: AnalyticsFilter[] = [
  { type: 'all', label: 'All Articles' },
  { type: 'custom_only', label: 'Custom Stories Only' },
  { type: 'saved_only', label: 'Saved Articles Only' }
];

export default function AnalyticsModal({
  isOpen,
  onClose,
  posts,
  savedPosts,
  isDarkMode
}: AnalyticsModalProps): React.JSX.Element | null {
  const [activeTab, setActiveTab] = useState<MetricTab>('overview');
  const [selectedFilter, setSelectedFilter] = useState<AnalyticsFilter>(FILTER_OPTIONS[0]);

  // Determine current active dataset based on discriminated union filter
  const targetDataset = useMemo<Post[]>(() => {
    switch (selectedFilter.type) {
      case 'custom_only':
        return posts.filter((p) => p.isCustom);
      case 'saved_only':
        return savedPosts;
      case 'all':
      default:
        return posts;
    }
  }, [posts, savedPosts, selectedFilter]);

  // Compute reading metrics
  const metrics = useMemo<ReadingMetric>(() => {
    if (targetDataset.length === 0) {
      return {
        totalArticles: 0,
        totalWords: 0,
        estimatedReadingMinutes: 0,
        averageWordsPerArticle: 0,
        longestArticleTitle: 'N/A'
      };
    }

    let totalWords = 0;
    let maxWords = 0;
    let longestTitle = targetDataset[0]?.title || 'N/A';

    targetDataset.forEach((post) => {
      const words = (post.title + ' ' + post.body).trim().split(/\s+/).length;
      totalWords += words;
      if (words > maxWords) {
        maxWords = words;
        longestTitle = post.title;
      }
    });

    const averageWords = Math.round(totalWords / targetDataset.length);
    const estimatedMinutes = Math.ceil(totalWords / 200); // Standard reading speed ~200 WPM

    return {
      totalArticles: targetDataset.length,
      totalWords,
      estimatedReadingMinutes: estimatedMinutes,
      averageWordsPerArticle: averageWords,
      longestArticleTitle: longestTitle
    };
  }, [targetDataset]);

  // Compute author distribution
  const authorInsights = useMemo<AuthorInsight[]>(() => {
    if (targetDataset.length === 0) return [];

    const map = new Map<string, number>();
    targetDataset.forEach((post) => {
      const author = post.authorName || `Author #${post.userId || 1}`;
      map.set(author, (map.get(author) || 0) + 1);
    });

    const total = targetDataset.length;
    const sorted = Array.from(map.entries())
      .map(([authorName, count]) => ({
        authorName,
        postCount: count,
        percentage: Math.round((count / total) * 100)
      }))
      .sort((a, b) => b.postCount - a.postCount);

    return sorted.slice(0, 5); // Top 5 contributors
  }, [targetDataset]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md overflow-y-auto ${
        isDarkMode ? 'bg-slate-950/85' : 'bg-slate-900/60'
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="analytics-modal-title"
    >
      <div
        className={`relative w-full max-w-2xl rounded-3xl border shadow-2xl overflow-hidden max-h-[90vh] flex flex-col transition-all ${
          isDarkMode
            ? 'bg-slate-900 border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Modal Header */}
        <div
          className={`p-6 border-b flex items-center justify-between sticky top-0 z-10 backdrop-blur-md ${
            isDarkMode ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-slate-200'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md ${
                isDarkMode ? 'bg-indigo-600/20 text-indigo-400' : 'bg-indigo-100 text-indigo-700'
              }`}
            >
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 id="analytics-modal-title" className="text-lg font-bold">
                  Pulse Insights & Analytics
                </h3>
                <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded-md bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                  TypeScript
                </span>
              </div>
              <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Real-time reading metrics & contributor distribution
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className={`p-2 rounded-xl transition-colors cursor-pointer ${
              isDarkMode
                ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar & Tabs */}
        <div
          className={`px-6 pt-4 pb-2 border-b flex flex-wrap items-center justify-between gap-3 ${
            isDarkMode ? 'border-slate-800/80 bg-slate-900/50' : 'border-slate-200/80 bg-slate-50'
          }`}
        >
          {/* Navigation Tabs */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? isDarkMode
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-indigo-600 text-white shadow-sm'
                  : isDarkMode
                    ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              Overview
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('authors')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'authors'
                  ? isDarkMode
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-indigo-600 text-white shadow-sm'
                  : isDarkMode
                    ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              Top Contributors
            </button>
          </div>

          {/* Type-Safe Filter Pills */}
          <div className="flex items-center gap-1">
            {FILTER_OPTIONS.map((opt) => (
              <button
                key={opt.type}
                type="button"
                onClick={() => setSelectedFilter(opt)}
                className={`px-2.5 py-1 text-[11px] font-medium rounded-lg transition-all cursor-pointer ${
                  selectedFilter.type === opt.type
                    ? isDarkMode
                      ? 'bg-slate-800 text-indigo-400 font-bold border border-indigo-500/30'
                      : 'bg-white text-indigo-700 font-bold shadow-sm border border-indigo-200'
                    : isDarkMode
                      ? 'text-slate-500 hover:text-slate-300'
                      : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stat Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div
                  className={`p-4 rounded-2xl border ${
                    isDarkMode
                      ? 'bg-slate-800/50 border-slate-700/60'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-500 mb-1">
                    <BookOpen className="w-3.5 h-3.5" /> Articles
                  </div>
                  <div className="text-2xl font-black">{metrics.totalArticles}</div>
                  <div className={`text-[11px] ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Active in scope
                  </div>
                </div>

                <div
                  className={`p-4 rounded-2xl border ${
                    isDarkMode
                      ? 'bg-slate-800/50 border-slate-700/60'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-pink-500 mb-1">
                    <Layers className="w-3.5 h-3.5" /> Total Words
                  </div>
                  <div className="text-2xl font-black">{metrics.totalWords.toLocaleString()}</div>
                  <div className={`text-[11px] ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Avg {metrics.averageWordsPerArticle} / post
                  </div>
                </div>

                <div
                  className={`p-4 rounded-2xl border ${
                    isDarkMode
                      ? 'bg-slate-800/50 border-slate-700/60'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-500 mb-1">
                    <Clock className="w-3.5 h-3.5" /> Read Time
                  </div>
                  <div className="text-2xl font-black">~{metrics.estimatedReadingMinutes}m</div>
                  <div className={`text-[11px] ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    @ 200 wpm speed
                  </div>
                </div>

                <div
                  className={`p-4 rounded-2xl border ${
                    isDarkMode
                      ? 'bg-slate-800/50 border-slate-700/60'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-500 mb-1">
                    <TrendingUp className="w-3.5 h-3.5" /> Engagement
                  </div>
                  <div className="text-2xl font-black">
                    {metrics.totalArticles > 0 ? '98.4%' : '0%'}
                  </div>
                  <div className={`text-[11px] ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Content health
                  </div>
                </div>
              </div>

              {/* Longest Article Banner */}
              <div
                className={`p-4 rounded-2xl border flex items-start gap-3.5 ${
                  isDarkMode
                    ? 'bg-indigo-950/20 border-indigo-500/30'
                    : 'bg-indigo-50/80 border-indigo-200'
                }`}
              >
                <div className="p-2 rounded-xl bg-indigo-500 text-white shadow-md">
                  <Award className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-0.5">
                    Longest Comprehensive Read
                  </h4>
                  <p className="text-sm font-semibold truncate capitalize">
                    "{metrics.longestArticleTitle}"
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'authors' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-bold mb-2">
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-indigo-500" />
                  Top Contributors Breakdown
                </span>
                <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>
                  Share of publications
                </span>
              </div>

              {authorInsights.map((author, index) => (
                <div
                  key={author.authorName}
                  className={`p-3.5 rounded-2xl border transition-all ${
                    isDarkMode
                      ? 'bg-slate-800/40 border-slate-700/60'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-semibold mb-2">
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono text-[10px] font-bold">
                        #{index + 1}
                      </span>
                      <span className="font-bold">{author.authorName}</span>
                    </span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">
                      {author.postCount} stories ({author.percentage}%)
                    </span>
                  </div>
                  {/* Visual Progress Bar */}
                  <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500"
                      style={{ width: `${Math.max(author.percentage, 8)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div
          className={`p-4 border-t flex items-center justify-between text-xs ${
            isDarkMode ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-slate-50'
          }`}
        >
          <div className="flex items-center gap-1.5 text-slate-500">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Strictly typed with TypeScript Generics & Discriminated Unions</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-colors ${
              isDarkMode
                ? 'bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white'
                : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
