import { useQuery, useMutation, useQueryClient, keepPreviousData } from '@tanstack/react-query';
import {
  fetchPostsPaged,
  fetchPosts,
  fetchUsers,
  fetchPostComments,
  createPostApi,
  updatePostApi,
  deletePostApi,
} from '../services/api';
import type { Post } from '../types/blog';

/**
 * Query Key Constants for TanStack Query cache organization
 */
export const queryKeys = {
  posts: {
    all: ['posts'] as const,
    list: (page: number, limit: number) => ['posts', 'paged', { page, limit }] as const,
    detail: (id: number) => ['posts', 'detail', id] as const,
  },
  users: ['users'] as const,
  comments: (postId: number) => ['comments', postId] as const,
};

/**
 * 1. Paginated Posts Query with keepPreviousData for smooth page switching
 */
export function usePostsPagedQuery(page = 1, limit = 9) {
  return useQuery({
    queryKey: queryKeys.posts.list(page, limit),
    queryFn: () => fetchPostsPaged(page, limit),
    placeholderData: keepPreviousData, // TanStack Query v5: Keeps previous page rendered without flicker
  });
}

/**
 * 2. All Posts Query (Used for Insights analytics & complete dataset calculations)
 */
export function useAllPostsQuery() {
  return useQuery({
    queryKey: queryKeys.posts.all,
    queryFn: fetchPosts,
  });
}

/**
 * 3. Authors / Users Query with deduplication across components
 */
export function useUsersQuery() {
  return useQuery({
    queryKey: queryKeys.users,
    queryFn: fetchUsers,
    staleTime: Infinity, // Author list is static, no duplicate network calls
  });
}

/**
 * 4. Post Comments Query (fetch on-demand when opening detail modal)
 */
export function usePostCommentsQuery(postId?: number | null) {
  return useQuery({
    queryKey: queryKeys.comments(postId ?? 0),
    queryFn: () => fetchPostComments(postId!),
    enabled: Boolean(postId && postId > 0),
  });
}

/**
 * 5. Create Post Mutation with automatic cache invalidation
 */
export function useCreatePostMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newPost: Omit<Post, 'id'>) => createPostApi(newPost),
    onSuccess: () => {
      // Invalidate all posts queries to synchronize with latest server state
      queryClient.invalidateQueries({ queryKey: queryKeys.posts.all });
    },
  });
}

/**
 * 6. Update Post Mutation with automatic cache invalidation
 */
export function useUpdatePostMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (updatedPost: Post) => updatePostApi(updatedPost),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.posts.all });
    },
  });
}

/**
 * 7. Delete Post Mutation with automatic cache invalidation
 */
export function useDeletePostMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: number) => deletePostApi(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.posts.all });
    },
  });
}
