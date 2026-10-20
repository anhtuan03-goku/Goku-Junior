import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { Post, User } from '../../types/blog';
import { fetchPosts, fetchUsers } from '../../services/api';

export interface PostState {
  apiPosts: Post[];
  customPosts: Post[];
  savedPostIds: number[];
  deletedPostIds: number[];
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  apiPosts: [],
  customPosts: [],
  savedPostIds: [],
  deletedPostIds: [],
  users: [],
  loading: false,
  error: null,
};

export const fetchInitialDataThunk = createAsyncThunk(
  'posts/fetchInitialData',
  async (_, { rejectWithValue }) => {
    try {
      const [posts, users] = await Promise.all([fetchPosts(), fetchUsers()]);
      return { posts, users };
    } catch {
      return rejectWithValue('Unable to load articles from the API.');
    }
  }
);

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    createPost: (
      state,
      action: PayloadAction<{ title: string; body: string; authorName?: string; userId?: number }>
    ) => {
      const newPost: Post = {
        id: Date.now(),
        title: action.payload.title.trim(),
        body: action.payload.body.trim(),
        userId: action.payload.userId || 999,
        authorName: action.payload.authorName || 'Community Contributor',
        isCustom: true,
        createdAt: new Date().toISOString(),
      };
      state.customPosts.unshift(newPost);
    },
    updatePost: (state, action: PayloadAction<Post>) => {
      const updated = action.payload;
      const cIndex = state.customPosts.findIndex((p) => p.id === updated.id);
      if (cIndex !== -1) {
        state.customPosts[cIndex] = updated;
      }
      const aIndex = state.apiPosts.findIndex((p) => p.id === updated.id);
      if (aIndex !== -1) {
        state.apiPosts[aIndex] = updated;
      }
    },
    deletePost: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.customPosts = state.customPosts.filter((p) => p.id !== id);
      state.savedPostIds = state.savedPostIds.filter((savedId) => savedId !== id);
      if (!state.deletedPostIds.includes(id)) {
        state.deletedPostIds.push(id);
      }
    },
    toggleSavePost: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const index = state.savedPostIds.indexOf(id);
      if (index >= 0) {
        state.savedPostIds.splice(index, 1);
      } else {
        state.savedPostIds.unshift(id);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialDataThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInitialDataThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.apiPosts = action.payload.posts;
        state.users = action.payload.users;
      })
      .addCase(fetchInitialDataThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || 'Failed to fetch data';
      });
  },
});

export const { createPost, updatePost, deletePost, toggleSavePost } = postSlice.actions;
export default postSlice.reducer;
