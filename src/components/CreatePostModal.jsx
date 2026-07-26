import React, { useState } from 'react';
import { X, PlusCircle, PenTool, CheckCircle2 } from 'lucide-react';

export default function CreatePostModal({ isOpen, onClose, onCreatePost }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !body.trim()) {
      setError('Please fill in both title and article body content!');
      return;
    }

    const newPost = {
      id: Date.now(),
      title: title.trim(),
      body: body.trim(),
      userId: 999,
      authorName: authorName.trim() || 'Community Contributor',
      isCustom: true,
      createdAt: new Date().toISOString()
    };

    onCreatePost(newPost);
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setTitle('');
      setBody('');
      setAuthorName('');
      setError('');
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-lg bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <PenTool className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold text-white">Create New Article</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="p-3 text-xs rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
              {error}
            </div>
          )}

          {success && (
            <div className="p-3 text-xs rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Article created and saved successfully!
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Author Name (Optional)
            </label>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="e.g. Alex Morgan"
              className="w-full px-4 py-2.5 bg-slate-800/80 text-white placeholder-slate-500 text-sm rounded-xl border border-slate-700 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Article Title <span className="text-pink-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a compelling article headline..."
              className="w-full px-4 py-2.5 bg-slate-800/80 text-white placeholder-slate-500 text-sm rounded-xl border border-slate-700 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Article Body <span className="text-pink-500">*</span>
            </label>
            <textarea
              rows={5}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Write your article content here..."
              className="w-full px-4 py-2.5 bg-slate-800/80 text-white placeholder-slate-500 text-sm rounded-xl border border-slate-700 focus:outline-none focus:border-indigo-500 resize-none"
            />
          </div>

          <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-semibold rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:opacity-95 shadow-lg shadow-indigo-500/25 transition-all"
            >
              <PlusCircle className="w-4 h-4" />
              Publish Article
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
