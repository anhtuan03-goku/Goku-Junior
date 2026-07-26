import React from 'react';
import { Bookmark, BookmarkCheck, Clock, ArrowUpRight, Tag } from 'lucide-react';

export default function PostCard({ post, isSaved, onToggleSave, onSelectPost, isDarkMode }) {
  // Generate avatar color based on userId/postId
  const colors = [
    'from-blue-500 to-indigo-600',
    'from-purple-500 to-pink-600',
    'from-emerald-500 to-teal-600',
    'from-amber-500 to-orange-600',
    'from-rose-500 to-red-600'
  ];
  const colorIndex = (post.userId || post.id) % colors.length;
  const gradientClass = colors[colorIndex];

  // Format title
  const formattedTitle = post.title.charAt(0).toUpperCase() + post.title.slice(1);

  return (
    <article 
      className={`group relative rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 ${
        isDarkMode 
          ? 'glass-card-dark hover:border-indigo-500/50 hover:shadow-indigo-500/20' 
          : 'glass-card-light hover:border-indigo-400 hover:shadow-indigo-500/15'
      }`}
    >
      <div>
        {/* Card Header Tag & Bookmark button */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border ${
              isDarkMode 
                ? 'bg-slate-800 text-slate-200 border-slate-700' 
                : 'bg-slate-100 text-slate-800 border-slate-300'
            }`}>
              <Tag className={`w-3 h-3 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
              {post.isCustom ? 'Custom Story' : `Author #${post.userId || 1}`}
            </span>
            <span className={`text-xs flex items-center gap-1 font-medium ${
              isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              <Clock className="w-3 h-3" /> 3 min read
            </span>
          </div>

          <button
            type="button"
            onClick={() => onToggleSave(post)}
            aria-label={isSaved ? 'Unsave article' : 'Save article'}
            title={isSaved ? 'Unsave article' : 'Save article'}
            className={`p-2 rounded-xl transition-all cursor-pointer ${
              isSaved
                ? 'bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-500/40 hover:bg-purple-500/30'
                : isDarkMode
                  ? 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            {isSaved ? <BookmarkCheck className="w-4 h-4 fill-purple-500 dark:fill-purple-400" /> : <Bookmark className="w-4 h-4" />}
          </button>
        </div>

        {/* Title Heading H3 for Semantic Structure */}
        <h3 
          onClick={() => onSelectPost(post)}
          className={`text-base sm:text-lg font-bold transition-colors line-clamp-2 mb-3 cursor-pointer ${
            isDarkMode 
              ? 'text-white group-hover:text-indigo-400' 
              : 'text-slate-900 group-hover:text-indigo-600'
          }`}
        >
          {formattedTitle}
        </h3>

        {/* Excerpt Body */}
        <p className={`text-sm line-clamp-3 mb-6 leading-relaxed ${
          isDarkMode ? 'text-slate-400' : 'text-slate-600'
        }`}>
          {post.body}
        </p>
      </div>

      {/* Author & Action Footer */}
      <div className={`pt-4 flex items-center justify-between mt-auto border-t ${
        isDarkMode ? 'border-slate-800/80' : 'border-slate-200'
      }`}>
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => onSelectPost(post)}>
          <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${gradientClass} flex items-center justify-center font-bold text-white text-xs shadow-md`}>
            {post.authorName ? post.authorName.charAt(0) : `A`}
          </div>
          <span className={`text-xs font-semibold truncate max-w-[120px] ${
            isDarkMode ? 'text-slate-300' : 'text-slate-700'
          }`}>
            {post.authorName || `Author ${post.userId || 1}`}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onSelectPost(post)}
          className={`inline-flex items-center gap-1 text-xs font-bold transition-colors cursor-pointer ${
            isDarkMode 
              ? 'text-indigo-400 hover:text-indigo-300' 
              : 'text-indigo-600 hover:text-indigo-800'
          }`}
        >
          <span>Read Story</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </article>
  );
}
