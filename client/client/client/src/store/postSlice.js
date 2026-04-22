import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    currentPost: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchPostsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPostsSuccess: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = null;
    },
    fetchPostsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setCurrentPost: (state, action) => {
      state.currentPost = action.payload;
    },
    addPost: (state, action) => {
      state.posts.unshift(action.payload);
    },
    updatePost: (state, action) => {
      const index = state.posts.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
    togglePostLike: (state, action) => {
      const post = state.posts.find(p => p.id === action.payload);
      if (post) {
        post.isLikedByCurrentUser = !post.isLikedByCurrentUser;
        post.likeCount += post.isLikedByCurrentUser ? 1 : -1;
      }
    },
    clearPosts: (state) => {
      state.posts = [];
      state.currentPost = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  setCurrentPost,
  addPost,
  updatePost,
  togglePostLike,
  clearPosts,
} = postSlice.actions;

export default postSlice.reducer;
