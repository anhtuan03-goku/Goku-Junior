import React, { useEffect, useState } from 'react';
import { X, MessageSquare, Bookmark, BookmarkCheck, User, Calendar } from 'lucide-react';
import { fetchPostComments } from '../services/api';

export default function PostDetailModal({ post, onClose, isSaved, onToggleSave, isDarkMode }) {
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
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md overflow-y-auto ${
        isDarkMode ? 'bg-slate-950/85' : 'bg-slate-900/60'
      }`} 
      role="dialog" 
      aria-modal="true"
    >
      <div className={`relative w-full max-w-2xl rounded-3xl border shadow-2xl overflow-hidden max-h-[90vh] flex flex-col ${
        isDarkMode 
          ? 'bg-slate-900 border-slate-800 text-slate-100' 
          : 'bg-white border-slate-200 text-slate-900 shadow-2xl'
      }`}>
        
        {/* Modal Header */}
        <div className={`p-6 border-b flex items-center justify-between sticky top-0 z-10 backdrop-blur-md ${
          isDarkMode 
            ? 'bg-slate-900/90 border-slate-800' 
            : 'bg-white/90 border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${
              isDarkMode 
                ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' 
                : 'bg-indigo-50 text-indigo-700 border-indigo-200'
            }`}>
              Article #{post.id}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(post)}
              className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isSaved
                  ? 'bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-500/40'
                  : isDarkMode
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {isSaved ? (
                <>
                  <BookmarkCheck className="w-4 h-4 fill-purple-500" />
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
              className={`p-2 rounded-xl transition-colors ${
                isDarkMode 
                  ? 'text-slate-400 hover:text-white hover:bg-slate-800' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <h2 className={`text-2xl sm:text-3xl font-extrabold leading-tight capitalize ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            {post.title}
          </h2>

          <div className={`flex items-center gap-4 text-xs border-b pb-4 ${
            isDarkMode ? 'text-slate-400 border-slate-800' : 'text-slate-500 border-slate-200'
          }`}>
            <span className={`flex items-center gap-1.5 font-medium ${
              isDarkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              <User className="w-3.5 h-3.5 text-indigo-500" /> {post.authorName || `Author ${post.userId || 1}`}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> Published Article
            </span>
          </div>

          <div className={`text-base sm:text-lg leading-relaxed whitespace-pre-line ${
            isDarkMode ? 'text-slate-300' : 'text-slate-700'
          }`}>
            {post.body}
          </div>

          {/* Comments Section */}
          <div className={`pt-6 border-t ${
            isDarkMode ? 'border-slate-800' : 'border-slate-200'
          }`}>
            <h3 className={`text-base font-bold mb-4 flex items-center gap-2 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              <MessageSquare className="w-4 h-4 text-indigo-500" />
              <span>Discussion ({comments.length})</span>
            </h3>

            {loadingComments ? (
              <div className={`flex items-center justify-center py-6 text-sm ${
                isDarkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Loading discussion...
              </div>
            ) : comments.length === 0 ? (
              <div className={`text-center py-6 text-sm italic ${
                isDarkMode ? 'text-slate-500' : 'text-slate-400'
              }`}>
                No discussion comments found for this article.
              </div>
            ) : (
              <div className="space-y-3">
                {comments.map((comment) => (
                  <div 
                    key={comment.id} 
                    className={`p-4 rounded-xl border ${
                      isDarkMode 
                        ? 'bg-slate-800/40 border-slate-800/80 text-slate-300' 
                        : 'bg-slate-50 border-slate-200 text-slate-800'
                    }`}
                  >
                    <div className={`flex items-center justify-between text-xs font-semibold mb-1 ${
                      isDarkMode ? 'text-indigo-300' : 'text-indigo-700'
                    }`}>
                      <span>{comment.name}</span>
                      <span className={`font-normal ${
                        isDarkMode ? 'text-slate-500' : 'text-slate-400'
                      }`}>{comment.email}</span>
                    </div>
                    <p className="text-xs sm:text-sm leading-normal">
                      {comment.body}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className={`p-4 border-t flex justify-end ${
          isDarkMode 
            ? 'border-slate-800 bg-slate-900/90' 
            : 'border-slate-200 bg-slate-50'
        }`}>
          <button
            onClick={onClose}
            className={`px-5 py-2 text-sm font-semibold rounded-xl transition-colors ${
              isDarkMode
                ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
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
