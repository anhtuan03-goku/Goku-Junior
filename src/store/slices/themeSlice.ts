import type { StateCreator } from 'zustand';
import type { AppStore, ThemeSlice, ThemeSliceState } from '../../types/store';

const getInitialTheme = (): boolean => {
  if (typeof window === 'undefined') return true;
  try {
    const saved = window.localStorage.getItem('pulse_blog_dark_mode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
  } catch (err) {
    console.warn('Could not read legacy dark mode setting:', err);
  }
  return true;
};

export const initialThemeState: ThemeSliceState = {
  isDarkMode: getInitialTheme(),
};

export const createThemeSlice: StateCreator<
  AppStore,
  [['zustand/devtools', never], ['zustand/persist', unknown]],
  [],
  ThemeSlice
> = (set) => ({
  ...initialThemeState,

  toggleTheme: () =>
    set((state) => ({ isDarkMode: !state.isDarkMode }), false, 'theme/toggleTheme'),

  setTheme: (isDark) => set({ isDarkMode: isDark }, false, 'theme/setTheme'),
});
