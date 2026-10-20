import { QueryClient } from '@tanstack/react-query';

/**
 * Global TanStack QueryClient with optimal caching & deduplication policies:
 * 1. staleTime = 5 mins: Data is fresh, eliminating duplicate requests when switching views
 * 2. gcTime = 30 mins: Retains inactive cache in memory for instant back-navigation
 * 3. refetchOnWindowFocus = false: Prevents annoying duplicate requests during window switches
 * 4. retry = 1: Auto-retries failed queries once before marking as error
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 30,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});
