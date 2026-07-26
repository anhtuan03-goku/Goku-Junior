import React, { useEffect, useState } from 'react';
import { X, MessageSquare, Bookmark, BookmarkCheck, User, Calendar } from 'lucide-react';
import { fetchPostComments } from '../services/api';

export default function PostDetailModal({ post, onClose, isSaved, onToggleSave }) {
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);

  useEffect(() => {
    if (!post || post.isCustom) {
      setLoadingComments(false);
      setComments([]);
      return;
    }

    let isMounted = true;
    setLoadingComments(true);

    fetchPostComments(post.id)
      .then((data) => {
        if (isMounted) {
          setComments(data);
          setLoadingComments(false);
        }
      })
      .catch(() => {
        if (isMounted) setLoadingComments(false);
      });

    return () => {
      isMounted = false;
    };
  }, [post]);

  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-2xl bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Article #{post.id}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(post)}
              className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isSaved
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/40'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {isSaved ? (
                <>
                  <BookmarkCheck className="w-4 h-4 fill-purple-400" />
                  <span>Saved</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-4 h-4" />
                  <span>Save Article</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight capitalize">
            {post.title}
          </h2>

          <div className="flex items-center gap-4 text-xs text-slate-400 border-b border-slate-800 pb-4">
            <span className="flex items-center gap-1.5 font-medium text-slate-300">
              <User className="w-3.5 h-3.5 text-indigo-400" /> {post.authorName || `Author ${post.userId || 1}`}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-500" /> Published Article
            </span>
          </div>

          <div className="text-slate-300 text-base sm:text-lg leading-relaxed whitespace-pre-line">
            {post.body}
          </div>

          {/* Comments Section */}
          <div className="pt-6 border-t border-slate-800">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-indigo-400" />
              <span>Discussion ({comments.length})</span>
            </h3>

            {loadingComments ? (
              <div className="flex items-center justify-center py-6 text-sm text-slate-400">
                Loading discussion...
              </div>
            ) : comments.length === 0 ? (
              <div className="text-center py-6 text-sm text-slate-500 italic">
                No discussion comments found for this article.
              </div>
            ) : (
              <div className="space-y-3">
                {comments.map((comment) => (
                  <div key={comment.id} className="p-4 rounded-xl bg-slate-800/40 border border-slate-800/80">
                    <div className="flex items-center justify-between text-xs font-semibold text-indigo-300 mb-1">
                      <span>{comment.name}</span>
                      <span className="text-slate-500 font-normal">{comment.email}</span>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-normal">
                      {comment.body}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/90 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
