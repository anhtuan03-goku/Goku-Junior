const BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Fetch paginated blog posts from JSONPlaceholder API
 * Supports _page and _limit query parameters with x-total-count extraction
 */
export const fetchPostsPaged = async (page = 1, limit = 9) => {
  try {
    const response = await fetch(`${BASE_URL}/posts?_page=${page}&_limit=${limit}`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: Failed to fetch articles`);
    }
    const data = await response.json();
    const totalCount = Number(response.headers.get('x-total-count') || 100);
    const totalPages = Math.ceil(totalCount / limit);

    return {
      posts: data,
      totalCount,
      page,
      limit,
      totalPages,
    };
  } catch (error) {
    console.error('API Error (fetchPostsPaged):', error);
    throw error;
  }
};

/**
 * Fetch all blog posts (used for total count, analytics dataset, and caching)
 */
export const fetchPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: Failed to fetch all articles`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error (fetchPosts):', error);
    throw error;
  }
};

/**
 * Fetch all users to display author details
 */
export const fetchUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: Failed to fetch authors`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error (fetchUsers):', error);
    return [];
  }
};

/**
 * Fetch comments for a specific post
 */
export const fetchPostComments = async (postId) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}/comments`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: Failed to fetch comments`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error (fetchPostComments):', error);
    return [];
  }
};

/**
 * Create a new article via POST API (TanStack Mutation)
 */
export const createPostApi = async (newPost) => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: Failed to create article`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error (createPostApi):', error);
    throw error;
  }
};

/**
 * Update an existing article via PUT API (TanStack Mutation)
 */
export const updatePostApi = async (updatedPost) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${updatedPost.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedPost),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: Failed to update article`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error (updatePostApi):', error);
    throw error;
  }
};

/**
 * Delete an article via DELETE API (TanStack Mutation)
 */
export const deletePostApi = async (postId) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: Failed to delete article`);
    }
    return { id: postId, success: true };
  } catch (error) {
    console.error('API Error (deletePostApi):', error);
    throw error;
  }
};
