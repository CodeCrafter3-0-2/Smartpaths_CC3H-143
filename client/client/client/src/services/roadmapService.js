import api from '../config/api';
import { API_ENDPOINTS } from '../config/constants';

export const roadmapService = {
  // Get roadmaps by domain
  getRoadmapsByDomain: async (domainId) => {
    const response = await api.get(${API_ENDPOINTS.ROADMAPS.BY_DOMAIN}/);
    return response.data;
  },

  // Get roadmap by id
  getRoadmapById: async (id) => {
    const response = await api.get(${API_ENDPOINTS.ROADMAPS.GET_BY_ID}/);
    return response.data;
  },

  // Get detailed roadmap
  getDetailedRoadmap: async (id) => {
    const response = await api.get(${API_ENDPOINTS.ROADMAPS.DETAILED}//detailed);
    return response.data;
  },

  // Get roadmap progress
  getRoadmapProgress: async (id) => {
    const response = await api.get(${API_ENDPOINTS.ROADMAPS.PROGRESS}//progress);
    return response.data;
  },
};
