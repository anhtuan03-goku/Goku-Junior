/**
 * TypeScript Data Models & Contract Types for PulseBlog
 */

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  authorName?: string;
  isCustom?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone?: string;
  website?: string;
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export type Category = 'Technology' | 'Design' | 'Insights' | 'Community' | 'Tutorial';

export interface ReadingMetric {
  totalArticles: number;
  totalWords: number;
  estimatedReadingMinutes: number;
  averageWordsPerArticle: number;
  longestArticleTitle: string;
}

export interface AuthorInsight {
  authorName: string;
  postCount: number;
  percentage: number;
}

export type MetricTab = 'overview' | 'authors' | 'categories';

/**
 * Discriminated Union pattern for type-safe filtering
 */
export type AnalyticsFilter = 
  | { type: 'all'; label: 'All Articles' }
  | { type: 'custom_only'; label: 'Custom Stories Only' }
  | { type: 'saved_only'; label: 'Saved Articles Only' };

export interface AnalyticsModalProps {
  isOpen: boolean;
  onClose: () => void;
  posts: Post[];
  savedPosts: Post[];
  isDarkMode: boolean;
}
