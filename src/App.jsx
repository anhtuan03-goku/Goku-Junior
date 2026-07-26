import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import PostCard from './components/PostCard';
import PostDetailModal from './components/PostDetailModal';
import CreatePostModal from './components/CreatePostModal';
import { fetchPosts, fetchUsers } from './services/api';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Loader2, Bookmark, FileText, AlertCircle, RefreshCw } from 'lucide-react';

export default function App() {
  // State management
  const [apiPosts, setApiPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // LocalStorage state persistence
  const [savedPosts, setSavedPosts] = useLocalStorage('pulse_blog_saved_posts', []);
  const [customPosts, setCustomPosts] = useLocalStorage('pulse_blog_custom_posts', []);

  // UI control states
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'saved'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  // Load data from API
  const loadApiData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [postsData, usersData] = await Promise.all([fetchPosts(), fetchUsers()]);
      setApiPosts(postsData);
      setUsers(usersData);
    } catch (err) {
      setError('Unable to load articles from the API. Please try again!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadApiData();
  }, []);

  // Map author names to API posts
  const userMap = useMemo(() => {
    const map = {};
    users.forEach((u) => {
      map[u.id] = u.name;
    });
    return map;
  }, [users]);

  // Combine custom posts created by user with API posts
  const allPosts = useMemo(() => {
    const enrichedApiPosts = apiPosts.map((post) => ({
      ...post,
      authorName: userMap[post.userId] || `Author ${post.userId}`
    }));
    return [...customPosts, ...enrichedApiPosts];
  }, [apiPosts, customPosts, userMap]);

  // Filter posts based on active tab and search query
  const filteredPosts = useMemo(() => {
    let source = activeTab === 'saved' ? savedPosts : allPosts;

    if (!searchQuery.trim()) return source;

    const query = searchQuery.toLowerCase();
    return source.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.body.toLowerCase().includes(query) ||
        (post.authorName && post.authorName.toLowerCase().includes(query))
    );
  }, [allPosts, savedPosts, activeTab, searchQuery]);

  // Toggle bookmark / saved post in localStorage
  const handleToggleSave = (postToToggle) => {
    setSavedPosts((prevSaved) => {
      const isAlreadySaved = prevSaved.some((p) => p.id === postToToggle.id);
      if (isAlreadySaved) {
        return prevSaved.filter((p) => p.id !== postToToggle.id);
      } else {
        return [postToToggle, ...prevSaved];
      }
    });
  };

  // Add custom post to localStorage
  const handleCreatePost = (newPost) => {
    setCustomPosts((prev) => [newPost, ...prev]);
  };

  const isPostSaved = (postId) => {
    return savedPosts.some((p) => p.id === postId);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        savedCount={savedPosts.length}
        onOpenCreateModal={() => setIsCreateModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Dynamic Hero Header */}
        <Header
          totalPosts={allPosts.length}
          savedCount={savedPosts.length}
          totalUsers={users.length || 10}
        />

        {/* Section Heading & Filter Status */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              {activeTab === 'saved' ? (
                <>
                  <Bookmark className="w-6 h-6 text-purple-400" />
                  <span>Saved Articles ({filteredPosts.length})</span>
                </>
              ) : (
                <>
                  <FileText className="w-6 h-6 text-indigo-400" />
                  <span>Latest Articles ({filteredPosts.length})</span>
                </>
              )}
            </h2>
            {searchQuery && (
              <p className="text-xs text-slate-400 mt-1">
                Search results for keyword: <span className="text-indigo-400 font-semibold font-mono">"{searchQuery}"</span>
              </p>
            )}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-10 h-10 text-indigo-500 animate-spin mb-4" />
            <p className="text-slate-400 text-sm font-medium">Fetching articles...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="flex flex-col items-center justify-center py-16 p-6 rounded-2xl glass-card text-center max-w-md mx-auto">
            <AlertCircle className="w-12 h-12 text-red-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Error Loading Articles</h3>
            <p className="text-slate-400 text-sm mb-6">{error}</p>
            <button
              onClick={loadApiData}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all"
            >
              <RefreshCw className="w-4 h-4" /> Retry
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredPosts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 p-8 rounded-2xl glass-card text-center max-w-md mx-auto">
            <Bookmark className="w-12 h-12 text-slate-600 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">No Articles Found</h3>
            <p className="text-slate-400 text-sm mb-6">
              {activeTab === 'saved'
                ? 'You have not bookmarked any articles yet. Click the bookmark icon on any article to save it!'
                : 'No articles matched your search query.'}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
              >
                Clear Search Filter
              </button>
            )}
          </div>
        )}

        {/* Post Grid */}
        {!loading && !error && filteredPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                isSaved={isPostSaved(post.id)}
                onToggleSave={handleToggleSave}
                onSelectPost={(p) => setSelectedPost(p)}
              />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2026 PulseBlog — Curated Articles & Insights.</p>
        </div>
      </footer>

      {/* Detail Modal */}
      {selectedPost && (
        <PostDetailModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
          isSaved={isPostSaved(selectedPost.id)}
          onToggleSave={handleToggleSave}
        />
      )}

      {/* Create Custom Post Modal */}
      <CreatePostModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreatePost={handleCreatePost}
      />
    </div>
  );
}
