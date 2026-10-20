import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import PostCard from './components/PostCard';
import Pagination from './components/Pagination';
import PostDetailModal from './components/PostDetailModal';
import CreatePostModal from './components/CreatePostModal';
import AnalyticsModal from './components/AnalyticsModal';
import { useAppStore } from './store/useAppStore';
import {
  usePostsPagedQuery,
  useAllPostsQuery,
  useUsersQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} from './hooks/useBlogQueries';
import { useDebounce } from './hooks/useDebounce';
import {
  Loader2,
  Bookmark,
  FileText,
  AlertCircle,
  RefreshCw,
  Zap,
} from 'lucide-react';

const PAGE_SIZE = 9;

export default function App() {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);

  // Store subscriptions
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const activeTab = useAppStore((state) => state.activeTab);
  const searchQuery = useAppStore((state) => state.searchQuery);
  const setSearchQuery = useAppStore((state) => state.setSearchQuery);
  const isCreateModalOpen = useAppStore((state) => state.isCreateModalOpen);
  const isAnalyticsOpen = useAppStore((state) => state.isAnalyticsOpen);
  const selectedPost = useAppStore((state) => state.selectedPost);
  const customPosts = useAppStore((state) => state.customPosts);
  const deletedPostIds = useAppStore((state) => state.deletedPostIds);
  const savedPostIds = useAppStore((state) => state.savedPostIds);

  // Debounce search query to optimize performance
  const debouncedSearchQuery = useDebounce(searchQuery, 250);

  // 1. TanStack Query: Paginated Posts with keepPreviousData for smooth page switching
  const {
    data: pagedData,
    isLoading: isPagedLoading,
    isError: isPagedError,
    error: pagedError,
    isFetching: isPagedFetching,
    refetch: refetchPaged,
  } = usePostsPagedQuery(currentPage, PAGE_SIZE);

  // 2. TanStack Query: All Posts Query (for search, analytics dataset, and global counts)
  const {
    data: allApiPosts = [],
  } = useAllPostsQuery();

  // 3. TanStack Query: Authors Query (deduplicated with staleTime: Infinity)
  const { data: usersData = [] } = useUsersQuery();

  // 4. TanStack Mutations with automatic cache invalidation
  const createPostMutation = useCreatePostMutation();
  const updatePostMutation = useUpdatePostMutation();
  const deletePostMutation = useDeletePostMutation();

  // Build author lookup map
  const userMap = useMemo(() => {
    const map = {};
    usersData.forEach((u) => {
      map[u.id] = u.name;
    });
    return map;
  }, [usersData]);

  // Active custom posts (excluding deleted)
  const activeCustomPosts = useMemo(
    () => customPosts.filter((p) => !deletedPostIds.includes(p.id)),
    [customPosts, deletedPostIds]
  );

  // Synchronize server posts & users into client store for Selectors & AnalyticsModal
  useEffect(() => {
    if (allApiPosts.length > 0) {
      useAppStore.setState({ apiPosts: allApiPosts, users: usersData });
    }
  }, [allApiPosts, usersData]);

  // Enriched full dataset
  const allEnrichedPosts = useMemo(() => {
    const enrichedApi = allApiPosts
      .filter((p) => !deletedPostIds.includes(p.id))
      .map((p) => ({
        ...p,
        authorName: userMap[p.userId] || `Author ${p.userId}`,
      }));
    return [...activeCustomPosts, ...enrichedApi];
  }, [allApiPosts, activeCustomPosts, deletedPostIds, userMap]);

  // Enriched current page posts (prepends custom stories on page 1)
  const pagedEnrichedPosts = useMemo(() => {
    const rawPaged = pagedData?.posts || [];
    const enrichedPaged = rawPaged
      .filter((p) => !deletedPostIds.includes(p.id))
      .map((p) => ({
        ...p,
        authorName: userMap[p.userId] || `Author ${p.userId}`,
      }));

    if (currentPage === 1) {
      return [...activeCustomPosts, ...enrichedPaged];
    }
    return enrichedPaged;
  }, [pagedData, currentPage, activeCustomPosts, deletedPostIds, userMap]);

  // Saved articles
  const savedPosts = useMemo(() => {
    return allEnrichedPosts.filter((p) => savedPostIds.includes(p.id));
  }, [allEnrichedPosts, savedPostIds]);

  // Final displayed posts based on Tab, Search, and Pagination
  const displayedPosts = useMemo(() => {
    if (activeTab === 'saved') {
      if (!debouncedSearchQuery.trim()) return savedPosts;
      const q = debouncedSearchQuery.toLowerCase();
      return savedPosts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.body.toLowerCase().includes(q) ||
          (p.authorName && p.authorName.toLowerCase().includes(q))
      );
    }

    if (debouncedSearchQuery.trim()) {
      const q = debouncedSearchQuery.toLowerCase();
      return allEnrichedPosts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.body.toLowerCase().includes(q) ||
          (p.authorName && p.authorName.toLowerCase().includes(q))
      );
    }

    return pagedEnrichedPosts;
  }, [activeTab, debouncedSearchQuery, savedPosts, allEnrichedPosts, pagedEnrichedPosts]);

  // Mutation Handlers: Optimistic update + TanStack Mutation + invalidateQueries
  const handleCreatePost = (postData) => {
    useAppStore.getState().createPost(postData);
    createPostMutation.mutate({
      title: postData.title,
      body: postData.body,
      userId: 1,
    });
  };

  const handleUpdatePost = (updatedPost) => {
    useAppStore.getState().updatePost(updatedPost);
    updatePostMutation.mutate(updatedPost);
  };

  const handleDeletePost = (postId) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      useAppStore.getState().deletePost(postId);
      deletePostMutation.mutate(postId);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // Smooth scroll to top of articles section
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  // Determine if pagination is shown
  const showPagination = activeTab === 'all' && !debouncedSearchQuery.trim() && !isPagedLoading;

  return (
    <div className={`min-h-screen transition-colors duration-700 ease-in-out flex flex-col font-sans selection:bg-indigo-500 selection:text-white ${
      isDarkMode 
        ? 'bg-[#090d16] text-slate-100' 
        : 'bg-[#f8fafc] text-slate-900'
    }`}>
      
      {/* Top Navigation */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Dynamic Hero Header */}
        <Header />

        {/* Section Heading & TanStack Query Status */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3">
              <h2 className={`text-2xl font-extrabold tracking-tight flex items-center gap-2 transition-colors duration-700 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {activeTab === 'saved' ? (
                  <>
                    <Bookmark className="w-6 h-6 text-purple-500" />
                    <span>Saved Articles ({displayedPosts.length})</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-6 h-6 text-indigo-500" />
                    <span>
                      {debouncedSearchQuery
                        ? `Search Results (${displayedPosts.length})`
                        : `Articles Page ${currentPage} (${displayedPosts.length})`}
                    </span>
                  </>
                )}
              </h2>

              {/* TanStack Query Cache & Sync Indicator Badges */}
              <div className="hidden sm:flex items-center gap-1.5">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm">
                  <Zap className="w-3 h-3 text-emerald-400" />
                  <span>TanStack Cache: 5m</span>
                </span>

                {isPagedFetching && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 animate-pulse">
                    <Loader2 className="w-3 h-3 animate-spin text-indigo-400" />
                    <span>Syncing...</span>
                  </span>
                )}
              </div>
            </div>

            {searchQuery && (
              <p className={`text-xs mt-1 transition-colors duration-700 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Search results for keyword: <span className="text-indigo-600 dark:text-indigo-400 font-semibold font-mono">"{searchQuery}"</span>
              </p>
            )}
          </div>

          {/* Quick Stats: Cache Hits */}
          <div className="flex items-center gap-2 text-xs">
            {createPostMutation.isPending && (
              <span className="inline-flex items-center gap-1 text-indigo-400 font-medium animate-pulse">
                <Loader2 className="w-3 h-3 animate-spin" /> Saving article...
              </span>
            )}
            {deletePostMutation.isPending && (
              <span className="inline-flex items-center gap-1 text-red-400 font-medium animate-pulse">
                <Loader2 className="w-3 h-3 animate-spin" /> Deleting article...
              </span>
            )}
          </div>
        </div>

        {/* Loading State - TanStack Query isPending/isLoading */}
        {isPagedLoading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-10 h-10 text-indigo-600 dark:text-indigo-400 animate-spin mb-4" />
            <p className={`text-sm font-semibold transition-colors duration-700 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Fetching articles via TanStack Query...
            </p>
          </div>
        )}

        {/* Error State - TanStack Query isError */}
        {isPagedError && !isPagedLoading && (
          <div className={`flex flex-col items-center justify-center py-16 p-6 rounded-2xl text-center max-w-md mx-auto ${
            isDarkMode ? 'glass-card-dark' : 'glass-card-light'
          }`}>
            <AlertCircle className="w-12 h-12 text-red-500 mb-3" />
            <h3 className={`text-lg font-bold mb-2 transition-colors duration-700 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              TanStack Query Error
            </h3>
            <p className={`text-sm mb-6 transition-colors duration-700 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {pagedError instanceof Error ? pagedError.message : 'Unable to load articles from the server.'}
            </p>
            <button
              onClick={() => refetchPaged()}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-all shadow-md cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" /> Retry Query
            </button>
          </div>
        )}

        {/* Empty State */}
        {!isPagedLoading && !isPagedError && displayedPosts.length === 0 && (
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

        {/* Post Grid with Mutation integration */}
        {!isPagedLoading && !isPagedError && displayedPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onDeletePost={handleDeletePost}
                onEditPost={(p) => useAppStore.getState().openCreateModal(p)}
              />
            ))}
          </div>
        )}

        {/* Smooth Pagination Component (Requirement 4 & 2) */}
        {showPagination && (
          <Pagination
            currentPage={currentPage}
            totalPages={pagedData?.totalPages || 11}
            totalCount={pagedData?.totalCount || 100}
            limit={PAGE_SIZE}
            onPageChange={handlePageChange}
            isFetching={isPagedFetching}
            isDarkMode={isDarkMode}
          />
        )}
      </main>

      {/* Footer */}
      <footer className={`border-t py-8 text-center text-xs transition-colors duration-700 ${
        isDarkMode 
          ? 'border-slate-900 bg-slate-950/90 text-slate-500' 
          : 'border-slate-200 bg-slate-100 text-slate-600'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2026 PulseBlog — Powered by TanStack Query v5 & Zustand.</p>
        </div>
      </footer>

      {/* Modals with Mutation wiring */}
      {selectedPost && (
        <PostDetailModal
          onDeletePost={handleDeletePost}
        />
      )}
      {isCreateModalOpen && (
        <CreatePostModal
          onCreatePost={handleCreatePost}
          onUpdatePost={handleUpdatePost}
        />
      )}
      {isAnalyticsOpen && <AnalyticsModal />}
    </div>
  );
}
