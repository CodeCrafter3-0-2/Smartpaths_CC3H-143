import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import userReducer from './userSlice';
import domainReducer from './domainSlice';
import quizReducer from './quizSlice';
import roadmapReducer from './roadmapSlice';
import resourceReducer from './resourceSlice';
import postReducer from './postSlice';
import commentReducer from './commentSlice';
import chatReducer from './chatSlice';
import adminReducer from './adminSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    domain: domainReducer,
    quiz: quizReducer,
    roadmap: roadmapReducer,
    resource: resourceReducer,
    post: postReducer,
    comment: commentReducer,
    chat: chatReducer,
    admin: adminReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
