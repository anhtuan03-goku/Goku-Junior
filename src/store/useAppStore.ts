import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { useShallow } from 'zustand/react/shallow';
import type { AppStore } from '../types/store';
import { createPostSlice } from './slices/postSlice';
import { createUiSlice } from './slices/uiSlice';
import { createThemeSlice } from './slices/themeSlice';

/**
 * Root Zustand store combining modular slices with:
 * 1. devtools middleware (for Redux Devtools time-travel & action debugging)
 * 2. persist middleware (selective local storage persistence with partialize)
 */
export const useAppStore = create<AppStore>()(
  devtools(
    persist(
      (...a) => ({
        ...createPostSlice(...a),
        ...createUiSlice(...a),
        ...createThemeSlice(...a),
      }),
      {
        name: 'pulse_blog_store',
        // CRITICAL: Minimal state persistence - only persist durable data, NOT transient UI / API state
        partialize: (state) => ({
          isDarkMode: state.isDarkMode,
          customPosts: state.customPosts,
          savedPostIds: state.savedPostIds,
          deletedPostIds: state.deletedPostIds,
        }),
      }
    ),
    {
      name: 'PulseBlogStore',
      enabled: import.meta.env.DEV,
    }
  )
);

// Convenient re-export of useShallow
export { useShallow };
