import type { AppStore } from '../types/store';
import type { Post } from '../types/blog';

/**
 * Cache holder for memoized selectAllPosts to avoid creating new array references
 * if the underlying dependencies have not changed.
 */
let lastApiPosts: Post[] | null = null;
let lastCustomPosts: Post[] | null = null;
let lastDeletedIds: number[] | null = null;
let lastUsers: AppStore['users'] | null = null;
let cachedAllPosts: Post[] = [];

/**
 * Memoized selector: Combines custom posts and API posts (excluding deleted),
 * and enriches posts with author names from users.
 */
export const selectAllPosts = (state: AppStore): Post[] => {
  if (
    state.apiPosts === lastApiPosts &&
    state.customPosts === lastCustomPosts &&
    state.deletedPostIds === lastDeletedIds &&
    state.users === lastUsers
  ) {
    return cachedAllPosts;
  }

  // Build O(1) userMap for author lookups
  const userMap: Record<number, string> = {};
  for (const u of state.users) {
    userMap[u.id] = u.name;
  }

  const enrichedApiPosts = state.apiPosts
    .filter((post) => !state.deletedPostIds.includes(post.id))
    .map((post) => ({
      ...post,
      authorName: userMap[post.userId] || `Author ${post.userId}`,
    }));

  const activeCustomPosts = state.customPosts.filter(
    (post) => !state.deletedPostIds.includes(post.id)
  );

  cachedAllPosts = [...activeCustomPosts, ...enrichedApiPosts];
  lastApiPosts = state.apiPosts;
  lastCustomPosts = state.customPosts;
  lastDeletedIds = state.deletedPostIds;
  lastUsers = state.users;

  return cachedAllPosts;
};

/**
 * Cache holder for memoized selectSavedPosts
 */
let lastSavedAllPosts: Post[] | null = null;
let lastSavedIds: number[] | null = null;
let cachedSavedPosts: Post[] = [];

/**
 * Memoized selector: Returns full Post objects for saved articles.
 * Strictly maintains referential stability to satisfy React useSyncExternalStore.
 */
export const selectSavedPosts = (state: AppStore): Post[] => {
  const allPosts = selectAllPosts(state);
  if (allPosts === lastSavedAllPosts && state.savedPostIds === lastSavedIds) {
    return cachedSavedPosts;
  }

  cachedSavedPosts = allPosts.filter((post) => state.savedPostIds.includes(post.id));
  lastSavedAllPosts = allPosts;
  lastSavedIds = state.savedPostIds;

  return cachedSavedPosts;
};

/**
 * Selector: Total active posts count (O(1) primitive value)
 */
export const selectTotalPostsCount = (state: AppStore): number => {
  return selectAllPosts(state).length;
};

/**
 * Selector: Saved posts count (O(1) primitive value)
 */
export const selectSavedCount = (state: AppStore): number => {
  return state.savedPostIds.length;
};

/**
 * Selector: Active authors count
 */
export const selectTotalUsersCount = (state: AppStore): number => {
  return state.users.length || 10;
};

/**
 * Atomic Selector Factory: Checks if a specific post ID is saved
 * Returns a primitive boolean - guarantees ZERO re-renders when other posts are saved/unsaved.
 */
export const selectIsPostSaved = (postId: number) => (state: AppStore): boolean => {
  return state.savedPostIds.includes(postId);
};

/**
 * Cache holder for memoized selectFilteredPosts
 */
let lastFilteredAllPosts: Post[] | null = null;
let lastFilteredSavedPosts: Post[] | null = null;
let lastFilteredTab: string | null = null;
let lastFilteredQuery: string | null = null;
let cachedFilteredPosts: Post[] = [];

/**
 * Memoized Filtered posts selector: Filters by activeTab ('all' | 'saved') and search query.
 * Strictly maintains referential stability to satisfy React useSyncExternalStore.
 */
export const selectFilteredPosts = (
  state: AppStore,
  debouncedQuery?: string
): Post[] => {
  const allPosts = selectAllPosts(state);
  const savedPosts = selectSavedPosts(state);
  const query = (debouncedQuery ?? state.searchQuery).trim().toLowerCase();

  if (
    allPosts === lastFilteredAllPosts &&
    savedPosts === lastFilteredSavedPosts &&
    state.activeTab === lastFilteredTab &&
    query === lastFilteredQuery
  ) {
    return cachedFilteredPosts;
  }

  const source = state.activeTab === 'saved' ? savedPosts : allPosts;

  let result: Post[];
  if (!query) {
    result = source;
  } else {
    result = source.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.body.toLowerCase().includes(query) ||
        (post.authorName && post.authorName.toLowerCase().includes(query))
    );
  }

  lastFilteredAllPosts = allPosts;
  lastFilteredSavedPosts = savedPosts;
  lastFilteredTab = state.activeTab;
  lastFilteredQuery = query;
  cachedFilteredPosts = result;

  return cachedFilteredPosts;
};
