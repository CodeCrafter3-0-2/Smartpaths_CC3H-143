import api from '../config/api';
import { API_ENDPOINTS } from '../config/constants';

export const resourceService = {
  // Get all resources
  getAllResources: async () => {
    const response = await api.get(API_ENDPOINTS.RESOURCES.ALL);
    return response.data;
  },

  // Get resources by domain
  getResourcesByDomain: async (domainId) => {
    const response = await api.get(${API_ENDPOINTS.RESOURCES.BY_DOMAIN}/);
    return response.data;
  },

  // Get free resources by domain
  getFreeResourcesByDomain: async (domainId) => {
    const response = await api.get(${API_ENDPOINTS.RESOURCES.FREE}//free);
    return response.data;
  },

  // Get top rated resources
  getTopRatedResources: async (limit = 10) => {
    const response = await api.get(${API_ENDPOINTS.RESOURCES.TOP_RATED}?limit=);
    return response.data;
  },

  // Search resources
  searchResources: async (keyword) => {
    const response = await api.get(${API_ENDPOINTS.RESOURCES.SEARCH}?keyword=);
    return response.data;
  },

  // Filter resources
  filterResources: async (filterData) => {
    const response = await api.post(API_ENDPOINTS.RESOURCES.FILTER, filterData);
    return response.data;
  },

  // Rate resource
  rateResource: async (id, rating) => {
    const response = await api.post(${API_ENDPOINTS.RESOURCES.RATE}//rate?rating=);
    return response.data;
  },
};
