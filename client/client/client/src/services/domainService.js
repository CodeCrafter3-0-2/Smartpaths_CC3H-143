import api from '../config/api';
import { API_ENDPOINTS } from '../config/constants';

export const domainService = {
  // Get all domains
  getAllDomains: async () => {
    const response = await api.get(API_ENDPOINTS.DOMAINS.GET_ALL);
    return response.data;
  },

  // Get paginated domains
  getPaginatedDomains: async (page = 0, size = 10) => {
    const response = await api.get(${API_ENDPOINTS.DOMAINS.PAGINATED}?page=&size=);
    return response.data;
  },

  // Search domains
  searchDomains: async (keyword) => {
    const response = await api.get(${API_ENDPOINTS.DOMAINS.SEARCH}?keyword=);
    return response.data;
  },

  // Get top domains
  getTopDomains: async () => {
    const response = await api.get(API_ENDPOINTS.DOMAINS.TOP);
    return response.data;
  },

  // Get domain details
  getDomainDetails: async (domainName) => {
    const response = await api.get(${API_ENDPOINTS.DOMAINS.DETAILS}/);
    return response.data;
  },

  // Get domain stats
  getDomainStats: async (domainId) => {
    const response = await api.get(${API_ENDPOINTS.DOMAINS.DETAILS}//stats);
    return response.data;
  },

  // Create domain (admin)
  createDomain: async (domainData) => {
    const response = await api.post(API_ENDPOINTS.DOMAINS.CREATE, domainData);
    return response.data;
  },
};
