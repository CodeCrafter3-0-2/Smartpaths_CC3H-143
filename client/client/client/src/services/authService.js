import api from '../config/api';
import { API_ENDPOINTS } from '../config/constants';

export const authService = {
  // Register regular user
  register: async (userData) => {
    const response = await api.post(API_ENDPOINTS.AUTH.REGISTER, userData);
    return response.data;
  },

  // Register admin user
  registerAdmin: async (userData) => {
    const response = await api.post(API_ENDPOINTS.AUTH.REGISTER_ADMIN, userData);
    return response.data;
  },

  // Login
  login: async (credentials) => {
    const response = await api.post(API_ENDPOINTS.AUTH.LOGIN, credentials);
    return response.data;
  },

  // Check if admin exists
  checkAdminExists: async () => {
    const response = await api.get(API_ENDPOINTS.AUTH.CHECK_ADMIN_EXISTS);
    return response.data;
  },

  // Get current user
  getCurrentUser: async () => {
    const response = await api.get(API_ENDPOINTS.AUTH.ME);
    return response.data;
  },
};
