import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import PostCard from './components/PostCard';
import PostDetailModal from './components/PostDetailModal';
import CreatePostModal from './components/CreatePostModal';
import AnalyticsModal from './components/AnalyticsModal';
import { fetchPosts, fetchUsers } from './services/api';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useDebounce } from './hooks/useDebounce';
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
  const [deletedPostIds, setDeletedPostIds] = useLocalStorage('pulse_blog_deleted_posts', []);
  const [isDarkMode, setIsDarkMode] = useLocalStorage('pulse_blog_dark_mode', true);

  // UI control states
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'saved'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  // Load data from API
  const loadApiData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [postsData, usersData] = await Promise.all([fetchPosts(), fetchUsers()]);
      setApiPosts(postsData);
      setUsers(usersData);
    } catch {
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

  // Combine custom posts created by user with API posts (excluding deleted posts)
  const allPosts = useMemo(() => {
    const enrichedApiPosts = apiPosts
      .filter((post) => !deletedPostIds.includes(post.id))
      .map((post) => ({
        ...post,
        authorName: userMap[post.userId] || `Author ${post.userId}`
      }));
    const activeCustomPosts = customPosts.filter((post) => !deletedPostIds.includes(post.id));
    return [...activeCustomPosts, ...enrichedApiPosts];
  }, [apiPosts, customPosts, userMap, deletedPostIds]);

  // Debounce search query to optimize performance during fast typing
  const debouncedSearchQuery = useDebounce(searchQuery, 250);

  // Filter posts based on active tab and debounced search query
  const filteredPosts = useMemo(() => {
    let source = activeTab === 'saved' ? savedPosts : allPosts;

    if (!debouncedSearchQuery.trim()) return source;

    const query = debouncedSearchQuery.toLowerCase();
    return source.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.body.toLowerCase().includes(query) ||
        (post.authorName && post.authorName.toLowerCase().includes(query))
    );
  }, [allPosts, savedPosts, activeTab, debouncedSearchQuery]);

  // Toggle bookmark / saved post in localStorage (Immutable add/remove)
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

  // Add custom post to state (Immutable add)
  const handleCreatePost = (newPost) => {
    setCustomPosts((prev) => [newPost, ...prev]);
  };

  // Update existing post (Immutable update with map)
  const handleUpdatePost = (updatedPost) => {
    setCustomPosts((prev) =>
      prev.map((p) => (p.id === updatedPost.id ? { ...p, ...updatedPost } : p))
    );
    setSavedPosts((prev) =>
      prev.map((p) => (p.id === updatedPost.id ? { ...p, ...updatedPost } : p))
    );
    setApiPosts((prev) =>
      prev.map((p) => (p.id === updatedPost.id ? { ...p, ...updatedPost } : p))
    );
    if (selectedPost && selectedPost.id === updatedPost.id) {
      setSelectedPost((prev) => ({ ...prev, ...updatedPost }));
    }
  };

  // Delete post (Immutable delete with filter)
  const handleDeletePost = (postId) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      setCustomPosts((prev) => prev.filter((p) => p.id !== postId));
      setSavedPosts((prev) => prev.filter((p) => p.id !== postId));
      setDeletedPostIds((prev) => (prev.includes(postId) ? prev : [...prev, postId]));
      if (selectedPost && selectedPost.id === postId) {
        setSelectedPost(null);
      }
    }
  };

  const handleOpenEditModal = (post) => {
    setEditingPost(post);
    setIsCreateModalOpen(true);
  };

  const isPostSaved = (postId) => {
    return savedPosts.some((p) => p.id === postId);
  };

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 ease-in-out flex flex-col font-sans selection:bg-indigo-500 selection:text-white ${
      isDarkMode 
        ? 'bg-[#090d16] text-slate-100' 
        : 'bg-[#f8fafc] text-slate-900'
    }`}>
      
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        savedCount={savedPosts.length}
        onOpenCreateModal={() => setIsCreateModalOpen(true)}
        onOpenAnalytics={() => setIsAnalyticsOpen(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Dynamic Hero Header */}
        <Header
          totalPosts={allPosts.length}
          savedCount={savedPosts.length}
          totalUsers={users.length || 10}
          isDarkMode={isDarkMode}
        />

        {/* Section Heading & Filter Status */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className={`text-2xl font-extrabold tracking-tight flex items-center gap-2 transition-colors duration-700 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              {activeTab === 'saved' ? (
                <>
                  <Bookmark className="w-6 h-6 text-purple-500" />
                  <span>Saved Articles ({filteredPosts.length})</span>
                </>
              ) : (
                <>
                  <FileText className="w-6 h-6 text-indigo-500" />
                  <span>Latest Articles ({filteredPosts.length})</span>
                </>
              )}
            </h2>
            {searchQuery && (
              <p className={`text-xs mt-1 transition-colors duration-700 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Search results for keyword: <span className="text-indigo-600 dark:text-indigo-400 font-semibold font-mono">"{searchQuery}"</span>
              </p>
            )}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-10 h-10 text-indigo-600 dark:text-indigo-400 animate-spin mb-4" />
            <p className={`text-sm font-semibold transition-colors duration-700 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Fetching articles...
            </p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className={`flex flex-col items-center justify-center py-16 p-6 rounded-2xl text-center max-w-md mx-auto ${
            isDarkMode ? 'glass-card-dark' : 'glass-card-light'
          }`}>
            <AlertCircle className="w-12 h-12 text-red-500 mb-3" />
            <h3 className={`text-lg font-bold mb-2 transition-colors duration-700 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Error Loading Articles
            </h3>
            <p className={`text-sm mb-6 transition-colors duration-700 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{error}</p>
            <button
              onClick={loadApiData}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-all shadow-md cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" /> Retry
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredPosts.length === 0 && (
          <div className={`flex flex-col items-center justify-center py-16 p-8 rounded-2xl text-center max-w-md mx-auto ${
            isDarkMode ? 'glass-card-dark' : 'glass-card-light'
          }`}>
            <Bookmark className={`w-12 h-12 mb-3 transition-colors duration-700 ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`} />
            <h3 className={`text-lg font-bold mb-2 transition-colors duration-700 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              No Articles Found
            </h3>
            <p className={`text-sm mb-6 transition-colors duration-700 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {activeTab === 'saved'
                ? 'You have not bookmarked any articles yet. Click the bookmark icon on any article to save it!'
                : 'No articles matched your search query.'}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-colors duration-700 ${
                  isDarkMode 
                    ? 'bg-slate-800 text-slate-300 hover:text-white' 
                    : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
                }`}
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
                onEditPost={handleOpenEditModal}
                onDeletePost={handleDeletePost}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className={`border-t py-8 text-center text-xs transition-colors duration-700 ${
        isDarkMode 
          ? 'border-slate-900 bg-slate-950/90 text-slate-500' 
          : 'border-slate-200 bg-slate-100 text-slate-600'
      }`}>
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
          onEditPost={handleOpenEditModal}
          onDeletePost={handleDeletePost}
          isDarkMode={isDarkMode}
        />
      )}

      {/* Create / Edit Custom Post Modal */}
      <CreatePostModal
        isOpen={isCreateModalOpen}
        onClose={() => {
          setIsCreateModalOpen(false);
          setEditingPost(null);
        }}
        onCreatePost={handleCreatePost}
        onUpdatePost={handleUpdatePost}
        editingPost={editingPost}
        isDarkMode={isDarkMode}
      />

      {/* Pulse Insights & Analytics Modal (TypeScript Module) */}
      <AnalyticsModal
        isOpen={isAnalyticsOpen}
        onClose={() => setIsAnalyticsOpen(false)}
        posts={allPosts}
        savedPosts={savedPosts}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
