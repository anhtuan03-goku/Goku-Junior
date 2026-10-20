import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from './store';
import type { Post } from '../../types/blog';

// Base input selectors
export const selectApiPosts = (state: RootState) => state.posts.apiPosts;
export const selectCustomPosts = (state: RootState) => state.posts.customPosts;
export const selectDeletedPostIds = (state: RootState) => state.posts.deletedPostIds;
export const selectSavedPostIds = (state: RootState) => state.posts.savedPostIds;
export const selectUsers = (state: RootState) => state.posts.users;
export const selectActiveTab = (state: RootState) => state.ui.activeTab;
export const selectSearchQuery = (state: RootState) => state.ui.searchQuery;
export const selectIsDarkMode = (state: RootState) => state.theme.isDarkMode;

// Memoized selector for all combined posts
export const selectReduxAllPosts = createSelector(
  [selectApiPosts, selectCustomPosts, selectDeletedPostIds, selectUsers],
  (apiPosts, customPosts, deletedIds, users): Post[] => {
    const userMap: Record<number, string> = {};
    for (const u of users) {
      userMap[u.id] = u.name;
    }

    const enrichedApi = apiPosts
      .filter((p) => !deletedIds.includes(p.id))
      .map((p) => ({
        ...p,
        authorName: userMap[p.userId] || `Author ${p.userId}`,
      }));

    const activeCustom = customPosts.filter((p) => !deletedIds.includes(p.id));
    return [...activeCustom, ...enrichedApi];
  }
);

// Memoized selector for filtered posts
export const selectReduxFilteredPosts = createSelector(
  [selectReduxAllPosts, selectSavedPostIds, selectActiveTab, selectSearchQuery],
  (allPosts, savedIds, activeTab, searchQuery): Post[] => {
    const source = activeTab === 'saved'
      ? allPosts.filter((p) => savedIds.includes(p.id))
      : allPosts;

    const query = searchQuery.trim().toLowerCase();
    if (!query) return source;

    return source.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.body.toLowerCase().includes(query) ||
        (p.authorName && p.authorName.toLowerCase().includes(query))
    );
  }
);
