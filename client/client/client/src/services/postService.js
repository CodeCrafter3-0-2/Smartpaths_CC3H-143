import api from '../config/api';
import { API_ENDPOINTS } from '../config/constants';

export const postService = {
  // Create post
  createPost: async (postData) => {
    const response = await api.post(API_ENDPOINTS.POSTS.CREATE, postData);
    return response.data;
  },

  // Get all posts (paginated)
  getPosts: async (page = 0, size = 10) => {
    const response = await api.get(${API_ENDPOINTS.POSTS.GET_ALL}?page=&size=);
    return response.data;
  },

  // Get posts by category
  getPostsByCategory: async (category, page = 0, size = 10) => {
    const response = await api.get(${API_ENDPOINTS.POSTS.BY_CATEGORY}/?page=&size=);
    return response.data;
  },

  // Search posts
  searchPosts: async (keyword, page = 0, size = 10) => {
    const response = await api.get(${API_ENDPOINTS.POSTS.SEARCH}?keyword=&page=&size=);
    return response.data;
  },

  // Get pinned posts
  getPinnedPosts: async () => {
    const response = await api.get(API_ENDPOINTS.POSTS.PINNED);
    return response.data;
  },

  // Get my posts
  getMyPosts: async (page = 0, size = 10) => {
    const response = await api.get(${API_ENDPOINTS.POSTS.MY_POSTS}?page=&size=);
    return response.data;
  },

  // Like/unlike post
  toggleLikePost: async (id) => {
    const response = await api.post(${API_ENDPOINTS.POSTS.LIKE}//like);
    return response.data;
  },
};
