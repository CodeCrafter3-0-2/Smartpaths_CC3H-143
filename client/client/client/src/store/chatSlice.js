import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    rooms: [],
    messages: [],
    unreadCount: 0,
    loading: false,
    error: null,
  },
  reducers: {
    fetchRoomsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchRoomsSuccess: (state, action) => {
      state.loading = false;
      state.rooms = action.payload;
      state.error = null;
    },
    fetchRoomsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchMessagesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMessagesSuccess: (state, action) => {
      state.loading = false;
      state.messages = action.payload;
      state.error = null;
    },
    fetchMessagesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setUnreadCount: (state, action) => {
      state.unreadCount = action.payload;
    },
    markMessagesRead: (state, action) => {
      state.messages.forEach(message => {
        if (message.sender.id === action.payload) {
          message.isRead = true;
        }
      });
    },
    clearChatData: (state) => {
      state.rooms = [];
      state.messages = [];
      state.unreadCount = 0;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  fetchRoomsStart,
  fetchRoomsSuccess,
  fetchRoomsFailure,
  fetchMessagesStart,
  fetchMessagesSuccess,
  fetchMessagesFailure,
  addMessage,
  setUnreadCount,
  markMessagesRead,
  clearChatData,
} = chatSlice.actions;

export default chatSlice.reducer;
