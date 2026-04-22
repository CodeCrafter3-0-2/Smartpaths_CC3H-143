import api from '../config/api';
import { API_ENDPOINTS } from '../config/constants';

export const chatService = {
  // Get or create chat room
  getOrCreateRoom: async (userId) => {
    const response = await api.post(${API_ENDPOINTS.CHAT.ROOM}/);
    return response.data;
  },

  // Send message
  sendMessage: async (messageData) => {
    const response = await api.post(API_ENDPOINTS.CHAT.SEND, messageData);
    return response.data;
  },

  // Get user's chat rooms
  getChatRooms: async () => {
    const response = await api.get(API_ENDPOINTS.CHAT.ROOMS);
    return response.data;
  },

  // Get messages with user
  getMessagesWithUser: async (userId, page = 0, size = 50) => {
    const response = await api.get(${API_ENDPOINTS.CHAT.MESSAGES}/?page=&size=);
    return response.data;
  },

  // Mark messages as read
  markAsRead: async (userId) => {
    const response = await api.post(${API_ENDPOINTS.CHAT.MARK_READ}/);
    return response.data;
  },

  // Get unread count
  getUnreadCount: async () => {
    const response = await api.get(API_ENDPOINTS.CHAT.UNREAD_COUNT);
    return response.data;
  },
};
