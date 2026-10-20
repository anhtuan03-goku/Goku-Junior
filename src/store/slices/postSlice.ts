import type { StateCreator } from 'zustand';
import type { AppStore, PostSlice, PostSliceState } from '../../types/store';
import type { Post } from '../../types/blog';
import { fetchPosts, fetchUsers } from '../../services/api';

/**
 * Migration helper to read legacy localStorage data if available
 */
const getLegacyInitialData = (): {
  savedPostIds: number[];
  customPosts: Post[];
  deletedPostIds: number[];
} => {
  if (typeof window === 'undefined') {
    return { savedPostIds: [], customPosts: [], deletedPostIds: [] };
  }

  let savedPostIds: number[] = [];
  let customPosts: Post[] = [];
  let deletedPostIds: number[] = [];

  try {
    const rawSaved = window.localStorage.getItem('pulse_blog_saved_posts');
    if (rawSaved) {
      const parsed = JSON.parse(rawSaved);
      if (Array.isArray(parsed)) {
        savedPostIds = parsed.map((item: unknown) => {
          if (typeof item === 'number') return item;
          if (item && typeof item === 'object' && 'id' in item) {
            return (item as { id: number }).id;
          }
          return 0;
        }).filter((id: number) => id > 0);
      }
    }

    const rawCustom = window.localStorage.getItem('pulse_blog_custom_posts');
    if (rawCustom) {
      const parsed = JSON.parse(rawCustom);
      if (Array.isArray(parsed)) customPosts = parsed;
    }

    const rawDeleted = window.localStorage.getItem('pulse_blog_deleted_posts');
    if (rawDeleted) {
      const parsed = JSON.parse(rawDeleted);
      if (Array.isArray(parsed)) deletedPostIds = parsed;
    }
  } catch (err) {
    console.warn('Could not read legacy localStorage data:', err);
  }

  return { savedPostIds, customPosts, deletedPostIds };
};

const legacyData = getLegacyInitialData();

export const initialPostState: PostSliceState = {
  apiPosts: [],
  customPosts: legacyData.customPosts,
  savedPostIds: legacyData.savedPostIds,
  deletedPostIds: legacyData.deletedPostIds,
  users: [],
  loading: false,
  error: null,
};

export const createPostSlice: StateCreator<
  AppStore,
  [['zustand/devtools', never], ['zustand/persist', unknown]],
  [],
  PostSlice
> = (set) => ({
  ...initialPostState,

  loadApiData: async () => {
    set({ loading: true, error: null }, false, 'post/loadApiData/start');
    try {
      const [postsData, usersData] = await Promise.all([fetchPosts(), fetchUsers()]);
      set(
        {
          apiPosts: postsData,
          users: usersData,
          loading: false,
          error: null,
        },
        false,
        'post/loadApiData/success'
      );
    } catch {
      set(
        {
          error: 'Unable to load articles from the API. Please try again!',
          loading: false,
        },
        false,
        'post/loadApiData/error'
      );
    }
  },

  createPost: (postData) => {
    const newPost: Post = {
      id: Date.now(),
      title: postData.title.trim(),
      body: postData.body.trim(),
      userId: postData.userId || 999,
      authorName: postData.authorName?.trim() || 'Community Contributor',
      isCustom: true,
      createdAt: new Date().toISOString(),
    };

    set(
      (state) => ({
        customPosts: [newPost, ...state.customPosts],
      }),
      false,
      'post/createPost'
    );
  },

  updatePost: (updatedPost) => {
    set(
      (state) => ({
        customPosts: state.customPosts.map((p) =>
          p.id === updatedPost.id ? { ...p, ...updatedPost } : p
        ),
        apiPosts: state.apiPosts.map((p) =>
          p.id === updatedPost.id ? { ...p, ...updatedPost } : p
        ),
        selectedPost:
          state.selectedPost && state.selectedPost.id === updatedPost.id
            ? { ...state.selectedPost, ...updatedPost }
            : state.selectedPost,
      }),
      false,
      'post/updatePost'
    );
  },

  deletePost: (postId) => {
    set(
      (state) => ({
        customPosts: state.customPosts.filter((p) => p.id !== postId),
        savedPostIds: state.savedPostIds.filter((id) => id !== postId),
        deletedPostIds: state.deletedPostIds.includes(postId)
          ? state.deletedPostIds
          : [...state.deletedPostIds, postId],
        selectedPost: state.selectedPost?.id === postId ? null : state.selectedPost,
      }),
      false,
      'post/deletePost'
    );
  },

  toggleSavePost: (postId) => {
    set(
      (state) => {
        const isSaved = state.savedPostIds.includes(postId);
        const updatedSavedIds = isSaved
          ? state.savedPostIds.filter((id) => id !== postId)
          : [postId, ...state.savedPostIds];

        return { savedPostIds: updatedSavedIds };
      },
      false,
      'post/toggleSavePost'
    );
  },
});
