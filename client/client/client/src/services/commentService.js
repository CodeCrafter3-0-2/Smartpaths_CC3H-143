import api from '../config/api';
import { API_ENDPOINTS } from '../config/constants';

export const commentService = {
  // Add comment
  addComment: async (commentData) => {
    const response = await api.post(API_ENDPOINTS.COMMENTS.ADD, commentData);
    return response.data;
  },

  // Get comments by post
  getCommentsByPost: async (postId) => {
    const response = await api.get(${API_ENDPOINTS.COMMENTS.BY_POST}/);
    return response.data;
  },

  // Get paginated comments by post
  getPaginatedCommentsByPost: async (postId, page = 0, size = 20) => {
    const response = await api.get(${API_ENDPOINTS.COMMENTS.PAGINATED}//paginated?page=&size=);
    return response.data;
  },

  // Update comment
  updateComment: async (id, commentData) => {
    const response = await api.put(${API_ENDPOINTS.COMMENTS.UPDATE}/, commentData);
    return response.data;
  },

  // Delete comment
  deleteComment: async (id) => {
    const response = await api.delete(${API_ENDPOINTS.COMMENTS.DELETE}/);
    return response.data;
  },

  // Like/unlike comment
  toggleLikeComment: async (id) => {
    const response = await api.post(${API_ENDPOINTS.COMMENTS.LIKE}//like);
    return response.data;
  },
};
