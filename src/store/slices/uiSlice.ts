import type { StateCreator } from 'zustand';
import type { AppStore, UiSlice, UiSliceState } from '../../types/store';

export const initialUiState: UiSliceState = {
  activeTab: 'all',
  searchQuery: '',
  selectedPost: null,
  editingPost: null,
  isCreateModalOpen: false,
  isAnalyticsOpen: false,
};

export const createUiSlice: StateCreator<
  AppStore,
  [['zustand/devtools', never], ['zustand/persist', unknown]],
  [],
  UiSlice
> = (set) => ({
  ...initialUiState,

  setActiveTab: (tab) => set({ activeTab: tab }, false, 'ui/setActiveTab'),

  setSearchQuery: (query) => set({ searchQuery: query }, false, 'ui/setSearchQuery'),

  setSelectedPost: (post) => set({ selectedPost: post }, false, 'ui/setSelectedPost'),

  openCreateModal: (post = null) =>
    set(
      {
        editingPost: post,
        isCreateModalOpen: true,
      },
      false,
      'ui/openCreateModal'
    ),

  closeCreateModal: () =>
    set(
      {
        editingPost: null,
        isCreateModalOpen: false,
      },
      false,
      'ui/closeCreateModal'
    ),

  openDetailModal: (post) =>
    set({ selectedPost: post }, false, 'ui/openDetailModal'),

  closeDetailModal: () =>
    set({ selectedPost: null }, false, 'ui/closeDetailModal'),

  openAnalyticsModal: () =>
    set({ isAnalyticsOpen: true }, false, 'ui/openAnalyticsModal'),

  closeAnalyticsModal: () =>
    set({ isAnalyticsOpen: false }, false, 'ui/closeAnalyticsModal'),
});
