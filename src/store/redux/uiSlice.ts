import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Post } from '../../types/blog';

export interface UiState {
  activeTab: 'all' | 'saved';
  searchQuery: string;
  selectedPost: Post | null;
  editingPost: Post | null;
  isCreateModalOpen: boolean;
  isAnalyticsOpen: boolean;
}

const initialState: UiState = {
  activeTab: 'all',
  searchQuery: '',
  selectedPost: null,
  editingPost: null,
  isCreateModalOpen: false,
  isAnalyticsOpen: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<'all' | 'saved'>) => {
      state.activeTab = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSelectedPost: (state, action: PayloadAction<Post | null>) => {
      state.selectedPost = action.payload;
    },
    setEditingPost: (state, action: PayloadAction<Post | null>) => {
      state.editingPost = action.payload;
    },
    setCreateModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isCreateModalOpen = action.payload;
    },
    setAnalyticsOpen: (state, action: PayloadAction<boolean>) => {
      state.isAnalyticsOpen = action.payload;
    },
  },
});

export const {
  setActiveTab,
  setSearchQuery,
  setSelectedPost,
  setEditingPost,
  setCreateModalOpen,
  setAnalyticsOpen,
} = uiSlice.actions;

export default uiSlice.reducer;
