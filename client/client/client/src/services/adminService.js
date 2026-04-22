import api from '../config/api';
import { API_ENDPOINTS } from '../config/constants';

export const adminService = {
  // Get dashboard stats
  getDashboardStats: async () => {
    const response = await api.get(API_ENDPOINTS.ADMIN.DASHBOARD_STATS);
    return response.data;
  },

  // Health check
  healthCheck: async () => {
    const response = await api.get(API_ENDPOINTS.ADMIN.HEALTH);
    return response.data;
  },
};
