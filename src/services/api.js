const BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Fetch all blog posts from JSONPlaceholder API
 */
export const fetchPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    if (!response.ok) {
      throw new Error(`Error fetching posts: ${response.statusText}`);
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
      throw new Error(`Error fetching users: ${response.statusText}`);
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
      throw new Error(`Error fetching comments: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error (fetchPostComments):', error);
    return [];
  }
};
