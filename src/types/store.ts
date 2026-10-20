import type { Post, User } from './blog';

export interface PostSliceState {
  apiPosts: Post[];
  customPosts: Post[];
  savedPostIds: number[];
  deletedPostIds: number[];
  users: User[];
  loading: boolean;
  error: string | null;
}

export interface PostSliceActions {
  loadApiData: () => Promise<void>;
  createPost: (postData: { title: string; body: string; authorName?: string; userId?: number }) => void;
  updatePost: (updatedPost: Post) => void;
  deletePost: (postId: number) => void;
  toggleSavePost: (postId: number) => void;
}

export type PostSlice = PostSliceState & PostSliceActions;

export interface UiSliceState {
  activeTab: 'all' | 'saved';
  searchQuery: string;
  selectedPost: Post | null;
  editingPost: Post | null;
  isCreateModalOpen: boolean;
  isAnalyticsOpen: boolean;
}

export interface UiSliceActions {
  setActiveTab: (tab: 'all' | 'saved') => void;
  setSearchQuery: (query: string) => void;
  setSelectedPost: (post: Post | null) => void;
  openCreateModal: (post?: Post | null) => void;
  closeCreateModal: () => void;
  openDetailModal: (post: Post) => void;
  closeDetailModal: () => void;
  openAnalyticsModal: () => void;
  closeAnalyticsModal: () => void;
}

export type UiSlice = UiSliceState & UiSliceActions;

export interface ThemeSliceState {
  isDarkMode: boolean;
}

export interface ThemeSliceActions {
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
}

export type ThemeSlice = ThemeSliceState & ThemeSliceActions;

export type AppStore = PostSlice & UiSlice & ThemeSlice;
