import React from 'react';
import { Bookmark, BookmarkCheck, Clock, ArrowUpRight, Tag } from 'lucide-react';

export default function PostCard({ post, isSaved, onToggleSave, onSelectPost }) {
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
    <article className="group relative rounded-2xl glass-card p-6 flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-indigo-500/10">
      <div>
        {/* Card Header Tag & Bookmark button */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-700">
              <Tag className="w-3 h-3 text-indigo-400" />
              {post.isCustom ? 'Custom Story' : `Author #${post.userId || 1}`}
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Clock className="w-3 h-3" /> 3 min read
            </span>
          </div>

          <button
            onClick={() => onToggleSave(post)}
            aria-label={isSaved ? 'Unsave article' : 'Save article'}
            title={isSaved ? 'Unsave article' : 'Save article'}
            className={`p-2 rounded-xl transition-all ${
              isSaved
                ? 'bg-purple-500/20 text-purple-400 border border-purple-500/40 hover:bg-purple-500/30'
                : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700'
            }`}
          >
            {isSaved ? <BookmarkCheck className="w-4 h-4 fill-purple-400" /> : <Bookmark className="w-4 h-4" />}
          </button>
        </div>

        {/* Title */}
        <h2 
          onClick={() => onSelectPost(post)}
          className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors line-clamp-2 mb-3 cursor-pointer"
        >
          {formattedTitle}
        </h2>

        {/* Excerpt Body */}
        <p className="text-slate-400 text-sm line-clamp-3 mb-6 leading-relaxed">
          {post.body}
        </p>
      </div>

      {/* Author & Action Footer */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-auto">
        <div className="flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${gradientClass} flex items-center justify-center font-bold text-white text-xs shadow-md`}>
            {post.authorName ? post.authorName.charAt(0) : `A`}
          </div>
          <span className="text-xs font-medium text-slate-300 truncate max-w-[120px]">
            {post.authorName || `Author ${post.userId || 1}`}
          </span>
        </div>

        <button
          onClick={() => onSelectPost(post)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          <span>Read Story</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </article>
  );
}
