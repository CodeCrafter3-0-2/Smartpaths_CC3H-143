import api from '../config/api';
import { API_ENDPOINTS } from '../config/constants';

export const userService = {
  // Get user profile
  getProfile: async () => {
    const response = await api.get(API_ENDPOINTS.USERS.PROFILE);
    return response.data;
  },

  // Update user profile
  updateProfile: async (profileData) => {
    const response = await api.put(API_ENDPOINTS.USERS.UPDATE_PROFILE, profileData);
    return response.data;
  },

  // Update user progress
  updateProgress: async (progressData) => {
    const response = await api.patch(API_ENDPOINTS.USERS.UPDATE_PROGRESS, progressData);
    return response.data;
  },

  // Update user domain
  updateDomain: async (domainData) => {
    const response = await api.patch(API_ENDPOINTS.USERS.UPDATE_DOMAIN, domainData);
    return response.data;
  },

  // Get user stats
  getStats: async () => {
    const response = await api.get(API_ENDPOINTS.USERS.STATS);
    return response.data;
  },

  // Get user dashboard
  getDashboard: async () => {
    const response = await api.get(API_ENDPOINTS.USERS.DASHBOARD);
    return response.data;
  },
};
